import styles from './HomepageSearchPreview.module.css';
import { useProductsHook } from '../../hooks/product-hook';
import { useSearchHook } from '../../hooks/search-hook';
import { IconComponent } from '../Icon/IconComponent';
import { SearchPreviewCard } from '../ProductCards/SearchPreview/SearchPreviewCard';

export const HomepageSearchPreview = () => {


    const { publicProducts } = useProductsHook();
    const { isMobileSearchState, isHomepageSearchState, isDesktopSearchState } = useSearchHook();
    const productDataSearch = publicProducts;
    const mobileSearchResultsCount = isMobileSearchState.isSearchResults.length > 0 ? isMobileSearchState.isSearchResults.length : 0
    const desktopSearchResultsCount = isDesktopSearchState.isSearchResults.length > 0 ? isDesktopSearchState.isSearchResults.length : 0

    // console.log(isMobileSearchState)
    // if(isMobileSearchState === true){}

    if (isHomepageSearchState.isHomepageSearch === true) {
        return (
            <div className={styles.searchPreviewMainContainer}>
                {
                    isHomepageSearchState.isSearchResults.length > 0 ? (
                        <div className={styles.searchPreviewWithResultsWrapper}>
                            <div className={styles.searchPreviewWithResultsInnerDiv}>
                                <SearchPreviewCard products={isHomepageSearchState.isSearchResults && isHomepageSearchState.isSearchResults} />
                            </div>
                        </div>
                    ) : null
                }</div>
        );
    }

};