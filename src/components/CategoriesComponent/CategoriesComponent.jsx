import { useProductsHook } from "../../hooks/product-hook";

import { GetCategoryVerbiage, ListProductsByCategorySubcategory } from "../../utils/category-helper";
import { ProductCategoryCard } from "../ProductCards/ProductCategoryCard/ProductCategoryCard";
import { capitalizeFirstLetterEachWord } from "../../utils/text-help";
import { NormalizeSlugs } from "../../utils/link-helper";

import { PageText } from "../Text/Text";
import styles from './CategoriesComponent.module.css'
import { LinkComponent } from "../Links/LinkComponent";
import { GridSystem } from "../GridSystem/GridSystem";
export const CategoriesComponent = ({ products }) => {
    const { publicProducts } = useProductsHook();

    const categorizedProducts = ListProductsByCategorySubcategory(publicProducts);

    const subcategoryProductImageMap = {
        signature: {
            laundry: 'WM9500HKA.webp',
            accessories: 'WD205CK.webp',
            cooking: 'LUTD4919SN.webp',
            refrigeration: 'URETC1408N.webp',
            dishwasher: 'LUDP8908SN.webp',
        },
        studio: {
            laundry: 'SWWE50N3 SWWG50N3.webp',
            stylers: 'S5MSB.webp',
            cooking: 'WCES6428F.webp',
            refrigeration: 'SRFVC2416S.webp',
            dishwasher: 'SDWD24P3.webp'
        },
        vacuums: {
            vacuum: 'A925KSM.webp',
        },
        refrigeration: {
            'french door': 'LRYKC2606_.webp',
            'side-by-side': 'LRSOS2706_.webp',
            'top and bottom freezer': 'LBNC15231V.webp',
            'single door': 'LRONC0605V.webp'
        },
        laundry: {
            'all-in-one': 'WM3555H_A.webp',
            washers: 'WT8600CB.webp',
            dryers: 'DLHC1455W.webp',
            washtowers: 'WKHC252H_A.webp',
            accessories: 'WD200CB.webp',
            stylers: 'S5WBC.webp',
        },
        cooking: {
            ranges: 'LRGL5823_.webp',
            'built-in': 'CBGJ3027S.webp',
            microwaves: 'MVEL2137_.webp',
        },
        'air care': {
            'air care': 'AS560DWR0.webp',
        },
        dishwashers: {
            dishwasher: 'WM9500HKA.webp',
        }

    }

    // return Object.entries(products).map(([category, subcategories], categoryIndex) => {


        return Object.entries(categorizedProducts).map(([category, subcategories], categoryIndex) => {
        

        const verbiage = GetCategoryVerbiage(category);
        return (
            <div key={`category-${categoryIndex}`} className={styles.categoryCardsContainer}>
                <GridSystem gridType="spread">
                    <div className={styles.contentWrapper}>
                        <div className={styles.categorySectionHeaderWrapper}>
                            <div className={styles.categoryTitleWrapper}>
                                <div className={styles.categoryTitle}>
                                    <LinkComponent href={`${NormalizeSlugs(category)}`}>
                                        <PageText type="bodyTertiaryTitle">{capitalizeFirstLetterEachWord(category)}</PageText>
                                    </LinkComponent>
                                </div>
                                <div className={styles.categoryHeadline}>
                                    <PageText type="bodyFeatureSectionTitle">{verbiage.allCategoriesHeadline}</PageText>
                                </div>
                                {/* <PageText type="pageSubtitle">{verbiage.allCategoriesSubheadline}</PageText> */}
                            </div>
                            <div className={styles.categoryDescriptionWrapper}>
                                <div className={styles.categoryDescriptionShort}>
                                    <PageText type="bodyDescriptionLarge">{verbiage.allCategoriesDescriptionShort}</PageText>
                                </div>
                                <div className={styles.categoryDescriptionLong}>
                                    <PageText type="bodyDescriptionLarge">{verbiage.allCategoriesDescriptionLong}</PageText>
                                </div>
                            </div>
                            {/* <PageText type="pageHeaderDescription">{verbiage.description1}</PageText> */}
                        </div>
                    </div>
                </GridSystem>
                <GridSystem gridType="spread">
                    <div className={styles.contentWrapper}>
                        <div className={styles.categoryCardsWrapper}>
                         
                            {Object.entries(subcategories)?.map(([subcategory, subcategoryIndex]) => (

                                <ProductCategoryCard
                                    key={`subcategory-${category}-${subcategory}-${subcategoryIndex}`}
                                    subcategory={capitalizeFirstLetterEachWord(subcategory)}
                                    hashLinkPath={`${category}#${NormalizeSlugs(subcategory)}`}
                                    subcategoryImagePath={category && subcategoryProductImageMap[category][subcategory]}
                                />
                            ))
                            }
                        </div>
                    </div>
                </GridSystem>
            </div>
        );
    });
}