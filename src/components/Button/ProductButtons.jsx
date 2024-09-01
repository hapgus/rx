import { Button } from "./Button";
import { useBuilderHook } from "../../hooks/builder-hook";

import { IconComponent } from "../Icon/IconComponent";
import { useNotificationHook } from "../../hooks/notification-hook";
import { useState, useEffect } from "react";

export const AddToListButton = ({ product, iconButton = false }) => {

    const { addProduct } = useBuilderHook();

    const handleAddProductToList = () => addProduct(product);

    return iconButton ? (
        <IconComponent onClick={handleAddProductToList} iconStyleType='addProductIcon' iconType='cross' />
    ) : (
        <Button
            type="button"
            buttonStyleType="primaryAction"
            buttonTextType="action"
            onClick={handleAddProductToList}
        >
            Add to list
        </Button>
    );
};


export const AddToListButtonIcon = ({ product, iconSizeType, iconColor }) => {

    const iconSizeMap = {
        large: 'largeAddProductIcon',
        small: 'smallAddProductIcon'
    }
    const iconSvgColorMap = {
        white: 'white',
    }
    const { addProduct } = useBuilderHook();

    const handleAddProductToList = () => {
        addProduct(product);

    }
    const iconStyleType = iconSizeMap[iconSizeType];
    const svgColor = iconSvgColorMap[iconColor];

    return <IconComponent onClick={handleAddProductToList}
        iconStyleType={iconStyleType}
        iconType='cross'
        svgFill={svgColor}
    />

};



export const RemoveFromListButtonIcon = ({ product, iconSizeType, iconColor }) => {

    const iconSizeMap = {
        large: 'largeRemoveProductIcon',
        small: 'smallRemoveProductIcon'
    }
    const iconSvgColorMap = {
        white: 'white',
    }
    const { removeProduct } = useBuilderHook();

    const handleRemoveProductFromList = () => {
        removeProduct(product);
    }
    const iconStyleType = iconSizeMap[iconSizeType];
    const svgColor = iconSvgColorMap[iconColor];

    return <IconComponent onClick={handleRemoveProductFromList}
        iconStyleType={iconStyleType}
        iconType='xClose'
        svgFill={svgColor}
    />

};



export const RemoveFromListButton = ({ product, buttonStyleType = 'primary', plainTextButton = false }) => {

    const { removeProduct } = useBuilderHook();

    const handleRemoveProductFromList = () => {
        removeProduct(product);
    }

    const textOnlyButton = <IconComponent onClick={handleRemoveProductFromList} iconType='xClose' />;
    // <BodyText type="b2" onClick={handleRemoveProductFromList}>Remove</BodyText>;

    const regularButton = <Button
        type="button"
        buttonStyleType={buttonStyleType}
        buttonText="action"
        onClick={handleRemoveProductFromList}
    >

        Remove
    </Button>

    // const iconButton = <IconComponent iconType='xClose'></IconComponent>

    return plainTextButton === true ? textOnlyButton : regularButton;
}


export const RemoveAllFromListButton = () => {
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
            setIsModal(prevState=>({
                ...prevState,
                modalType:'infoModal',
                iconType:'errorInfo',
                show: true,
                title: 'Confirm Removal',
                message: 'Are you sure you want to remove all products from your list?',
                onConfirm: () => {
                    removeAllProducts();
                    setIsModal({ ...isModal, show: false });
                },
                onCancel: () => {
                    setIsModal({ ...isModal, show: false });
                },
                cancelText: 'Go back',
                confirmText: 'Remove all products'
            }))
           
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

export const PrintProductsButton = () => {

    const { 
        // setIsPrintScreen, 
        removeAllProducts, productsInList } = useBuilderHook();
    const { isModal, setIsModal } = useNotificationHook();
    const [isPrinting, setIsPrinting] = useState(false);
    const [clearAfterPrint, setClearAfterPrint] = useState(false); // New state for clearing products after print
    const handlePrint = () => {
        if (productsInList.length === 0) {
            alert('no products to print')
            return setIsModal({
                show: true,


                title: 'You have no products in your list.',
                message: 'Use search or explore home appliances to find products for your list so you can print!',

                onCancel: () => {
                    setIsModal({ ...isModal, show: false });
                },
                cancelText: 'Go back',
            });
        }
        if (productsInList.length !== 0) {
            // window.print();
            setIsModal({
                show: true,
                modalType:'infoModal',
                iconType:'print',
                title: "Time to print your list! ",
                message: 'What do you want to do with your list after we print it?',
                cancelText: 'Keep my list',
                confirmText: 'Clear my list',
                onConfirm: () => {
                    setIsModal(prevState => ({ ...prevState, show: false }))
                    setIsPrinting(true); // Set isPrinting to true to trigger the print
                    
                    setClearAfterPrint(true); // Set flag to clear products after print
                },

                onCancel: () => {


                    setIsModal(prevState => ({ ...prevState, show: false }))
                    setIsPrinting(true);
                    // window.print();
                },

            });
        }

    };
    useEffect(() => {
        if (isPrinting) {
            window.print();
            setIsPrinting(false); // Reset isPrinting after the print action
            
            if (clearAfterPrint) {
                // Delay clearing products to ensure the print action has completed
                setTimeout(() => {
                    removeAllProducts(); // Clear products after printing is complete
                    setClearAfterPrint(false); // Reset the flag
                }, 1000); // Adjust the delay as needed
               
            }
        }
    }, [isPrinting, clearAfterPrint]);


    return <Button
        // icon
        // iconType='print'
        buttonStyleType="printDefault"
        onClick={handlePrint}
    >Print my list</Button>;

}