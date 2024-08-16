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
                const filteredResults = productDataSearch.filter((product) => {
                    // Check title, subtitle, and category
                    const matchesBasicFields = product.title.toLowerCase().includes(query)
                        || product.subtitle.toLowerCase().includes(query)
                        || product.category.toLowerCase().includes(query);
                    // Check specification lists
                    const matchesSpecList = (list) => list.some(spec => spec.toLowerCase().includes(query));
                    const matchesSpecs = matchesSpecList(product.specList1)
                        || matchesSpecList(product.specList2)
                        || matchesSpecList(product.specList3)
                        || matchesSpecList(product.specList4);

                    // Check colors
                    const matchesColors = product.colors.some(color => color.includes(query));

                    // Check logos
                    const matchesLogos = product.logos.some(logo => logo.includes(query));

                    return matchesBasicFields || matchesSpecs || matchesColors || matchesLogos ;
                });

                setIsHomepageSearchState(prevState => ({ ...prevState, isSearchResults: filteredResults }));
            } else {
                setIsHomepageSearchState(prevState => ({ ...prevState, isSearchResults: [] }));
            }
        }
        const handleHomepageSearchFocus = () => {
            setIsHomepageSearchState(prevState => ({ ...prevState, isSearchFocused: true }));
     
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
                        // className={`${styles.input} ${isHomepageSearchState.isSearchActive ? styles.active : ''}`}
                        className={`${styles.input} ${isHomepageSearchState.isSearchActive ? styles.active : ''}${isHomepageSearchState.isSearchResults.length > 0 ? styles.withResults : ''}`}
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