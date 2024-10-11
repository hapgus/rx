import { useProductsHook } from "../../hooks/use-product-hooks";
import { useRetailer } from "../../hooks/use-routing-hooks";


import { ProductCategoryCard } from "../ProductCards/ProductCategoryCard/ProductCategoryCard";

import { NormalizeSlugs, capitalizeFirstLetterEachWord, GetCategoryVerbiage, ListProductsByCategorySubcategory } from "../../utils/helper-functions";

import { PageText } from "../Text/Text";
import styles from './CategoriesComponent.module.css'
import { LinkComponent } from "../Links/LinkComponent";
import { GridSystem } from "../GridSystem/GridSystem";
import { SUBCATEGORY_NAMING_MAP } from "../../hooks/use-category-config";

const categoryTitleMap = {
    signature: 'LG SIGNATURE',
    studio: 'LG STUDIO',
    vacuums: 'Vacuums'
};

const categoryComponentStyleMap = {
    dishwashers: styles.dishCategoryCardsWrapper,
    'air-care': styles.singleCategoryCardsWrapper,
    vacuums: styles.singleCategoryCardsWrapper
}

const getCategoryTitle = (category) => {
    return categoryTitleMap[category] || capitalizeFirstLetterEachWord(category);
};

const getCategoryComponent = (category) => {
    return categoryComponentStyleMap[category] || styles.categoryCardsWrapper
}

