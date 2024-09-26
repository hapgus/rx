import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const RetailerContext = createContext({
    isHomeDepotApp: {
        isHomeDepotActive: false,
        isHomeDepotPrefix: null,
    },
    setIsHomeDepotApp: () => { },
});

export const RetailerProvider = ({ children }) => {

    const initialHomeDepotState = { isHomeDepotActive: false, isHomeDepotPrefix: null };
    const [isHomeDepotApp, setIsHomeDepotApp] = useState(initialHomeDepotState);

    const location = useLocation();
    const isHomeDepot = location.pathname.startsWith('/home-depot');
    const homeDepotPrefix = isHomeDepot ? '/home-depot' : '';

    useEffect(() => {
        setIsHomeDepotApp({
            isHomeDepotActive: isHomeDepot,
            isHomeDepotPrefix: homeDepotPrefix
        });
    }, [location, isHomeDepot, homeDepotPrefix]);



    return (
        <RetailerContext.Provider value={{ isHomeDepotApp, setIsHomeDepotApp}}>
            {children}
        </RetailerContext.Provider>
    );
};
