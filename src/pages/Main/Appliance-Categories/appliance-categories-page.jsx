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
                <GridSystem>
                    <div className={styles.heroContainer}>
                        <div className={styles.heroTextWrapper}>
                            <PageText type="pageTitle">America's Most Reliable Line of Home Appliances</PageText>
                            <PageText type="pageTertiaryTitle">Change the way you think, and the way you live</PageText>
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
                </GridSystem>
            </div>
            <div className={styles.categoriesComponentWrapper}>
            <CategoriesComponent  products={categorizedProducts} />
        </div>
        </>
    );
};

export default ApplianceCategories;