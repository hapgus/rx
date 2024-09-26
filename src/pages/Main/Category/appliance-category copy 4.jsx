import styles from './ApplianceCategory.module.css';
import { useProductsHook } from '../../../hooks/product-hook';
import { useParams } from 'react-router';
import { PageText } from '../../../components/Text/Text';
import { FilterProductsByCategoryId, ListProductsByCategorySubcategory, NormalizeCategoryId } from '../../../utils/category-helper';
import { capitalizeFirstLetterEachWord } from '../../../utils/text-help';

import { CATEGORY_VERBIAGE } from '../../../data/CATEGORY_VERBIAGE';
import { CATEGORY_SHAPED_IMAGE } from '../../../data/CATEGORY_SHAPED_IMAGERY';
import { Button } from '../../../components/Button/Button';
import { GridSystem } from '../../../components/GridSystem/GridSystem';
import { ScrollingComponent } from '../../../components/ScrollingComponent/ScrollingComponent';
import { useResponsiveStateHook } from '../../../hooks/responsive-hook';
import { useResponsiveMediaStateHook } from '../../../hooks/responsive-hook';
import { stepUpChartLinks } from '../../../utils/link-helper';
import { LinkComponent } from '../../../components/Links/LinkComponent';
import { sortProductsByMsrp } from '../../../utils/category-helper';
import { sortProductsByTitle } from '../../../utils/category-helper';
import { sortProductsByMsrpAndTitle } from '../../../utils/category-helper';
import { AnimatedImage, AnimatedTitle } from '../../../hooks/use-framer-motion';
import { ApplianceCategorySkeletonComponent } from './ApplianceCategoriesSkeleton';

import NotFoundPage from '../Error/not-found';
// import { InnerGridItem } from '../../../components/GridSystem/InnerGridItem';

