import styles from './GridSystem.module.css'

export const GridSystem = ({
    gridType = 'controlledGrid',
    containerBackgroundColor,
    containerBorderBottom,
    containerBorderTop,
    containerPaddingTop,
    containerPaddingBottom,
    children
}) => {

    const gridTypeMap = {
        spread: styles.sWrapperGrid,
        controlledGrid: styles.wrapperGrid
    }

    const gridStyleConfig = gridTypeMap[gridType]
    return (
        <div style={{
            backgroundColor: `${containerBackgroundColor ? containerBackgroundColor : undefined}`,
            borderBottom: `${containerBorderBottom ? containerBorderBottom : undefined}`,
            borderTop: `${containerBorderTop ? containerBorderTop : undefined}`,
            paddingTop: `${containerPaddingTop ? containerPaddingTop : undefined}`,
            paddingBottom: `${containerPaddingBottom ? containerPaddingBottom : undefined}`
        }}
            className={styles.containerGrid}
        >
            <div className={gridStyleConfig}>
                <div className={styles.gridItem}>
                    {children}
                </div>
            </div>
        </div>
    );
};