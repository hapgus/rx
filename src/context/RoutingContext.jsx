import { createContext, useEffect, useState } from "react";



export const RoutingContext = createContext({

    isRoutingState: {
        isNavLinkClicked: false,
        
        isMobileNavOpen: false,   
        isMobileCategoriesMenuOpen: false,
        isMobileResourcesMenuOpen: false,
        isMobileExclusiveMenuOpen: false,

        isMobileAccountMenuOpen: false,
        isMobileBuilderDropdownOpen: false,

        isCategoriesMenuOpen: false,
        isResourcesMenuOpen: false,
        isExclusiveMenuOpen: false,

        isAccountMenuOpen: false,
        isBuilderDropdownOpen: false,
    },
    setIsRoutingState: () => { },

  

});

export const RoutingProvider = ({ children }) => {

    const initialRoutingState = {
        isNavLinkClicked: false,
        
        isMobileNavOpen: false,   
        isMobileCategoriesMenuOpen: false,
        isMobileResourcesMenuOpen: false,
        isMobileExclusiveMenuOpen: false,

        isMobileAccountMenuOpen: false,
        isMobileBuilderDropdownOpen: false,

        isCategoriesMenuOpen: false,
        isResourcesMenuOpen: false,
        isExclusiveMenuOpen: false,
        
        isAccountMenuOpen: false,
        isBuilderDropdownOpen: false,

    }
    const [isRoutingState, setIsRoutingState] = useState(initialRoutingState);


useEffect(()=> {
    if(isRoutingState.isNavLinkClicked === true){
        setIsRoutingState(prevState=>({
            ...prevState, 
            isMobileNavOpen: false,
            isMobileCategoriesMenuOpen: false,
            isMobileResourcesMenuOpen: false,
            isMobileAccountMenuOpen: false,
            isMobileBuilderDropdownOpen: false,
            
            isCategoriesMenuOpen: false,
            isResourcesMenuOpen: false,
            isAccountMenuOpen: false,
            isBuilderDropdownOpen: false,
        

        }))
    }
},[isRoutingState.isNavLinkClicked])
    useEffect(() => {
        if (!isRoutingState.isMobileNavOpen) {
            
            setIsRoutingState(prevState => ({
                ...prevState,
                isMobileCategoriesMenuOpen: false,
                isMobileResourcesMenuOpen: false,
                isMobileAccountMenuOpen: false,
                isMobileBuilderDropdownOpen: false,
            }))
        } 
        // else if (isRoutingState.isMobileNavOpen) {
        //     document.body.style.overflow = 'hidden';
        // }
        // return () => {document.body.style.overflow = 'unset';}
    }, [isRoutingState.isMobileNavOpen])

    // useEffect(() => {
    //     if (isRoutingState.isBuilderDropdownOpen ||
    //         isRoutingState.isMobileBuilderDropdownOpen ||
    //         isRoutingState.isMobileNavOpen
    //     ) {
    //         document.body.style.overflow = 'hidden';
    //     }
    //     return () => {
    //         document.body.style.overflow = 'unset';
    //     }

    // }, [
    //     isRoutingState.isBuilderDropdownOpen,
    //     isRoutingState.isMobileBuilderDropdownOpen,
    //     isRoutingState.isMobileNavOpen
    // ])

    // useEffect(() => {
    //     if (isRoutingState.isBuilderDropdownOpen && isRoutingState.isNavLinkClicked) {
    //         setIsRoutingState(prevState => ({
    //             ...prevState,
    //             isBuilderDropdownOpen: false,
    //         }))
    //     } 
    // }, [isRoutingState.isNavLinkClicked])


    return (
        <RoutingContext.Provider
            value={{
                isRoutingState,
                setIsRoutingState,
              
            }}
        >
            {children}
        </RoutingContext.Provider>
    );
}
