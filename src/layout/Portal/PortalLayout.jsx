import { Outlet } from 'react-router';
import styles from './PortalLayout.module.css';
import Modal from '../../components/Modal/Modal';
import { useNotificationHook } from '../../hooks/notification-hook';
import { PortalPageTopNav } from '../../components/PortalComponent/PortalPageComponent/PortalPageNav/PortalPageTopNav';
import { PortalPageSideNav } from '../../components/PortalComponent/PortalPageComponent/PortalSideNav/PortalPageSideNav';
import Loader from '../../components/Loader/Loader';
import ProductGuideAlerts from '../../components/Alert/Alert';
import { useRoutingHook } from '../../hooks/routing-hook';
import { useEffect } from 'react';
import { useDataContext } from '../../hooks/data-hook';



export default function PortalLayout() {

    const { isAlert, setIsAlert, isModal, setIsModal } = useNotificationHook();
    const { isManagedDataState } = useDataContext()
    const { isRoutingState } = useRoutingHook();

    console.log('auth lay', isRoutingState)

    useEffect(() => {
        console.log('run effect')
        if (isRoutingState.isMobilePortalNavOpen) {
            document.body.style.overflow = 'hidden';
            console.log('run effect - on portal mobile nav')
        }
        return () => {
            console.log('run effect - on portal mobile nav unset')
            document.body.style.overflow = 'unset';
        };

    }, [isRoutingState.isMobilePortalNavOpen])

    return (
        <>
            {isManagedDataState.loading === true && <Loader />}

            {isModal.show &&

                <Modal
                    modalType={isModal.modalType}
                    iconType={isModal.iconType}
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
            {isAlert.show && (
                <ProductGuideAlerts
                    onClick={() => setIsAlert({ ...isAlert, show: false })}
                    show={isAlert.show}
                    alertMessage={isAlert.message}
                    type={isAlert.type}
                />
            )}
            <div className={styles.portalContainer}>
                <div className={styles.portalWrapper}>
                    <div className={styles.portalTopNavWrapper}>
                        <PortalPageTopNav />
                    </div>
                    <div className={styles.portalSideNavWrapper}>
                        <PortalPageSideNav />
                    </div>
                    <main className={styles.portalLayoutChildrenWrapper}>
                        <Outlet />
                    </main>
                </div>
            </div>

        </>
    );
}

