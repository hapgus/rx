import styles from './appliance.module.css';
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
import { ExternalSpecificationSheetComponent } from '../../../components/ProductCards/ExternalSpecificationSheet/ExternalSpecificationSheetComponent';
import { UpcCode } from '../../../components/ProductDetails/UpcCode/UpcCode.jsx';
import { GridSystem } from '../../../components/GridSystem/GridSystem.jsx';

const MobileAppliancePage = () => {
  const { productId } = useParams();
  const { publicProducts } = useProductsHook();
  const { productsInList } = useBuilderHook();
  const publicUrl = process.env.PUBLIC_URL;
  const isProductInList = productsInList.some(p => p.title === productId);
  const productDetails = FilterProductById(publicProducts, productId);

  const [productObject] = productDetails;

  //MATCHING PRODUCTS
  const specsArray = productDetails.length > 0 ? consolidateSpecListsToArray(productDetails) : [];
  const relatedProducts = extractProductNamesFromKeywords(specsArray);
  const matchingProducts = findMatchingProducts(relatedProducts, publicProducts)

  const videoList = productDetails.flatMap(product => product.videos);

  function capitalizeFirstLetter(text) {
    text = text.toLowerCase();
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
  return (
    <div className={styles.mobileAppliancePageContainer}>
      {
        productDetails.map((details, idx) => (
          <div key={idx}>
            <GridSystem
              containerPaddingTop='2rem'
              containerPaddingBottom='2rem'
              containerBorderBottom='1px solid #D0CBC1'
            >
              {/* <div className={styles.gridContainer1}>
              <div className={styles.gridWrapper1}> */}
              <div className={styles.gridItem1}>
                <div className={styles.mobileHeaderWrapper}>
                  <div className={styles.availabilityText}>
                    <PageText type='pageTertiaryTitle'>{capitalizeFirstLetter(details.availability)}</PageText>
                  </div>
                  <div className={styles.titleText}>
                    <PageText type='pageSubtitle'>{details.title}</PageText>
                  </div>
                  <div className={styles.subtitleText}>
                    <PageText type='pageTitle'>{details.subtitle}</PageText>
                  </div>
                </div>
                <div className={styles.mobileProductImageWrapper}>
                  <ProductBackgroundShape className={styles.mobileProductImageShape} />
                  <div className={styles.mobileProductImage}>
                    <img loading='lazy' src={`${publicUrl}/assets/image/products/${details.image}`} alt={`${details.title}`} />
                  </div>
                </div>
                <div className={styles.colorButtonWrapper}>
                  <div>
                    <ColorLegend colors={details.colors} />
                  </div>

                  <div className={styles.buttonWrapper} >
                    {isProductInList ? <RemoveFromListButton product={productObject} /> : <AddToListButton product={productObject} />}
                  </div>
                </div>
              </div>
            </GridSystem>

            <GridSystem
              containerPaddingTop='2rem'
              containerPaddingBottom='2rem'
              containerBorderBottom='1px solid #D0CBC1'
              containerBackgroundColor='#E6E1D6'
            >
              <div className={styles.gridItem1}>
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
                containerPaddingTop='2rem'
                containerPaddingBottom='2rem'
                containerBorderBottom='1px solid #D0CBC1'
                containerBackgroundColor='#E6E1D6'
              >
                <ExternalSpecificationSheetComponent product={details} />
              </GridSystem>
            }
            {
              details.upc && details.upc.length > 0 &&
              <GridSystem
                containerPaddingTop='2rem'
                containerPaddingBottom='2rem'
                containerBorderBottom='1px solid #D0CBC1'
                containerBackgroundColor='#E6E1D6'
              >
                <UpcCode upc={details.upc} />
              </GridSystem>
            }
            {
              details.logos && details.logos.length > 0 &&

              <GridSystem
                containerPaddingTop='2rem'
                containerPaddingBottom='2rem'
                containerBorderBottom='1px solid #D0CBC1'
                containerBackgroundColor='#E6E1D6'
              >
                <TechnologyLogo logos={details.logos} />
              </GridSystem>

            }
            {matchingProducts.length > 0 &&
              // <section className={styles.applianceSectionContainer}>
              //   <div id={styles.relatedProductGrid} className={styles.gridContainer1}>

              //     <div className={styles.gridWrapper1}>
              <GridSystem
              containerPaddingTop='2rem'
              containerPaddingBottom='2rem'
              containerBorderBottom='1px solid #D0CBC1'
              containerBackgroundColor='#E6E1D6'
              >
                <div className={styles.gridItem1}>
                  <div className={styles.sectionTextWrapper}>
                    <PageText type='bodyTertiaryTitleBold'>Related Home Appliances</PageText>
                  </div>
                  <MatchingProductComponent product={matchingProducts} />
                </div>
              </GridSystem>
              //     </div>
              //   </div>
              // </section>
            }

          </div>
        ))
      }

    </div>
  )
}

const DesktopAppliancePage = () => {
  const publicUrl = process.env.PUBLIC_URL;
  const { productId } = useParams();
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

  function capitalizeFirstLetter(text) {
    text = text.toLowerCase();
    return text.charAt(0).toUpperCase() + text.slice(1);
  }



  return (
    productDetails.map((details, idx) => (
      <main key={idx} className={styles.pageContainer} >
        {/* <section className={styles.applianceSectionContainer1}>
          <div className={styles.applianceHeaderContainer}>
            <div className={styles.applianceHeaderWrapper}> */}
        <GridSystem
          containerPaddingTop='4rem'
          containerPaddingBottom='4rem'
          containerBorderBottom='1px solid #D0CBC1'
        >
          <div className={styles.applianceHeaderWrapperDiv1}>
            <div className={styles.availabilityText}>
              <PageText type='pageTertiaryTitle'>{capitalizeFirstLetter(details.availability)}</PageText>
            </div>
            <div className={styles.titleText}>
              <PageText type='pageSubtitle'>{details.title}</PageText>
            </div>
            <div className={styles.subtitleText}>
              <PageText type='pageTitle'>{details.subtitle}</PageText>
            </div>
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
        {matchingProducts.length > 0 &&
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
      </main>
    ))
  );
}




const AppliancePage = () => {

  return (
    <>
      <div className={styles.mobileAppliancePageContainer}>
        <MobileAppliancePage />
      </div>
      <div className={styles.desktopAppliancePageContainer}>
        <DesktopAppliancePage />
      </div>
    </>
  );
}

export default AppliancePage;