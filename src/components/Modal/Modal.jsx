import ReactDOM from "react-dom";
import styles from './Modal.module.css';
import { PageText } from "../Text/Text";
import { IconComponent } from "../Icon/IconComponent";
import { Button } from "../Button/Button";
import { LGComponent } from "../Character/LGComponent";
import { useNotificationHook } from "../../hooks/notification-hook";
import { SaveListForm } from "../AuthComponent/SaveListForm";
import { AnimatePresence, motion } from "framer-motion";
import { LGGif } from "../Character/LGGif";
import { AnimatedButton } from "../../hooks/use-framer-motion";



const ModalContent = props => {

    const modalVariants = {
        hidden: { opacity: 0, y: "-100%" },
        visible: { opacity: 1, y: "0%" },
        exit: { opacity: 0, y: "100%" }
    };
    const { isModal } = useNotificationHook();

    // Determine the icon based on modal type
    const getIcon = (modalType) => {
        switch (modalType) {
            case 'confirmationModal':
                return <IconComponent iconType='shield' />;
            case 'productConfirmationModal':
                return <IconComponent iconType='portalAppliances' />;
                case 'userConfirmationModal':
                return <IconComponent iconType='portalUsers' />;
            case 'warningModal':
                return <IconComponent iconType='cautionSymbol' />;
            case 'infoModal':
                return <IconComponent iconType='errorInfo' />;
            case 'errorModal':
                return <IconComponent iconType='errorInfo' />;
            case 'successModal':
                return <IconComponent iconType='greenCheckmark' />;
            case 'printModal':
                return <LGGif type="armHeartGirl" />;
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
                            <div className={styles.successIcon}>
                                {getIcon(props.modalType)}
                            </div>
                        </div>
                        <div className={styles.generalBodyWrapper}>
                            <div className={styles.printModalTextWrapper}>
                                <div className={styles.printModalTitle}>
                                    <PageText type="modalTitle">{props.title}</PageText>
                                </div>
                                <div className={styles.printModalDescription}>
                                    <PageText type="modalTertiaryTitle">{props.message}</PageText>
                                </div>
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
            case 'printModal':
                return (
                    <div >
                        <div >
                            <div className={styles.printGifWrapper}>
                                <div className={styles.gifImage}>
                                    {getIcon(props.modalType)}
                                </div>
                            </div>
                            <div className={styles.printModalTextWrapper}>
                                <div className={styles.printModalTitle}>
                                    <PageText type="modalTitle">{props.title}</PageText>
                                </div>

                                <div className={styles.printModalDescription}>
                                    <PageText type="modalTertiaryTitle">{props.message}</PageText>
                                </div>

                            </div>
                        </div>
                        <div className={styles.printButtonsWrapper} >
                            {props.onCancel && (
                                <AnimatedButton>
                                    <Button
                                        onClick={props.onCancel}
                                        buttonTextType="action"
                                        buttonStyleType="primary"
                                    >
                                        {props.cancelText}
                                    </Button>
                                </AnimatedButton>
                            )}
                            {props.onConfirm && (
                                <AnimatedButton>
                                    <Button
                                        onClick={props.onConfirm}
                                        buttonStyleType="secondary"
                                    >
                                        {props.confirmText}
                                    </Button>
                                </AnimatedButton>
                            )}
                        </div>
                    </div>

                );
            case 'warningModal':
                return (
                    <>
                        <div className={styles.generalModalContainer}>
                            <div className={styles.warningIconWrapper}>
                                <div className={styles.warningIcon}>
                                    {getIcon(props.modalType)}
                                </div>

                            </div>
                            <div className={styles.generalBodyWrapper}>
                                <div className={styles.printModalTextWrapper}>
                                    <div className={styles.printModalTitle}>
                                        <PageText type="modalTitle">{props.title}</PageText>
                                    </div>

                                    <div className={styles.printModalDescription}>
                                        <PageText type="modalTertiaryTitle">{props.message}</PageText>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </>
                );
            case 'confirmationModal':
                return (
                    <>
                        <div className={styles.generalModalContainer}>
                            <div className={styles.confirmationIconWrapper}>
                                <div className={styles.confirmationIcon}>
                                    {getIcon(props.modalType)}
                                </div>

                            </div>
                            <div className={styles.generalBodyWrapper}>
                                <div className={styles.printModalTextWrapper}>
                                    <div className={styles.printModalTitle}>
                                        <PageText type="modalTitle">{props.title}</PageText>
                                    </div>

                                    <div className={styles.printModalDescription}>
                                        <PageText type="modalTertiaryTitle">{props.message}</PageText>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </>
                );
                case 'productConfirmationModal':
                return (
                    <>
                        <div className={styles.generalModalContainer}>
                            <div className={styles.productConfirmationIconWrapper}>
                                <div className={styles.confirmationIcon}>
                                    {getIcon(props.modalType)}
                                </div>

                            </div>
                            <div className={styles.generalBodyWrapper}>
                                <div className={styles.printModalTextWrapper}>
                                    <div className={styles.printModalTitle}>
                                        <PageText type="modalTitle">{props.title}</PageText>
                                    </div>

                                    <div className={styles.printModalDescription}>
                                        <PageText type="modalTertiaryTitle">{props.message}</PageText>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </>
                );
                case 'userConfirmationModal':
                    return (
                        <>
                            <div className={styles.generalModalContainer}>
                                <div className={styles.productConfirmationIconWrapper}>
                                    <div className={styles.confirmationIcon}>
                                        {getIcon(props.modalType)}
                                    </div>
    
                                </div>
                                <div className={styles.generalBodyWrapper}>
                                    <div className={styles.printModalTextWrapper}>
                                        <div className={styles.printModalTitle}>
                                            <PageText type="modalTitle">{props.title}</PageText>
                                        </div>
    
                                        <div className={styles.printModalDescription}>
                                            <PageText type="modalTertiaryTitle">{props.message}</PageText>
                                        </div>
    
                                    </div>
                                </div>
                            </div>
                        </>
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


                    {props.modalType !== 'printModal'
                        ?
                        (
                            <div className={styles.renderModalContainer}>
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
                                            buttonStyleType="primaryAction"
                                        >
                                            {props.confirmText}
                                        </Button>
                                    )}
                                </div>


                            </div>
                        )
                        :
                        (
                            <div className={styles.printModalRenderedContainer}>
                                {renderContent()}
                            </div>
                        )
                    }
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