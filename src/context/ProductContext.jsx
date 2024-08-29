import { createContext, useEffect, useReducer } from "react";
import { PRODUCT_DATA } from "../data/PRODUCT_DATA";

export const ProductContext = createContext({
    publicProducts: [],
    setPublicProducts: () => { },
});

export const PRODUCT_ACTION_TYPES = {
    SET_PUBLIC_PRODUCTS: 'SET_PUBLIC_PRODUCTS',
};

const productReducer = (state, action) => {

    const { type, payload } = action;

    switch (type) {
        case PRODUCT_ACTION_TYPES.SET_PUBLIC_PRODUCTS:
            return { ...state, publicProducts: payload };
        default:
            throw new Error(`Unhandled type ${type} in productReducer`);
    }
};

const INITIAL_PUBLIC_PRODUCT_STATE = {
    publicProducts: [],
}

export const ProductProvider = ({ children }) => {

    const [state, dispatch] = useReducer(productReducer, INITIAL_PUBLIC_PRODUCT_STATE);

    const { publicProducts } = state;

    const setPublicProducts = (products) => {
        dispatch({ type: PRODUCT_ACTION_TYPES.SET_PUBLIC_PRODUCTS, payload: products });
    };
    // API CONFIG
    const fetchProducts = async () => {
       
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}products`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            // console.log('data',data)
            setPublicProducts(data.allProducts);
        } catch (err) {
        console.log(`error ${err}`)
        }
    };

    useEffect(() => {
        // API CONFIG
        fetchProducts();

        // STATIC DATA CONFIG
        // setPublicProducts(PRODUCT_DATA);
        // console.log(publicProducts)
    }, []);

    const value = {
        publicProducts,
        setPublicProducts,
    };
console.log(publicProducts)
    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    );
};
