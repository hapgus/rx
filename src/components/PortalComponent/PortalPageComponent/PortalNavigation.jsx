import { useState } from "react";
import { IconComponent } from "../../Icon/IconComponent";
import Logo from "../../Logo/Logo";

import { SidebarDropdownComponent } from "../../PageComponent/DropdownComponent";
import styles from './PortalNavigation.module.css';

import {
    portalDashLinks,
    portalFormLinks,
    portalTableLinks,
    superPortalTableLinks,
    portalWebsiteLinks,
    portalLink,
    superPortalFormLinks
} from "../../../utils/link-helper";

import { PageText } from "../../Text/Text";
import { LinkComponent } from "../../Links/LinkComponent";
import { useLocation } from 'react-router-dom';
import { NavLink } from "react-router-dom";

import { useAuth } from "../../../hooks/auth-hook";


export const PortalTopbarNavigation = () => {


    const publicUrl = process.env.PUBLIC_URL;




    return (
        <div className={styles.portalTopbarNavigationContainer}>
            <div>
                <LinkComponent href={portalLink} >
                    <Logo />
                </LinkComponent>

            </div>
            <LinkComponent href={`${publicUrl}/profile`}>
                <div className={styles.iconWrapper}>

                    <IconComponent iconType='userAccount' />
                    <div className={styles.accountDetails}>
                        <PageText type="bodyTertiaryTitleBold">Andre</PageText>
                        <PageText type="bodyDescription">Admin</PageText>
                    </div>
                </div>
            </LinkComponent>
        </div>
    );
}

const NavMenuHeader = ({ onClick, headerText, iconStyleType, iconType, isOpen }) => {
    return (
        <div className={styles.navMenuHeaderWrapper}>
            <div className={styles.headerTextIconGroup}>
                <IconComponent svgFill='black' onClick={() => onClick(headerText)} iconType={iconType} iconStyleType={iconStyleType} />
                <PageText type='navTitleText'>{headerText}</PageText>
            </div>
            <div className={styles.headerChevronIcon}>
                {isOpen ? (
                    <IconComponent onClick={() => onClick(headerText)} iconType='upChevron' iconStyleType='chevronIcon' />
                ) : (
                    <IconComponent onClick={() => onClick(headerText)} iconType='downChevron' iconStyleType='chevronIcon' />
                )}
            </div>
        </div>
    );
}



export const PortalSidebarNavigation = () => {
    const location = useLocation();
    const { isAuthenticated, isSuperAdmin } = useAuth();
    const [dropdownState, setDropdownState] = useState({
        dashboard: true,
        form: true,
        table: true,
        website: false,
    });

    const handleDropdownClick = (headerText) => {
        setDropdownState(prevState => {
            const newState = { ...prevState };
            for (const key in newState) {
                newState[key] = key === headerText.toLowerCase() ? !prevState[key] : false;
            }
            return newState;
        });
    };

    const handleLinkClick = () => {
        setDropdownState({
            dashboard: false,
            form: false,
            table: false,
            // website: false,
        });
    };

    const renderDropdown = (headerText, links) => (
        <SidebarDropdownComponent
            condition={dropdownState[headerText.toLowerCase()]}
            conditionChildren={
                <ul className={styles.dropdownList}>
                    {links.map(link => {

                        return (
                            <li key={link.href} style={{
                                backgroundColor: location.pathname === link.href ? '#ecc9c9' : 'transparent',
                                boxShadow: location.pathname === link.href ? '3px 0 #EA1917' : 'none', // Conditional box shadow
                            }}>
                                <NavLink to={link.href}>
                                    <PageText type='footerMenuItem' >{link.text}</PageText>
                                </NavLink>

                                {/* <a href={link.href} onClick={handleLinkClick}>{link.text}</a> */}
                            </li>
                        )

                    })}
                </ul >
            }
        />
    );

    const formLinks = isSuperAdmin === true ? superPortalFormLinks : portalFormLinks;
    const tableLinks = isSuperAdmin === true ? superPortalTableLinks : portalTableLinks;

    return (
        <div className={styles.sidebarContainer}>
            <div className={styles.sidebarWrapper}>
                <div className={styles.sidebarContent}>

                    <NavMenuHeader
                        headerText='Dashboard'
                        iconType='dashboard'
                        iconStyleType='generalIcon'
                        onClick={handleDropdownClick}
                        isOpen={dropdownState.dashboard}
                    />

                    {renderDropdown('Dashboard', portalDashLinks)}

                    <NavMenuHeader
                        headerText='Form'
                        iconType='form'
                        iconStyleType='generalIcon'
                        onClick={handleDropdownClick}
                        isOpen={dropdownState.form}
                    />
                    {renderDropdown('Form', formLinks)}

                    <NavMenuHeader
                        headerText='Table'
                        iconType='table'
                        iconStyleType='generalIcon'
                        onClick={handleDropdownClick}
                        isOpen={dropdownState.table}
                    />
                    {renderDropdown('Table', tableLinks)}

                    <NavMenuHeader
                        headerText='Websites'
                        iconType='greenCheckmark'
                        iconStyleType='generalIcon'
                        onClick={handleDropdownClick}
                        isOpen={dropdownState.website}
                    />
                    {renderDropdown('Table', portalWebsiteLinks)}
                    {/* Uncomment and add links for the Website section if needed */}
                    {/* <NavMenuHeader
                        headerText='Website'
                        iconType='website'
                        iconStyleType='generalIcon'
                        onClick={handleDropdownClick}
                        isOpen={dropdownState.website}
                    />
                    {renderDropdown('Website', websiteLinks)} */}
                </div>
            </div>
        </div>
    );
};
