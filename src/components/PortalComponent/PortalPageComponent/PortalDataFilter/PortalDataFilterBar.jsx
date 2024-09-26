import { DatePicker } from '../../../Date/DatePicker'
import { RetailerDataToggle } from '../../../Retailer/RetailerDataToggle'
import styles from './PortalDataFilterBar.module.css'

export const PortalDataFilterBar = () => {
    return (
        <div className={styles.portalDataFilterBar}>
           <RetailerDataToggle /> 
            <DatePicker />
        </div>
    );
}