export const CategoriesComponent = () => {
    
    const { publicProducts } = useProductsHook();
    const { isHomeDepotApp  } = useRetailer();

    const categorizedProducts = ListProductsByCategorySubcategory(publicProducts);

    const categoryPagePath = isHomeDepotApp && isHomeDepotApp.isHomeDepotActive === true ? '/appliances/' : null;

    // Transform categorizedProducts with updated subcategory names
    const transformedCategories = Object.entries(categorizedProducts).reduce((acc, [categoryName, subcategories]) => {
        // Map through subcategories and rename as necessary
        const updatedSubcategories = Object.entries(subcategories).reduce((subAcc, [subName, products]) => {
            // Use mapped name or fallback to the original
            // const updatedName = CATEGORY_NAME_MAP[subName] || subName;
            const updatedName = SUBCATEGORY_NAMING_MAP[subName] || subName;
            return { ...subAcc, [updatedName]: products };
        }, {});

        // Add updated subcategories to the accumulated result
        acc[categoryName] = updatedSubcategories;
        return acc;
    }, {});

    const subcategoryProductImageMap = {
        signature: {
            Laundry: 'WM9500HKA.webp',
            // Accessories: 'WD205CK.webp',
            Ranges: 'LUTD4919SN.webp',
            Refrigeration: 'URETC1408N.webp',
            Dishwashers: 'LUDP8908SN.webp',
        },
        studio: {
            Ranges: 'LSDS6338F.webp',
            Refrigeration: 'SRFVC2416S.webp',
            Laundry: 'SWWE50N3 SWWG50N3.webp',
            Dishwashers: 'SDWD24P3.webp',
            'Built-In Cooktops': 'CBGS3028S CBGS3628S.webp',
            'Built-In Wall Ovens': 'WDES9428F.webp',
            'Range Hoods': 'LSHD3080ST LSHD3680ST.webp',
            Microwaves: 'MHES1738F.webp',

        },
        vacuums: {
            Vacuums: 'A925KSM.webp',
        },
        refrigeration: {
            '4-Door French Door': 'LF29S8365S.webp',
            '3-Door French Door': 'LRYKC2606_.webp',
            "33\" and Under French Door": 'LRFDS3016S.webp',

            'Side-by-Side': 'LRSOS2706_.webp',
            'Bottom and Top Freezer': 'LRDCS2603_.webp',
            'Single Door': 'LRONC0605V.webp'
        },
        laundry: {
            'All-In-One': 'WM3555H_A.webp',
            Washers: 'WT8600CB.webp',
            Dryers: 'DLHC1455W.webp',
            WashTower: 'WKE100H_A WKG101H_A.webp',
            Accessories: 'WD200CB.webp',
            'Specialty Laundry': 'DLHC1455W.webp',
            'Front Load Washers': 'WM8900HBA.webp',
            'Top Load Washers': 'WT8400C_.webp',
            'Front Load Dryers': 'DLEX5500_ DLGX5501_.webp',
            'Top Load Dryers': 'DLE8400_E DLG8401_E.webp',
            'LG Styler': 'S3RFBN S3WFBN S3MFBN.webp',
        },
        cooking: {

            'Induction Ranges': 'LSIL6334FE.webp',
            'Gas Ranges': 'LDG4313ST.webp',
            'Electric Ranges': 'LDE4413ST.webp',
            'Dual Fuel Ranges': 'LRGL5823_.webp',
            'Built-In Wall Ovens': 'WSEP4723_.webp',
            'Built-In Cooktops': 'LCE3010SB.webp',
            'Range Hoods': 'HCED3015_ HCED3615_.webp',
            'Over-The-Range Microwaves': 'MHEC1737_.webp',
            'Countertop Microwaves': 'MSER1590S.webp',
        },
        'air care': {
            'Air Care': 'AS560DWR0.webp',
        },
        dishwashers: {
            // dishwasher: 'WM9500HKA.webp',
            'Pocket Handle Dishwashers': 'LDFN4542_.webp',
            'Towel Bar Handle Dishwashers': 'LDTH7972_.webp',
            'Specialty Dishwashers': 'LDTH7972_.webp',
            'Accessories': 'LDTH7972_.webp',
        }
    }



    return Object.entries(transformedCategories).map(([category, subcategories], categoryIndex) => {
       
        const verbiage = GetCategoryVerbiage(category);
        const pagePath = '/appliances/'
       
        return (
            <div key={`category-${categoryIndex}`} className={styles.categoryCardsContainer}>
                <GridSystem gridType="spread">
                    <div className={styles.contentWrapper}>
                        <div className={styles.categorySectionHeaderWrapper}>
                            <div className={styles.categoryTitleWrapper}>
                                <div className={styles.categoryTitle}>
                                    
                                    <LinkComponent 
                                   href={`${isHomeDepotApp && isHomeDepotApp.isHomeDepotActive 
                                        ? `/appliances/${NormalizeSlugs(category)}` 
                                        : NormalizeSlugs(category)                
                                    }`
                                }>
                                  
                                        <PageText type="bodyTitle">{getCategoryTitle(category)}</PageText>
                                        {/* <PageText type="bodyTertiaryTitle">{capitalizeFirstLetterEachWord(category)}</PageText> */}
                                    </LinkComponent>
                                </div>
                                <div className={styles.categoryHeadline}>
                                    <PageText type="bodyCalloutTitle">{verbiage.allCategoriesHeadline}</PageText>
                                </div>
                                {/* <PageText type="pageSubtitle">{verbiage.allCategoriesSubheadline}</PageText> */}
                            </div>
                            <div className={styles.categoryDescriptionWrapper}>
                                <div className={styles.categoryDescriptionShort}>
                                    <PageText type="bodyCallout">{verbiage.allCategoriesDescriptionShort}</PageText>
                                </div>
                                <div className={styles.categoryDescriptionLong}>
                                    <PageText type="bodyCallout">{verbiage.allCategoriesDescriptionLong}</PageText>
                                </div>
                            </div>
                        </div>
                    </div>
                </GridSystem>
                <GridSystem gridType="spread">
                    <div className={styles.contentWrapper}>
                        <div className={getCategoryComponent(category)}>

                            {Object.entries(subcategories)?.map(([subcategory, subcategoryIndex]) => (

                                <ProductCategoryCard
                                    key={`subcategory-${category}-${subcategory}-${subcategoryIndex}`}
                                    // subcategory={capitalizeFirstLetterEachWord(subcategory)}
                                    subcategory={subcategory}
                                    hashLinkPath={`${category}#${(subcategory)}`}
                                    // hashLinkPath={`${category}#${NormalizeSlugs(subcategory)}`}
                                    subcategoryImagePath={category && subcategoryProductImageMap[category][subcategory]}
                                />
                            ))}
                        </div>
                    </div>
                </GridSystem>
            </div>
        );
    });
}