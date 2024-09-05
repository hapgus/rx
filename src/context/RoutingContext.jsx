import { createContext, useEffect, useState } from "react";




export const RoutingContext = createContext({

    isRoutingState: {
        isNavLinkClicked: false,

        isProductListDropdownOpen: false,

        isMobileNavOpen: false,
        isMobileCategoriesMenuOpen: false,
        isMobileResourcesMenuOpen: false,
        isMobileStepUpChartsMenuOpen: false,
        isMobileExclusiveMenuOpen: false,

        isMobileAccountMenuOpen: false,
        isMobileBuilderDropdownOpen: false,

        isCategoriesMenuOpen: false,
        isResourcesMenuOpen: false,
        isStepUpChartsMenuOpen: false,
        isExclusiveMenuOpen: false,

        isAccountMenuOpen: false,
        isBuilderDropdownOpen: false,

        isLoading: false,

        isShowScrollToTopButton: false,


        isMobilePortalNavOpen:false,
        isMobilePortalNavOverviewMenuOpen:false,
        isMobilePortalNavProductsMenuOpen:false,
        isMobilePortalNavUsersMenuOpen:false,
        isMobilePortalNavWebsitesMenuOpen:false,

        isMobilePortalNavAccountMenuOpen:false,
    },
    setIsRoutingState: () => { },


    isAdminRoutingState: {
        isUserToEdit: null
    },
    setIsAdminRoutingState: () => { },


});

export const RoutingProvider = ({ children }) => {


    const initialRoutingState = {
        isNavLinkClicked: false,
        isProductListDropdownOpen: false,

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

        isLoading: false,

        isShowScrollToTopButton: false,
        
        isMobilePortalNavOpen:false,
        isMobilePortalNavOverviewMenuOpen:false,
        isMobilePortalNavProductsMenuOpen:false,
        isMobilePortalNavUsersMenuOpen:false,
        isMobilePortalNavWebsitesMenuOpen:false,
        isMobilePortalNavAccountMenuOpen:false,
    }
    const [isRoutingState, setIsRoutingState] = useState(initialRoutingState);

    const initialAdminRoutingState = {
        isUserToEdit: null
    }
    const [isAdminRoutingState, setIsAdminRoutingState] = useState(initialAdminRoutingState);

    useEffect(() => {
        if (isRoutingState.isNavLinkClicked) {
            setIsRoutingState(prevState => ({
                ...prevState,
                isMobileNavOpen: false,
                isMobileCategoriesMenuOpen: false,
                isMobileResourcesMenuOpen: false,
                isMobileAccountMenuOpen: false,
                isMobileBuilderDropdownOpen: false,
                isMobileExclusiveMenuOpen: false,

                isCategoriesMenuOpen: false,
                isResourcesMenuOpen: false,
                isExclusiveMenuOpen: false,
                isAccountMenuOpen: false,
                isBuilderDropdownOpen: false,
                isProductListDropdownOpen: false,

                isMobilePortalNavOpen:false,
                isMobilePortalNavOverviewMenuOpen:false,
                isMobilePortalNavProductsMenuOpen:false,
                isMobilePortalNavUsersMenuOpen:false,
                isMobilePortalNavWebsitesMenuOpen:false,
            }))

            // Reset isNavLinkClicked to allow subsequent clicks
            setTimeout(() => {
                setIsRoutingState(prevState => ({
                    ...prevState,
                    isNavLinkClicked: false
                }));
            }, 100); // Adjust the delay as needed
        }
    }, [isRoutingState.isNavLinkClicked])


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
    //     if (isRoutingState.isProductListDropdownOpen ||
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
                isAdminRoutingState,
                setIsAdminRoutingState
            }}
        >
            {children}
        </RoutingContext.Provider>
    );
}
