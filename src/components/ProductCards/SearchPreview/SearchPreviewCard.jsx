
import { LinkComponent } from '../../Links/LinkComponent';
import { PageText } from '../../Text/Text';
import { Button } from '../../Button/Button';
import styles from './SearchPreviewCard.module.css';
import { useSearchHook } from '../../../hooks/search-hook';
import { useBuilderHook } from '../../../hooks/builder-hook';
import { GenerateProductURL } from '../../../utils/link-helper';
import { AddToListButton, RemoveFromListButton } from '../../Button/ProductButtons'

export const SearchPreviewCard = ({ products }) => {
    const publicUrl = process.env.PUBLIC_URL;
    const { productsInList } = useBuilderHook();
    const { isMobileSearchState, isDesktopSearchState } = useSearchHook();

    if (isMobileSearchState.isMobileSearch === true) {
        return (
            products && products.map((product, idx) => {
                const { title, subtitle, image, category } = product;

                const isProductInList = productsInList.some(p => p.title === product.title);
                const configuredProductURL = GenerateProductURL(category, title);
                const productURL = `${publicUrl}${configuredProductURL}`;
                return (
                    <div key={idx} className={styles.searchPreviewCardContainerM}>
                        <div className={styles.searchPreviewCardWrapperM}>
                            <div className={styles.searchPreviewCardImageWrapperM}>
                                <img
                                    loading='lazy'
                                    className={styles.searchPreviewCardImageM}
                                    src={`${process.env.REACT_APP_AWS_URL}/${image}`}
                                    alt={`product ${title}`}

                                />
                            </div>

                            <div className={styles.searchPreviewCardTextWrapperM}>
                                <div >

                                    <LinkComponent href={productURL} >
                                        <div className={styles.searchPreviewCardTextM}>
                                            <div className={styles.searchPreviewTitle}>
                                                <PageText type='productSearchTitle' >{title}</PageText>
                                            </div>
                                            <div className={styles.searchPreviewSubtitle}>
                                                <PageText color='lightGrayText' type='productSearchSubtitle' >
                                                    <span className={styles.searchPreviewClampedSubtitleM}>{subtitle}</span>
                                                </PageText>
                                            </div>
                                        </div>
                                    </LinkComponent>
                                </div>

                            </div>
                            <div className={styles.searchPreviewButtonWrapperM}>
                                <div>
                                    {isProductInList ? (
                                        <RemoveFromListButton product={product} />
                                    ) : (
                                        <AddToListButton product={product} />
                                    )}
                                </div>
                                <LinkComponent href={productURL}>
                            
                                    <Button buttonStyleType="secondary" buttonTextType="action">
                                        See detailss
                                    </Button>
                                  
                                </LinkComponent>
                            </div>

                        </div>
                    </div >
                )

            })

        );
    }
    if (isDesktopSearchState.isDesktopSearch === true) {
        return (
            products && products.map((product, idx) => {
                const { title, subtitle, image, category } = product;

                const isProductInList = productsInList.some(p => p.title === product.title);
                const productURL = GenerateProductURL(category, title);
                return (
                    <div key={idx} className={styles.searchPreviewCardContainerM}>
                        <div className={styles.searchPreviewCardWrapperM}>
                            <div className={styles.searchPreviewCardImageWrapperM}>
                                <img
                                    loading='lazy'
                                    className={styles.searchPreviewCardImageM}
                                    src={`${process.env.REACT_APP_AWS_URL_IMAGE}/${image}`}
                                    alt={`product ${title}`}

                                />
                            </div>

                            <div className={styles.searchPreviewCardTextWrapperM}>
                                <div >
                                    <LinkComponent href={productURL}>
                                        <div className={styles.searchPreviewCardTextM}>
                                            <div className={styles.searchPreviewTitle}>
                                                <PageText type='productSearchTitle' >{title}</PageText>
                                            </div>
                                            <div className={styles.searchPreviewSubtitle}>
                                                <PageText color='lightGrayText' type='productSearchSubtitle' >
                                                    <span className={styles.searchPreviewClampedSubtitleM}>{subtitle}</span>
                                                </PageText>
                                            </div>
                                        </div>
                                    </LinkComponent>
                                </div>

                            </div>
                            <div className={styles.searchPreviewButtonWrapperM}>
                                <div>
                                    {isProductInList ? (
                                        <RemoveFromListButton product={products} />
                                    ) : (
                                        <AddToListButton product={products} />
                                    )}
                                </div>
                                <LinkComponent href={productURL}>
                             
                                    {/* <NavigationLink href={productURL}> */}
                                    <Button buttonStyleType="secondary" buttonTextType="action">
                                        See details
                                    </Button>
                                   
                                    </LinkComponent>
                            </div>

                        </div>
                    </div>
                )
            })
        );
        // return (
        //     products && products.map((product, idx) => {
        //         const { title, subtitle, image, category } = product;

        //         const isProductInList = productsInList.some(p => p.title === product.title);
        //         const productURL = GenerateProductURL(category, title);
        //         return (
        //             <div className={styles.searchResultsPreviewCardContainer}>
        //                 <div className={styles.searchResultsPreviewCardImageWrapper}>
        //                     <img className={styles.searchResultsPreviewCardImage} src={`hapg/assets/image/products/${image}`} alt={`product ${title}`} />
        //                 </div>
        //                 <div className={styles.searchResultsPreviewCardTextWrapper}>
        //                     <div >
        //                         <NavLink to={productURL}></NavLink>
        //                         {/* <NavigationLink href={productURL}> */}
        //                         <div className={styles.searchResultsPreviewCardText}>
        //                             {/* <ProductText type='navSearchProductTitle' >{CapitalizeFirstLetter(category)}</ProductText> */}
        //                             <PageText color='lightGrayText' type='titleSearch' >
        //                                 {title}
        //                             </PageText>
        //                             {/* <ProductText type='navSearchProductTitle'></ProductText> */}
        //                             {/* <NakedIcon iconType='rightChevron' /> */}
        //                         </div>
        //                         {/* </NavigationLink> */}
        //                     </div>
        //                     {/* <ProductText type='navSearchProductSubtitle' >
        //                     <span className={styles.clampedSubtitle}>{subtitle}</span>
        //                 </ProductText> */}
        //                     <PageText color='lightGrayText' type='titleSearch' >
        //                         <span className={styles.searchPreviewClampedSubtitleM}>{subtitle}</span>
        //                     </PageText>
        //                 </div>

        //                 {isProductInList ? (<RemoveFromListButton product={product} />) : (<AddToListButton product={product} />)}

        //             </div>
        //         );

        //     })

        // );
    }


};

