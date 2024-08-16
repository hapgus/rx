import  ReactDOM  from "react-dom";

import styles from "./Backdrop.module.css";

const Backdrop = props => { 
  
    return ReactDOM.createPortal(
        <div className={styles.modalContainer} onClick={props.onClick}></div>,
        document.getElementById('backdrop')
    );
};

export default Backdrop;