import { createContext, useEffect, useState } from "react";
import { useRoutingHook } from "../hooks/routing-hook";



export const SearchContext = createContext({

    isMobileSearchState: {
        isMobileSearch: false,
        isSearchOverlayOpen: false,
        isSearchResults: [],
        isSearchInputValue: '',
        isSearchFocused: false,
        isSearchActive: false,
        isSearchSubmitting: false,
    },
    setIsMobileSearchState: () => { },

    isDesktopSearchState: {
        isDesktopSearch: true,
        isSearchResults: [],
        isSearchInputValue: '',
        isSearchFocused: false,
        isSearchActive: false,
        isSearchSubmitting: false,
    },
    setIsDesktopSearchState: () => { },

    isHomepageSearchState: {
        isHomepageSearch: true,
        isSearchOverlayOpen: false,
        isSearchResults: [],
        isSearchInputValue: '',
        isSearchFocused: false,
        isSearchActive: false,
        isSearchSubmitting: false,
    },
    setIsHomepageSearchState: () => { },

});

export const SearchProvider = ({ children }) => {

    const { isRoutingState} = useRoutingHook();

   
    const initialMobileSearchState = {
        isMobileSearch: false,
        isSearchOverlayOpen: false,
        isSearchResults: [],
        isSearchInputValue: '',
        isSearchFocused: false,
        isSearchActive: false,
        isSearchSubmitting: false,
    }
    const [isMobileSearchState, setIsMobileSearchState] = useState(initialMobileSearchState);

    const initialDesktopSearchState = {
        isDesktopSearch: true,
        isSearchResults: [],
        isSearchInputValue: '',
        isSearchFocused: false,
        isSearchActive: false,
        isSearchSubmitting: false,
    }
    const [isDesktopSearchState, setIsDesktopSearchState] = useState(initialDesktopSearchState);

    const initialHomepageSearchState = {
        isHomepageSearch: true,
        isSearchOverlayOpen: false,
        isSearchResults: [],
        isSearchInputValue: '',
        isSearchFocused: false,
        isSearchActive: false,
        isSearchSubmitting: false,
    }
    const [isHomepageSearchState, setIsHomepageSearchState] = useState(initialHomepageSearchState);


    useEffect(() => {
        if (isRoutingState.isNavLinkClicked === true)

            setIsDesktopSearchState(prevState=>({
                ...prevState,
                isSearchResults: [],
                isSearchInputValue:[],
            }))
            setIsMobileSearchState(prevState=>({
                ...prevState,
                isMobileSearch:false,
                isSearchResults: [],
                isSearchInputValue:'',
                
            }))
            setIsHomepageSearchState(prevState=>({
                ...prevState,
                isSearchResults: [],
                isSearchInputValue:[],
            }))
       
    }, [isRoutingState.isNavLinkClicked])

    // useEffect(()=>{
    //     if(isHomepageSearchState.isSearchFocused === true){
    //         setIsDesktopSearchState(prevState=>({
    //             ...prevState,
    //             isSearchResults: [],
    //             isSearchInputValue:[],
    //         }))
    //     }
    // },[isHomepageSearchState.isSearchFocused])
    
    // useEffect(()=>{
    //     if(isDesktopSearchState.isSearchFocused === true){
    //         setIsHomepageSearchState(prevState=>({
    //             ...prevState,
    //             isSearchResults: [],
    //             isSearchInputValue:[],
    //         }))
    //     }
    // },[isDesktopSearchState.isSearchFocused])

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
