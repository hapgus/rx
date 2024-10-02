import styles from './FormSection.module.css'
import { PageText } from "../../Text/Text"

export const FormSection = ({ sectionTitle, sectionDescription, children }) => {
    return (
        <div className={styles.formSectionContainer}>
            {
                sectionTitle &&

                <div className={styles.formSectionHeaderWrapper}>

                    <div className={styles.formSectionHeader}>

                        {
                            sectionTitle &&
                            <div className={styles.formSectionTitleWrapper}>
                                <div className={styles.formSectionTitle}>
                                    <PageText type='pageTitle'>{sectionTitle}</PageText>
                                </div>
                            </div>
                        }
                        {
                            sectionDescription &&
                            <div className={styles.formSectionDescription}>
                                <PageText type='pageSubtitle'>{sectionDescription}</PageText>
                            </div>
                        }

                    </div>

                </div>
            }


            <div className={styles.formSectionBodyWrapper}>
                <div className={styles.formSectionBody}>
                    {children}
                </div>
            </div>

        </div>
    )
}