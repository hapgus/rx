import { PageText } from '../../Text/Text';
import styles from './HomepageSearchPreviewCard.module.css';
import { useBuilderHook } from '../../../hooks/builder-hook';
import { logEvent } from '../../../utils/google-analytics';

import { capitalizeFirstLetterEachWord } from '../../../utils/text-help';

import { GenerateProductURL } from '../../../utils/link-helper';

import { AddToListButton, RemoveFromListButton } from '../../Button/ProductButtons';

import { LinkComponent } from '../../Links/LinkComponent';

import { useSearchHook } from '../../../hooks/search-hook';


export const HomepageSearchPreviewCard = ({ products }) => {

    const { productsInList } = useBuilderHook();
    const { isHomepageSearchState, isDesktopSearchState, isMobileSearchState } = useSearchHook();
    
    let searchQuery = 'na';
    let searchResultsCount = 'na';
    // if(isHomepageSearchState.isSearchResults){
    //     searchQuery = isHomepageSearchState.isSearchInputValue;
    //     searchResultsCount = isHomepageSearchState.isSearchResults.length
    // }
 // Determine which search state is active
 if (Array.isArray(isHomepageSearchState.isSearchResults) && isHomepageSearchState.isSearchResults.length > 0) {
    searchQuery = isHomepageSearchState.isSearchInputValue;
    searchResultsCount = isHomepageSearchState.isSearchResults.length;
} else if (Array.isArray(isMobileSearchState.isSearchResults) && isMobileSearchState.isSearchResults.length > 0) {
    searchQuery = isMobileSearchState.isSearchInputValue;
    searchResultsCount = isMobileSearchState.isSearchResults.length;
} else if (Array.isArray(isDesktopSearchState.isSearchResults) && isDesktopSearchState.isSearchResults.length > 0) {
    searchQuery = isDesktopSearchState.isSearchInputValue;
    searchResultsCount = isDesktopSearchState.isSearchResults.length;
}




    const handleSelectProductFromSearch = () => {
        console.log('search query',searchQuery)
        console.log('search results count',searchResultsCount)
        logEvent('Select_Product_From_Search', {
            productName: products.title,
            productCategory: products.category,
            productSubcategory: products.subcategory,
            searchType:'Homepage_Search',
            searchQuery:searchQuery,
            searchResultsCount:searchResultsCount,
        });
    }

    return (
        products && products.map((product, idx) => {
            const { title, subtitle, image, category } = product;
            const isProductInList = productsInList.some(p => p.title === product.title);
            const configuredProductURL = GenerateProductURL(category, title);
            const productURL = `${configuredProductURL}`;

            return (
                < div key={idx} className={styles.searchResultsPreviewCardContainer} >
                    <LinkComponent  linkOnClick={handleSelectProductFromSearch}  href={productURL}>
                        <div className={styles.searchResultsPreviewCardImageWrapper}>
                            <img
                                loading='lazy'
                                className={styles.searchResultsPreviewCardImage}
                                src={`${process.env.REACT_APP_AWS_URL}/${image}`}
                                alt={`product ${title}`}
                            />
                        </div>
                    </LinkComponent>
                    <div className={styles.searchResultsPreviewCardTextWrapper}>
                        <div >
                            <LinkComponent  linkOnClick={handleSelectProductFromSearch} href={productURL}>

                                {/* <NavigationLink href={productURL}> */}
                                <div className={styles.searchResultsPreviewCardText}>
                                    <PageText type='productSearchTitle' >{capitalizeFirstLetterEachWord(category)}</PageText>
                                    <PageText type='productSearchTitle'>| {title}</PageText>
                                    {/* <NakedIcon iconType='rightChevron' /> */}
                                </div>
                                {/* </NavigationLink> */}

                            </LinkComponent>
                        </div>
                        <PageText type='productSearchSubtitle' >
                            <span className={styles.clampedSubtitle}>{subtitle}</span>
                        </PageText>
                    </div>
                    {isProductInList ? (<RemoveFromListButton product={product} />) : (<AddToListButton product={product} />)}
                </div >
            )
        })

    );
};
