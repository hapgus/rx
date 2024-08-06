import styles from './Text.module.css';






export const PageText = ({ children, eventHandlers = {}, type = 'default' }) => {

    const textStyles = {

        /* --------------------------------------------------------------------------------------- */
        /* MODALS + ALERTS */
        /* --------------------------------------------------------------------------------------- */
        alertTitle: styles.alertTitle,
        
        modalTitle:styles.modalTitle,
        modalSubtitle:styles.modalSubtitle,
        modalTertiaryTitle:styles.modalTertiaryTitle,
        /* --------------------------------------------------------------------------------------- */
        /* PAGE HERO */
        /* --------------------------------------------------------------------------------------- */
        pageTitle: styles.pageTitle,
        pageSubtitle: styles.pageSubtitle,
        pageTertiaryTitle: styles.pageTertiaryTitle,
        /* --------------------------------------------------------------------------------------- */
        /* NAVIGATION + FOOTER */
        /* --------------------------------------------------------------------------------------- */
        navTitleText: styles.navTitleText,
        mobileNavTitleText: styles.mobileNavTitleText,

        footerTitle: styles.footerTitle,
        footerMenuItem: styles.footerMenuItem,
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

