

import styles from './PortalLayout.module.css'
import { Outlet } from 'react-router';

import ProductGuideAlerts from '../../components/Alert/Alert';
import Modal from '../../components/Modal/Modal';

import Loader from '../../components/Loader/Loader';
import { useNotificationHook } from '../../hooks/notification-hook';
import { useRoutingHook } from '../../hooks/routing-hook';
import {PortalSidebarNavigation, PortalTopbarNavigation} from '../../components/PortalComponent/PortalPageComponent/PortalNavigation';
export default function PortalLayout() {

    const { isAlert, setIsAlert, isModal, setIsModal } = useNotificationHook();
    const {isRoutingState}=useRoutingHook();

    return (
        <>
          {isRoutingState.isLoading && <Loader />}

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
            {isAlert.show &&
                <ProductGuideAlerts
                    onClick={() => setIsAlert({ ...isAlert, show: false })}
                    show={isAlert.show}
                    alertMessage={isAlert.message}
                    type={isAlert.type}
                />
            }

            {/* <Backdrop/> */}
            <div className={styles.flexContainer}>
                <div className={styles.portalPageContainer} >
                    <div className={styles.portalLayoutSideNavWrapper}><PortalSidebarNavigation /></div>
                    <div className={styles.portalLayoutTopNavWrapper}><PortalTopbarNavigation /></div>
                    <main className={styles.portalLayoutChildrenWrapper}>
                        <Outlet />
                    </main>

                </div>
            </div>
        </>
    );
}

