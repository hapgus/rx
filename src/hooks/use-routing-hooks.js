import { useContext, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { RoutingContext } from "../context/RoutingContext";
import { RetailerContext } from "../context/RetailerContext";

// Directly use useLocation without an unnecessary wrapper
export const useCurrentLocation = () => {
    return useLocation();
};

// Memoize the result to avoid unnecessary recalculations
export const useActiveLink = (href) => {
    const location = useCurrentLocation();
    return useMemo(() => location.pathname === href, [location.pathname, href]);
};

// Use context directly without extra wrapping
export const useRetailer = () => {
    return useContext(RetailerContext);
};

// Memoize the generateLink function to avoid unnecessary re-renders
export const useRetailerLinks = () => {
    const { isHomeDepotApp } = useRetailer();

    const generateLink = useMemo(() => {
        return (href) => isHomeDepotApp.isHomeDepotActive ? `/home-depot${href}` : href;
    }, [isHomeDepotApp.isHomeDepotActive]);

    return { generateLink };
};



// ROUTING

export const useRoutingHook = () => {
    return useContext(RoutingContext)
}

