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
        // hidden: { opacity: 0, y: "-100%" }, // Start from above the screen
        // visible: { 
        //     opacity: 1, 
        //     y: ["0%", "-10%", "0%"],  // Keyframe animation to overshoot slightly then come back
        //     transition: {
        //         duration: 0.8,  // Total duration
        //         ease: [0.68, -0.55, 0.27, 1.55]  // Custom cubic-bezier for bounce effect
        //     }
        // },
        // exit: { opacity: 0, y: "-100%", transition: { duration: 0.5, ease: "easeInOut" } } // Animate exit upwards
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