import { Button } from "./Button"
import { useNotificationHook } from "../../hooks/notification-hook"


export const SaveListButton = () => {
    const {isModal, setIsModal}=useNotificationHook();

const handleSaveClick = () =>{
    console.log('save')
    setIsModal(prevState => ({
        ...prevState,
        show: true,
        modalType: 'saveListModal',
        title: "Lets save your list",
        message: "Give your list a name and add notes you can refer back to.",
        // errorList: errorMessage,
        onConfirm: () => setIsModal({ show: false }),
        onCancel: () => setIsModal({ show: false }),
        confirmText: "Close",
        cancelText: "Go back",

    }));
}
  

    return (

        <Button onClick={handleSaveClick}>Save product list</Button>
    )

}