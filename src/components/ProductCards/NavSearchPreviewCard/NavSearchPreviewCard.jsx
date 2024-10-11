
// import { NavLink } from 'react-router-dom';
import { PageText } from '../../Text/Text';
import styles from './NavSearchPreviewCard.module.css';
import { useBuilderHook } from '../../../hooks/use-builder-hooks';
import { GenerateProductURL } from '../../../utils/helper-functions';
import { AddToListButton, RemoveFromListButton } from '../../Button/ProductButtons'
import { LinkComponent } from '../../Links/LinkComponent';
import { logEvent } from '../../../utils/google-analytics';
import { useSearchHook } from '../../../hooks/use-search-hooks';


export const NavSearchPreviewCard = ({ products }) => {


    const { productsInList } = useBuilderHook();
    const { isHomepageSearchState, isDesktopSearchState, isMobileSearchState } = useSearchHook();


    const handleSelectProductFromSearch = (product) => {

        const getSearchData = () => {
            if (Array.isArray(isHomepageSearchState.isSearchResults) && isHomepageSearchState.isSearchResults.length > 0) {
                return {
                    searchQuery: isHomepageSearchState.isSearchInputValue,
                    searchResultsCount: isHomepageSearchState.isSearchResults.length,
                    searchType: 'Homepage_Search',
                    searchedProduct: product.title,
                    searchedProductCategory: product.category,
                    searchedProductSubcategory: product.subcategory,
                };
            } else if (Array.isArray(isMobileSearchState.isSearchResults) && isMobileSearchState.isSearchResults.length > 0) {
                return {
                    searchQuery: isMobileSearchState.isSearchInputValue,
                    searchResultsCount: isMobileSearchState.isSearchResults.length,
                    searchType: 'Nav_Search',
                    searchedProduct: product.title,
                    searchedProductCategory: product.category,
                    searchedProductSubcategory: product.subcategory,
                };
            } else if (Array.isArray(isDesktopSearchState.isSearchResults) && isDesktopSearchState.isSearchResults.length > 0) {
                return {
                    searchQuery: isDesktopSearchState.isSearchInputValue,
                    searchResultsCount: isDesktopSearchState.isSearchResults.length,
                    searchType: 'Nav_Search',
                    searchedProduct: product.title,
                    searchedProductCategory: product.category,
                    searchedProductSubcategory: product.subcategory,
                };
            }
            return {
                searchQuery: 'na',
                searchResultsCount: 'na',
                searchType: 'na',
                searchedProduct: 'na',
                searchedProductCategory: 'na',
                searchedProductSubcategory: 'na'
            };
        };

        const { searchQuery, searchResultsCount, searchType, searchedProduct, searchedProductCategory, searchedProductSubcategory } = getSearchData();

      
        logEvent('SEARCHED_PRODUCT_SELECTED', {
            productName: searchedProduct,
            productCategory:searchedProductCategory,
            productSubcategory: searchedProductSubcategory,
            searchType: searchType,
            searchQuery: searchQuery,
            searchResultsCount: searchResultsCount,
        });
    }

    return (
        products && products.map((product, idx) => {
            const { title, subtitle, image, category } = product;
            const isProductInList = productsInList.some(p => p.title === product.title);
            const configuredProductURL = GenerateProductURL(category, title);
            const productURL = `${configuredProductURL}`;
            // const productURL = `${publicUrl}${configuredProductURL}`;
            return (
                <div key={idx} className={styles.searchResultsPreviewCardContainer}>
                    <LinkComponent
                        // linkOnClick={handleSelectProductFromSearch}
                        linkOnClick={() => handleSelectProductFromSearch(product)} 
                        href={productURL}
                    >
                        <div className={styles.searchResultsPreviewCardImageWrapper}>
                            <img
                                loading='lazy'
                                className={styles.searchResultsPreviewCardImage}
                                src={`${process.env.REACT_APP_AWS_URL}/${image}`}
                                alt={`product ${title}`}
                            />
                        </div>
                    </LinkComponent >
                    <div className={styles.searchResultsPreviewCardTextWrapper}>
                        <div >
                            <LinkComponent
                               linkOnClick={() => handleSelectProductFromSearch(product)} 
                                href={productURL}
                            >
                                {/* <NavLink to={productURL} > */}
                                <div className={styles.searchResultsPreviewCardText}>
                                    <PageText type='productSearchNavTitle' >{title}</PageText>
                                </div>
                                {/* </NavLink> */}
                            </LinkComponent>

                        </div>
                        <PageText type='productSearchNavSubtitle' >
                            <span className={styles.clampedSubtitle}>{subtitle}</span>
                        </PageText>
                    </div>

                    {isProductInList ? (<RemoveFromListButton product={product} />) : (<AddToListButton product={product} />)}

                </div>
            );
        })

    );
};


