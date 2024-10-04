// useActiveLink.js
import { useLocation } from "react-router-dom";

export const useActiveLink = (href) => {
 

  const location = useLocation();
  if(href=== '/appliances/air-care'){
      console.log('ref',href) 
      console.log('location',location.pathname)
  }
  return location.pathname === href;
};


