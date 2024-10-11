import { Button } from "./Button";
import { useBuilderHook } from "../../hooks/use-builder-hooks";


import { useNotificationHook } from "../../hooks/use-notification-hooks";








export const ClearProductListButton = () => {
    const { productsInList, removeAllProducts } = useBuilderHook();
    const { isModal, setIsModal } = useNotificationHook();

    const handleRemoveAllProducts = () => {

        if (productsInList.length === 0) {
            setIsModal({
                show: true,
                title: 'You have no products in your list.',
                message: 'Use search or explore home appliances to find products for your list so you can print!',

                onCancel: () => {
                    setIsModal({ ...isModal, show: false });
                },
                cancelText: 'Go back',
            });
        } else {
            setIsModal({
            
                modalType: 'productConfirmationModal',
                show: true,
                title: 'Are You Sure You Want to Proceed?',
                message: 'This will remove all products from your list. Would you like to continue?',
                onConfirm: () => {
                    removeAllProducts();
                    setIsModal({ ...isModal, show: false });
                },
                onCancel: () => {
                    setIsModal({ ...isModal, show: false });
                },
                cancelText: 'Go back',
                confirmText: 'Clear list'
            })

        }


    };

    return (
        <Button
            type="button"
            buttonStyleType="secondary"
            buttonText="action"
            onClick={handleRemoveAllProducts}
        >
            Clear my list
        </Button>
    );
};

