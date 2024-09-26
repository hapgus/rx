import styles from './FormSection.module.css'
import { PageText } from "../../Text/Text"

export const FormSection = ({ sectionTitle, sectionDescription, children }) => {
    return (
        <div className={styles.formSectionContainer}>

            <div className={styles.formSectionHeader}>
                {
                    sectionTitle &&
                    <div className={styles.formSectionTitle}>
                        <PageText type='pageTitle'>{sectionTitle}</PageText>
                    </div>
                }
                {
                    sectionDescription &&
                    <div className={styles.formSectionDescription}>
                        <PageText type='pageSubtitle'>{sectionDescription}</PageText>
                    </div>
                }

            </div>


            <div className={styles.formSectionBody}>
                {children}
            </div>
        </div>
    )
}