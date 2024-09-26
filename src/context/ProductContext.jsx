import { createContext, useEffect, useReducer } from "react";
import { PRODUCT_DATA } from "../data/PRODUCT_DATA";
import { useRetailer } from "../hooks/retailer-hook";

export const ProductContext = createContext({
    publicProducts: [],
    allProducts: [],         // Unfiltered products for admin
    setPublicProducts: () => { },
    fetchProducts: () => { }, // Expose fetchProducts
    isLoading: false, // New loading state
    error: null,      // New error state
});

export const PRODUCT_ACTION_TYPES = {
    SET_PUBLIC_PRODUCTS: 'SET_PUBLIC_PRODUCTS',
    SET_ALL_PRODUCTS: 'SET_ALL_PRODUCTS', // Action for unfiltered products
    SET_LOADING: 'SET_LOADING',
    SET_ERROR: 'SET_ERROR',
};

const productReducer = (state, action) => {

    const { type, payload } = action;

    switch (type) {
        case PRODUCT_ACTION_TYPES.SET_PUBLIC_PRODUCTS:
            return { ...state, publicProducts: payload, isLoading: false, error: null };
        case PRODUCT_ACTION_TYPES.SET_ALL_PRODUCTS:
            return { ...state, allProducts: payload, isLoading: false, error: null }; // Set unfiltered products
        case PRODUCT_ACTION_TYPES.SET_LOADING:
            return { ...state, isLoading: true };
        case PRODUCT_ACTION_TYPES.SET_ERROR:
            return { ...state, isLoading: false, error: payload };
        default:
            throw new Error(`Unhandled type ${type} in productReducer`);
    }

    // switch (type) {
    //     case PRODUCT_ACTION_TYPES.SET_PUBLIC_PRODUCTS:
    //         return { ...state, publicProducts: payload };
    //     default:
    //         throw new Error(`Unhandled type ${type} in productReducer`);
    // }

};

const INITIAL_PUBLIC_PRODUCT_STATE = {
    publicProducts: [],   // Filtered products for public
    allProducts: [],      // Unfiltered products for admin
    isLoading: false,
    error: null,
}

export const ProductProvider = ({ children }) => {

    const [state, dispatch] = useReducer(productReducer, INITIAL_PUBLIC_PRODUCT_STATE);
    const { isHomeDepotApp } = useRetailer();
    const { publicProducts, allProducts, isLoading, error } = state;
    // const { publicProducts } = state;
    // const { publicProducts, isLoading, error } = state;

    // const setPublicProducts = (products) => {
    //     dispatch({ type: PRODUCT_ACTION_TYPES.SET_PUBLIC_PRODUCTS, payload: products });
    // };

    const setPublicProducts = (products) => {
        // Filter products based on the retailer context
        const filteredProducts = isHomeDepotApp.isHomeDepotActive === true
            ? products // Keep all products for Home Depot
            : products.filter(product => product.store !== 'hd'); // Filter out Home Depot products for other retailers

        // dispatch({ type: PRODUCT_ACTION_TYPES.SET_PUBLIC_PRODUCTS, payload: filteredProducts });
         // Set both filtered and unfiltered products
         dispatch({ type: PRODUCT_ACTION_TYPES.SET_PUBLIC_PRODUCTS, payload: filteredProducts });
         dispatch({ type: PRODUCT_ACTION_TYPES.SET_ALL_PRODUCTS, payload: products });
    };

    const setLoading = () => {
        dispatch({ type: PRODUCT_ACTION_TYPES.SET_LOADING });
    };

    const setError = (errMsg) => {
        dispatch({ type: PRODUCT_ACTION_TYPES.SET_ERROR, payload: errMsg });
    };


    // API CONFIG
    const fetchProducts = async () => {
        setLoading();  // Start loading
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}products`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            // console.log('data',data)
            setPublicProducts(data.allProducts);
        } catch (err) {
            setError(`Error: ${err.message}`);
            console.log(`Error: ${err.message}`);
        }
    };

    useEffect(() => {
        fetchProducts();
        console.log('fetch hd')
    }, [isHomeDepotApp.isHomeDepotActive]); // Re-fetch or re-filter when the active retailer changes

    useEffect(() => {
        // API CONFIG
        fetchProducts();

        // STATIC DATA CONFIG
        // setPublicProducts(PRODUCT_DATA);
        // console.log(publicProducts)
    }, []);
    // }, []);

    const value = {
        publicProducts, 
        allProducts,      // Unfiltered products for admin
        setPublicProducts,
        fetchProducts,
        isLoading,    // Expose loading state
        error,        // Expose error state
    };
    console.log('public products', publicProducts)
    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    );
};
