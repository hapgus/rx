import { Button } from "../../../components/Button/Button";
import { GridSystem } from "../../../components/GridSystem/GridSystem";
import { PageText } from "../../../components/Text/Text";
import { useProductsHook } from "../../../hooks/product-hook";
import { ListProductsByCategorySubcategory } from "../../../utils/category-helper";
import styles from './ApplianceCategories.module.css'
import { CategoriesComponent } from "../../../components/CategoriesComponent/CategoriesComponent";

const SvgShape = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="495" height="701" viewBox="0 0 495 701" fill="none">
        <path d="M132.66 74.5679C148.101 41.0946 179.907 14.129 215.666 4.19201C257.3 -7.37867 304.57 5.46114 336.642 37.0543C399.258 98.7421 380.652 204.238 300.522 241.857C283.615 249.792 277.281 250.835 246.002 250.835C212.164 250.835 209.686 250.332 189.537 239.393C163.937 225.49 143.925 204.454 131.939 178.856C124.203 162.327 122.973 155.303 122.973 127.635C122.973 99.4408 124.143 93.0344 132.66 74.5679Z" fill="#F6F3EB" />
        <path d="M5.16223 266.807C12.0822 250.221 22.3121 239.518 38.7069 231.71C60.3633 221.399 81.8579 224.656 113.481 243.045C179.998 281.726 245.715 291.336 314.052 272.37C335.513 266.416 357.698 256.165 397.367 233.867C433.767 213.413 481.434 233.26 492.214 273.355C494.674 282.499 495.51 323.597 494.701 395.56C493.508 501.545 493.286 504.57 484.792 529.865C470.999 570.926 453.627 598.87 423.234 628.873C374.275 677.202 327.126 697.795 258.942 700.623C208.864 702.702 178.252 696.441 134.77 675.234C107.741 662.05 97.9763 654.854 72.1269 629.056C46.338 603.319 39.0103 593.436 25.7063 566.43C2.0646 518.442 0.0725518 504.239 0.0017682 383.209C-0.0454208 296.969 0.830948 277.183 5.16223 266.807Z" fill="#F6F3EB" />
    </svg>
);

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
                            <div className={styles.heroTextShapeObject}>
                                <div className={styles.svgShape}>
                                    <div className={styles.theSvg}>
                                        <SvgShape />

                                    </div>
                                    <div className={styles.ratedImageWrapper}>
                                        <img src={`${publicUrl}//assets/image/backgrounds/main/ratedBadge.png`} />
                                    </div>
                                    <div className={styles.heroTitleWrapper}>
                                        <PageText type="pageTitle">Innovation for any space</PageText>
                                        <PageText type="pageTertiaryTitle">Change the way you think, and the way you live</PageText>
                                        <div className={styles.heroButtonWrapper}>
                                            <Button buttonStyleType="secondary">Explore Home Appliances</Button>
                                        </div>
                                    </div>

                                </div>

                            </div>
                            {/* <div className={styles.heroButtonWrapper}>
                                <Button buttonStyleType="primaryAction">Explore</Button>
                            </div> */}
                        </div>

                        {/* <div className={styles.heroImageWrapper}>
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
                        </div> */}
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