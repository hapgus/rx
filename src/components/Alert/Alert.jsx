import ReactDOM from "react-dom";
import styles from './Alert.module.css';

import { PageText } from "../Text/Text";
import { IconComponent } from "../Icon/IconComponent";
import { LGComponent } from "../Character/LGComponent";

import { motion } from "framer-motion";
const Alert = ({ type = 'default', alertMessage, onClick }) => {
    const modalVariants = {

        hidden: { opacity: 0, y: "-100%" },
        visible: { opacity: 1, y: "0%" },
        exit: { opacity: 0, y: "-100%" }
    
    };
    const alertTypesMap = {

        productAdded: {
            style: styles.productAddedLG,
            icon: <LGComponent type='boyHands' />
        },
        productRemoved: {
            style: styles.productAlert,
            icon: <IconComponent iconType='redMinus' />
        },

        default: {
            style: styles.alertDefault,
            icon: null
        }
    };
    const alertConfig = alertTypesMap[type] || alertTypesMap.default;

    const alertContent = (
        <div className={styles.overlayContainer}>
            <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className={styles.alertContainer} onClick={onClick}>
                
                

                    <div className={alertConfig.style}>
                        {alertConfig.icon}
                        <PageText type="alertTitle">{alertMessage}</PageText>
                    </div>
                
              
            </motion.div>
        </div>
    );
    return ReactDOM.createPortal(alertContent, document.getElementById('alert'));
}


const ProductGuideAlerts = props => {
    return (
        <>
            {props.show &&

                <Alert {...props} />

            }
        </>
    )
};
export default ProductGuideAlerts;