import styles from './DropdownComponent.module.css'
export const DropdownComponent = ({ 
    eventHandlers = {}, 
    children, 
    condition, 
    conditionChildren
 }) => {
    return (
        <div {...eventHandlers} className={styles.a}>
            <div className={styles.b}>
                {condition &&
                    <div className={styles.aList}>
                        {conditionChildren}
                    </div>
                }
                {children}
            </div>
        </div>
    )
}

export const SidebarDropdownComponent = ({ 
    eventHandlers = {}, 
    children, 
    condition, 
    conditionChildren
 }) => {
    return (
        <div {...eventHandlers} className={styles.aSide}>
            <div className={styles.bSide}>
                {condition &&
                    <div className={styles.aSideList}>
                        {conditionChildren}
                    </div>
                }
                {children}
            </div>
        </div>
    )
}
