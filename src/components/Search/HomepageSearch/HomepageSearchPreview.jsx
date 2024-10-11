import styles from './HomepageSearchPreview.module.css';
// import { useProductsHook } from '../../../hooks/product-hook';
import { useSearchHook } from '../../../hooks/use-search-hooks';
import { useResponsiveStateHook } from '../../../hooks/responsive-hook';

import { HomepageSearchPreviewCard } from '../../ProductCards/HomepageSearchPreviewCard/HomepageSearchPreviewCard';
import { SearchFeedback } from '../MainSearch/SearchFeedback';
import { motion } from 'framer-motion';

const listVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1 // Adjust for timing between children
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};




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
            <motion.div
                variants={listVariants}
                initial="hidden"
                animate="visible"
                className={styles.searchPreviewMainContainer}>
                {
                    isHomepageSearchState.isSearchResults.length > 0 ? (
                        <motion.div
                            variants={itemVariants}
                            className={styles.searchPreviewWithResultsWrapper}>
                            <div className={styles.searchPreviewWithResultsInnerDiv}>
                                <HomepageSearchPreviewCard products={isHomepageSearchState.isSearchResults && isHomepageSearchState.isSearchResults} />

                            </div>
                        </motion.div>
                    ) : isHomepageSearchState.isSearchInputValue.length > 2 && isHomepageSearchState.isSearchResults.length === 0 ?
                        <SearchFeedback
                            positionRight="-900"
                            positionTop="-160"
                            feedback="No results. Try searching with different keywords, like model title (S5MSB) or home appliance category (Laundry), or even product features!."
                        />
                        : null
                    // isHomepageSearchState.isSearchResults.length > 0 ? (
                    //     <div className={styles.searchPreviewWithResultsWrapper}>
                    //         <div className={styles.searchPreviewWithResultsInnerDiv}>
                    //             <HomepageSearchPreviewCard products={isHomepageSearchState.isSearchResults && isHomepageSearchState.isSearchResults} />

                    //         </div>
                    //     </div>
                    // ) : null
                }
            </motion.div>
        );
    }

};