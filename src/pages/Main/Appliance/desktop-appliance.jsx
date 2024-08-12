import styles from './desktop-appliance-page.module.css';
import { useParams } from 'react-router-dom';
import { useProductsHook } from '../../../hooks/product-hook';
import { useBuilderHook } from '../../../hooks/builder-hook';
import { ProductBackgroundShape } from '../../../components/Shape/ProductBackgroundShape';
import { PageText } from '../../../components/Text/Text';
import { FilterProductById } from '../../../utils/category-helper';
import { consolidateSpecListsToArray, extractProductNamesFromKeywords, findMatchingProducts } from '../../../utils/category-helper';
import { AddToListButton, RemoveFromListButton } from '../../../components/Button/ProductButtons';
import { TechnologyLogo } from '../../../components/ProductDetails/Technology/TechnologyLogo';
import { ColorLegend } from '../../../components/ProductDetails/ColorLegend/ColorLegend';
import { Specifications } from '../../../components/ProductDetails/Specifications/Specifications';
import { VideoComponent } from '../../../components/ProductDetails/FeatureVideo/VideoComponent';
import { MatchingProductComponent } from '../../../components/ProductDetails/MatchingProduct/MatchingProductComponent';

import { UpcCode } from '../../../components/ProductDetails/UpcCode/UpcCode.jsx';
import { GridSystem } from '../../../components/GridSystem/GridSystem.jsx';
import {ExternalSpecificationSheetComponent} from '../../../components/ProductDetails/ExternalSpecificationSheet/ExternalSpecificationSheetComponent.jsx'

export const DesktopAppliancePage = ({ productId }) => {

    const publicUrl = process.env.PUBLIC_URL;

    const { publicProducts } = useProductsHook();
    const { productsInList } = useBuilderHook();

    const isProductInList = productsInList.some(p => p.title === productId);
    const productDetails = FilterProductById(publicProducts, productId);

    const [productObject] = productDetails;

    //MATCHING PRODUCTS
    const specsArray = productDetails.length > 0 ? consolidateSpecListsToArray(productDetails) : [];
    const relatedProducts = extractProductNamesFromKeywords(specsArray);
    const matchingProducts = findMatchingProducts(relatedProducts, publicProducts)

    const videoList = productDetails.flatMap(product => product.videos);


    return (

        productDetails && productDetails.map((details, idx) => (

            <main key={idx} className={styles.pageContainer}>


                <GridSystem>
                    <div className={styles.applianceHeaderWrapper}>
                        <div className={styles.applianceHeaderWrapperDiv1}>
                            <PageText type='productPageTitle'>{details.title}</PageText>
                            <PageText type='productPageSubtitle'>{details.subtitle}</PageText>
                            <div className={styles.applianceHeaderWrapperDiv1BtnWrapper} >
                                {isProductInList ? <RemoveFromListButton product={productObject} /> : <AddToListButton product={productObject} />}
                            </div>
                        </div>
                        <div className={styles.applianceHeaderWrapperDiv2}>
                            <div className={styles.imageShapeGroupWrapper}>
                                <div className={styles.productImageForShape}>
                                    <div className={styles.productImage}>
                                        <img loading='lazy' src={`${publicUrl}/assets/image/products/${details.image}`} alt={`${details.title}`} />
                                    </div>
                                </div>
                                <ProductBackgroundShape className={styles.productBackgroundShapeContainer} />
                            </div>
                        </div>
                        <div className={styles.applianceHeaderWrapperDiv3}>
                            <ColorLegend colors={details.colors} />
                        </div>
                    </div>
                </GridSystem>

                <GridSystem
                    containerPaddingTop='4rem'
                    containerPaddingBottom='4rem'
                    containerBorderBottom='1px solid #D0CBC1'
                    containerBackgroundColor='#E6E1D6'
                >
                    <div className={styles.applianceSpecsWrapper}>
                        <Specifications product={details} />
                    </div>
                </GridSystem>
                {
                    videoList.length !== 0 &&
                    <VideoComponent videos={videoList} />
                }
                {
                    details.specSheetLink && details.specSheetLink.length > 0 &&
                    <GridSystem
                        containerPaddingTop='4rem'
                        containerPaddingBottom='4rem'
                        containerBorderBottom='1px solid #D0CBC1'
                        containerBackgroundColor='#E6E1D6'

                    >
                        <ExternalSpecificationSheetComponent product={details} />
                    </GridSystem>
                }
                {
                    details.upc && details.upc.length > 0 &&
                    <GridSystem
                        containerPaddingTop='4rem'
                        containerPaddingBottom='4rem'
                        containerBorderBottom='1px solid #D0CBC1'
                        containerBackgroundColor='#E6E1D6'

                    >
                        <UpcCode upc={details.upc} />
                    </GridSystem>
                }
                {
                    details.logos && details.logos.length > 0 &&
                    <GridSystem
                        containerPaddingTop='4rem'
                        containerPaddingBottom='4rem'
                        containerBorderBottom='1px solid #D0CBC1'
                        containerBackgroundColor='#E6E1D6'
                    >
                        <TechnologyLogo logos={details.logos} />
                    </GridSystem>
                }
                {
                    matchingProducts.length > 0 &&
                    <GridSystem
                        containerPaddingTop='4rem'
                        containerPaddingBottom='4rem'
                        containerBorderBottom='1px solid #D0CBC1'
                        containerBackgroundColor='#E6E1D6'
                    >
                        <div className={styles.sectionTextWrapper}>
                            <PageText type='bodyTertiaryTitleBold'>Related Home Appliances</PageText>
                        </div>
                        <MatchingProductComponent product={matchingProducts} />
                    </GridSystem>
                }

            </main >
        ))


    )
}