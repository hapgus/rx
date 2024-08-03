import { createContext, useState } from "react";



export const SearchContext = createContext({

    isMobileSearchState: {
        isSearchResults: [],
        isSearchInputValue: '',
        isSearchFocused: false,
        isSearchActive: false,
        isSearchSubmitting: false,
    },
    setIsMobileSearchState: () => { },
    
    isDesktopSearchState: {
        isSearchResults: [],
        isSearchInputValue: '',
        isSearchFocused: false,
        isSearchActive: false,
        isSearchSubmitting: false,
    },
    setIsDesktopSearchState: () => { },

});

export const SearchProvider = ({ children }) => {

    const initialMobileSearchState = {
        isSearchResults: [],
        isSearchInputValue: '',
        isSearchFocused: false,
        isSearchActive: false,
        isSearchSubmitting: false,
    }
    const [isMobileSearchState, setIsMobileSearchState] = useState(initialMobileSearchState);

    const initialDesktopSearchState = {
        isSearchResults: [],
        isSearchInputValue: '',
        isSearchFocused: false,
        isSearchActive: false,
        isSearchSubmitting: false,
    }
    const [isDesktopSearchState, setIsDesktopSearchState] = useState(initialDesktopSearchState);

 


    return (
        <SearchContext.Provider
            value={{
                isDesktopSearchState,
                setIsDesktopSearchState,
                setIsMobileSearchState,
                isMobileSearchState,
            }}
        >
            {children}
        </SearchContext.Provider>
    );
}
