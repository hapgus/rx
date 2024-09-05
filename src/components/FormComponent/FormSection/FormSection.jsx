import styles from './FormSection.module.css'
import { PageText } from "../../Text/Text"

export const FormSection = ({ sectionTitle, sectionDescription, children }) => {
    return (
        <div>
            <div className={styles.formSectionHeader}>
               
                <div className={styles.formSectionDescription}>
                    <PageText type='bodyDescriptionMedium'>{sectionDescription}</PageText>
                </div>
                <div className={styles.formSectionTitle}>
                    <PageText type='bodySubtitleBold'>{sectionTitle}</PageText>
                </div>
            </div>
            <div className={styles.formSectionBody}>
                {children}
            </div>
        </div>
    )
}