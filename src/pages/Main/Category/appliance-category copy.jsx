import styles from './ApplianceCategory.module.css';
import { useProductsHook } from '../../../hooks/product-hook';
import { useParams } from 'react-router';
import { PageText } from '../../../components/Text/Text';
import { FilterProductsByCategoryId, ListProductsByCategorySubcategory, NormalizeCategoryId } from '../../../utils/category-helper';
import { capitalizeFirstLetterEachWord } from '../../../utils/text-help';
// import { CATEGORY_VERBIAGE, CATEGORY_IMAGERY } from '../../../data/VERBIAGE_DATA';
import { CATEGORY_VERBIAGE } from '../../../data/CATEGORY_VERBIAGE';
import { CATEGORY_SHAPED_IMAGE } from '../../../data/CATEGORY_SHAPED_IMAGERY';
import { Button } from '../../../components/Button/Button';
import { GridSystem } from '../../../components/GridSystem/GridSystem';
import { ScrollingComponent } from '../../../components/ScrollingComponent/ScrollingComponent';
import { useResponsiveStateHook } from '../../../hooks/responsive-hook';
const ApplianceCategoryPage = () => {
    const { isMobile } = useResponsiveStateHook();
    const { categoryId } = useParams();

    const { publicProducts } = useProductsHook();
    const normalizedCategoryId = NormalizeCategoryId(categoryId);
    const backgroundColor = isMobile ? '#F6F3EB' : '#F0ECE4'
    const filteredProducts = FilterProductsByCategoryId(publicProducts, normalizedCategoryId);
    const reducedProducts = ListProductsByCategorySubcategory(filteredProducts);
    const transformedCategoryName = capitalizeFirstLetterEachWord(normalizedCategoryId);

    const subcategories = Object.values(reducedProducts);
    const publicUrl = process.env.PUBLIC_URL;
    const backgroundImageMap = {
        'air care': {
            image: '/assets/image/backgrounds/air-care/air-care-01.webp',
            backgroundPosition: 'center'
        },
        laundry: {
            image: '/assets/image/backgrounds/laundry/dryer/dryer-01.webp',
            backgroundPosition: 'center'
        },
        refrigeration: {
            image: '/assets/image/backgrounds/refrigerator/top-bottom-freezer/top-bottom-freezer-01.webp',
            backgroundPosition: 'center'
        },
        vacuums: {
            image: '/assets/image/backgrounds/vacuum/vacuum-01.webp',
            backgroundPosition: 'center'
        },
        signature: {
            image: '/assets/image/backgrounds/signature/signature-kitchen-02.webp',
            backgroundPosition: 'center'
        },
        studio: {
            image: '/assets/image/backgrounds/studio/studio-kitchen-02.webp',
            backgroundPosition: 'center'
        },
        cooking: {
            image: '/assets/image/backgrounds/cooking/built-in/built-in-01.webp',
            backgroundPosition: 'center'
        },
        dishwashers: {
            image: '/assets/image/backgrounds/dishwasher/dish-01.webp',
            backgroundPosition: 'center'
        },
    }

    return (
        <>
            <GridSystem containerBackgroundColor='#F6F3EB'>
                {
                    CATEGORY_SHAPED_IMAGE && CATEGORY_VERBIAGE &&
                    <div
                        style={{
                            backgroundColor: backgroundColor
                        }}
                        className={styles.heroContainer}
                    >
                        <div>
                            <div className={styles.heroTextWrapper}>
                                <PageText type='pageTitle'>{CATEGORY_VERBIAGE[normalizedCategoryId].categoryHeadline}</PageText>
                                <PageText type='pageSubtitle'>{CATEGORY_VERBIAGE[normalizedCategoryId].categorySubheadline}</PageText>
                                <PageText type='bodyDescriptionLarge'>{CATEGORY_VERBIAGE[normalizedCategoryId].categoryDescription}</PageText>
                                <div className={styles.heroButtonWrapper}>
                                    <Button buttonStyleType="primaryAction">Explore</Button>
                                </div>
                            </div>
                            <div className={styles.heroImageWrapper}>
                                <div className={styles.image0}>
                                    <img
                                        src={CATEGORY_SHAPED_IMAGE[normalizedCategoryId].imageShape1}
                                        alt={`${CATEGORY_SHAPED_IMAGE[normalizedCategoryId]} image shapes`}
                                        loading='lazy'
                                    />
                                </div>
                                <div className={styles.image1}>

                                    <img
                                        src={CATEGORY_SHAPED_IMAGE[normalizedCategoryId].imageShape2}
                                        alt={`${CATEGORY_SHAPED_IMAGE[normalizedCategoryId]} image shapes`}
                                        loading='lazy'
                                    />
                                </div>

                            </div>
                        </div>
                    </div>
                }
            </GridSystem>
            <section className={styles.productsContainer}>
                <ScrollingComponent processedProducts={subcategories} />
            </section>

        </>
    );
};

export default ApplianceCategoryPage;