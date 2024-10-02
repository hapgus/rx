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
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import { useCurrentLocation } from '../../hooks/location-hook';
import { LinkComponent } from '../../components/Links/LinkComponent';
import { PortalFooter } from '../../components/PortalComponent/PortalPageComponent/PortalFooter/PortalFooter';

export default function PortalLayout() {

    const { isAlert, setIsAlert, isModal, setIsModal } = useNotificationHook();
    const { isManagedDataState } = useDataContext()
    const { isRoutingState,setIsRoutingState } = useRoutingHook();

    const location = useCurrentLocation()

    useEffect(() => {
        
        if (isRoutingState.isMobilePortalNavOpen) {
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };

    }, [isRoutingState.isMobilePortalNavOpen])



    useEffect(() => {
        // window.scrollTo(0, 0);
        window.scrollTo({
            top: 0,
            // top: 0,
            behavior: 'smooth'
        });
    }, [location]);

    // TOTOPBUTTON
    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 800) {
                setIsRoutingState(prevState => ({ ...prevState, isShowScrollToTopButton: true }))
            } else {
                setIsRoutingState(prevState => ({ ...prevState, isShowScrollToTopButton: false }))
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [location]);
    return (
        <>
            {isManagedDataState.loading === true && <Loader />}
            {isRoutingState.isShowScrollToTopButton && <ScrollToTop />}

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
                    <div className={styles.portalFooterWrapper}>
                       <PortalFooter/>
                    </div>
                </div>
            </div>

        </>
    );
}

