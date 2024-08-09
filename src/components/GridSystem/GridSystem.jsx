import styles from './GridSystem.module.css'

export const GridSystem = ({
    containerBackgroundColor,
    containerBorderBottom,
    containerBorderTop,
    containerPaddingTop,
    containerPaddingBottom,
    children
}) => {
    return (
        <div style={{
            backgroundColor: `${containerBackgroundColor ? containerBackgroundColor : undefined}`,
            borderBottom: `${containerBorderBottom ? containerBorderBottom : undefined}`,
            borderTop: `${containerBorderTop ? containerBorderTop : undefined}`,
            paddingTop: `${containerPaddingTop ? containerPaddingTop : undefined}`,
             paddingBottom: `${containerPaddingBottom ? containerPaddingBottom : undefined}`
        }} className={styles.containerGrid}>
            <div className={styles.wrapperGrid}>
                <div className={styles.gridItem}>
                    {children}
                </div>
            </div>
        </div>
    );
};