import { createContext, useState, useEffect } from "react";
import { NotificationContext } from "./NotificationContext";
import { useContext } from "react";


// Helper functions
const addingProductToList = (productList, product) => {
    const productAlreadyInList = productList.find((item) => item.title === product.title);

    if (productAlreadyInList) {
        alert(`Model ${product.title} is already in your list!`)

        return productList.map((itemFromCurrentList) =>
            itemFromCurrentList.title === product.title
                ? { ...itemFromCurrentList, quantity: itemFromCurrentList.quantity + 1 }
                : itemFromCurrentList
        );
    }
    // alert(`Model ${product.title} was added to your list!`)
    return [
        ...productList,
        { ...product, quantity: 1 }
    ];
};

const removingOneProductFromList = (productList, product) => {
    const productAlreadyInList = productList.find((item) => item.title === product.title);

    // If the product is not found, return the original list - ADD MESSAGE
    if (!productAlreadyInList) {
        alert(`Model ${product.title} is not in your list!`)
        return productList;
    }

    if (productAlreadyInList.quantity === 1) {
        // alert(`Model ${product.title} is leaving`)
        return productList.filter((item) => item.title !== product.title);
    }

    return productList.map((itemsFromCurrentList) =>
        itemsFromCurrentList.title === product.title
            ? { ...itemsFromCurrentList, quantity: itemsFromCurrentList.quantity - 1 }
            : itemsFromCurrentList
    );
};

// const removingAllProductsFromList = (productList, product) => {
//     //   return productList.filter((item) => item.title !== product.title);
//     return [];
// };

export const BuilderContext = createContext({
    addProduct: () => { },
    removeProduct: () => { },
    removeAllProducts: () => { },
    productsInList: [],
    listCount: 0,

    addProductToSaved: () => { },
    removeProductSaved: () => { },
    removeAllProductsSaved: () => { },
    productsInListSaved: [],
    setProductsInListSaved: () => { },
    listSavedCount: 0,

    isPrintScreen: false,
    setIsPrintScreen: () => { },

});

export const BuilderProvider = ({ children }) => {
    const [productsInList, setProductsInList] = useState([]);
    const [productsInListSaved, setProductsInListSaved] = useState([]);
    const [listCount, setListCount] = useState(0);
    const [savedListCount, setSavedListCount] = useState(0);

    const [isPrintScreen, setIsPrintScreen] = useState(false);

    const { setIsAlert } = useContext(NotificationContext);

    const addProduct = (productToAdd) => {
        setIsAlert({
            type: 'productAdded',
            show: true,
            message: `Model ${productToAdd.title} added to your list!`,
            onDismiss: () => setIsAlert({ show: false })
        });
        setProductsInList(addingProductToList(productsInList, productToAdd));
    };
    const removeProduct = (productToRemove) => {
        setIsAlert({
            type: 'productRemoved',
            show: true,
            message: `Model ${productToRemove.title} removed from your list`,
            onDismiss: () => setIsAlert({ show: false })
        });
        setProductsInList(removingOneProductFromList(productsInList, productToRemove));
    }
    const removeAllProducts = (productsToRemove) => {
        setProductsInList([]);
    }
    const addProductToSaved = (productToAdd) => {
        setProductsInListSaved(addingProductToList(productsInListSaved, productToAdd));
    };
    const removeProductSaved = (productToRemove) => {
        setProductsInListSaved(removingOneProductFromList(productsInListSaved, productToRemove));
    }
    const removeAllProductsSaved = (productsToRemove) => {
        setProductsInListSaved([])

    }

    useEffect(() => {
        setListCount(productsInList.length);
    }, [productsInList]);

    useEffect(() => {
        setSavedListCount(productsInListSaved.length);
    }, [productsInListSaved]);

    const value = {
        productsInList,
        addProduct,
        removeProduct,
        removeAllProducts,
        listCount,


        productsInListSaved,
        setProductsInListSaved,
        
        addProductToSaved,
        removeProductSaved,
        removeAllProductsSaved,
        savedListCount,

        setIsPrintScreen,
        isPrintScreen
    };

    return (
        <BuilderContext.Provider value={value}>
            {children}
        </BuilderContext.Provider>
    );
};
