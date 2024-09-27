import { useProductsHook } from "../../hooks/product-hook";

import { GetCategoryVerbiage, ListProductsByCategorySubcategory } from "../../utils/category-helper";
import { ProductCategoryCard } from "../ProductCards/ProductCategoryCard/ProductCategoryCard";
import { capitalizeFirstLetterEachWord } from "../../utils/text-help";
import { NormalizeSlugs } from "../../utils/link-helper";

import { PageText } from "../Text/Text";
import styles from './CategoriesComponent.module.css'
import { LinkComponent } from "../Links/LinkComponent";
import { GridSystem } from "../GridSystem/GridSystem";


const categoryTitleMap = {
    signature: 'LG SIGNATURE',
    studio: 'LG STUDIO',
    vacuums: 'Vacuums'
};

const categoryComponentStyleMap = {
    dishwashers:  styles.dishCategoryCardsWrapper,
    'air-care':  styles.singleCategoryCardsWrapper,
    vacuums: styles.singleCategoryCardsWrapper
}

const getCategoryTitle = (category) => {
    return categoryTitleMap[category] || capitalizeFirstLetterEachWord(category);
};

const getCategoryComponent = (category)=>{
    return categoryComponentStyleMap[category] || styles.categoryCardsWrapper
}

export const CategoriesComponent = () => {
    const { publicProducts } = useProductsHook();

    const categorizedProducts = ListProductsByCategorySubcategory(publicProducts);

    const CATEGORY_NAME_MAP = {
        "stylers": "LG Stylers",
        "front load washers": "Front Load Washing Machines",
        "front load dryers": "Front Load Dryers",
        "WashTower":"WashTower"
        // Add other necessary mappings here
      };
 // Transform categorizedProducts with updated subcategory names
 const transformedCategories = Object.entries(categorizedProducts).reduce((acc, [categoryName, subcategories]) => {
    // Map through subcategories and rename as necessary
    const updatedSubcategories = Object.entries(subcategories).reduce((subAcc, [subName, products]) => {
        // Use mapped name or fallback to the original
        const updatedName = CATEGORY_NAME_MAP[subName] || subName;
        return { ...subAcc, [updatedName]: products };
    }, {});

    // Add updated subcategories to the accumulated result
    acc[categoryName] = updatedSubcategories;
    return acc;
}, {});

console.log("Transformed Categories:", transformedCategories);

    const subcategoryProductImageMap = {
        signature: {
            laundry: 'WM9500HKA.webp',
            accessories: 'WD205CK.webp',
            ranges: 'LUTD4919SN.webp',
            refrigeration: 'URETC1408N.webp',
            dishwashers: 'LUDP8908SN.webp',
        },
        studio: {
            ranges: 'WCES6428F.webp',
            refrigeration: 'SRFVC2416S.webp',
            laundry: 'SWWE50N3 SWWG50N3.webp',
            dishwashers: 'SDWD24P3.webp',
            'built-in cooktops': 'WCES6428F.webp',
            'built-in wall ovens': 'WCES6428F.webp',
            'range hoods': 'WCES6428F.webp',
            microwaves: 'MVEL2137_.webp',
            stylers: 'S5MSB.webp',


        },
        vacuums: {
            vacuums: 'A925KSM.webp',
        },
        refrigeration: {
            '4-door french door': 'LRYKC2606_.webp',
            '3-door french door': 'LRYKC2606_.webp',
            "under 33\" french door": 'LRYKC2606_.webp',

            'side-by-side': 'LRSOS2706_.webp',
            'bottom and top freezer': 'LBNC15231V.webp',
            'single door': 'LRONC0605V.webp'
        },
        laundry: {
            'all-in-one': 'WM3555H_A.webp',
            washers: 'WT8600CB.webp',
            dryers: 'DLHC1455W.webp',
            washtower: 'WKHC252H_A.webp',
            accessories: 'WD200CB.webp',
            'specialty laundry': 'WD200CB.webp',
            'front load washers': 'WD200CB.webp',
            'top load washers': 'WD200CB.webp',
            'front load dryers': 'WD200CB.webp',
            'top load dryers': 'WD200CB.webp',
            stylers: 'S5WBC.webp',
        },
        cooking: {

            'induction ranges': 'LSIL6334FE.webp',
            'gas ranges': 'LTGL6937_.webp',
            'electric ranges': 'LDE4413ST.webp',
            'dual fuel ranges': 'LRGL5823_.webp',
            'built-in wall ovens': 'WCEP6427F.webp',
            'built-in cooktops': 'CBIH3613BE.webp',
            'range hoods': 'HCED3015_ HCED3615_.webp',
            'over-the-range microwaves': 'MHEC1737_.webp',
            'countertop microwaves': 'LMC2075_.webp',
        },
        'air care': {
            'air care': 'AS560DWR0.webp',
        },
        dishwashers: {
            // dishwasher: 'WM9500HKA.webp',
            'pocket handle dishwashers': 'LDFN4542_.webp',
            'towel bar handle dishwashers': 'LDTH7972_.webp',
            'specialty dishwashers': 'WM9500HKA.webp',
            'accessories': 'WM9500HKA.webp',
        }
        // dishwashers: {
        //     dishwasher: 'WM9500HKA.webp',
        //     'pocket handle dishwashers': 'WM9500HKA.webp',
        //     'towel bar handle dishwashers': 'WM9500HKA.webp',
        //     'specialty dishwashers': 'WM9500HKA.webp',
        //     'accessories': 'WM9500HKA.webp',
        // }

    }


    // return Object.entries(categorizedProducts).map(([category, subcategories], categoryIndex) => {
        return Object.entries(transformedCategories).map(([category, subcategories], categoryIndex) => {

        const verbiage = GetCategoryVerbiage(category);
        return (
            <div key={`category-${categoryIndex}`} className={styles.categoryCardsContainer}>
                <GridSystem gridType="spread">
                    <div className={styles.contentWrapper}>
                        <div className={styles.categorySectionHeaderWrapper}>
                            <div className={styles.categoryTitleWrapper}>
                                <div className={styles.categoryTitle}>
                                    <LinkComponent href={`${NormalizeSlugs(category)}`}>
                                    <PageText type="bodyTertiaryTitle">{getCategoryTitle(category)}</PageText>
                                        {/* <PageText type="bodyTertiaryTitle">{capitalizeFirstLetterEachWord(category)}</PageText> */}
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
                        {/* <div className={styles.categoryCardsWrapper}> */}
                        <div className={getCategoryComponent(category)}>

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