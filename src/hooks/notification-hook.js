import { useContext, useEffect } from "react";
import { NotificationContext } from "../context/NotificationContext";

export const useNotificationHook = () => {
    return useContext(NotificationContext)
};

// export const useAlertHook = () => {
//     const {isAlert, setIsAlert}=useNotificationHook();
//     useEffect(() => {
//         let timeout;
//         if (isAlert && isAlert.show) {
//             timeout = setTimeout(() => {
//                 setIsAlert({ ...isAlert, show: false });
//             }, 5000); // Auto-dismiss after 5 seconds
//         }
//         return () => clearTimeout(timeout);
//     }, [isAlert, setIsAlert]);

//     return [isAlert, setIsAlert];
// }