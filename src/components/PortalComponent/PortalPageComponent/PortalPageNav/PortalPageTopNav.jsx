import styles from './PortalPageTopNav.module.css';
import LinkedLogo from '../../../Logo/LinkedLogo';
import { IconComponent } from '../../../Icon/IconComponent';
import { LinkComponent } from '../../../Links/LinkComponent';
import { PageText } from '../../../Text/Text';
import { useAuthUser, useLogout, useAuth } from '../../../../hooks/use-auth-hooks';
import { useRoutingHook } from '../../../../hooks/use-routing-hooks';
import { RouteLinks } from '../../../../utils/helper-functions';

import Overlay from '../../../Overlay/Overlay';
import { GridSystem } from '../../../GridSystem/GridSystem';
import { useLinkConfig } from '../../../../hooks/use-link-config-hooks';

export const PortalPageTopNav = () => {
    const { portalAdminUserLinks, portalDashLinks, portalProductLinks, portalSuperAdminUserLinks, portalWebsiteLinks, portalAdminProfileLinks } = useLinkConfig();
    const decodedToken = useAuthUser();

    const authorizedUser = {
        firstname: decodedToken.firstName,
        lastname: decodedToken.lastName
    }


    const { isSuperAdmin } = useAuth();

    const handleLogoutAdmin = useLogout();


    const { setIsRoutingState, isRoutingState } = useRoutingHook();

    const handleToggleMobilePortalNavMenu = () => {
        setIsRoutingState(prevState => ({ ...prevState, isMobilePortalNavOpen: !prevState.isMobilePortalNavOpen }))
    }
    const handleToggleMobilePortalOverviewMenu = () => {
        setIsRoutingState(prevState => ({ ...prevState, isMobilePortalNavOverviewMenuOpen: !prevState.isMobilePortalNavOverviewMenuOpen }))
    }
    const handleToggleMobilePortalProductsMenu = () => {
        setIsRoutingState(prevState => ({ ...prevState, isMobilePortalNavProductsMenuOpen: !prevState.isMobilePortalNavProductsMenuOpen }))
    }
    const handleToggleMobilePortalUsersMenu = () => {
        setIsRoutingState(prevState => ({ ...prevState, isMobilePortalNavUsersMenuOpen: !prevState.isMobilePortalNavUsersMenuOpen }))
    }
    const handleToggleMobilePortalWebsitesMenu = () => {
        setIsRoutingState(prevState => ({ ...prevState, isMobilePortalNavWebsitesMenuOpen: !prevState.isMobilePortalNavWebsitesMenuOpen }))
    }
    const handleToggleMobilePortalAccountMenu = () => {
        setIsRoutingState(prevState => ({ ...prevState, isMobilePortalNavAccountMenuOpen: !prevState.isMobilePortalNavAccountMenuOpen }))
    }

    return (
        <>
            <div className={styles.portalTopbarNavigationContainer}>
                <div className={styles.logoWrapper}>
                    <LinkedLogo portalLogo={true} />
                </div>
                <div className={styles.iconsWrapper}>
                <div className={styles.topNavUserAccount}>
                        <LinkComponent href={`/profile`}>
                            <div className={styles.userAccountWrapper}>
                                <div className={styles.userDetails}>
                                    <PageText type='footerMenuItem'>{authorizedUser.firstname}</PageText>
                                    <PageText type='footerMenuItem'>{authorizedUser.lastname}</PageText>

                                </div>
                                <div className={styles.accountIcon}>
                                    <IconComponent iconType='redUser' />
                                    {/* <IconComponent iconType='portalUser' /> */}
                                </div>

                            </div>
                        </LinkComponent>
                    </div>
                    <div className={styles.logoutWrapper} onClick={handleLogoutAdmin}>
                        <PageText type='footerMenuItem'>Logout</PageText>
                        <div className={styles.logoutIconWrapper}>
                            <IconComponent iconType='logout' />
                        </div>
                    </div>

                    <div className={styles.portalBurgerWrapper} >
                        <div className={styles.icon}>
                            <IconComponent onClick={handleToggleMobilePortalNavMenu} iconType={isRoutingState.isPortalNavOpen === true ? 'xClose' : 'portalBurger'} />

                        </div>
                    </div>

                </div>
            </div>
            {isRoutingState.isMobilePortalNavOpen &&
                <Overlay containerMarginTop='8rem'>
                    <GridSystem>
                        <div className={styles.portalMobileNavDropdownMenuWrapper}>
                            <div className={styles.portalMobileNavBackIconWrapper}>
                                <div className={styles.icon}>
                                    <IconComponent onClick={handleToggleMobilePortalNavMenu} iconType='leftChevron' />
                                </div>
                            </div>
                            <div id={styles.firstHeader} className={styles.mobileMenuHeader} >
                                <div onClick={handleToggleMobilePortalOverviewMenu} className={styles.headerText}>
                                    <div className={styles.headerIconTextGroup}>
                                        <div className={styles.icon}>
                                            <IconComponent iconType='portalOverview' />
                                        </div>
                                        <div>
                                            <PageText type='mobileNavTitle'>Overview</PageText>
                                        </div>
                                    </div>

                                    <div className={styles.icon}>
                                        <IconComponent iconType='rightChevron' />
                                    </div>
                                </div>
                            </div>
                            <div className={styles.mobileMenuHeader} >
                                <div onClick={handleToggleMobilePortalProductsMenu} className={styles.headerText}>
                                    <div className={styles.headerIconTextGroup}>
                                        <div className={styles.icon}>
                                            <IconComponent iconType='portalAppliances' />
                                        </div>
                                        <div>
                                            <PageText type='mobileNavTitle'>Products</PageText>
                                        </div>
                                    </div>

                                    <div className={styles.icon}>
                                        <IconComponent iconType='rightChevron' />
                                    </div>
                                </div>
                            </div>
                            <div className={styles.mobileMenuHeader} >
                                <div onClick={handleToggleMobilePortalUsersMenu} className={styles.headerText}>
                                    <div className={styles.headerIconTextGroup}>
                                        <div className={styles.icon}>
                                            <IconComponent iconType='portalUsers' />
                                        </div>
                                        <div>
                                            <PageText type='mobileNavTitle'>Users</PageText>
                                        </div>
                                    </div>

                                    <div className={styles.icon}>
                                        <IconComponent iconType='rightChevron' />
                                    </div>
                                </div>
                            </div>
                            <div className={styles.mobileMenuHeader} >
                                <div onClick={handleToggleMobilePortalWebsitesMenu} className={styles.headerText}>
                                    <div className={styles.headerIconTextGroup}>
                                        <div className={styles.icon}>
                                            <IconComponent iconType='portalWebsites' />
                                        </div>
                                        <div>
                                            <PageText type='mobileNavTitle'>Websites</PageText>
                                        </div>
                                    </div>

                                    <div className={styles.icon}>
                                        <IconComponent iconType='rightChevron' />
                                    </div>
                                </div>

                            </div>
                            <div className={styles.mobileMenuHeader} >
                                <div onClick={handleToggleMobilePortalAccountMenu} className={styles.headerText}>
                                    <div className={styles.headerIconTextGroup}>
                                        <div className={styles.icon}>
                                            <IconComponent iconType='userAccount' />
                                        </div>
                                        <div>
                                            <PageText type='mobileNavTitle'>My Profile</PageText>
                                        </div>
                                    </div>

                                    <div className={styles.icon}>
                                        <IconComponent iconType='rightChevron' />
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className={styles.mobileMenuHeader} >
                            <div onClick={handleLogoutAdmin} className={styles.headerText}>
                                <div className={styles.headerIconTextGroup}>
                                    <div className={styles.logoutIcon}>
                                        <IconComponent iconType='logout' />
                                    </div>
                                    <div>
                                        <PageText type='mobileNavTitle'>Logout</PageText>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </GridSystem>
                </Overlay>
            }
            {
                isRoutingState.isMobilePortalNavOverviewMenuOpen &&
                <Overlay containerMarginTop='8rem'>
                    <GridSystem  >
                        <div className={styles.mobileNavDropdownMenuWrapper}>
                            <div className={styles.mobileMenuBackIconWrapper}>
                                <div className={styles.icon}>
                                    <IconComponent onClick={handleToggleMobilePortalOverviewMenu} iconType='leftChevron' />
                                </div>
                            </div>

                            <div className={styles.mobileDropdownContent}>
                                <ul className={styles.mobileNavOptionsList}>{RouteLinks(portalDashLinks)}</ul>
                            </div>
                        </div>
                    </GridSystem>
                </Overlay>
            }
            {
                isRoutingState.isMobilePortalNavProductsMenuOpen &&
                <Overlay containerMarginTop='8rem'>
                    <GridSystem >
                        <div className={styles.mobileNavDropdownMenuWrapper}>
                            <div className={styles.mobileMenuBackIconWrapper}>
                                <div className={styles.icon}>
                                    <IconComponent onClick={handleToggleMobilePortalProductsMenu} iconType='leftChevron' />
                                </div>
                            </div>

                            <div className={styles.mobileDropdownContent}>
                                <ul className={styles.mobileNavOptionsList}>{RouteLinks(portalProductLinks)}</ul>
                            </div>
                        </div>
                    </GridSystem>
                </Overlay>
            }
            {
                isRoutingState.isMobilePortalNavUsersMenuOpen &&
                <Overlay containerMarginTop='8rem'>
                    <GridSystem  >
                        <div className={styles.mobileNavDropdownMenuWrapper}>
                            <div className={styles.mobileMenuBackIconWrapper}>
                                <div className={styles.icon}>
                                    <IconComponent onClick={handleToggleMobilePortalUsersMenu} iconType='leftChevron' />
                                </div>
                            </div>

                            <div className={styles.mobileDropdownContent}>
                                <ul className={styles.mobileNavOptionsList}>{RouteLinks(
                                    isSuperAdmin ? portalSuperAdminUserLinks : portalAdminUserLinks
                                )}
                                </ul>

                            </div>
                        </div>
                    </GridSystem>
                </Overlay>
            }
            {
                isRoutingState.isMobilePortalNavWebsitesMenuOpen &&
                <Overlay containerMarginTop='8rem'>
                    <GridSystem >
                        <div className={styles.mobileNavDropdownMenuWrapper}>
                            <div className={styles.mobileMenuBackIconWrapper}>
                                <div className={styles.icon}>
                                    <IconComponent onClick={handleToggleMobilePortalWebsitesMenu} iconType='leftChevron' />
                                </div>
                            </div>

                            <div className={styles.mobileDropdownContent}>
                                <ul className={styles.mobileNavOptionsList}>
                                    {RouteLinks(portalWebsiteLinks)}
                                </ul>

                            </div>
                        </div>
                    </GridSystem>
                </Overlay>
            }
            {
                isRoutingState.isMobilePortalNavAccountMenuOpen &&
                <Overlay containerMarginTop='8rem'>
                    <GridSystem >
                        <div className={styles.mobileNavDropdownMenuWrapper}>
                            <div className={styles.mobileMenuBackIconWrapper}>
                                <div className={styles.icon}>
                                    <IconComponent onClick={handleToggleMobilePortalAccountMenu} iconType='leftChevron' />
                                </div>
                            </div>

                            <div className={styles.mobileDropdownContent}>
                                <ul className={styles.mobileNavOptionsList}>
                                    {RouteLinks(portalAdminProfileLinks)}
                                </ul>

                            </div>
                        </div>
                    </GridSystem>
                </Overlay>
            }
        </>
    );
}