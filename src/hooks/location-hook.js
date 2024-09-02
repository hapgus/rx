import { useLocation } from "react-router-dom";

export const useCurrentLocation = () => {
    return useLocation();
}

export const useActiveLink = (href) => {
    const location = useLocation();
    return location.pathname === href;
  };
  
  