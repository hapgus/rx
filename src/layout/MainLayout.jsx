import { MainNavigationComponent } from '../components/Navigation/NavigationComponent';
import styles from './Layout.module.css'
import { Outlet } from 'react-router';
import { useSearchHook } from '../hooks/search-hook';
import { SearchComponent } from '../components/Search/SearchComponent/SearchComponent';


export default function Layout() {

    const { isMobileSearchState } = useSearchHook();

    return (
        <>


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