import { AnimatedComponent } from '../../../hooks/use-framer-motion';
const ApplianceCategoryPage = () => {
    const { categoryId } = useParams();
     const { publicProducts } = useProductsHook();

       
 

    const { isMobile } = useResponsiveStateHook();
    const { isMediaMobile } = useResponsiveMediaStateHook();
    

   
    const normalizedCategoryId = NormalizeCategoryId(categoryId);
    const backgroundColor = isMobile ? '#F6F3EB' : '#F0ECE4'
    const filteredProducts = FilterProductsByCategoryId(publicProducts, normalizedCategoryId);
    const reducedProducts = ListProductsByCategorySubcategory(filteredProducts);
    const transformedCategoryName = capitalizeFirstLetterEachWord(normalizedCategoryId);

    const subcategories = Object.values(reducedProducts);
    // **Apply the sorting here** REPLACING SUBCATEGORIES WITH sortedSubcategories
    //  const sortedSubcategories = subcategories.map(subcategory => sortProductsByMsrp(subcategory));
    const sortedSubcategories = subcategories.map(subcategory => sortProductsByMsrpAndTitle(subcategory));

    const publicUrl = process.env.PUBLIC_URL;

    const getStepUpChartLinksByCategory = (category) => {
        return stepUpChartLinks.filter(link => link.href.includes(category));
    };

    const stepUpChartCategoryLinks = getStepUpChartLinksByCategory(normalizedCategoryId);


    const backgroundImageMap = {
        'air care': {
            image: `${publicUrl}/assets/image/backgrounds/categories/air-care/air.png`,
            backgroundPosition: 'center'
        },
        laundry: {
            image: `${publicUrl}/assets/image/backgrounds/categories/laundry/laundry.png`,
            backgroundPosition: 'center'
        },
        refrigeration: {
            image: `${publicUrl}/assets/image/backgrounds/categories/refrigerator/fridge.png`,
            backgroundPosition: 'center'
        },
        vacuums: {
            image: `${publicUrl}/assets/image/backgrounds/categories/vacuum/vac.png`,
            backgroundPosition: 'center'
        },
        signature: {
            image: `${publicUrl}/assets/image/backgrounds/categories/signature/sig.png`,
            backgroundPosition: 'center'
        },
        studio: {
            image: `${publicUrl}/assets/image/backgrounds/categories/studio/studio.png`,
            backgroundPosition: 'center'
        },
        cooking: {
            image: `${publicUrl}/assets/image/backgrounds/categories/cooking/cook.png`,
            backgroundPosition: 'center'
        },

        dishwashers: {
            image: `${publicUrl}/assets/image/backgrounds/categories/dishwasher/dish.png`,
            backgroundPosition: 'center'
        },
    }

    const backgroundImageData = backgroundImageMap[normalizedCategoryId];

    const heroStyles = isMediaMobile
        ? {} // No background image on mobile
        : {
            // backgroundImage: `url(${backgroundImageData.image})`,
            background: `url(${backgroundImageData.image})`,
            backgroundPosition: backgroundImageData.backgroundPosition,
            backgroundSize: 'cover',
        };


           // Fetch the category based on the categoryId
    const category = publicProducts.find(cat => cat.category === categoryId);

    // If the category doesn't exist, navigate to the 404 page
    if (!category) {
        return <NotFoundPage />;
    }
    return (
        <>
            {
                sortedSubcategories.length !== 0 && CATEGORY_SHAPED_IMAGE && stepUpChartCategoryLinks && CATEGORY_VERBIAGE && heroStyles ?

                    <GridSystem gridType='spread' containerBackgroundColor="#F0ECE4">

                        {
                            CATEGORY_SHAPED_IMAGE && CATEGORY_VERBIAGE &&
                            <div className={styles.heroContainer} style={heroStyles}>
                                <div className={styles.heroWrapper}>
                                    <div className={styles.heroTextWrapper}>
                                        {/* <AnimatedTitle type='slideDown' delay={0.3}> */}

                                        <div className={styles.heroTitle}>
                                            <AnimatedComponent type="bounceEffect">
                                                <PageText type='pageTitle'>{CATEGORY_VERBIAGE[normalizedCategoryId].categoryHeadline}</PageText>
                                            </AnimatedComponent>
                                            <AnimatedComponent type="wipeEffect" directionStart='left' delay={0.1}>
                                                <PageText type='bodyDescriptionLarge'>{CATEGORY_VERBIAGE[normalizedCategoryId].categorySubheadline}</PageText>
                                            </AnimatedComponent>
                                        </div>

                                        {/* </AnimatedTitle> */}
                                        {/* <div className={styles.heroDescription}>
                                    <PageText type='bodyDescriptionLarge'>{CATEGORY_VERBIAGE[normalizedCategoryId].categoryDescription1}</PageText>
                                    <PageText type='bodyDescriptionLarge'>{CATEGORY_VERBIAGE[normalizedCategoryId].categoryDescription2}</PageText>
                                </div> */}
                                        <div className={styles.dStepUpLinksContainer}>
                                            <ul>
                                                {stepUpChartCategoryLinks.map((link, index) => (
                                                    <li key={index}>

                                                        <PageText type='bodyDescriptionMedium'> See {``}
                                                            <span className={styles.dStepUpChartCalloutText}>
                                                                <LinkComponent href={link.href}>{link.text}</LinkComponent>
                                                            </span>
                                                        </PageText>

                                                    </li>
                                                ))}
                                            </ul>

                                        </div>
                                    </div>
                                    <div className={styles.heroImageWrapper}>
                                        <div className={styles.mobileImageGroup}>
                                            <AnimatedTitle type='fade' delay={0.5}>
                                                <div className={styles.image1}>
                                                    <img
                                                        src={CATEGORY_SHAPED_IMAGE[normalizedCategoryId].imageShape1}
                                                        alt={`${CATEGORY_SHAPED_IMAGE[normalizedCategoryId]} image shapes`}
                                                        loading='lazy'
                                                    />
                                                </div>
                                            </AnimatedTitle>
                                            <AnimatedTitle type='blurFadeIn' delay={1.5}>
                                                <div className={styles.image2}>
                                                    <img
                                                        src={CATEGORY_SHAPED_IMAGE[normalizedCategoryId].imageShape2}
                                                        alt={`${CATEGORY_SHAPED_IMAGE[normalizedCategoryId]} image shapes`}
                                                        loading='lazy'
                                                    />
                                                </div>
                                            </AnimatedTitle>
                                        </div>
                                        {/* <AnimatedTitle   type='slideIn' delay={2}> */}
                                        <div className={styles.image3}>
                                            <AnimatedImage
                                                type="wipeEffect" directionStart='left' delay={1}
                                                // type='slideIn' delay={1.5}
                                                src={CATEGORY_SHAPED_IMAGE[normalizedCategoryId].imageShape3}
                                                alt={`${CATEGORY_SHAPED_IMAGE[normalizedCategoryId]} image shapes`}
                                            />
                                            {/* <img
                                                src={CATEGORY_SHAPED_IMAGE[normalizedCategoryId].imageShape3}
                                                alt={`${CATEGORY_SHAPED_IMAGE[normalizedCategoryId]} image shapes`}
                                                loading='lazy'
                                            /> */}
                                        </div>
                                        {/* </AnimatedTitle> */}
                                    </div>
                                    <div className={styles.mStepUpLinksContainer}>
                                        <ul>
                                            {stepUpChartCategoryLinks.map((link, index) => (
                                                <li key={index}>
                                                    <PageText type='bodyDescriptionMedium'> See {``}
                                                        <span className={styles.stepUpChartCalloutText}>
                                                            <LinkComponent href={link.href}>{link.text}</LinkComponent>
                                                        </span>
                                                    </PageText>

                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        }

                    </GridSystem>
                    : <ApplianceCategorySkeletonComponent />

            }

            <section className={styles.productsContainer}>
                {/* <ScrollingComponent processedProducts={subcategories} /> */}
                <ScrollingComponent processedProducts={sortedSubcategories} />
            </section>

        </>
    );
};

export default ApplianceCategoryPage;