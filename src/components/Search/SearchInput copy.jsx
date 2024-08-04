import styles from './Search.module.css';
import { useProductsHook } from '../../hooks/product-hook';
import { useSearchHook } from '../../hooks/search-hook';
import { IconComponent } from '../Icon/IconComponent';

export const SearchInput = () => {
    const { publicProducts } = useProductsHook();
    const { isMobileSearchState, setIsMobileSearchState, isDesktopSearchState } = useSearchHook();
    const productDataSearch = publicProducts;

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
        setIsMobileSearchState(prevState => ({ ...prevState, isMobileSearch: false }))
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
};