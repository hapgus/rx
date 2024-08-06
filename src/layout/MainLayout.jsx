import { MainNavigationComponent } from '../components/Navigation/NavigationComponent';
import styles from './Layout.module.css'
import { Outlet } from 'react-router';
import { useSearchHook } from '../hooks/search-hook';
import { useRoutingHook } from '../hooks/routing-hook';
import { SearchComponent } from '../components/Search/SearchComponent/SearchComponent';
import { ProductListDropdown } from '../components/ProductList/ProductListDropdown';
import { useEffect } from 'react';


export default function Layout() {

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

    return (
        <>
            {/* {isRoutingState.isProductListDropdownOpen && <ProductListDropdown />} */}

            {
                isMobileSearchState.isMobileSearch &&
                <SearchComponent type='mobile' />
            }
            <div className={styles.mainLayouContainer}>
                <div className={styles.mainLayoutNavWrapper}>
                    <MainNavigationComponent />
                </div>
                <div className={styles.mainLayoutBodyWrapper}>
                    <Outlet />
                </div>
                <div className={styles.mainLayoutFooterWrapper}>
                    <h1>footer</h1>
                </div>

            </div>
        </>
    );
}