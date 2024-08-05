import styles from './Text.module.css';






export const PageText = ({ children, eventHandlers = {}, type = 'default' }) => {

    const textStyles = {

        navTitleText: styles.navTitleText,
        mobileNavTitleText: styles.mobileNavTitleText,

        searchTitle:styles.searchTitle,
        searchSubtitle:styles.searchSubtitle,
        searchTertiaryTitle:styles.searchTertiaryTitle,


        productSearchTitle:styles.productSearchTitle,
        productSearchSubtitle:styles.productSearchSubtitle,

        productSearchNavTitle:styles.productSearchNavTitle,
        productSearchNavSubtitle:styles.productSearchNavSubtitle,

        default: styles.defaultPageText,
    };

    const textStyle = textStyles[type] || textStyles.default;
   

    return(
        <p
            className={textStyle}
            {...eventHandlers}
        >
           
                {children}
        
        </p>
    )
};

