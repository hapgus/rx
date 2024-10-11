import styles from './PortalPageSideNav.module.css';

import { LinkComponent } from '../../../Links/LinkComponent';
import { PageText } from '../../../Text/Text';
import { useAuth } from '../../../../hooks/use-auth-hooks';
import { useCurrentLocation } from '../../../../hooks/use-routing-hooks';

import { SidebarDropdownComponent } from '../../../PageComponent/DropdownComponent';
import { useState } from 'react';



import { useLinkConfig } from '../../../../hooks/use-link-config-hooks';
import { NavMenuHeader } from '../PortalNavMenuHeader/PortalNavMenuHeader';

export const PortalPageSideNav = () => {

    const location = useCurrentLocation();
    const { portalDashLinks, portalWebsiteLinks, portalProductLinks, portalAdminUserLinks, portalSuperAdminUserLinks} = useLinkConfig();

    const { isSuperAdmin } = useAuth();

    const [dropdownState, setDropdownState] = useState({
        dashboard: true,
        products: true,
        users: true,
        // form: true,
        // table: true,
        website: true,
    });

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
    // const handleLinkClick = () => {
    //     setDropdownState({
    //         dashboard: false,
    //         form: false,
    //         table: false,
    //         website: false,
    //     });
    // };

 
    const renderDropdown = (headerText, links) => (
        <SidebarDropdownComponent
            condition={dropdownState[headerText.toLowerCase()]} // This checks the state for the dropdown
            conditionChildren={
                <ul className={styles.dropdownList}>
                    {links.map(link => (
                        <li 
                        
                        key={link.href} style={{
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

                  
                </div>
            </div>
        </div>
    );
};
