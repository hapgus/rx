import { useState, useCallback, useRef, useEffect } from "react";
import { useNotificationHook } from "./use-notification-hooks";
import { useRoutingHook } from "./use-routing-hooks";

export const useHttpClient = () => {


  const [error, setError] = useState();
  const activeHttpRequests = useRef([]);
  const { isModal, setIsModal } = useNotificationHook();
  const { isRoutingState, setIsRoutingState } = useRoutingHook()


  const sendRequest = useCallback(async (url, method = 'GET', body = null, headers = {}) => {

    setIsRoutingState(prevState => ({ ...prevState, isLoading: true }))

    const httpAbortCtrl = new AbortController();
    activeHttpRequests.current.push(httpAbortCtrl);

    try {
      const response = await fetch(url, {
        method, // method:method,
        body,// body:body,
        headers,// headers:headers,
        signal: httpAbortCtrl.signal
      });
      const responseStatusCode = response.status
      const responseData = await response.json();
     

      if (!response.ok) {
        throw new Error(responseData.message);
      }

      // setIsLoading(false);
      setIsRoutingState(prevState => ({ ...prevState, isLoading: false }))
      // return responseData;
      return {
        responseData,
        responseStatusCode
      }
    } catch (err) {
      console.log(err)
      setError(err.message);
  

      setIsModal(prevState => ({
        ...prevState,
        modalType: 'infoModal',

        show: true,
        title: "Error",
        errorList: isModal.errorList,
        message: err.message || "Something went wrong!",
        onConfirm: () => setIsModal({ show: false }),
        onCancel: () => setIsModal({ show: false }),
        confirmText: "Close",
        cancelText: "Go back",

      }))
    

      setIsRoutingState(prevState => ({ ...prevState, isLoading: false }))
      console.error('Error from hook:', err.message);
      throw err;
    }

  }, []);

  const clearError = () => {
    setError(null);
  };

  useEffect(() => {
    return () => {
      activeHttpRequests.current.forEach(abortCtrl => abortCtrl.abort())
    };
  }, []);

  // return { isLoading, error, sendRequest, clearError };
  return { error, sendRequest, clearError };
}


console.log('http hook')