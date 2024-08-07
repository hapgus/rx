import { MainNavigationComponent } from '../components/Navigation/NavigationComponent';
import styles from './Layout.module.css'
import { Outlet } from 'react-router';
import { useSearchHook } from '../hooks/search-hook';
import { useRoutingHook } from '../hooks/routing-hook';
import { useNotificationHook } from '../hooks/notification-hook';
import { SearchComponent } from '../components/Search/SearchComponent/SearchComponent';
import ProductGuideAlerts from '../components/Alert/Alert';
import Modal from '../components/Modal/Modal';

import { useEffect } from 'react';
import Footer from '../components/Footer/Footer';
import { PrintScreen } from '../components/Print/PrintScreen';



export default function Layout() {

    const { isAlert, setIsAlert, isModal } = useNotificationHook();
    const { isMobileSearchState } = useSearchHook();
    const { isRoutingState } = useRoutingHook();

    useEffect(() => {
        if (isMobileSearchState.isMobileSearch) {
            document.body.style.overflow = 'hidden';
        }

        // Clean up the effect
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileSearchState.isMobileSearch]);

    useEffect(() => {
        if (isRoutingState.isProductListDropdownOpen) {

            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isRoutingState.isProductListDropdownOpen]);

    useEffect(() => {
        if (isRoutingState.isMobileNavOpen) {
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isRoutingState.isMobileNavOpen]);

    useEffect(() => {
        let timeout;
        if (isAlert.show) {
            timeout = setTimeout(() => {
                setIsAlert({ ...isAlert, show: false });
            }, 2000000);
        }
        console.log('useEffect')
        return () => clearTimeout(timeout);

    }, [isAlert, setIsAlert]);


    return (
        <>
            <PrintScreen />

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
                    show={isModal.show}
                    title={isModal.title}
                    message={isModal.message}
                    confirmText={isModal.confirmText}
                    cancelText={isModal.cancelText}
                    onConfirm={isModal.onConfirm}
                    onCancel={isModal.onCancel}
                />
            }
            {
                isMobileSearchState.isMobileSearch &&
                <SearchComponent type='mobile' />
            }
            <div id={styles.main} className={styles.mainLayouContainer}>
                <div className={styles.mainLayoutNavWrapper}>
                    <MainNavigationComponent />
                </div>
                <div className={styles.mainLayoutBodyWrapper}>
                    <Outlet />
                </div>
                <div className={styles.mainLayoutFooterWrapper}>
                    <Footer />

                </div>

            </div>
        </>
    );
}