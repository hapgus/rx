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
            <div className={styles.gridContainer1}>
              <div className={styles.gridWrapper1}>
                <div className={styles.gridItem1}>
                  <div className={styles.mobileHeaderWrapper}>
                    <PageText type='pageHeaderTertiaryTitle'>{capitalizeFirstLetter(details.availability)}</PageText>
                    <PageText type='pageHeaderSubtitle'>{details.title}</PageText>
                    <PageText type='pageHeaderTitle'>{details.subtitle}</PageText>

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
              </div>
            </div>
            {/* SPEC */}
            <div className={styles.applianceSpecsContainer}>
              <div id={styles.specsGrid} className={styles.gridContainer1}>
                <div className={styles.gridWrapper1}>
                  <div className={styles.gridItem1}>
                    <Specifications product={details} />
                  </div>
                </div>

              </div>
            </div>
            {
              videoList.length !== 0 &&

              <section className={styles.applianceSectionContainer3}>
                <div id={styles.videoGrid} className={styles.gridContainer1}>
                  <div className={styles.gridWrapper1}>
                    <div className={styles.gridItem1}>
                      <VideoComponent videos={videoList} />
                    </div>
                  </div>
                </div>
              </section>
            }
            {
              details.specSheetLink && details.specSheetLink.length > 0 &&
              <section className={styles.applianceSectionContainer}>
                <div id={styles.specSheetLinkGrid} className={styles.gridContainer1}>
                  <div className={styles.gridWrapper1}>
                    <div className={styles.gridItem1}>
                      <ExternalSpecificationSheetComponent product={details} />
                    </div>
                  </div>
                </div>
              </section>
            }
            {
              details.upc && details.upc.length > 0 &&
              <section className={styles.applianceSectionContainer}>
                <div id={styles.upcGrid} className={styles.gridContainer1}>
                  <div className={styles.gridWrapper1}>
                    <div className={styles.gridItem1}>
                      <UpcCode upc={details.upc} />
                    </div>
                  </div>
                </div>
              </section>
            }
            {
              details.logos && details.logos.length > 0 &&
              <section className={styles.applianceSectionContainer}>
                <div id={styles.logosGrid} className={styles.gridContainer1}>
                  <div className={styles.gridWrapper1}>
                    <div className={styles.gridItem1}>
                      <TechnologyLogo logos={details.logos} />
                    </div>
                  </div>
                </div>
              </section>
            }
            {matchingProducts.length > 0 &&
              <section className={styles.applianceSectionContainer}>
                <div id={styles.relatedProductGrid} className={styles.gridContainer1}>

                  <div className={styles.gridWrapper1}>
                    <div className={styles.gridItem1}>
                      <div className={styles.sectionTextWrapper}>
                        <PageText type='productPageSectionText'>Related Home Appliances</PageText>
                      </div>
                      <MatchingProductComponent product={matchingProducts} />
                    </div>
                  </div>
                </div>
              </section>
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
        <section className={styles.applianceSectionContainer1}>
          <div className={styles.applianceHeaderContainer}>
            <div className={styles.applianceHeaderWrapper}>
              <div className={styles.applianceHeaderWrapperDiv1}>
                <PageText type='pageHeaderTertiaryTitle'>{capitalizeFirstLetter(details.availability)}</PageText>
                <PageText type='pageHeaderSubtitle'>{details.title}</PageText>
                <PageText type='pageHeaderTitle'>{details.subtitle}</PageText>
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
          </div>
        </section>

        <section className={styles.applianceSectionContainer2}>
          <div className={styles.applianceSpecsContainer}>
            <div className={styles.applianceSpecsWrapper}>
              <Specifications product={details} />
            </div>
          </div>
        </section>

        {
          videoList.length !== 0 &&
          <section className={styles.applianceSectionContainer3}>
            <VideoComponent videos={videoList} />
          </section>
        }

        {
          details.specSheetLink && details.specSheetLink.length > 0 &&
          <section className={styles.applianceSectionContainer}>
            <div className={styles.applianceSectionWrapper}>
              <div className={styles.keyFeaturesWrapper}>
                <div className={styles.keyFeaturesWrapperDiv1}>
                  <ExternalSpecificationSheetComponent product={details} />
                </div>
              </div>
            </div>
          </section>
        }
        {
          details.upc && details.upc.length > 0 &&

          <section className={styles.applianceSectionContainer}>
            <div className={styles.applianceSectionWrapper}>
              <div className={styles.keyFeaturesWrapper}>
                <div className={styles.keyFeaturesWrapperDiv1}>
                  <UpcCode upc={details.upc} />
                </div>
              </div>
            </div>
          </section>
        }
        {
          details.logo && details.logos.length > 0 &&
          <section className={styles.applianceSectionContainer}>
            <div className={styles.applianceSectionWrapper}>
              <div className={styles.keyFeaturesWrapper}>
                <div className={styles.keyFeaturesWrapperDiv1}>
                  <TechnologyLogo logos={details.logos} />
                </div>
              </div>
            </div>
          </section>
        }
        {matchingProducts.length > 0 &&
          <section className={styles.applianceSectionContainer}>
            <div className={styles.applianceSectionWrapper}>
              <div className={styles.keyFeaturesWrapper}>
                <div className={styles.keyFeaturesWrapperDiv1}>
                  <MatchingProductComponent product={matchingProducts} />
                </div>
              </div>
            </div>
          </section>
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