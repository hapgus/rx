
import styles from './ApplianceCategories.module.css';
import { PageText } from "../../../components/Text/Text";
import { Button } from "../../../components/Button/Button";
import { useProductsHook } from "../../../hooks/product-hook";
import { GridSystem } from "../../../components/GridSystem/GridSystem";
import { ListProductsByCategorySubcategory } from "../../../utils/category-helper";
import { CategoriesComponent } from "../../../components/CategoriesComponent/CategoriesComponent";
import { ApplianceCategoriesSkeletonComponent } from './ApplianceCategoriesSkeleton';
import { AnimatedTitle, AnimatedComponent, AnimatedImage } from '../../../hooks/use-framer-motion';

const ApplianceCategories = () => {

    const { publicProducts } = useProductsHook();
    const categorizedProducts = ListProductsByCategorySubcategory(publicProducts);

    const scrollToPosition = () => {
        window.scrollBy({
            top: 500, // Scroll down by 500 pixels
            behavior: 'smooth' // Smooth scrolling
        });
    };

    return (
        <>
            <div>
                <GridSystem gridType="spread">
                    <div className={styles.heroContainer}>
                        <div className={styles.heroTextWrapper}>
                            {/* <PageText type="pageTitle">America's Most Reliable Line of Home Appliances</PageText> */}
                            {/* <PageText type="pageTertiaryTitle">Change the way you think, and the way you live</PageText> */}

                            <div className={styles.heroTitle}>
                                <AnimatedComponent type="bounceEffect">
                                    <PageText type="pageTitle">Innovation that elevates your home</PageText>
                                </AnimatedComponent>
                            </div>

                            <div className={styles.heroSubtitle}>
                                <AnimatedComponent type="wipeEffect" directionStart='left' delay={0.1}>
                                    <PageText type="pageSubtitle">Discover a smarter, more stylish way to live</PageText>
                                </AnimatedComponent>
                            </div>

                            {/* <PageText type="bodyDescriptionLarge">Step into a world where cutting-edge technology meets elegant design. From intuitive kitchen appliances that make cooking a breeze to advanced laundry solutions that care for your clothes, LG brings you a range of home appliances engineered for the way you live today. Experience the perfect blend of form and function, crafted to elevate every moment at home.</PageText> */}

                            <div className={styles.heroDescription}>
                                {/* <AnimatedComponent type="wipeEffect" directionStart='left' delay={0.3}> */}
                                    <PageText type="bodyDescriptionLarge">
                                        LG brings you a range of home appliances engineered for the way you live today.
                                        <span className={styles.headerDescriptionLong}> Experience the perfect blend of form and function, crafted to elevate every moment at home.</span>
                                    </PageText>
                                {/* </AnimatedComponent> */}
                            </div>


                            <div className={styles.heroButtonWrapper}>
                                <Button onClick={scrollToPosition} buttonStyleType="primaryAction">Explore</Button>
                            </div>
                        </div>
                        <div className={styles.heroImageWrapper}>
                            <div className={styles.image0}>
                                <AnimatedImage
                                    type="wipeEffect" directionStart='left' delay={.3}
                                    // type='slideIn' delay={1.5}
                                    src={`/assets/image/backgrounds/categories/full-set.png`}
                                    alt={`Category appliance hero`}
                                />
                                {/* <img loading='lazy' src={`/assets/image/backgrounds/categories/full-set.png`} /> */}
                            </div>
                            <div className={styles.image1}>
                                <AnimatedImage
                                    type="wipeEffect" directionStart='left' delay={.5}
                                    // type='slideIn' delay={1.5}
                                    src={`/assets/image/backgrounds/categories/cooking-shape.webp`}
                                    alt={`Category appliance hero`}
                                />
                                {/* <img loading='lazy' src={`/assets/image/backgrounds/categories/cooking-shape.webp`} /> */}
                            </div>
                            <div className={styles.image2}>
                                <AnimatedImage
                                    type="wipeEffect" directionStart='left' delay={.7}
                                    // type='slideIn' delay={1.5}
                                    src={`/assets/image/backgrounds/categories/air-care-shape.webp`}
                                    alt={`Category appliance hero`}
                                />
                                {/* <img loading='lazy' src={`/assets/image/backgrounds/categories/air-care-shape.webp`} /> */}
                            </div>
                            <div className={styles.image3}>
                                <AnimatedImage
                                    type="wipeEffect" directionStart='left' delay={.8}
                                    // type='slideIn' delay={1.5}
                                    src={`/assets/image/backgrounds/categories/cat-shape-3.webp`}
                                    alt={`Category appliance hero fridge`}
                                />
                                {/* <img loading='lazy' src={`/assets/image/backgrounds/categories/cat-shape-3.webp`} /> */}
                            </div>
                            <div className={styles.image4}>
                            <AnimatedImage
                                    type="wipeEffect" directionStart='left' delay={.9}
                                    // type='slideIn' delay={1.5}
                                    src={`/assets/image/backgrounds/categories/laundry-shape-5.webp`}
                                    alt={`Category appliance hero laundry`}
                                />
                                {/* <img loading='lazy' src={`/assets/image/backgrounds/categories/laundry-shape-5.webp`} /> */}
                            </div>
                        </div>
                    </div>
                    <div className={styles.heroButtonWrapperMobile}>
                        <Button onClick={scrollToPosition} buttonStyleType="primaryAction">Explore</Button>
                    </div>
                </GridSystem>
            </div>
            {
                categorizedProducts.length !== 0 && publicProducts.length !== 0
                    ?
                    <div className={styles.categoriesComponentWrapper}>
                        <CategoriesComponent products={categorizedProducts} />
                    </div>
                    : <ApplianceCategoriesSkeletonComponent />
            }
        </>
    );
};

export default ApplianceCategories;