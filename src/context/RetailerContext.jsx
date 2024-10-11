import { createContext } from "react";

import { useCurrentLocation } from "../hooks/use-routing-hooks";

import { useMemo } from 'react';

export const RetailerContext = createContext({
    isHomeDepotApp: {
        isHomeDepotActive: false,
        isHomeDepotPrefix: '',
    },
    setIsHomeDepotApp: () => { },
});


export const RetailerProvider = ({ children }) => {
    const location = useCurrentLocation();

    const isHomeDepotApp = useMemo(() => {
        const isHomeDepot = location.pathname.startsWith('/home-depot');
        return {
            isHomeDepotActive: isHomeDepot,
            isHomeDepotPrefix: isHomeDepot ? '/home-depot' : '',
        };
    }, [location]);

    console.log('Retailer Context Provider', isHomeDepotApp);

    return (
        <RetailerContext.Provider value={{ isHomeDepotApp }}>
            {children}
        </RetailerContext.Provider>
    );
};