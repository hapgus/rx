import ReactDOM from "react-dom";
import styles from './Modal.module.css';
import { PageText } from "../Text/Text";
import { IconComponent } from "../Icon/IconComponent";
import { Button } from "../Button/Button";
import { LGComponent } from "../Character/LGComponent";
import { useNotificationHook } from "../../hooks/notification-hook";
import { SaveListForm } from "../AuthComponent/SaveListForm";
import { AnimatePresence, motion } from "framer-motion";
// import {NakedLoader}


const ModalContent = props => {

    const modalVariants = {
        hidden: { opacity: 0, y: "100%" },
        visible: { opacity: 1, y: "0%" },
        exit: { opacity: 0, y: "100%" }
    };
    const { isModal } = useNotificationHook();

    // Determine the icon based on modal type
    const getIcon = (modalType) => {
        switch (modalType) {
            case 'warningModal':
                return <IconComponent iconType='errorInfo' />;
            case 'infoModal':
                return <IconComponent iconType='errorInfo' />;
            case 'errorModal':
                return <IconComponent iconType='errorInfo' />;
            case 'successModal':
                return <IconComponent iconType='greenCheckmark' />;
            default:
                return <LGComponent type='girlHand' />;
        }
    };

    // Determine content based on modal type
    const renderContent = () => {
        switch (props.modalType) {
            case 'infoModal':
                return (
                    <>
                        <div className={styles.generalModalContainer}>
                            <div className={styles.generalIconWrapper}>
                                {getIcon(props.modalType)}
                            </div>
                            <div className={styles.generalBodyWrapper}>
                                <div className={styles.modalTitle}>
                                    <PageText type="modalTitle">{props.title}</PageText>
                                </div>
                                <div className={styles.modalDescription}>
                                    <PageText type="modalTertiaryTitle">{props.message}</PageText>
                                </div>
                                {/* {isModal?.errorList?.length > 0 && (
                                <ul className={styles.errorList}>
                                    {isModal.errorList.map((error, idx) => (
                                        <li key={idx}>
                                            <PageText>{error}</PageText>
                                        </li>
                                    ))}
                                </ul>
                            )} */}
                            </div>
                        </div>
                    </>
                );
            case 'errorModal':
                return (
                    <>
                        <div className={styles.generalModalContainer}>
                            <div className={styles.generalIconWrapper}>
                                {getIcon(props.modalType)}
                            </div>
                            <div className={styles.generalBodyWrapper}>
                                <div className={styles.modalTitle}>
                                    <PageText type="modalTitle">{props.title}</PageText>
                                </div>
                                <div className={styles.modalDescription}>
                                    <PageText type="modalTertiaryTitle">{props.message}</PageText>
                                </div>
                                {isModal?.errorList?.length > 0 && (
                                    <ul className={styles.errorList}>
                                        {isModal.errorList.map((error, idx) => (
                                            <li key={idx}>
                                                <PageText>{error}</PageText>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    </>
                );

            case 'successModal':
                return (
                    <div className={styles.generalModalContainer}>
                        <div className={styles.successIconWrapper}>
                            {getIcon(props.modalType)}
                        </div>
                        <div className={styles.generalBodyWrapper}>
                            <div className={styles.modalTitle}>
                                <PageText type="modalTitle">{props.title}</PageText>
                            </div>
                            <div className={styles.modalDescription}>
                                <PageText type="modalTertiaryTitle">{props.message}</PageText>
                            </div>
                         
                        </div>
                    </div>
                );
            case 'saveListModal':
                return (
                    <div className={styles.saveListModalContainer}>
                        <LGComponent type='girlHand' />
                        <PageText type="modalTitle">{props.title}</PageText>
                        <PageText type="modalTertiaryTitle">{props.message}</PageText>
                        <SaveListForm />
                    </div>
                );
            default:
                return (
                    <div>
                        <LGComponent type='girlHand' />
                        <PageText type="modalTitle">{props.title}</PageText>
                        <PageText type="modalTertiaryTitle">{props.message}</PageText>
                    </div>
                );
        }
    };

    const content = (

        <div className={styles.backdropContainer}>
            <div className={styles.overlayContainer}>

                <motion.div
                    variants={modalVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    // transition={{ type: "spring", stiffness: 60 }}
                    transition={{ duration: 0.5 }}
                    className={styles.modalContainer}
                >


                    <div className={styles.modalWrapper}>
                        {renderContent()}
                        <div className={styles.buttonsWrapper}>
                            {props.onCancel && (
                                <Button
                                    onClick={props.onCancel}
                                    buttonTextType="action"
                                    buttonStyleType="secondary"
                                >
                                    {props.cancelText}
                                </Button>
                            )}
                            {props.onConfirm && (
                                <Button
                                    onClick={props.onConfirm}
                                    buttonStyleType="primary"
                                >
                                    {props.confirmText}
                                </Button>
                            )}
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>

    );

    return ReactDOM.createPortal(content, document.getElementById('modal'));
};

const Modal = props => {
    return props.show ? <ModalContent {...props} /> : null;
};

export default Modal;