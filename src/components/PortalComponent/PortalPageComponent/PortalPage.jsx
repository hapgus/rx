import { PageText } from '../../Text/Text'
import styles from './PortalComponents.module.css'

export const PortalPage = ({ pageTitle, children }) => {


    return (
        <div className={styles.portalPageContainer} >
            <div className={styles.portalPageWrapper}>
                <div className={styles.header}>
                    {pageTitle && <div><PageText type='pageTitle'>{pageTitle}</PageText></div>}
                    {pageTitle && <div><PageText type='pageTitle'>{pageTitle}</PageText></div>}
                </div>
                <div className={styles.body}>
                    {children}
                </div>

            </div>
        </div>
    )

}