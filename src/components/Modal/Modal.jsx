import ReactDOM from "react-dom";
import styles from './Modal.module.css'
import { PageText } from "../Text/Text";
import { IconComponent } from "../Icon/IconComponent";
import { Button } from "../Button/Button";
import { LGComponent } from "../Character/LGComponent";


// const Backdrop = props => {
//     return ReactDOM.createPortal(
//         <div className={styles.backdropContainer}></div>,
//         document.getElementById('backdrop')
//     );
// }

const ModalContent = props => {
    const content = (
        <>
            {/* <Backdrop /> */}
            <div className={styles.backdropContainer}/>
            <div className={styles.overlayContainer}>

                <div className={styles.modalContainer}>
                    <div className={styles.imageWrapper}>
                        <LGComponent type='girlHand' />
                    </div><div className={styles.titleWrapper}>
                        <PageText type="modalTitle">{props.title}</PageText>
                        <IconComponent iconStyleType='' iconType='xClose' onClick={props.onCancel}></IconComponent>
                    </div>
                    
                    <div className={styles.bodyWrapper}>
                        <PageText type="modalTertiaryTitle">{props.message}</PageText>

                        <div className={styles.buttonsWrapper}>
                            {props.onConfirm && <Button onClick={props.onConfirm} buttonTextType="action" buttonStyleType="primary">{props.confirmText}</Button>}

                            <Button onClick={props.onCancel} buttonTextType="action" buttonStyleType="secondary">{props.cancelText}</Button>
                        </div>

                    </div>

                </div>
                <div>

                </div>
            </div>

        </>
    );
    return ReactDOM.createPortal(content, document.getElementById('modal'))
};

const Modal = props => {
    return (
        <>
            {props.show && <ModalContent {...props} />}
        </>
    )
};
export default Modal;