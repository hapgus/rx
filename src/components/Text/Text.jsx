import styles from './Text.module.css';

export const PageText = ({ children, eventHandlers = {}, type = 'default' }) => {

    const textStyles = {

        /* --------------------------------------------------------------------------------------- */
        /* PAGE HERO */
        /* --------------------------------------------------------------------------------------- */
        heroTitle: styles.heroTitle,
        heroSubtitle: styles.heroSubtitle,
        heroDescription: styles.heroDescription,

        // EXTRA
        heroTertiaryTitle: styles.heroTertiaryTitle,
        pageTitle: styles.pageTitle,
        pageSubtitle: styles.pageSubtitle,
        pageTertiaryTitle: styles.pageTertiaryTitle,



        /* --------------------------------------------------------------------------------------- */
        /* PAGE BODY */
        /* --------------------------------------------------------------------------------------- */
        bodyTitle: styles.bodyTitle,
        bodySubtitle: styles.bodySubtitle,
        bodyDescription: styles.bodyDescription,
        bodyCalloutTitle: styles.bodyCalloutTitle,
        bodyCallout: styles.bodyCallout,
        bodyCountTitle: styles.bodyCountTitle,

        // EXTRA
      
        bodySubtitleBold: styles.bodySubtitleBold,
        bodyTertiaryTitle: styles.bodyTertiaryTitle,
        bodyTertiaryTitleBold: styles.bodyTertiaryTitleBold,

        bodyDescriptionMedium: styles.bodyDescriptionMedium,
        bodyDescriptionLarge: styles.bodyDescriptionLarge,
        bodyFeatureSectionTitle: styles.bodyFeatureSectionTitle,
  
        bodyBenefitTitle: styles.bodyBenefitTitle,
        bodyBenefitDescription: styles.bodyBenefitDescription,

        /* --------------------------------------------------------------------------------------- */
        /* PRODUCT
        /* --------------------------------------------------------------------------------------- */
        productPageTitle: styles.productPageTitle,
        productPageSubtitle: styles.productPageSubtitle,

        productPageSpecTitle: styles.productPageSpecTitle,
        productPageSpecList: styles.productPageSpecList,


        productCardTitle: styles.productCardTitle,
        productCardSubtitle: styles.productCardSubtitle,

        productSearchTitle: styles.productSearchTitle,
        productSearchSubtitle: styles.productSearchSubtitle,

        productSearchNavTitle: styles.productSearchNavTitle,
        productSearchNavSubtitle: styles.productSearchNavSubtitle,

        // EXTRA
        productPageTertiary: styles.productPageTertiary,
        productPageSection: styles.productPageSection,

        productCardTertiaryTitle: styles.productCardTertiaryTitle,
      // productBuilderTitle: styles.productBuilderTitle,
        // productBuilderSubtitle: styles.productBuilderSubtitle,

        // productBuilderSpecTitle: styles.productBuilderSpecTitle,
        // productBuilderSpecList: styles.productBuilderSpecList,
        // productCardListText: styles.productCardListText,


        /* --------------------------------------------------------------------------------------- */
        /* BUILDER PRODUCT CARD */
        /* --------------------------------------------------------------------------------------- */

        productBuilderTitle: styles.productBuilderTitle,
        productBuilderSubtitle: styles.productBuilderSubtitle,
        // productBuilderCategory:styles.productBuilderCategory,
        productBuilderSpecTitle: styles.productBuilderSpecTitle,
        productBuilderSpecList: styles.productBuilderSpecList,
        productCardListText: styles.productCardListText,



        /* --------------------------------------------------------------------------------------- */
        /* NAVIGATION + FOOTER */
        /* --------------------------------------------------------------------------------------- */
        navTitleText: styles.navTitleText,
        footerTitle: styles.footerTitle,

        // EXTRA
        mobileNavTitle: styles.mobileNavTitle,
        stickyNavTitleText: styles.stickyNavTitleText,
        footerMenuItem: styles.footerMenuItem,


        /* --------------------------------------------------------------------------------------- */
        /* FORMS
        /* --------------------------------------------------------------------------------------- */
        formSectionTitle: styles.formSectionTitle,
        formSectionSubtitle: styles.formSectionSubtitle,

        formLabel: styles.formLabel,
        formSecondaryLabel: styles.formSecondaryLabel,
        toolTip: styles.toolTip,
        /* --------------------------------------------------------------------------------------- */
        /* MODALS + ALERTS */
        /* --------------------------------------------------------------------------------------- */
        alertTitle: styles.alertTitle,

        modalTitle: styles.modalTitle,
        modalSubtitle: styles.modalSubtitle,
        modalTertiaryTitle: styles.modalTertiaryTitle,

        /* --------------------------------------------------------------------------------------- */
        /* PORTAL */
        /* --------------------------------------------------------------------------------------- */

        smallPortalTitle: styles.smallPortalTitle,

         /* --------------------------------------------------------------------------------------- */
        /* PRINT MODE */
        /* --------------------------------------------------------------------------------------- */

        coverTitle: styles.coverTitle,
        coverSubtitle: styles.coverSubtitle,
        coverTertiaryTitle: styles.coverTertiaryTitle,

         /* --------------------------------------------------------------------------------------- */
        /* SEARCH */
        /* --------------------------------------------------------------------------------------- */
        searchTitle: styles.searchTitle,
        searchSubtitle: styles.searchSubtitle,
        searchTertiaryTitle: styles.searchTertiaryTitle,


        // productSearchTitle: styles.productSearchTitle,
        // productSearchSubtitle: styles.productSearchSubtitle,

        // productSearchNavTitle: styles.productSearchNavTitle,
        // productSearchNavSubtitle: styles.productSearchNavSubtitle,

        default: styles.defaultPageText,
    };

    const textStyle = textStyles[type] || textStyles.default;
    return (
        <p className={textStyle} {...eventHandlers}>
            {children}
        </p>
    )
};

