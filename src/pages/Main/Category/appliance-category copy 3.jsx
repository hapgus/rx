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
import { AnimatedTitle } from '../../../hooks/use-framer-motion';
// import { InnerGridItem } from '../../../components/GridSystem/InnerGridItem';


const ApplianceCategoryPage = () => {
    const { isMobile } = useResponsiveStateHook();
    const { isMediaMobile } = useResponsiveMediaStateHook();
    const { categoryId } = useParams();

    const { publicProducts } = useProductsHook();
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
    return (
        <>
            <GridSystem
                gridType='spread'
            >

                {
                    CATEGORY_SHAPED_IMAGE && CATEGORY_VERBIAGE &&
                    <div className={styles.heroContainer} style={heroStyles}>
                        <div className={styles.heroWrapper}>
                            <div className={styles.heroTextWrapper}>
                                <AnimatedTitle type='slideDown' delay={0.1}>
                                <div className={styles.heroTitle}>
                                    
                                    <PageText type='pageTitle'>{CATEGORY_VERBIAGE[normalizedCategoryId].categoryHeadline}</PageText>
                                    <PageText type='bodyDescriptionLarge'>{CATEGORY_VERBIAGE[normalizedCategoryId].categorySubheadline}</PageText>
                                </div>
                                </AnimatedTitle>
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
                                            {/* <LinkComponent href={link.href}>
                                                    <Button buttonStyleType='primaryAction'>{link.text}</Button>
                                                </LinkComponent> */}
                                        </li>
                                    ))}
                                </ul>
                                    {/* <ul>
                                        {stepUpChartCategoryLinks.map((link, index) => (
                                            <li key={index}>
                                                <LinkComponent href={link.href}>
                                                    <Button buttonStyleType='primaryAction'>{link.text}</Button>
                                                </LinkComponent>
                                            </li>
                                        ))}
                                    </ul> */}
                                </div>
                            </div>
                            <div className={styles.heroImageWrapper}>
                                <div className={styles.mobileImageGroup}>

                                    <div className={styles.image1}>
                                        <img
                                            src={CATEGORY_SHAPED_IMAGE[normalizedCategoryId].imageShape1}
                                            alt={`${CATEGORY_SHAPED_IMAGE[normalizedCategoryId]} image shapes`}
                                            loading='lazy'
                                        />
                                    </div>
                                 
                                    <div className={styles.image2}>
                                        <img
                                            src={CATEGORY_SHAPED_IMAGE[normalizedCategoryId].imageShape2}
                                            alt={`${CATEGORY_SHAPED_IMAGE[normalizedCategoryId]} image shapes`}
                                            loading='lazy'
                                        />
                                    </div>
                                </div>
                                <div className={styles.image3}>
                                    <img
                                        src={CATEGORY_SHAPED_IMAGE[normalizedCategoryId].imageShape3}
                                        alt={`${CATEGORY_SHAPED_IMAGE[normalizedCategoryId]} image shapes`}
                                        loading='lazy'
                                    />
                                </div>
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
                                            {/* <LinkComponent href={link.href}>
                                                    <Button buttonStyleType='primaryAction'>{link.text}</Button>
                                                </LinkComponent> */}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                }

            </GridSystem>
            <section className={styles.productsContainer}>
                {/* <ScrollingComponent processedProducts={subcategories} /> */}
                <ScrollingComponent processedProducts={sortedSubcategories} />
            </section>

        </>
    );
};

export default ApplianceCategoryPage;