import { Outlet } from 'react-router';
import styles from './PortalLayout.module.css';
import Modal from '../../components/Modal/Modal';
import { useNotificationHook } from '../../hooks/notification-hook';
import { PortalPageTopNav } from '../../components/PortalComponent/PortalPageComponent/PortalPageNav/PortalPageTopNav';
import { PortalPageSideNav } from '../../components/PortalComponent/PortalPageComponent/PortalSideNav/PortalPageSideNav';
import Loader from '../../components/Loader/Loader';
import ProductGuideAlerts from '../../components/Alert/Alert';
import { useRoutingHook } from '../../hooks/routing-hook';
import React, { useEffect, useCallback, useRef } from 'react';
import { useDataContext } from '../../hooks/data-hook';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import { useCurrentLocation } from '../../hooks/location-hook';
import { PortalFooter } from '../../components/PortalComponent/PortalPageComponent/PortalFooter/PortalFooter';

// Memoize components like Modal or Alert if necessary
const MemoizedModal = React.memo(Modal);
const MemoizedProductGuideAlerts = React.memo(ProductGuideAlerts);

export default function PortalLayout() {
    const { isAlert, setIsAlert, isModal } = useNotificationHook();
    const { isManagedDataState } = useDataContext();
    const { isRoutingState, setIsRoutingState } = useRoutingHook();

    const location = useCurrentLocation();

    // Cache the original overflow style
    const overflowRef = useRef(document.body.style.overflow);

    // Optimized useEffect to handle body overflow
    useEffect(() => {
        if (isRoutingState.isMobilePortalNavOpen) {
            overflowRef.current = document.body.style.overflow;
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.body.style.overflow = overflowRef.current;
        };
    }, [isRoutingState.isMobilePortalNavOpen]);

    // Debounced scroll-to-top
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        }, 100);

        return () => clearTimeout(timeoutId);
    }, [location]);

    // Optimize scroll listener to avoid adding/removing it on every location change
    useEffect(() => {
        const handleScroll = () => {
            setIsRoutingState(prevState => ({
                ...prevState,
                isShowScrollToTopButton: window.pageYOffset > 800,
            }));
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []); // Attach the scroll listener only once on mount

    // Memoize the alert click handler to avoid unnecessary re-creation
    const handleAlertClick = useCallback(() => {
        setIsAlert({ ...isAlert, show: false });
    }, [isAlert, setIsAlert]);

    return (
        <>
            {isManagedDataState.loading && <Loader />}
            {isRoutingState.isShowScrollToTopButton && <ScrollToTop />}

            {isModal.show && (
                <MemoizedModal
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
            )}

            {isAlert.show && (
                <MemoizedProductGuideAlerts
                    onClick={handleAlertClick}
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
                        <div>
                             <Outlet />
                        </div>           
                    </main>
                    <div className={styles.portalFooterWrapper}>
                        <PortalFooter />
                    </div>
                </div>
            </div>
        </>
    );
}
