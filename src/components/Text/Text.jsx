import styles from './Text.module.css';






export const PageText = ({ children, eventHandlers = {}, type = 'default' }) => {

    const textStyles = {

        /* --------------------------------------------------------------------------------------- */
        /* PAGE HERO */
        /* --------------------------------------------------------------------------------------- */

        heroTitle: styles.heroTitle,
        heroSubtitle: styles.heroSubtitle,
        heroTertiaryTitle: styles.heroTertiaryTitle,

        heroDescription: styles.heroDescription,



        pageTitle: styles.pageTitle,
        pageSubtitle: styles.pageSubtitle,
        pageTertiaryTitle: styles.pageTertiaryTitle,


        /* --------------------------------------------------------------------------------------- */
        /* PORTAL */
        /* --------------------------------------------------------------------------------------- */

        smallPortalTitle: styles.smallPortalTitle,















        /* --------------------------------------------------------------------------------------- */
        /* FORMS
        /* --------------------------------------------------------------------------------------- */
        formSectionTitle: styles.formSectionTitle,
        formSectionSubtitle: styles.formSectionSubtitle,

        formLabel: styles.formLabel,
        formSecondaryLabel: styles.formSecondaryLabel,
        toolTip: styles.toolTip,
        /* --------------------------------------------------------------------------------------- */
        /* PRODUCT
        /* --------------------------------------------------------------------------------------- */
        productPageTitle: styles.productPageTitle,
        productPageSubtitle: styles.productPageSubtitle,

        productPageSpecTitle: styles.productPageSpecTitle,
        productPageSpecList: styles.productPageSpecList,
        productPageTertiary: styles.productPageTertiary,
        productPageSection: styles.productPageSection,


        /* --------------------------------------------------------------------------------------- */
        /* NAVIGATION + FOOTER */
        /* --------------------------------------------------------------------------------------- */
        navTitleText: styles.navTitleText,
        mobileNavTitle: styles.mobileNavTitle,
        stickyNavTitleText: styles.stickyNavTitleText,
        footerTitle: styles.footerTitle,
        footerMenuItem: styles.footerMenuItem,

        /* --------------------------------------------------------------------------------------- */
        /* PRINT MODE */
        /* --------------------------------------------------------------------------------------- */

        coverTitle: styles.coverTitle,
        coverSubtitle: styles.coverSubtitle,
        coverTertiaryTitle: styles.coverTertiaryTitle,

        /* --------------------------------------------------------------------------------------- */
        /* MODALS + ALERTS */
        /* --------------------------------------------------------------------------------------- */
        alertTitle: styles.alertTitle,

        modalTitle: styles.modalTitle,
        modalSubtitle: styles.modalSubtitle,
        modalTertiaryTitle: styles.modalTertiaryTitle,

        /* --------------------------------------------------------------------------------------- */
        /* PAGE BODY */
        /* --------------------------------------------------------------------------------------- */
        bodySubtitle: styles.bodySubtitle,
        bodySubtitleBold: styles.bodySubtitleBold,
        bodyTertiaryTitle: styles.bodyTertiaryTitle,
        bodyTertiaryTitleBold: styles.bodyTertiaryTitleBold,
        bodyDescription: styles.bodyDescription,
        bodyDescriptionMedium: styles.bodyDescriptionMedium,
        bodyDescriptionLarge: styles.bodyDescriptionLarge,
        bodyFeatureSectionTitle: styles.bodyFeatureSectionTitle,

        bodyBenefitTitle: styles.bodyBenefitTitle,
        bodyBenefitDescription: styles.bodyBenefitDescription,

        /* --------------------------------------------------------------------------------------- */
        /* SEARCH */
        /* --------------------------------------------------------------------------------------- */
        searchTitle: styles.searchTitle,
        searchSubtitle: styles.searchSubtitle,
        searchTertiaryTitle: styles.searchTertiaryTitle,


        productSearchTitle: styles.productSearchTitle,
        productSearchSubtitle: styles.productSearchSubtitle,

        productSearchNavTitle: styles.productSearchNavTitle,
        productSearchNavSubtitle: styles.productSearchNavSubtitle,


        /* --------------------------------------------------------------------------------------- */
        /* BUILDER PRODUCT CARD */
        /* --------------------------------------------------------------------------------------- */
        productCardTitle: styles.productCardTitle,
        productCardSubtitle: styles.productCardSubtitle,
        productCardTertiaryTitle: styles.productCardTertiaryTitle,
        productBuilderTitle:styles.productBuilderTitle,
        productBuilderSubtitle:styles.productBuilderSubtitle,
        // productBuilderCategory:styles.productBuilderCategory,
        productBuilderSpecTitle:styles.productBuilderSpecTitle,
        productBuilderSpecList:styles.productBuilderSpecList,
        productCardListText: styles.productCardListText,
        

        default: styles.defaultPageText,
    };

    const textStyle = textStyles[type] || textStyles.default;


    return (
        <p
            className={textStyle}
            {...eventHandlers}
        >

            {children}

        </p>
    )
};

