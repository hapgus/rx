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
    return (
        <>
            {
                CATEGORY_SHAPED_IMAGE && CATEGORY_VERBIAGE &&
                <div
                // className={styles.heroContainer}
                // style={{ backgroundColor: backgroundColor }}
                >
                    <GridSystem>
                    <div className={styles.hero}
                    
                    style={{
                        backgroundImage: `url(${backgroundImageData.image})`,
                        backgroundPosition: backgroundImageData.backgroundPosition,
                        backgroundSize: 'cover',  // or any other styles you want to apply
                    }}
                    >

                        <div className={styles.text}>
                            <PageText type='pageTitle'>{CATEGORY_VERBIAGE[normalizedCategoryId].categoryHeadline}</PageText>
                            <PageText type='pageSubtitle'>{CATEGORY_VERBIAGE[normalizedCategoryId].categorySubheadline}</PageText>
                            <PageText type='bodyDescriptionLarge'>{CATEGORY_VERBIAGE[normalizedCategoryId].categoryDescription}</PageText>

                        </div>
                        {/* <div className={styles.pImg1}>
                            <div className={styles.shape1}>
                                <img
                                    src={CATEGORY_SHAPED_IMAGE[normalizedCategoryId].imageShape1}
                                    alt={`${CATEGORY_SHAPED_IMAGE[normalizedCategoryId]} image shapes`}
                                    loading='lazy'
                                />
                            </div>
                        </div> */}
                        {/* <div className={styles.pImg2}>
                            <div className={styles.shape2}>
                                <img
                                    src={`${publicUrl}/assets/image/backgrounds/main/air-group.png`}
                                    alt={`${CATEGORY_SHAPED_IMAGE[normalizedCategoryId]} image shapes`}
                                    loading='lazy'
                                />
                            </div>
                        </div> */}
                        {/* <div className={styles.pImgBox}> </div> */}



                        {/* <div className={styles.blurImg}></div> */}

                    </div></GridSystem>
                    {/* <div className={styles.heroTextWrapper}>
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

                        </div> */}
                </div>
                
            }
            <GridSystem containerBackgroundColor='#F6F3EB'>
                {/* {
                    CATEGORY_SHAPED_IMAGE && CATEGORY_VERBIAGE &&
                    <div className={styles.heroContainer}
                        style={{
                            backgroundColor: backgroundColor
                        }}
                    >
                        <div className={styles.hero}>

                            <div className={styles.text}>
                                <PageText type='pageTitle'>{CATEGORY_VERBIAGE[normalizedCategoryId].categoryHeadline}</PageText>
                                <PageText type='pageSubtitle'>{CATEGORY_VERBIAGE[normalizedCategoryId].categorySubheadline}</PageText>
                                <PageText type='bodyDescriptionLarge'>{CATEGORY_VERBIAGE[normalizedCategoryId].categoryDescription}</PageText>

                            </div>
                            <div className={styles.pImgBox}>
                                <div className={styles.pImg}></div>

                            </div>
                            <div className={styles.blurImg}></div>

                        </div>
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
                } */}
            </GridSystem>
            <section className={styles.productsContainer}>
                <ScrollingComponent processedProducts={subcategories} />
            </section>

        </>
    );
};

export default ApplianceCategoryPage;