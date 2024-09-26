import ReactDOM from "react-dom";
import styles from './Drawer.module.css'
import { PageText } from "../Text/Text";
import { IconComponent } from "../Icon/IconComponent";
import { Button } from "../Button/Button";
import { LGComponent } from "../Character/LGComponent";


const DrawerContent = ({ children }) => {
    console.log(children); // This should log the children passed to Drawer

    const content = (
        <>
            <div className={styles.backdropContainer} />
            <div className={styles.overlayContainer}>
                <div className={styles.overlayContentWrapper} >
                    {children}
                </div>
            </div>
        </>
    );
    return ReactDOM.createPortal(content, document.getElementById('drawer'));
};

const Drawer = ({ children }) => {
    return (
        <>
            <DrawerContent>
                {children}
            </DrawerContent>
        </>
    );
};

export default Drawer;