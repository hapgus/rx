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
        isSearchType: '',
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
        isSearchType: '',
        isSearchSubmitting: false,
    },
    setIsHomepageSearchState: () => { },

});

export const SearchProvider = ({ children }) => {

    const { isRoutingState } = useRoutingHook();


    const initialMobileSearchState = {
        isMobileSearch: false,
        isSearchOverlayOpen: false,
        isSearchResults: [],
        isSearchInputValue: '',
        isSearchFocused: false,
        isSearchActive: false,
        isSearchType: '',
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
        isSearchType: '',
        isSearchSubmitting: false,
    }
    const [isHomepageSearchState, setIsHomepageSearchState] = useState(initialHomepageSearchState);


    useEffect(() => {
        if (isRoutingState.isNavLinkClicked === true)

            setIsDesktopSearchState(prevState => ({
                ...prevState,
                isSearchResults: [],
                isSearchInputValue: [],
            }))
        setIsMobileSearchState(prevState => ({
            ...prevState,
            isMobileSearch: false,
            isSearchResults: [],
            isSearchInputValue: '',
            isSearchType: '',
        }))
        setIsHomepageSearchState(prevState => ({
            ...prevState,
            isSearchResults: [],
            isSearchInputValue: [],
            isSearchType: '',
        }))

    }, [isRoutingState.isNavLinkClicked])

    // CLOSE WHEN HOME SEARCH ACTIVE
    useEffect(() => {
        if (isHomepageSearchState.isSearchResults.length !== 0) {
            if (isDesktopSearchState.isSearchResults !== 0) {
                // console.log('search effect - home results')
                setIsDesktopSearchState(prevState => ({
                    ...prevState,
                    isSearchResults: [],
                    isSearchInputValue: [],
                    isSearchFocused: false
                }))
            } else if(isMobileSearchState.isSearchResults !== 0){
                //   console.log('search effect - desk results')
                setIsMobileSearchState(prevState => ({
                    ...prevState,
                    isSearchResults: [],
                    isSearchInputValue: [],
                    isSearchFocused: false,
                    isSearchOverlayOpen:false,
                }))
            }
            // if () {
              
            // }
        }
        // console.log('search effect end')
    }, [isHomepageSearchState.isSearchResults])

    // CLOSE WHEN DESKTOP ACTIVE
    useEffect(() => {
        if (isDesktopSearchState.isSearchResults.length !== 0) {
            if (isHomepageSearchState.isSearchResults !== 0) {
                // console.log('search effect - Desk results')
                setIsHomepageSearchState(prevState => ({
                    ...prevState,
                    isSearchResults: [],
                    isSearchInputValue: [],
                    isSearchFocused: false
                }))
            } else if(isMobileSearchState.isSearchResults !== 0){
                //   console.log('search effect - desk results')
                setIsMobileSearchState(prevState => ({
                    ...prevState,
                    isSearchResults: [],
                    isSearchInputValue: [],
                    isSearchFocused: false,
                    isSearchOverlayOpen:false,
                }))
            }
            // if () {
              
            // }
        }
        // console.log('search effect end')
    }, [isDesktopSearchState.isSearchResults])

    // useEffect(()=>{
    //     if(isDesktopSearchState.isSearchFocused === true){
    //         setIsHomepageSearchState(prevState=>({
    //             ...prevState,
    //             isSearchResults: [],
    //             isSearchInputValue:[],
    //         }))
    //     }
    // },[isDesktopSearchState.isSearchFocused])
    // console.log('home page', isHomepageSearchState)
    // console.log('mobile', isMobileSearchState)
    // console.log('desktop', isDesktopSearchState,)
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
