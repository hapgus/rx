import styles from './InnerGridItem.module.css'
export const InnerGridItem = ({
    gridType = 'controlledGrid',
    children

}) => {

    const gridTypeMap = {
        spread: styles.sContainer,
        controlledGrid: styles.container
    }

    const gridStyleConfig = gridTypeMap[gridType]

    return (
        <div className={gridStyleConfig}>{children}</div>
    )

}
