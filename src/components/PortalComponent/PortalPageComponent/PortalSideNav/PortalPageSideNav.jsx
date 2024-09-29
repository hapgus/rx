import styles from './PortalPageSideNav.module.css';

import { LinkComponent } from '../../../Links/LinkComponent';
import { PageText } from '../../../Text/Text';
import { useAuth, useLogout } from '../../../../hooks/auth-hook';
import { useCurrentLocation } from '../../../../hooks/location-hook';
import { SidebarDropdownComponent } from '../../../PageComponent/DropdownComponent';
import { useState } from 'react';


import {
    portalDashLinks,
    portalFormLinks,
    portalTableLinks,
    superPortalTableLinks,
    portalWebsiteLinks,
    superPortalFormLinks,
    portalProductLinks,

    portalAdminUserLinks,
    portalSuperAdminUserLinks
} from '../../../../utils/link-config';



import { NavMenuHeader } from '../PortalNavMenuHeader/PortalNavMenuHeader';
import { IconComponent } from '../../../Icon/IconComponent';
export const PortalPageSideNav = () => {

    const location = useCurrentLocation();

    const { isSuperAdmin } = useAuth();

    const [dropdownState, setDropdownState] = useState({
        dashboard: true,
        products: true,
        users: true,
        // form: true,
        // table: true,
        website: true,
    });
    console.log(dropdownState)
    // ONE DROPDOWN OPEN AT ONCE
    // const handleDropdownClick = (headerText) => {
    //     setDropdownState(prevState => {
    //         const newState = { ...prevState };
    //         for (const key in newState) {
    //             // Toggle only the clicked dropdown, keep others closed
    //             newState[key] = key === headerText.toLowerCase() ? !prevState[key] : false;
    //         }
    //         return newState;
    //     });
    // };
    // ALL DROPDOWNS OPEN AT ONCE
    const handleDropdownClick = (headerText) => {
        setDropdownState(prevState => ({
            ...prevState,
            [headerText.toLowerCase()]: !prevState[headerText.toLowerCase()]
        }));
    };
    const handleLinkClick = () => {
        setDropdownState({
            dashboard: false,
            form: false,
            table: false,
            website: false,
        });
    };

    // const renderDropdown = (headerText, links) => (
    //     <SidebarDropdownComponent
    //         condition={dropdownState[headerText.toLowerCase()]}
    //         conditionChildren={
    //             <ul className={styles.dropdownList}>
    //                 {links.map(link => {
    //                     console.log(link.href)
    //                     return (
    //                         <li key={link.href} style={{
    //                             backgroundColor: location.pathname === link.href ? '#ecc9c9' : 'transparent',
    //                             boxShadow: location.pathname === link.href ? '3px 0 #EA1917' : 'none', // Conditional box shadow
    //                         }}>
    //                             <LinkComponent href={link.href}>
    //                                 <PageText type='footerMenuItem' >{link.text}</PageText>
    //                             </LinkComponent>


    //                         </li>
    //                     )

    //                 })}
    //             </ul >
    //         }
    //     />
    // );
    const renderDropdown = (headerText, links) => (
        <SidebarDropdownComponent
            condition={dropdownState[headerText.toLowerCase()]} // This checks the state for the dropdown
            conditionChildren={
                <ul className={styles.dropdownList}>
                    {links.map(link => (
                        <li key={link.href} style={{
                            backgroundColor: location.pathname === link.href ? '#ecc9c9' : 'transparent',
                            boxShadow: location.pathname === link.href ? '3px 0 #EA1917' : 'none',
                        }}>
                            <LinkComponent href={link.href}>
                                <PageText type='footerMenuItem'>
                                    {link.text}
                                </PageText>
                            </LinkComponent>
                        </li>
                    ))}
                </ul>
            }
        />
    );

    const formLinks = isSuperAdmin === true ? superPortalFormLinks : portalFormLinks;
    const tableLinks = isSuperAdmin === true ? superPortalTableLinks : portalTableLinks;

    const portalUserLink = isSuperAdmin === true ? portalSuperAdminUserLinks : portalAdminUserLinks

    return (
        <div className={styles.sidebarContainer}>
            <div className={styles.sidebarWrapper}>
                <div className={styles.sidebarContent}>

                    <NavMenuHeader
                        headerText='Dashboard'
                        iconType='portalOverview'
                        onClick={handleDropdownClick}
                        isOpen={dropdownState.dashboard}
                    />
                    {renderDropdown('Dashboard', portalDashLinks)}

                    <NavMenuHeader
                        headerText='Products'
                        iconType='portalAppliances'
                        onClick={handleDropdownClick}
                        isOpen={dropdownState.products}
                    />
                    {renderDropdown('Products', portalProductLinks)}

                    <NavMenuHeader
                        headerText='Users'
                        iconType='portalUsers'
                        onClick={handleDropdownClick}
                        isOpen={dropdownState.users}
                    />

                    {renderDropdown('Users', portalUserLink)}


                    <NavMenuHeader
                        headerText='Product Guide Websites'
                        iconType='portalWebsites'
                        iconStyleType='generalIcon'
                        onClick={handleDropdownClick}
                        isOpen={dropdownState.website}
                    />
                    {renderDropdown('Website', portalWebsiteLinks)}

                    {/* <div className={styles.logoutLinkWrapper} onClick={logout}>
                        <div className={styles.logoutHeaderIconTextGroup}>
                            <div className={styles.icon}>
                                <IconComponent iconType='logout' />
                            </div>
                            <div><PageText type='mobileNavTitle'>Logout</PageText></div>

                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};
