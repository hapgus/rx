import { NavigationComponent } from '../components/Navigation/NavigationComponent';
import styles from './Layout.module.css'
import { Outlet } from 'react-router';

export default function Layout() {

    return (
        <div className={styles.mainLayouContainer}>
            <div className={styles.mainLayoutNavWrapper}>
                <NavigationComponent/>
             
            </div>
            <div className={styles.mainLayoutBodyWrapper}>
                <Outlet />
            </div>
            <div className={styles.mainLayoutFooterWrapper}>
                <h1>footer</h1>
            </div>

        </div>
    )
}