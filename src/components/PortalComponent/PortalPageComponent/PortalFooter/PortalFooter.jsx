import styles from "./PortalFooter.module.css"
import { PageText } from "../../../Text/Text"

export const PortalFooter = () => {
    return (
        <div className={styles.portalFooterContainer}>
            <div className={styles.portalFooterText}>
                <PageText type="footerMenuItem">All rights reserved LG Home Appliances 2024</PageText>
            </div>

        </div>
    )
}