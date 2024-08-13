import { Button } from "../../../components/Button/Button";
import { GridSystem } from "../../../components/GridSystem/GridSystem";
import { PageText } from "../../../components/Text/Text";
import { useProductsHook } from "../../../hooks/product-hook";
import { ListProductsByCategorySubcategory } from "../../../utils/category-helper";
import styles from './ApplianceCategories.module.css'
import { CategoriesComponent } from "../../../components/CategoriesComponent/CategoriesComponent";

const ApplianceCategories = () => {

    const { publicProducts } = useProductsHook();
    const categorizedProducts = ListProductsByCategorySubcategory(publicProducts);
    const publicUrl = process.env.PUBLIC_URL;
    return (
        <>
            <div>
                <GridSystem gridType="spread">
                    <div className={styles.heroContainer}>
                        <div className={styles.heroTextWrapper}>
                            {/* <PageText type="pageTitle">America's Most Reliable Line of Home Appliances</PageText> */}
                            {/* <PageText type="pageTertiaryTitle">Change the way you think, and the way you live</PageText> */}
                            <div className={styles.heroTitle}>
                                <PageText type="pageTitle">Innovation that elevates your home</PageText>
                            </div>
                            <div className={styles.heroSubtitle}>
                                <PageText type="pageSubtitle">Discover a smarter, more stylish way to live</PageText>
                            </div>

                            {/* <PageText type="bodyDescriptionLarge">Step into a world where cutting-edge technology meets elegant design. From intuitive kitchen appliances that make cooking a breeze to advanced laundry solutions that care for your clothes, LG brings you a range of home appliances engineered for the way you live today. Experience the perfect blend of form and function, crafted to elevate every moment at home.</PageText> */}
                            <div className={styles.heroDescription}>
                                <PageText  type="bodyDescriptionLarge">
                                    LG brings you a range of home appliances engineered for the way you live today.
                                    <span className={styles.headerDescriptionLong}> Experience the perfect blend of form and function, crafted to elevate every moment at home.</span>
                                </PageText>
                            </div>

                            <div className={styles.heroButtonWrapper}>
                                <Button buttonStyleType="primaryAction">Explore</Button>
                            </div>
                        </div>
                        <div className={styles.heroImageWrapper}>
                            <div className={styles.image0}>
                                <img loading='lazy' src={`${publicUrl}/assets/image/backgrounds/categories/full-set.png`} />
                            </div>
                            <div className={styles.image1}>
                                <img loading='lazy' src={`${publicUrl}/assets/image/backgrounds/categories/cooking-shape.webp`} />
                            </div>
                            <div className={styles.image2}>
                                <img loading='lazy' src={`${publicUrl}/assets/image/backgrounds/categories/air-care-shape.webp`} />
                            </div>
                            <div className={styles.image3}>
                                <img loading='lazy' src={`${publicUrl}/assets/image/backgrounds/categories/cat-shape-3.webp`} />
                            </div>
                            <div className={styles.image4}>

                                <img loading='lazy' src={`${publicUrl}/assets/image/backgrounds/categories/laundry-shape-5.webp`} />
                            </div>
                        </div>
                    </div>
                    <div className={styles.heroButtonWrapperMobile}>
                        <Button buttonStyleType="primaryAction">Explore</Button>
                    </div>
                </GridSystem>
            </div>
            <div className={styles.categoriesComponentWrapper}>
                <CategoriesComponent products={categorizedProducts} />
            </div>
        </>
    );
};

export default ApplianceCategories;