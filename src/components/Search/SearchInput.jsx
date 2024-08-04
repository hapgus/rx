import styles from './SearchInput.module.css';
import { useProductsHook } from '../../hooks/product-hook';
import { useSearchHook } from '../../hooks/search-hook';
import { IconComponent } from '../Icon/IconComponent';

export const SearchInput = () => {

    const { publicProducts } = useProductsHook();
    const productDataSearch = publicProducts;

    const {
        isMobileSearchState,
        setIsMobileSearchState,
        isDesktopSearchState,
        setIsDesktopSearchState,
        isHomepageSearchState,
        setIsHomepageSearchState,
    } = useSearchHook();


    if (isMobileSearchState.isMobileSearch === true) {
        const handleMobileSearchChange = (event) => {
            const query = event.target.value.toLowerCase();

            if (isMobileSearchState.isMobileSearch === true) {
                setIsMobileSearchState(prevState => ({ ...prevState, isNavSearchInputValue: query }));

                if (query) {
                    const filteredResults = productDataSearch.filter((product) =>
                        // product.title.toLowerCase().includes(query)
                        product.title.toLowerCase().includes(query) || product.subtitle.toLowerCase().includes(query)
                    );
                    // setSearchResults(filteredResults);
                    setIsMobileSearchState(prevState => ({ ...prevState, isSearchResults: filteredResults }));
                } else {
                    setIsMobileSearchState(prevState => ({ ...prevState, isSearchResults: [] }));
                    // setSearchResults([]);
                }

            }
        }

        const handleCloseMobileSearchOverlay = () => {
            setIsMobileSearchState(prevState => ({ 
                ...prevState, 
                isMobileSearch: false,
                isSearchResults:[]
             }))
        }
        return (
            <div className={styles.searchInputContainer}>
                <div className={styles.searchInputWrapper}>
                    <div className={styles.searchIconWrapper}>
                        <IconComponent onClick={handleCloseMobileSearchOverlay} iconType='leftArrow' iconStyleType='leftArrowIcon' />
                    </div>

                    <input
                        type="search"
                        placeholder='Search home appliances'
                        onChange={handleMobileSearchChange}
                        aria-label="Search home appliances"
                        className={`${styles.input} ${isMobileSearchState.isSearchActive ? styles.active : ''}`}
                    />
                </div>
            </div>
        );
    }


    if (isDesktopSearchState.isDesktopSearch === true) {

        const handleDesktopSearchChange = (event) => {
            const query = event.target.value.toLowerCase();

            setIsDesktopSearchState(prevState => ({ ...prevState, isSearchInputValue: query }));

            if (query) {
                const filteredResults = productDataSearch.filter((product) =>

                    product.title.toLowerCase().includes(query)
                    || product.subtitle.toLowerCase().includes(query)
                );
                setIsDesktopSearchState(prevState => ({ ...prevState, isSearchResults: filteredResults }));
            } else {
                setIsDesktopSearchState(prevState => ({ ...prevState, isSearchResults: [] }));
            }

        }

        const handleDesktopSearchFocus = () => {
            setIsDesktopSearchState(prevState => ({ ...prevState, isSearchFocused: true }));
            console.log('focus')
    
        }
        return (
            <div className={styles.searchInputContainer}>
                <div 
                 className={`${styles.searchInputWrapper} ${isDesktopSearchState.isSearchActive ? styles.active : ''} ${isDesktopSearchState.isSearchResults.length > 0 ? styles.withResults : ''}`}
                >
                    <div className={styles.desktopSearchIconWrapper}>
                        <IconComponent iconType='searchInput' />
                    </div>

                    <input
                        type="search"
                        placeholder='Search home appliances'
                        onChange={handleDesktopSearchChange}
                        value={isDesktopSearchState.isSearchInputValue}
                        onFocus={handleDesktopSearchFocus}
                        aria-label="Search home appliances"
                        className={`${styles.input} ${isDesktopSearchState.isSearchActive ? styles.active : ''}`}
                     
                    />
                </div>
            </div>
        );
    }

    if (isHomepageSearchState.isHomepageSearch === true) {
        setIsDesktopSearchState(prevState => ({ ...prevState, isDesktopSearch: false }));

        const handleHomepageSearchChange = (event) => {
            
            const query = event.target.value.toLowerCase();

            setIsHomepageSearchState(prevState => ({ ...prevState, isSearchInputValue: query }));

            if (query) {
                const filteredResults = productDataSearch.filter((product) =>

                    product.title.toLowerCase().includes(query)
                    || product.subtitle.toLowerCase().includes(query)
                );
                setIsHomepageSearchState(prevState => ({ ...prevState, isSearchResults: filteredResults }));
            } else {
                setIsHomepageSearchState(prevState => ({ ...prevState, isSearchResults: [] }));
            }

        }

        const handleHomepageSearchFocus = () => {
            setIsHomepageSearchState(prevState => ({ ...prevState, isSearchFocused: true }));
            console.log(' home focus')
    
        }
        return (
            <div className={styles.searchInputContainer}>
                <div 
                 className={`${styles.searchInputWrapper} ${isHomepageSearchState.isSearchActive ? styles.active : ''} ${isHomepageSearchState.isSearchResults.length > 0 ? styles.withResults : ''}`}
                >
                    <div className={styles.desktopSearchIconWrapper}>
                        <IconComponent iconType='searchInput' />
                    </div>

                    <input
                        type="search"
                        placeholder='Search home appliances'
                        onChange={handleHomepageSearchChange}
                        value={isHomepageSearchState.isSearchInputValue}
                        onFocus={handleHomepageSearchFocus}
                        aria-label="Search home appliances"
                        className={`${styles.input} ${isHomepageSearchState.isSearchActive ? styles.active : ''}`}
                    />
                </div>
            </div>
        );
    }

};