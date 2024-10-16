import styles from './ApplianceCategory.module.css';
import { useProductsHook } from '../../../hooks/use-product-hooks';
import { useParams } from 'react-router';
import { PageText } from '../../../components/Text/Text';
import { FilterProductsByCategoryId, ListProductsByCategorySubcategory, NormalizeCategoryId,  NormalizeSlugs, sortProductsByMsrpAndTitle} from '../../../utils/helper-functions'


import { CATEGORY_VERBIAGE } from '../../../data/CATEGORY_VERBIAGE';
import { CATEGORY_SHAPED_IMAGE } from '../../../data/CATEGORY_SHAPED_IMAGERY';

import { GridSystem } from '../../../components/GridSystem/GridSystem';

import { ScrollingComponent } from '../../../components/ScrollingComponent/ScrollContainer/ScrollingComponent';

import { useResponsiveMediaStateHook } from '../../../hooks/responsive-hook';

import { LinkComponent } from '../../../components/Links/LinkComponent';


import { useAnimation, AnimatedImage } from '../../../hooks/use-framer-motion';
import { ApplianceCategorySkeletonComponent } from './ApplianceCategoriesSkeleton';
import NotFoundPage from '../Error/not-found';
import { motion } from 'framer-motion';
// import { InnerGridItem } from '../../../components/GridSystem/InnerGridItem';

import { AnimatedComponent } from '../../../hooks/use-framer-motion';
import { IconComponent } from '../../../components/Icon/IconComponent';

import { useLinkConfig } from '../../../hooks/use-link-config-hooks';

import { VALID_CATEGORIES, SUBCATEGORY_NAMING_MAP, CATEGORY_SUBCATEGORY_ORDER } from '../../../hooks/use-category-config';




