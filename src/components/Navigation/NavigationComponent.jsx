import styles from './NavigationComponent.module.css';
import { useSearchHook } from '../../hooks/search-hook';
import { useRoutingHook } from '../../hooks/routing-hook';
import { IconComponent } from '../Icon/IconComponent';
import { GridSystem } from '../GridSystem/GridSystem';
import Overlay from '../Overlay/Overlay';
import { RouteLinks, navCategoryLinks, navSecondaryCategoryLinks, resourceLinks } from '../../utils/link-helper';
import { PageText } from '../Text/Text';
import { LinkComponent } from '../Links/LinkComponent';
import { SearchComponent } from '../Search/SearchComponent/SearchComponent';
import { ProductListDropdown } from '../ProductList/ProductListDropdown';


const MobileNavComponent = () => {

    const { setIsRoutingState, isRoutingState } = useRoutingHook();
    const { setIsMobileSearchState } = useSearchHook();

    const handleToggleMainMobileMenu = () => {
        setIsRoutingState(prevState => ({ ...prevState, isMobileNavOpen: !prevState.isMobileNavOpen }))
    }
    const handleToggleMobileAppliancesMenu = () => {
        setIsRoutingState(prevState => ({ ...prevState, isMobileCategoriesMenuOpen: !prevState.isMobileCategoriesMenuOpen }))
    }
    const handleToggleMobileResourcesMenu = () => {
        setIsRoutingState(prevState => ({ ...prevState, isMobileResourcesMenuOpen: !prevState.isMobileResourcesMenuOpen }))
    }
    const handleToggleMobileExclusiveMenu = () => {
        setIsRoutingState(prevState => ({ ...prevState, isMobileExclusiveMenuOpen: !prevState.isMobileExclusiveMenuOpen }))
    }



    const handleMobileSearchIconClick = () => {
        setIsMobileSearchState(prevState =>
            ({ ...prevState, isMobileSearch: true }))
    }

    const handleMobileProductListIconClick = () => {
        setIsRoutingState(prevState =>
            ({ ...prevState, isProductListDropdownOpen: !prevState.isProductListDropdownOpen }))

    }
    return (
        <div className={styles.mobileNavComponentContainer}>
            <div className={styles.mobileLogoWrapper}>
                <LinkComponent href='/hapg'>
                    <img loading='lazy' src='/hapg/assets/image/logos/lg-logo.webp' alt='lg red face logo' />
                </LinkComponent>
            </div>
            <div className={styles.mobileIconsWrapper}>
                <IconComponent onClick={handleMobileSearchIconClick} iconType='searchInput' />
                <IconComponent iconType='userAccount' />
                <IconComponent onClick={handleMobileProductListIconClick} iconType='productList' />
                {

                }
                <IconComponent onClick={handleToggleMainMobileMenu} iconType={isRoutingState.isMobileNavOpen === true ?'xClose':'mobileNavMenu'} />
            </div>
            {isRoutingState.isMobileNavOpen &&
                <Overlay containerMarginTop='5rem'>
                    <GridSystem>
                        <div className={styles.mobileMenuBackIconWrapper}>
                            <IconComponent onClick={handleToggleMainMobileMenu} iconType='leftChevron' />
                        </div>

                        <div className={styles.mobileMenuHeader} >
                            <PageText type='navTitleText'>Home Appliances</PageText>
                            <IconComponent onClick={handleToggleMobileAppliancesMenu} iconType='rightChevron' />
                        </div>
                        <div className={styles.mobileMenuHeader} >
                            <PageText type='navTitleText'>Resources</PageText>
                            <IconComponent onClick={handleToggleMobileResourcesMenu} iconType='rightChevron' />
                        </div>
                        <div className={styles.mobileMenuHeader} >
                            <PageText type='navTitleText'>Product Guide Exclusives</PageText>
                            <IconComponent onClick={handleToggleMobileExclusiveMenu} iconType='rightChevron' />
                        </div>

                    </GridSystem>
                </Overlay>
            }
            {
                isRoutingState.isMobileCategoriesMenuOpen &&
                <Overlay containerMarginTop='5rem'>
                    <GridSystem >
                        <div className={styles.mobileMenuBackIconWrapper}>
                            <IconComponent onClick={handleToggleMobileAppliancesMenu} iconType='leftChevron' />
                        </div>

                        <div className={styles.mobileDropdownContent}>
                            <ul className={styles.mobileNavOptionsList}>{RouteLinks(navCategoryLinks)}</ul>
                            <ul className={styles.mobileNavOptionsList}>{RouteLinks(navSecondaryCategoryLinks)}</ul>
                        </div>
                    </GridSystem>
                </Overlay>
            }
            {
                isRoutingState.isMobileResourcesMenuOpen &&
                <Overlay containerMarginTop='5rem'>
                    <GridSystem >
                        <div className={styles.mobileMenuBackIconWrapper}>
                            <IconComponent onClick={handleToggleMobileResourcesMenu} iconType='leftChevron' />
                        </div>
                        <div className={styles.mobileDropdownContent}>
                            <ul className={styles.mobileNavOptionsList}>{RouteLinks(resourceLinks)}</ul>

                        </div>
                    </GridSystem>
                </Overlay>
            }
            {
                isRoutingState.isMobileExclusiveMenuOpen &&
                <Overlay containerMarginTop='5rem'>
                    <GridSystem >
                        <div className={styles.mobileMenuBackIconWrapper}>
                            <IconComponent onClick={handleToggleMobileExclusiveMenu} iconType='leftChevron' />
                        </div>

                        <div className={styles.mobileDropdownContent}>
                            <ul className={styles.mobileNavOptionsList}>
                                <li>
                                    <LinkComponent
                                        linkText="Product List Builder"
                                        href='/hapg'
                                        type='trackedLink'
                                    />
                                </li>
                            </ul>
                        </div>
                    </GridSystem>
                </Overlay>
            }

            {/* <button onClick={handleClick}>Search Mobile</button> */}
        </div>
    );
}



