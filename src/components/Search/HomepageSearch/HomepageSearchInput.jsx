import styles from './HomepageSearchInput.module.css';
import { useProductsHook } from '../../../hooks/product-hook';
import { useSearchHook } from '../../../hooks/search-hook';
import { IconComponent } from '../../Icon/IconComponent';
import { useResponsiveStateHook } from '../../../hooks/responsive-hook';

export const HomepageSearchInput = () => {

    const { publicProducts } = useProductsHook();
    const { isMobile, isDesktop } = useResponsiveStateHook();
    const productDataSearch = publicProducts;

    const {

        isHomepageSearchState,
        setIsHomepageSearchState,
    } = useSearchHook();



    if (isHomepageSearchState.isHomepageSearch === true && isDesktop === true) {

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
    if (isHomepageSearchState.isHomepageSearch === true && isMobile === true) {

        return (
            <div className={styles.searchInputContainer}>
                <div
                    className={styles.searchInputWrapper}
                >
                    <div className={styles.desktopSearchIconWrapper}>
                        <IconComponent iconType='searchInput' />
                    </div>


                    {/* <input
                        type="search"
                        placeholder='Search home mobile appliances'

                        aria-label="Search home appliances"
                        className={styles.input}
                    /> */}
                </div>
            </div>
        );
    }

};