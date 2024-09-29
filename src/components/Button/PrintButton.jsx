import { Button } from "./Button";
import { useBuilderHook } from "../../hooks/builder-hook";

import { IconComponent } from "../Icon/IconComponent";
import { useNotificationHook } from "../../hooks/notification-hook";
import { useState, useEffect } from "react";
import { logEvent } from "../../utils/google-analytics";
import { useRoutingHook } from "../../hooks/routing-hook";
import { useSearchHook } from "../../hooks/search-hook";



export const PrintButton = () => {

    const { productsInList, removeAllProducts } = useBuilderHook();
    const { isModal, setIsModal } = useNotificationHook();
    const [isPrinting, setIsPrinting] = useState(false);
    const [clearAfterPrint, setClearAfterPrint] = useState(false); // New state for clearing products after print

    const productListByTitle = productsInList.map(e => e.title);

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
                modalType: 'printModal',
                iconType: 'print',
                title: "Let’s Print Your List! ",
                message: "Your list of LG home appliances is ready to print! After your print is complete, would you like to start fresh by clearing all items, or keep them intact?",
                cancelText: 'Keep my list',
                confirmText: 'Clear my list',
                onConfirm: () => {
                    logEvent('LIST_PRINTED', {
                        productCount: productsInList.length,
                        productsInList: productListByTitle,
                        postPrintListAction: 'clearList',
                    });
                    setIsModal(prevState => ({ ...prevState, show: false }))
                    setIsPrinting(true); // Set isPrinting to true to trigger the print
                    setClearAfterPrint(true); // Set flag to clear products after print
                },
                onCancel: () => {
                    logEvent('LIST_PRINTED', {
                        productCount: productsInList.length,
                        productsInList: productListByTitle,
                        postPrintListAction: 'keepList',
                    });
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