import { PageText } from "../Text/Text";
import styles from './Qrcode.module.css'

export const Qrcode = ({ imageUrl, title, subtitle, description }) => {
    return (
        <div className={styles.qrcodeContainer}>
            <div className={styles.imageWrapper}>
                <img src={imageUrl} />
            </div>
            {
                <div className={styles.textWrapper}>
                    <div className={styles.title}>
                        <PageText>{title}</PageText>
                    </div>
                    <div className={styles.subtitle}>
                        <PageText>{subtitle}</PageText>
                    </div>
                    <div className={styles.description}>
                        <PageText>{description}</PageText>
                    </div>
                </div>
            }

        </div>
    )
}