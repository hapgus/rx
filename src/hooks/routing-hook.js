import { useContext } from "react";

import { RoutingContext } from "../context/RoutingContext";
export const useRoutingHook = () => {
    return useContext(RoutingContext)
}

