import styles from './SearchPreview.module.css';
import { LinkComponent } from '../../Links/LinkComponent';

import { useSearchHook } from '../../../hooks/use-search-hooks';

import { SearchPreviewCard } from '../../ProductCards/SearchPreview/SearchPreviewCard';
import { PageText } from '../../Text/Text';
import { Button } from '../../Button/Button';
import { NavSearchPreviewCard } from '../../ProductCards/NavSearchPreviewCard/NavSearchPreviewCard';

import { useLinkConfig } from '../../../hooks/use-link-config-hooks';
import { SearchFeedback } from './SearchFeedback';
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


export const SearchPreview = () => {

    const {categoryLinks}=useLinkConfig()

    // const { publicProducts } = useProductsHook();
    const { isMobileSearchState,
        // isHomepageSearchState, 
        isDesktopSearchState } = useSearchHook();
    // const productDataSearch = publicProducts;
    // const mobileSearchResultsCount = isMobileSearchState.isSearchResults.length > 0 ? isMobileSearchState.isSearchResults.length : 0
    // const desktopSearchResultsCount = isDesktopSearchState.isSearchResults.length > 0 ? isDesktopSearchState.isSearchResults.length : 0

    // console.log(isMobileSearchState)
    // if(isMobileSearchState === true){}

    if (isMobileSearchState.isMobileSearch === true) {
        return (
            isMobileSearchState.isSearchResults.length > 0 ? (
                <div className={styles.searchPreviewWithResults}>
                    <div className={styles.searchPreviewWithResultsInnerDiv}>

                        <SearchPreviewCard products={isMobileSearchState.isSearchResults && isMobileSearchState.isSearchResults} />
                    </div>
                </div>
            ) : (
                <div className={styles.searchPreview}>

                    <div className={styles.previewSectionBody}>

                        <div className={styles.searchPreviewSectionTitleWraper}>
                            <PageText type='productCardSubtitle'>Explore by category</PageText>
                        </div>

                        <motion.div 
                           variants={listVariants}
                           initial="hidden"
                           animate="visible"
                        className={styles.searchOptionButtonWrapper}>
                            {categoryLinks.map((link, idx) =>
                                <motion.span 
                                variants={itemVariants}
                                key={idx}>
                                    <LinkComponent href={link.href}>
                                        <Button buttonStyleType="primary">{link.text}</Button>
                                    </LinkComponent>
                                </motion.span>
                            )};



                        </motion.div>
                    </div>

                </div>
            )

        );
    }
    if (isDesktopSearchState.isDesktopSearch === true) {


        return (
            <motion.div 
            variants={listVariants}
                            initial="hidden"
                            animate="visible"
            className={styles.searchPreviewDesktopMainContainer}>
                {
                    isDesktopSearchState.isSearchResults.length > 0 ? (
                        <motion.div
                             variants={itemVariants}
                            className={styles.desktopSearchPreviewWithResultsWrapper}>
                            <div
                               
                                className={styles.desktopSearchPreviewWithResultsInnerDiv}>

                                <NavSearchPreviewCard products={isDesktopSearchState.isSearchResults && isDesktopSearchState.isSearchResults} />

                            </div>

                        </motion.div>
                    ) : isDesktopSearchState.isSearchInputValue.length > 2 && isDesktopSearchState.isSearchResults.length === 0 ?
                        <SearchFeedback
                            feedback="No results. Try searching with different keywords, like model title (S5MSB) or home appliance category (Laundry), or even product features!."
                        />
                        : null
                }
                {/* {
                    isDesktopSearchState.isSearchResults.length > 0 ? (
                        <div className={styles.desktopSearchPreviewWithResultsWrapper}>
                            <div className={styles.desktopSearchPreviewWithResultsInnerDiv}>
                             
                                <NavSearchPreviewCard products={isDesktopSearchState.isSearchResults && isDesktopSearchState.isSearchResults} />
                             
                            </div>

                        </div>
                    ) : null
                } */}
            </motion.div>
        );
    }
    // if (isHomepageSearchState.isHomepageSearch === true) {
    //     return (
    //         isHomepageSearchState.isSearchResults.length > 0 ? (
    //             <div className={styles.searchPreviewWithResults}>
    //                 <div className={styles.searchPreviewWithResultsInnerDiv}>
    //                     <p>{mobileSearchResultsCount} Results</p>
    //                     <SearchPreviewCard products={isHomepageSearchState.isSearchResults && isHomepageSearchState.isSearchResults} />
    //                 </div>
    //             </div>
    //         ) : (
    //             <div className={styles.searchPreview}>

    //                 <div className={styles.previewSectionBody}>
    //                     {/* <div className={styles.previewBodyTitle1}>
    //             <ProductText type='searchSectionTitle'>Search LG home appliances</ProductText>
    //             </div>
    //             <div className={styles.previewBodyTitle2}>
    //             <ProductText type='searchSectionSubtitle'>Explore by category</ProductText>
    //             </div> */}
    //                     <div className={styles.searchOptionButtonWrapper}>
    //                         <p>Buttons</p>
    //                         {/*                     
    //                 <Button buttonStyleType='secondary'>Cooking</Button>
    //                 <Button buttonStyleType='secondary'>Refrigeration</Button>
    //                 <Button buttonStyleType='secondary'>Air Care</Button>
    //                 <Button buttonStyleType='secondary'>Laundry</Button>

    //                 <Button buttonStyleType='secondary'>Signature</Button>
    //                 <Button buttonStyleType='secondary'>Studio</Button>
    //                 <Button buttonStyleType='secondary'>Vacuums</Button>
    //                 <Button buttonStyleType='secondary'>Dishwashers</Button> */}
    //                     </div>
    //                 </div>

    //             </div>
    //         )

    //     );
    // }

};