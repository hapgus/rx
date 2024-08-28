import { useContext, useMemo } from "react";
import { RetailerContext } from "../context/RetailerContext";

export const useRetailer = () => {
    return useContext(RetailerContext)
}


export const useRetailerActive = () => {

    const publicUrl = process.env.PUBLIC_URL;
    const { isHomeDepotApp, setIsHomeDepotApp } = useRetailer();
    let rootUrl
    if (isHomeDepotApp.isHomeDepotActive === true) {
        rootUrl = `${publicUrl}/home-depot/`
    } else {
        rootUrl = `${publicUrl}/`
    }
    const websiteUrl = rootUrl;
    
    return websiteUrl;

} 