const ApplianceCategoryPage = () => {
 
    const { isMediaMobile } = useResponsiveMediaStateHook();
    const { categoryId } = useParams();

    const arrowBounceAnimation = useAnimation('bounceRightLoop');
    const { publicProducts } = useProductsHook();
    const normalizedCategoryId = NormalizeCategoryId(categoryId);
    const generateNormalizedSlug = NormalizeSlugs(normalizedCategoryId)
    const {stepUpChartLinks}=useLinkConfig()

   
    // Check against the static list of valid categories before product data
    // if (!VALID_CATEGORIES.includes(normalizedCategoryId)) {
    if (!VALID_CATEGORIES.includes(generateNormalizedSlug)) {
        return <NotFoundPage />;
    }

    const filteredProducts = FilterProductsByCategoryId(publicProducts, normalizedCategoryId);
    const reducedProducts = ListProductsByCategorySubcategory(filteredProducts);
    // const transformedCategoryName = capitalizeFirstLetterEachWord(normalizedCategoryId);
    const subcategories = Object.values(reducedProducts);
   
    const sortedSubcategories = subcategories.map(subcategory => sortProductsByMsrpAndTitle(subcategory));

    const publicUrl = process.env.PUBLIC_URL;

    const getStepUpChartLinksByCategory = (category) => {
        return stepUpChartLinks.filter(link => link.href.includes(category));
    };

    const stepUpChartCategoryLinks = getStepUpChartLinksByCategory(normalizedCategoryId);

    const backgroundImageMap = {
        'air care': {
            image: `${publicUrl}/assets/image/backgrounds/categories/air-care/air.webp`,
            backgroundPosition: 'center'
        },
        laundry: {
            image: `${publicUrl}/assets/image/backgrounds/categories/laundry/laundry.webp`,
            backgroundPosition: 'center'
        },
        refrigeration: {
            image: `${publicUrl}/assets/image/backgrounds/categories/refrigerator/fridge.webp`,
            backgroundPosition: 'center'
        },
        vacuums: {
            image: `${publicUrl}/assets/image/backgrounds/categories/vacuum/vac.webp`,
            backgroundPosition: 'center'
        },
        signature: {
            image: `${publicUrl}/assets/image/backgrounds/categories/signature/sig.webp`,
            backgroundPosition: 'center'
        },
        studio: {
            image: `${publicUrl}/assets/image/backgrounds/categories/studio/studio.webp`,
            backgroundPosition: 'center'
        },
        cooking: {
            image: `${publicUrl}/assets/image/backgrounds/categories/cooking/cook.webp`,
            backgroundPosition: 'center'
        },

        dishwashers: {
            image: `${publicUrl}/assets/image/backgrounds/categories/dishwasher/dish.webp`,
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

    // Create an array to store transformed and sorted subcategories
    const transformedSubcategories = sortedSubcategories.map(subcategory => {
        // Extract the subcategory names before transforming them
        const originalSubcategoryNames = Object.keys(subcategory);
    
        // Retrieve the order for the current category from CATEGORY_SUBCATEGORY_ORDER
        const order = CATEGORY_SUBCATEGORY_ORDER[normalizedCategoryId] || [];
    
        // Sort the subcategories based on the order before transforming
        const orderedSubcategories = originalSubcategoryNames.sort((a, b) => {
            // Use the index in the order array to determine sorting
            const indexA = order.indexOf(a);
            const indexB = order.indexOf(b);
    
            // If the index is not found, default to the end of the list
            return (indexA !== -1 ? indexA : order.length) - (indexB !== -1 ? indexB : order.length);
        });
    
        // Create the transformed object in the correct order
        const transformed = {};
        orderedSubcategories.forEach(subcategoryName => {
            const updatedName = SUBCATEGORY_NAMING_MAP[subcategoryName] || subcategoryName;
            transformed[updatedName] = subcategory[subcategoryName];
        });
    
        return transformed;
    });
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
                                                <PageText type='heroTitle'>{CATEGORY_VERBIAGE[normalizedCategoryId].categoryHeadline}</PageText>
                                            </AnimatedComponent>
                                            <AnimatedComponent type="wipeEffect" directionStart='left' delay={0.1}>
                                                <PageText type='heroDescription'>{CATEGORY_VERBIAGE[normalizedCategoryId].categorySubheadline}</PageText>
                                            </AnimatedComponent>
                                        </div>

                                        {/* </AnimatedTitle> */}
                                        {/* <div className={styles.heroDescription}>
                                    <PageText type='bodyDescriptionLarge'>{CATEGORY_VERBIAGE[normalizedCategoryId].categoryDescription1}</PageText>
                                    <PageText type='bodyDescriptionLarge'>{CATEGORY_VERBIAGE[normalizedCategoryId].categoryDescription2}</PageText>
                                </div> */}
                                        <div className={styles.dStepUpLinksContainer}>
                                            <ul className={styles.list}>
                                                {stepUpChartCategoryLinks.map((link, index) => (
                                                    <motion.li
                                                        whileHover="whileHover"  // Trigger hover animation on the entire li
                                                        key={index} className={styles.stepUpChartLinkGroupWrapper}>

                                                        {/* <PageText type='heroDescription'>See </PageText> */}

                                                        <LinkComponent href={link.href}>
                                                            <div className={styles.stepUpChartInnerLinkDivWrapper}>
                                                                <div className={styles.dStepUpChartCalloutText}>

                                                                    <PageText type='heroDescription'>{link.text}</PageText>
                                                                </div>
                                                                <motion.div
                                                                    {...arrowBounceAnimation}
                                                                    className={styles.dStepUpChartCalloutIcon} >
                                                                    <IconComponent iconType="whiteRightArrow" />
                                                                </motion.div>
                                                            </div>
                                                        </LinkComponent>



                                                    </motion.li>
                                                ))}
                                            </ul>

                                        </div>
                                    </div>
                                    <div className={styles.heroImageWrapper}>
                                        <div className={styles.mobileImageGroup}>

                                            <div className={styles.image1}>
                                                <AnimatedImage
                                                    type="wipeEffect" directionStart='left' delay={.3}
                                                    // type='slideIn' delay={1.5}
                                                    src={CATEGORY_SHAPED_IMAGE[normalizedCategoryId].imageShape1}
                                                    alt={`${CATEGORY_SHAPED_IMAGE[normalizedCategoryId]} image shapes`}
                                                />

                                            </div>
                                            <div className={styles.image2}>
                                                <AnimatedImage
                                                    type="wipeEffect" directionStart='left' delay={.2}
                                                    // type='slideIn' delay={1.5}
                                                    src={CATEGORY_SHAPED_IMAGE[normalizedCategoryId].imageShape2}
                                                    alt={`${CATEGORY_SHAPED_IMAGE[normalizedCategoryId]} image shapes`}
                                                />

                                            </div>

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
                <ScrollingComponent processedProducts={transformedSubcategories} />
            </section>

        </>
    );
};

export default ApplianceCategoryPage;