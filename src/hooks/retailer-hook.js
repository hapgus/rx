import { useContext, useMemo } from "react";
import { RetailerContext } from "../context/RetailerContext";

export const useRetailer = () => {
    return useContext(RetailerContext);
}



export const useRetailerLinks = () => {
    const { isHomeDepotApp } = useRetailer();

    const generateLink = (href) => {
        // Prepend `/home-depot` to the URL if Home Depot is active
        return isHomeDepotApp.isHomeDepotActive ? `/home-depot${href}` : href;
    };

    return { generateLink };
};
