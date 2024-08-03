import styles from './NavigationComponent.module.css';
// import { useSearchHook } from '../../hooks/search-hook';
import { IconComponent } from '../Icon/IconComponent';
import { GridSystem } from '../GridSystem/GridSystem';


const MobileNavComponent = () => {
    // const { setIsMobileSearchState } = useSearchHook();

    // const handleClick = () => {
    //     setIsMobileSearchState(prevState => ({ ...prevState, isSearchActive: !prevState.isSearchActive }))
    // }
    return (
        <div className={styles.mobileNavComponentContainer}>

          
                <div className={styles.mobileLogoWrapper}>
                    <img src='/hapg/assets/image/logos/lg-logo.webp' alt='lg red face logo' />
                </div>
                <div className={styles.mobileIconsWrapper}>

                    <IconComponent iconType='searchInput' />
                    <IconComponent iconType='userAccount' />
                    <IconComponent iconType='productList' />
                    <IconComponent iconType='mobileNavMenu' />
                </div>
         
            {/* <button onClick={handleClick}>Search Mobile</button> */}
        </div>
    );
}



const DesktopNavComponent = () => {
    return (
        <div className={styles.desktopNavComponentContainer}>
            <GridSystem containerBackgroundColor='purple'>
                <div className={styles.desktopLogoWrapper}>
                    <img src='/hapg/assets/image/logos/lg-logo.webp' alt='lg red face logo' />
                </div>
            </GridSystem>

        </div>
    );
};



export const MainNavigationComponent = () => {

    return (
        <nav className={styles.mainNavComponentContainer}>
            <div className={styles.desktopNavWrapper}>
                <DesktopNavComponent />
            </div>

            <div className={styles.mobileNavWrapper}>
                {/* <GridSystem > */}
                    <MobileNavComponent />
                {/* </GridSystem> */}
            </div>
        </nav>
    )
}