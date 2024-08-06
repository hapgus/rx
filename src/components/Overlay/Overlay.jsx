import styles from './Overlay.module.css';
import ReactDOM from "react-dom";


const OverlayContent = ({ containerBackgroundColor, containerMarginTop, children }) => {


    const content = (
        <div style={{
            backgroundColor: `${containerBackgroundColor ? containerBackgroundColor : undefined}`,
            marginTop: `${containerMarginTop ? containerMarginTop : '0'}`
        }} className={styles.overlayContentContainer} >
            <div className={styles.overlayContentWrapper} >
                {children}
            </div>
        </div>
    );
    return ReactDOM.createPortal(content, document.getElementById('overlay'))
};

const Overlay = ({ children, containerBackgroundColor, containerMarginTop }) => {
    return (
        <OverlayContent containerBackgroundColor={containerBackgroundColor} containerMarginTop={containerMarginTop}>
            {children}
        </OverlayContent>
    );
};

export default Overlay;