const DesktopNavComponent = () => {
    const { setIsRoutingState } = useRoutingHook();
    const { setIsDesktopSearchState } = useSearchHook();

    const handleDesktopProductListIconClick = () => {
        setIsRoutingState(prevState =>
            ({ ...prevState, isProductListDropdownOpen: !prevState.isProductListDropdownOpen }))

    }
    return (
        <div className={styles.desktopNavComponentContainer}>
            <GridSystem>
                <div className={styles.desktopNavContainer}>
                    <div className={styles.desktopNavLogoWrapper}>
                        <LinkComponent href='/hapg'>
                            <img loading='lazy' src='/hapg/assets/image/logos/lg-logo.webp' alt='lg red face logo' />
                        </LinkComponent>
                    </div>
                    <section className={styles.desktopNavMenuWrapper}>
                        <div className={styles.desktopNavMenuHeader} >
                            <PageText type='navTitleText'>Home Appliances</PageText>
                        </div>
                        <div className={styles.desktopNavMenuHeader} >
                            <PageText
                                type='navTitleText'
                            >Resources</PageText>
                        </div>
                        <div className={styles.desktopNavMenuHeader} >
                            <PageText
                                type='navTitleText'
                            >Offers</PageText>
                        </div>
                    </section>

                    <section className={styles.desktopNavSearchWrapper}>
                        <SearchComponent type='desktop' />
                    </section>
                    <section className={styles.desktopNavMenuWrapper}>
                        <div className={styles.desktopNavIconsWrapper}>
                            <IconComponent onClick={handleDesktopProductListIconClick} iconType='productList' />
                            <IconComponent iconType='userAccount' />
                        </div>
                    </section>


                </div>
            </GridSystem>


        </div>
    );
};



export const MainNavigationComponent = () => {
    const { isRoutingState } = useRoutingHook();
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
            {isRoutingState.isProductListDropdownOpen && <ProductListDropdown />}
        </nav>
    )
}