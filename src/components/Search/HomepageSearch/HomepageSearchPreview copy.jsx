import styles from './HomepageSearchPreview.module.css';
// import { useProductsHook } from '../../../hooks/product-hook';
import { useSearchHook } from '../../../hooks/search-hook';
import { useResponsiveStateHook } from '../../../hooks/responsive-hook';

import { HomepageSearchPreviewCard } from '../../ProductCards/HomepageSearchPreviewCard/HomepageSearchPreviewCard';

export const HomepageSearchPreview = () => {


    // const { publicProducts } = useProductsHook();
    const { isMobile } = useResponsiveStateHook();
    const { 
        // isMobileSearchState, 
        isHomepageSearchState, 
        // isDesktopSearchState 
    } = useSearchHook();
    // const productDataSearch = publicProducts;
    // const mobileSearchResultsCount = isMobileSearchState.isSearchResults.length > 0 ? isMobileSearchState.isSearchResults.length : 0
    // const desktopSearchResultsCount = isDesktopSearchState.isSearchResults.length > 0 ? isDesktopSearchState.isSearchResults.length : 0



    if (isHomepageSearchState.isHomepageSearch === true && isMobile !== true) {
        return (
            <div className={styles.searchPreviewMainContainer}>
                {
                    isHomepageSearchState.isSearchResults.length > 0 ? (
                        <div className={styles.searchPreviewWithResultsWrapper}>
                            <div className={styles.searchPreviewWithResultsInnerDiv}>
                                <HomepageSearchPreviewCard products={isHomepageSearchState.isSearchResults && isHomepageSearchState.isSearchResults} />
                                {/* <SearchPreviewCard products={isHomepageSearchState.isSearchResults && isHomepageSearchState.isSearchResults} /> */}
                            </div>
                        </div>
                    ) : null
                }
            </div>
        );
    }

};