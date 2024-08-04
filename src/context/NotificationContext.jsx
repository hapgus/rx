import { createContext, useState } from "react";

export const NotificationContext = createContext({
    isModal: {
        show: false,
        title: '',
        message: '',
        errorList: [],
        actionText: 'Close',
        wasSuccessful: false,
        onConfirm: null,
        onCancel: null,
        onClose: null,
        cancelText: '',
        confirmText: '',
    },
    setIsModal: () => { },

    isAlert: ({
        type: '',
        show: false,
        onDismiss: null,
        message: ''
    }),
    setIsAlert: () => { },
});

export const NotificationProvider = ({ children }) => {

    const initialModalState = {
        show: false,
        title: '',
        message: '',
        errorList: [],
        actionText: 'Close',
        wasSuccessful: false,
        onConfirm: null,
        onCancel: null,
        onClose: null,
        cancelText: '',
        confirmText: '',
    };

    const initialAlertState = {
        type: '',
        show: false,
        onDismiss: null,
        message: ''
    }

    const [isModal, setIsModal] = useState(initialModalState);
    const [isAlert, setIsAlert] = useState(initialAlertState);

    return (
        <NotificationContext.Provider value={{
            isModal,
            setIsModal,
            isAlert,
            setIsAlert
        }}>
            {children}
        </NotificationContext.Provider>
    );
};