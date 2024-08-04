import { Button } from "./Button";
import { useBuilderHook } from "../../hooks/builder-hook";

import { IconComponent } from "../Icon/IconComponent";
import { useNotificationHook } from "../../hooks/notification-hook";


export const AddToListButton = ({ product, iconButton = false }) => {

    const { addProduct } = useBuilderHook();

    const handleAddProductToList = () => addProduct(product);

    // return iconButton ? (
    //     <span onClick={handleAddProductToList}>
    //         <IconComponent  iconStyleType='addProductIcon' iconType='cross' />
    //     </span>
    // ) : (
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
        console.log('add')
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



export const RemoveFromListButton = ({ product, plainTextButton = false }) => {

    const { removeProduct } = useBuilderHook();

    const handleRemoveProductFromList = () => {
        removeProduct(product);
    }

    const textOnlyButton = <IconComponent onClick={handleRemoveProductFromList} iconType='xClose' />;
    // <BodyText type="b2" onClick={handleRemoveProductFromList}>Remove</BodyText>;

    const regularButton = <Button
        type="button"
        buttonStyleType="primary"
        buttonText="action"
        onClick={handleRemoveProductFromList}
    >

    Remove
    </Button>

    const iconButton = <IconComponent iconType='xClose'></IconComponent>

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
            setIsModal({
                show: true,
                title: 'Confirm Removal',
                message: 'Are you sure you want to remove all products from the list?',
                onConfirm: () => {
                    removeAllProducts();
                    setIsModal({ ...isModal, show: false });
                },
                onCancel: () => {
                    setIsModal({ ...isModal, show: false });
                },
                cancelText: 'Cancel',
                confirmText: 'Confirm'
            });
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

    const { setIsPrintScreen, removeAllProducts, productsInList } = useBuilderHook();
    const { isModal, setIsModal } = useNotificationHook();

    const handlePrint = () => {
        if (productsInList.length === 0) {
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
            setIsModal({
                show: true,
                title: "Time to print your list! ",
                message: 'What do you want to do with your list after we print it?',
                onConfirm: () => {
                    window.print();
                    removeAllProducts();
                    setIsModal({ ...isModal, show: false });
                },
                onCancel: () => {

                    window.print();
                    setIsModal({ ...isModal, show: false });
                },
                cancelText: 'Keep my list',
                confirmText: 'Clear my list'
            });
        }

        // setIsPrintScreen(true);
        // window.print();
        // setTimeout(() => {
        //     window.print();
        //     setIsPrintScreen(false);
        // }, 500);


    };

    return <Button buttonStyleType="printDefault" onClick={handlePrint}>Print my list</Button>;

}