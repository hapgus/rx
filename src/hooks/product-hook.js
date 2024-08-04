import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

export const useProductsHook = () => {
    return useContext(ProductContext)
}

