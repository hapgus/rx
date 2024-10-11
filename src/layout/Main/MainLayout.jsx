import { Outlet } from 'react-router';

import styles from './MainLayout.module.css';
import { AnimatePresence } from 'framer-motion';
import Modal from '../../components/Modal/Modal';

import Footer from '../../components/Footer/Footer';
import { useSearchHook } from '../../hooks/use-search-hooks';
import { useRoutingHook } from '../../hooks/use-routing-hooks';
import { useNotificationHook } from '../../hooks/use-notification-hooks';
import { Navigation } from '../../components/Navigation/Navigation';
import ProductGuideAlerts from '../../components/Alert/Alert';

import { ProductListDropdown } from '../../components/ProductList/ProductListDropdown';
import { initializeGA, logPageView } from '../../utils/google-analytics';

import { SearchComponent } from '../../components/Search/SearchComponent/SearchComponent';
import { PrintScreen } from '../../components/Print/PrintScreen';
import Loader from '../../components/Loader/Loader';

import { useEffect } from 'react';
import { useCurrentLocation } from '../../hooks/use-routing-hooks';

import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
export default function Layout() {

    const location = useCurrentLocation()
    const { isAlert, setIsAlert, isModal } = useNotificationHook();
    const { isMobileSearchState, isDesktopSearchState, isHomepageSearchState } = useSearchHook();
    const { isRoutingState, setIsRoutingState } = useRoutingHook();


    useEffect(() => {

        initializeGA();
        console.log('init ga from main useEffect')
    }, []);

    useEffect(() => {
        console.log('log page view from main useEffect')
        logPageView(location);  // Pass the entire location object
    }, [location]);

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
            }, 2000);
        }
        return () => clearTimeout(timeout);

    }, [isAlert, setIsAlert]);

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
            <PrintScreen />

            {isRoutingState.isLoading && <Loader />}
            {isRoutingState.isShowScrollToTopButton && <ScrollToTop />}

            <AnimatePresence>
                {isRoutingState.isProductListDropdownOpen &&
                    <ProductListDropdown />
                }</AnimatePresence>
            <AnimatePresence>
                {
                    isAlert.show && (

                        <ProductGuideAlerts
                            onClick={() => setIsAlert({ ...isAlert, show: false })}
                            show={isAlert.show}
                            alertMessage={isAlert.message}
                            type={isAlert.type}
                        />

                    )}
            </AnimatePresence>
            {isModal.show &&
                <Modal
                    modalType={isModal.modalType}
                    iconType={isModal.iconType}
                    show={isModal.show}
                    title={isModal.title}
                    message={isModal.message}
                    formElements={isModal.formElements}
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
                    <Navigation />
                </div>

                <div className={styles.mainLayoutBodyWrapper}>
                    <Outlet />
                </div>
                <div className={styles.mainLayoutFooterWrapper}>
                    <Footer />
                </div>

            </div>

        </>

    )

}