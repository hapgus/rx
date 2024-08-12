import { useProductsHook } from "../../hooks/product-hook";

import { GetCategoryVerbiage } from "../../utils/category-helper";
import { ProductCategoryCard } from "../ProductCards/ProductCategoryCard/ProductCategoryCard";
import { capitalizeFirstLetterEachWord } from "../../utils/text-help";
import { NormalizeSlugs } from "../../utils/link-helper";

import { PageText } from "../Text/Text";
import styles from './CategoriesComponent.module.css'
import { LinkComponent } from "../Links/LinkComponent";
import { GridSystem } from "../GridSystem/GridSystem";
export const CategoriesComponent = ({ products }) => {
    const { publicProducts } = useProductsHook();

    // const categorizedProducts = ListProductsByCategorySubcategory(publicProducts);

    const subcategoryProductImageMap = {
        signature: {
            laundry: '/assets/image/products/WM9500HKA.webp',
            accessories: '/assets/image/products/WD205CK.webp',
            cooking: '/assets/image/products/LUTD4919SN.webp',
            refrigeration: '/assets/image/products/URETC1408N.webp',
            dishwasher: '/assets/image/products/LUDP8908SN.webp',
        },
        studio: {
            laundry: '/assets/image/products/SWWE50N3 SWWG50N3.webp',
            stylers: '/assets/image/products/S5MSB.webp',
            cooking: '/assets/image/products/WCES6428F.webp',
            refrigeration: '/assets/image/products/SRFVC2416S.webp',
            dishwasher: '/assets/image/products/SDWD24P3.webp'
        },
        vacuums: {
            vacuum: '/assets/image/products/A925KSM.webp',
        },
        refrigeration: {
            'french door': '/assets/image/products/LRYKC2606_.webp',
            'side-by-side': '/assets/image/products/LRSOS2706_.webp',
            'top and bottom freezer': '/assets/image/products/LBNC15231V.webp',
            'single door': '/assets/image/products/LRONC0605V.webp'
        },
        laundry: {
            'all-in-one': '/assets/image/products/WM3555H_A.webp',
            washers: '/assets/image/products/WT8600CB.webp',
            dryers: '/assets/image/products/DLHC1455W.webp',
            washtowers: '/assets/image/products/WKHC252H_A.webp',
            accessories: '/assets/image/products/WD200CB.webp',
            stylers: '/assets/image/products/S5WBC.webp',
        },
        cooking: {
            ranges: '/assets/image/products/LRGL5823_.webp',
            'built-in': '/assets/image/products/CBGJ3027S.webp',
            microwaves: '/assets/image/products/MVEL2137_.webp',
        },
        'air care': {
            'air care': '/assets/image/products/AS560DWR0.webp',
        },
        dishwashers: {
            dishwasher: '/assets/image/products/WM9500HKA.webp',
        }

    }

    return Object.entries(products).map(([category, subcategories], categoryIndex) => {

        const verbiage = GetCategoryVerbiage(category);
        return (
            <div key={`category-${categoryIndex}`} className={styles.categoryCardsContainer}>
                <GridSystem>
                    <div className={styles.categorySectionHeaderWrapper}>
                        <div className={styles.categoryTitleWrapper}>
                            <LinkComponent href={`${NormalizeSlugs(category)}`}>
                                <PageText type="pageSubtitle">{capitalizeFirstLetterEachWord(category)}</PageText>
                            </LinkComponent>
                            <PageText type="pageTitle">{verbiage.allCategoriesHeadline}</PageText>
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
                </GridSystem>
                <GridSystem>
                    <div className={styles.categoryCardsWrapper}>
                        {Object.entries(subcategories).map(([subcategory, subcategoryIndex]) => (

                            <ProductCategoryCard
                                key={`subcategory-${category}-${subcategory}-${subcategoryIndex}`}
                                subcategory={capitalizeFirstLetterEachWord(subcategory)}
                                hashLinkPath={`${category}#${NormalizeSlugs(subcategory)}`}
                                subcategoryImagePath={subcategoryProductImageMap[category][subcategory]}
                            />
                        ))}
                    </div>
                </GridSystem>
            </div>
        );
    });
}