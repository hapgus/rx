import styles from './Overlay.module.css';
import ReactDOM from "react-dom";

const OverlayContent = ({ children }) => {
    const content = (
        <div className={styles.overlayContentWrapper}>
            <h1>Overlay</h1>
            {children}
        </div>
    );
    return ReactDOM.createPortal(content, document.getElementById('overlay'))
};

const Overlay = ({children}) =>{
    return(
        <OverlayContent>
             {children}
        </OverlayContent>
    );
};

export default Overlay;