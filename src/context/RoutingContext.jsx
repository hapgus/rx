import { createContext, useState, useMemo, useEffect } from "react";

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
    isMobilePortalNavOpen: false,
    isMobilePortalNavOverviewMenuOpen: false,
    isMobilePortalNavProductsMenuOpen: false,
    isMobilePortalNavUsersMenuOpen: false,
    isMobilePortalNavWebsitesMenuOpen: false,
    isMobilePortalNavAccountMenuOpen: false,
  },
  setIsRoutingState: () => {},
  isAdminRoutingState: {
    isUserToEdit: null,
  },
  setIsAdminRoutingState: () => {},
});

export const RoutingProvider = ({ children }) => {
  // Initialize state only once
  const initialRoutingState = useMemo(() => ({
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
    isMobilePortalNavOpen: false,
    isMobilePortalNavOverviewMenuOpen: false,
    isMobilePortalNavProductsMenuOpen: false,
    isMobilePortalNavUsersMenuOpen: false,
    isMobilePortalNavWebsitesMenuOpen: false,
    isMobilePortalNavAccountMenuOpen: false,
  }), []);

  const [isRoutingState, setIsRoutingState] = useState(initialRoutingState);

  const initialAdminRoutingState = useMemo(() => ({
    isUserToEdit: null,
  }), []);
  
  const [isAdminRoutingState, setIsAdminRoutingState] = useState(initialAdminRoutingState);

  // Effect to handle nav link click events
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
        isMobilePortalNavOpen: false,
        isMobilePortalNavOverviewMenuOpen: false,
        isMobilePortalNavProductsMenuOpen: false,
        isMobilePortalNavUsersMenuOpen: false,
        isMobilePortalNavWebsitesMenuOpen: false,
      }));

      // Reset isNavLinkClicked to allow subsequent clicks
      const resetNavClick = setTimeout(() => {
        setIsRoutingState(prevState => ({
          ...prevState,
          isNavLinkClicked: false,
        }));
      }, 100);

      return () => clearTimeout(resetNavClick);
    }
  }, [isRoutingState.isNavLinkClicked]);

  // Effect to handle mobile nav close actions
  useEffect(() => {
    if (!isRoutingState.isMobileNavOpen) {
      setIsRoutingState(prevState => ({
        ...prevState,
        isMobileCategoriesMenuOpen: false,
        isMobileResourcesMenuOpen: false,
        isMobileAccountMenuOpen: false,
        isMobileBuilderDropdownOpen: false,
      }));
    }
  }, [isRoutingState.isMobileNavOpen]);

  // Memoize context value to prevent unnecessary re-renders
  const contextValue = useMemo(() => ({
    isRoutingState,
    setIsRoutingState,
    isAdminRoutingState,
    setIsAdminRoutingState,
  }), [isRoutingState, isAdminRoutingState]);



  return (
    <RoutingContext.Provider value={contextValue}>
      {children}
    </RoutingContext.Provider>
  );
};
