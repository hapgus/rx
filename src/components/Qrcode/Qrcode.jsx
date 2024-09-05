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
                    <div><PageText>{title}</PageText></div>
                    <div><PageText>{subtitle}</PageText></div>
                    <div><PageText>{description}</PageText></div>
                </div>
            }

        </div>
    )
}