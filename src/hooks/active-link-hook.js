// useActiveLink.js
import { useLocation } from "react-router-dom";

export const useActiveLink = (href) => {
  const location = useLocation();
  return location.pathname === href;
};


