import styles from './GridSystem.module.css'

export const GridSystem = ({ 
    containerBackgroundColor,
    containerBorderBottom, 
    children
 }) => {
    return (
        <div style={{ 
            backgroundColor: `${containerBackgroundColor ? containerBackgroundColor : undefined}`,
            borderBottom: `${containerBorderBottom ? containerBorderBottom : undefined}`
            }} className={styles.containerGrid}>
            <div className={styles.wrapperGrid}>
                <div className={styles.gridItem}>
                    {children}
                </div>
            </div>
        </div>
    );
};