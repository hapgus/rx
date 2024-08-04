import { createContext, useState } from "react";



export const SearchContext = createContext({

    isMobileSearchState: {
        isMobileSearch:false,
        isSearchOverlayOpen:false,
        isSearchResults: [],
        isSearchInputValue: '',
        isSearchFocused: false,
        isSearchActive: false,
        isSearchSubmitting: false,
    },
    setIsMobileSearchState: () => { },
    
    isDesktopSearchState: {
        isDesktopSearch:true,
        isSearchResults: [],
        isSearchInputValue: '',
        isSearchFocused: false,
        isSearchActive: false,
        isSearchSubmitting: false,
    },
    setIsDesktopSearchState: () => { },

    isHomepageSearchState: {
        isHomepageSearch:true,
        isSearchOverlayOpen:false,
        isSearchResults: [],
        isSearchInputValue: '',
        isSearchFocused: false,
        isSearchActive: false,
        isSearchSubmitting: false,
    },
    setIsHomepageSearchState: () => { },

});

export const SearchProvider = ({ children }) => {

    const initialMobileSearchState = {
        isMobileSearch:false,
        isSearchOverlayOpen:false,
        isSearchResults: [],
        isSearchInputValue: '',
        isSearchFocused: false,
        isSearchActive: false,
        isSearchSubmitting: false,
    }
    const [isMobileSearchState, setIsMobileSearchState] = useState(initialMobileSearchState);

    const initialDesktopSearchState = {
        isDesktopSearch:true,
        isSearchResults: [],
        isSearchInputValue: '',
        isSearchFocused: false,
        isSearchActive: false,
        isSearchSubmitting: false,
    }
    const [isDesktopSearchState, setIsDesktopSearchState] = useState(initialDesktopSearchState);

    const initialHomepageSearchState = {
        isHomepageSearch:true,
        isSearchOverlayOpen:false,
        isSearchResults: [],
        isSearchInputValue: '',
        isSearchFocused: false,
        isSearchActive: false,
        isSearchSubmitting: false,
    }
    const [isHomepageSearchState, setIsHomepageSearchState] = useState(initialHomepageSearchState);

console.log(isDesktopSearchState)
console.log(isHomepageSearchState)
    return (
        <SearchContext.Provider
            value={{
                isDesktopSearchState,
                setIsDesktopSearchState,
                setIsMobileSearchState,
                isMobileSearchState,
                isHomepageSearchState,
                setIsHomepageSearchState
            }}
        >
            {children}
        </SearchContext.Provider>
    );
}
