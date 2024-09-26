import { useRetailer } from "../../hooks/retailer-hook";
import { IconComponent } from '../Icon/IconComponent';
import styles from "./RetailerLogo.module.css"

export const RetailerLogo = ({ store }) => {
    const { isHomeDepotApp } = useRetailer();

    // Show Home Depot logo only when Home Depot is active and product is from Home Depot (store === 'hd')
    if (isHomeDepotApp.isHomeDepotActive && store === 'hd') {
        return (
            <div className={styles.retailerLogoWrapper}>
                <div className={styles.retailerLogo}>
                    <IconComponent iconType="homeDepotLogoIcon" />
                </div>
            </div>
        );
    }

    // Return null if no logo should be shown
    return null;
};
