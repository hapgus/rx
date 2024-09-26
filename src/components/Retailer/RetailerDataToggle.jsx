// import { useRetailer } from "../../hooks/retailer-hook"
import styles from './RetailerDataToggle.module.css';
import { useDataContext } from '../../hooks/data-hook';
import { PageText } from '../Text/Text';
import { motion } from 'framer-motion';

export const RetailerDataToggle = () => {

    const { retailer, setRetailer } = useDataContext();

    const activeButtonVariants = {
        tap: { scale: 0.95 }, // Slightly scale down when clicked
        hover: { scale: 1.05 }, // Slightly scale up on hover
        initial: { scale: 1 }, // Default state
    };


    return (

        <div className={styles.toggleContainer}>

            <div className={styles.toggleWrapper}>
                <div className={styles.toggleHeaderWrapper}>
                    <div className={styles.toggleTitle}>
                        <PageText type='smallPortalTitle'>Filter Data by Retailer Website</PageText>
                    </div>
                </div>
                <div className={styles.buttonWrapper}>
                    <motion.button
                        onClick={() => setRetailer('LG')}
                        className={retailer === 'LG' ? styles.activeButton : ''}
                        variants={activeButtonVariants}
                        initial="initial"
                        whileTap={retailer === 'LG' ? "tap" : ""}
                        whileHover={retailer === 'LG' ? "hover" : ""}
                    >
                        LG Exclusive
                    </motion.button>
                    <motion.button
                        onClick={() => setRetailer('Home Depot')}
                        className={retailer === 'Home Depot' ? styles.activeButton : ''}
                        variants={activeButtonVariants}
                        initial="initial"
                        whileTap={retailer === 'Home Depot' ? "tap" : ""}
                        whileHover={retailer === 'Home Depot' ? "hover" : ""}
                    >
                        Home Depot
                    </motion.button>
                </div>
            </div>
        </div>
    )
}