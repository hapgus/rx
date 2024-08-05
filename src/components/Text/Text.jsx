import styles from './Text.module.css';






export const PageText = ({ children, eventHandlers = {}, type = 'default' }) => {

    const textStyles = {


        navTitleText: styles.navTitleText,

        searchTitle:styles.searchTitle,
        searchSubtitle:styles.searchSubtitle,
        searchTertiaryTitle:styles.searchTertiaryTitle,


        productSearchTitle:styles.productSearchTitle,
        productSearchSubtitle:styles.productSearchSubtitle,
        
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

