import ReactDOM from "react-dom";
import styles from './Modal.module.css'
import { PageText } from "../Text/Text";
import { IconComponent } from "../Icon/IconComponent";
import { Button } from "../Button/Button";
import { LGComponent } from "../Character/LGComponent";
import { useNotificationHook } from "../../hooks/notification-hook";
import { SaveListForm } from "../AuthComponent/SaveListForm";



const ModalContent = props => {
    const { isModal, setIsModal } = useNotificationHook();


    if (props.modalType && props.modalType === 'infoModal') {
        console.log('info')

        const content = (
            <>
                {/* <Backdrop /> */}
                <div className={styles.backdropContainer} />
                <div className={styles.infoOverlayContainer}>

                    <div className={styles.infoModalContainer}>
                        <div className={styles.infoModal}>
                            <div className={styles.infoIconWrapper}>

                                <div className={styles.infoErrorIcon}>
                                    <IconComponent iconType='infoIcon' />
                                </div>
                                {/* {
                                    props.iconType == 'errorInfo'
                                        ? <div className={styles.infoErrorIcon}>
                                            <IconComponent iconType='errorInfo' />
                                        </div>
                                        : <div className={styles.infoIcon}>
                                            <IconComponent iconType='infoIcon' />
                                        </div>
                                } */}

                            </div>
                            <div className={styles.infoModalBodyWrapper}>
                                <div className={styles.infoTitle}>
                                    <PageText type="modalTitle">{props.title}</PageText>
                                </div>
                                <div className={styles.infoMessage}>
                                    <PageText type="modalTertiaryTitle">{props.message}</PageText>
                                </div>
                                {/* {isModal.errorList > 0 &&  */}
                                <ul className={styles.errorList}>
                                    {isModal?.errorList?.map((e, idx) => (
                                        <li key={idx}>
                                            <PageText>{e}</PageText>
                                        </li>
                                    ))}
                                </ul>
                                {/* } */}

                                <div className={styles.infoButtonsWrapper}>
                                    <Button
                                        onClick={props.onCancel}
                                        buttonTextType="action"
                                        buttonStyleType="secondary"
                                    >
                                        {props.cancelText}
                                    </Button>
                                    {props.onConfirm &&
                                        <Button
                                            onClick={props.onConfirm}
                                            buttonStyleType="primary">
                                            {props.confirmText}
                                        </Button>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </>
        );

        return ReactDOM.createPortal(content, document.getElementById('modal'))

    } else if (props.modalType && props.modalType === 'errorModal') {
        console.log('info')
        const content = (
            <>
                {/* <Backdrop /> */}
                <div className={styles.backdropContainer} />
                <div className={styles.infoOverlayContainer}>

                    <div className={styles.infoModalContainer}>
                        <div className={styles.infoModal}>
                            <div className={styles.infoIconWrapper}>

                                <div className={styles.infoIcon}>
                                    <IconComponent iconType='infoIcon' />
                                </div>
                                {/* {
                                    props.iconType == 'errorInfo'
                                        ? <div className={styles.infoErrorIcon}>
                                            <IconComponent iconType='errorInfo' />
                                        </div>
                                        : <div className={styles.infoIcon}>
                                            <IconComponent iconType='infoIcon' />
                                        </div>
                                } */}

                            </div>
                            <div className={styles.infoModalBodyWrapper}>
                                <div className={styles.infoTitle}>
                                    <PageText type="modalTitle">{props.title}</PageText>
                                </div>
                                <div className={styles.infoMessage}>
                                    <PageText type="modalTertiaryTitle">{props.message}</PageText>
                                </div>
                                {/* {isModal.errorList > 0 &&  */}
                                <ul className={styles.errorList}>
                                    {isModal?.errorList?.map((e, idx) => (
                                        <li key={idx}>
                                            <PageText>{e}</PageText>
                                        </li>
                                    ))}
                                </ul>
                                {/* } */}

                                <div className={styles.infoButtonsWrapper}>
                                    <Button
                                        onClick={props.onCancel}
                                        buttonTextType="action"
                                        buttonStyleType="secondary"
                                    >
                                        {props.cancelText}
                                    </Button>
                                    {props.onConfirm &&
                                        <Button
                                            onClick={props.onConfirm}
                                            buttonStyleType="primary">
                                            {props.confirmText}
                                        </Button>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </>
        );

        return ReactDOM.createPortal(content, document.getElementById('modal'))

    } else if (props.modalType && props.modalType === 'successModal') {
        console.log('success')
        const content = (
            <>
                {/* <Backdrop /> */}
                <div className={styles.backdropContainer} />
                <div className={styles.infoOverlayContainer}>

                    <div className={styles.infoModalContainer}>
                        <div className={styles.infoModal}>
                            <div className={styles.infoIconWrapper}>
                                <div className={styles.infoIconSuccess}>
                                    <IconComponent iconType='greenCheckmark' />
                                </div>
                            </div>
                            <div className={styles.infoModalBodyWrapper}>
                                <div className={styles.infoTitle}>
                                    <PageText type="modalTitle">{props.title}</PageText>
                                </div>
                                <div className={styles.infoMessage}>
                                    <PageText type="modalTertiaryTitle">{props.message}</PageText>
                                </div>
                                {/* {isModal.errorList > 0 &&  */}
                                <ul>
                                    {isModal.errorList.map((e, idx) => (
                                        <li key={idx}>
                                            <PageText>{e}</PageText>
                                        </li>
                                    ))}
                                </ul>
                                {/* } */}

                                <div className={styles.infoButtonsWrapper}>
                                    <Button
                                        onClick={props.onCancel}
                                        buttonTextType="action"
                                        buttonStyleType="secondary"
                                    >
                                        {props.cancelText}
                                    </Button>
                                    {props.onConfirm &&
                                        <Button
                                            onClick={props.onConfirm}
                                            buttonStyleType="primary">
                                            {props.confirmText}
                                        </Button>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </>
        );
        return ReactDOM.createPortal(content, document.getElementById('modal'))

    } else if (props.modalType && props.modalType === 'saveListModal') {
        console.log('list')
        const content = (
            <>
                {/* <Backdrop /> */}
                <div className={styles.backdropContainer} />
                <div className={styles.overlayContainer}>
                    <div className={styles.saveListModalContainer}>
                        <div className={styles.saveListModalWrapper}>
                            <div className={styles.imageWrapper}>
                                <LGComponent type='girlHand' />
                            </div><div className={styles.titleWrapper}>
                                <PageText type="modalTitle">{props.title}</PageText>

                            </div>
                            <div className={styles.bodyWrapper}>
                                <PageText type="modalTertiaryTitle">{props.message}</PageText>
                                <div className={styles.formElementsWrapper}>
                                    <SaveListForm />
                                </div>
                                {/* <div className={styles.buttonsWrapper}>
                                {props.onConfirm && <Button onClick={props.onConfirm} buttonTextType="primaryAction" buttonStyleType="primary">{props.confirmText}</Button>}

                                <Button onClick={props.onCancel} buttonTextType="action" buttonStyleType="secondary">{props.cancelText}</Button>
                            </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
        return ReactDOM.createPortal(content, document.getElementById('modal'))
    } else {
        console.log('default')
        const content = (
            <>
                {/* <Backdrop /> */}
                <div className={styles.backdropContainer} />
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

                </div>

            </>
        );
        return ReactDOM.createPortal(content, document.getElementById('modal'))
    }

};

const Modal = props => {

    return (
        <>
            {props.show && <ModalContent {...props} />}
        </>
    )
};
export default Modal;