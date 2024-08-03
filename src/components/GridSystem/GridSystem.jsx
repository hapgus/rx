import styles from './GridSystem.module.css'

export const GridSystem = ({ containerBackgroundColor, children }) => {
    return (
        <div style={{ backgroundColor: `${containerBackgroundColor ? containerBackgroundColor : undefined}` }} className={styles.containerGrid}>
            <div className={styles.wrapperGrid}>
                <div className={styles.gridItem}>
                    {children}
                </div>
            </div>
        </div>
    );
};