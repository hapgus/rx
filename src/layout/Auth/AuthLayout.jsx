import Loader from "../../components/Loader/Loader";
import Modal from "../../components/Modal/Modal";
import ProductGuideAlerts from "../../components/Alert/Alert";
import { useNotificationHook } from "../../hooks/notification-hook";
import { useRoutingHook } from "../../hooks/routing-hook";
import styles from './AuthLayout.module.css';
import { Outlet } from "react-router";
import { useDataContext } from "../../hooks/data-hook";

export default function AuthLayout() {
    const { isAlert, setIsAlert, isModal } = useNotificationHook();
    const { isRoutingState } = useRoutingHook();
  

    return (
        <>

            {isRoutingState.isLoading && <Loader />}

            {isAlert.show && (
                <ProductGuideAlerts
                    onClick={() => setIsAlert({ ...isAlert, show: false })}
                    show={isAlert.show}
                    alertMessage={isAlert.message}
                    type={isAlert.type}
                />
            )}
            {isModal.show &&
                <Modal
                    modalType={isModal.modalType}
                    errorList={isModal.errorList}
                    show={isModal.show}
                    title={isModal.title}
                    message={isModal.message}
                    confirmText={isModal.confirmText}
                    cancelText={isModal.cancelText}
                    onConfirm={isModal.onConfirm}
                    onCancel={isModal.onCancel}
                />

            }

            <div id={styles.main} className={styles.authLayouContainer}>

                <div className={styles.authLayoutBodyWrapper}>
                    <Outlet />
                </div>


            </div>
        </>
    );
}