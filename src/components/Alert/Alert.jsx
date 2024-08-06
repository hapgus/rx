import ReactDOM from "react-dom";
import styles from './Alert.module.css';

import { PageText } from "../Text/Text";
import { IconComponent } from "../Icon/IconComponent";
import { LGComponent } from "../Character/LGComponent";

const Alert = ({ type = 'default', alertMessage, onClick }) => {
const publicUrl = process.env.PUBLIC_URL;
    const alertTypesMap = {
        // productAdded: {
        //     style: styles.productAlert,
        //     icon: <IconComponent iconType='greenCheckmark' />
        // },
        productAdded: {
            style: styles.productAddedLG,
            icon: <LGComponent type='boyHands'/>
        },
        productRemoved: {
            style: styles.productAlert,
            icon: <IconComponent iconType='redMinus' />
        },
        // productAlreadyInList: {
        //     style: styles.productsAlreadyInListAlert,
        //     icon: <IconComponent iconType='yellowExclamation' />
        // },
        // productsReadyToPrint: {
        //     style: styles.productsReadyToPrintAlert,
        //     icon: <IconComponent iconType='bluePrinter' />
        // },
        default: {
            style: styles.alertDefault,
            icon: null
        }
    };
    const alertConfig = alertTypesMap[type] || alertTypesMap.default;

    const alertContent = (
        <div className={styles.alertContainer} onClick={onClick}>
             <div className={alertConfig.style}>
                {alertConfig.icon}
                <PageText type="alertTitle">{alertMessage}</PageText>
                
            </div>
        </div>
    );
    return ReactDOM.createPortal(alertContent, document.getElementById('alert'));
}


const ProductGuideAlerts = props => {
    return (
        <>
            {props.show && <Alert {...props} />}
        </>
    )
};
export default ProductGuideAlerts;