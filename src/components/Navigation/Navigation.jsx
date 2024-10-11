import styles from "./Navigation.module.css";
import { useSearchHook } from '../../hooks/use-search-hooks';
import { IconComponent } from '../Icon/IconComponent';
import { GridSystem } from '../GridSystem/GridSystem';
import Overlay from '../Overlay/Overlay';
import { PageText } from '../Text/Text';

import { AnimatedComponent } from '../../hooks/use-framer-motion';
import { AnimatePresence, motion } from 'framer-motion';
import { useLinkConfig } from "../../hooks/use-link-config-hooks";
import { useRoutingHook } from "../../hooks/use-routing-hooks";
import LinkedLogo from "../Logo/LinkedLogo";
import {ProductListIcon} from "../ProductList/ProductListIcon"

import { RouteLinks } from "../../utils/helper-functions";

import {SearchComponent} from "../Search/SearchComponent/SearchComponent";


const MobileNav = () => {

    const {navSecondaryCategoryLinks,navCategoryLinks, allCategoryLink, stepUpChartLinks, resourceLinks, exclusiveLinks, accountLinks} = useLinkConfig();
    // ANMIMATION
    const linkVariants = {
        hidden: { opacity: 0, x: 100 },  // Start off-screen to the right
        visible: {
            opacity: 1,
            x: 0,  // Slide into view
            transition: {
                type: "spring",  // Use a spring-like motion
                stiffness: 150,   // Controls speed of the spring effect
                damping: 13,      // Smooths the spring stop
                // duration: 0.4     // Ensures a smooth animation time
            }
        },
        exit: {
            opacity: 0,
            x: 100,  // Slide out to the right when exiting
            transition: {
                ease: "easeInOut",
                // duration: 0.3     // Smooth exit duration
            }
        }
    };

    const { setIsRoutingState, isRoutingState } = useRoutingHook();
    const { setIsMobileSearchState } = useSearchHook();

    
    const handleToggleMainMobileMenu = () => {
        setIsRoutingState(prevState => (
            { ...prevState, isMobileNavOpen: !prevState.isMobileNavOpen }))
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
    const handleToggleMobileAccountMenu = () => {
        setIsRoutingState(prevState => ({
            ...prevState,
            isMobileAccountMenuOpen: !prevState.isMobileAccountMenuOpen
        }))
    }

    return (
        <div className={styles.mobileNavComponentContainer}>
            <div className={styles.mobileLogoWrapper}>
                <LinkedLogo />
              
            </div>
            <div className={styles.mobileIconsWrapper}>
                <IconComponent onClick={handleMobileSearchIconClick} iconType='searchInput' />
                <ProductListIcon />
                <IconComponent onClick={handleToggleMainMobileMenu} iconType={isRoutingState.isMobileNavOpen === true ? 'xClose' : 'mobileNavMenu'} />
            </div>
            <AnimatePresence>
                {isRoutingState.isMobileNavOpen &&
                    <Overlay containerMarginTop='7rem' slideDirection="right">
                        <GridSystem>
                            <div className={styles.mobileNavDropdownMenuWrapper}>
                                <motion.div variants={linkVariants} initial="hidden" animate="visible" exit="exit" className={styles.mobileMenuBackIconWrapper}>
                                    <IconComponent onClick={handleToggleMainMobileMenu} iconType='leftChevron' />
                                </motion.div>

                                <div id={styles.firstHeader} className={styles.mobileMenuHeader} >

                                    <motion.div variants={linkVariants} initial="hidden" animate="visible" exit="exit" onClick={handleToggleMobileAppliancesMenu} className={styles.headerText}>
                                        <PageText type='mobileNavTitle'>Home Appliances</PageText>
                                        <IconComponent iconType='rightChevron' />
                                    </motion.div>
                                </div>
                                <div className={styles.mobileMenuHeader} >
                                    <motion.div variants={linkVariants} onClick={handleToggleMobileResourcesMenu} className={styles.headerText}>
                                        <PageText type='mobileNavTitle'>Resources</PageText>
                                        <IconComponent iconType='rightChevron' />
                                    </motion.div>
                                </div>
                                <div className={styles.mobileMenuHeader} >
                                    <motion.div variants={linkVariants} onClick={handleToggleMobileExclusiveMenu} className={styles.headerText}>
                                        <PageText type='mobileNavTitle'>Exclusive</PageText>
                                        <IconComponent iconType='rightChevron' />
                                    </motion.div>
                                </div>
                            </div>
                        </GridSystem>
                    </Overlay>
                }
            </AnimatePresence>
            <AnimatePresence>
                {

                    isRoutingState.isMobileCategoriesMenuOpen &&
                    <Overlay containerMarginTop='7rem'>
                        <GridSystem >
                            <div className={styles.mobileNavDropdownMenuWrapper}>
                                <div className={styles.mobileMenuBackIconWrapper}>
                                    <IconComponent onClick={handleToggleMobileAppliancesMenu} iconType='leftChevron' />
                                </div>

                                <div className={styles.mobileDropdownContent}>
                                    <ul className={styles.mobileNavOptionsList}>{RouteLinks(navCategoryLinks)}</ul>
                                    <ul className={styles.mobileNavOptionsList}>{RouteLinks(navSecondaryCategoryLinks)}</ul>
                                    <ul className={styles.mobileNavOptionsList}>{RouteLinks(allCategoryLink)}</ul>
                                </div>
                            </div>
                        </GridSystem>
                    </Overlay>
                }
            </AnimatePresence>
            <AnimatePresence>
                {
                    isRoutingState.isMobileResourcesMenuOpen &&
                    <Overlay containerMarginTop='7rem'>
                        <GridSystem >
                            <div className={styles.mobileNavDropdownMenuWrapper}>
                                <div className={styles.mobileMenuBackIconWrapper}>
                                    <IconComponent onClick={handleToggleMobileResourcesMenu} iconType='leftChevron' />
                                </div>
                                <div className={styles.mobileDropdownContent}>
                                    <ul className={styles.mobileNavOptionsList}>{RouteLinks(stepUpChartLinks)}</ul>
                                    <ul className={styles.mobileNavOptionsList}>{RouteLinks(resourceLinks)}</ul>

                                </div>
                            </div>
                        </GridSystem>
                    </Overlay>
                }
            </AnimatePresence>
            <AnimatePresence>
                {
                    isRoutingState.isMobileExclusiveMenuOpen &&
                    <Overlay containerMarginTop='7rem'>
                        <GridSystem >
                            <AnimatedComponent type='dropdownChildrenEffects'>
                                <div className={styles.mobileNavDropdownMenuWrapper}>
                                    <div className={styles.mobileMenuBackIconWrapper}>
                                        <IconComponent onClick={handleToggleMobileExclusiveMenu} iconType='leftChevron' />
                                    </div>

                                    <div className={styles.mobileDropdownContent}>
                                        <ul className={styles.mobileNavOptionsList}>
                                            {RouteLinks(exclusiveLinks)}
                                          
                                        </ul>
                                    </div>
                                </div>
                            </AnimatedComponent>
                        </GridSystem>
                    </Overlay>
                }
            </AnimatePresence>
            {
                isRoutingState.isMobileAccountMenuOpen &&
                <Overlay containerMarginTop='7rem'>
                    <GridSystem >
                        <AnimatedComponent type='3dRoationDropdownEffects'>
                            <div className={styles.mobileNavDropdownMenuWrapper}>
                                <div className={styles.mobileMenuBackIconWrapper}>
                                    <IconComponent onClick={handleToggleMobileAccountMenu} iconType='leftChevron' />
                                </div>
                                <div className={styles.mobileDropdownContent}>
                                    <ul className={styles.mobileNavOptionsList}>{RouteLinks(accountLinks)}</ul>
                                   

                                </div>
                            </div>
                        </AnimatedComponent>
                    </GridSystem>
                </Overlay>
            }
        </div>
    );
}

const DesktopNav = () => { 

    const { isRoutingState, setIsRoutingState } = useRoutingHook();
  
    const {navSecondaryCategoryLinks,navCategoryLinks, allCategoryLink, stepUpChartLinks, resourceLinks, exclusiveLinks, accountLinks} = useLinkConfig();
    const handlAppliancesLinkMouseEnter = () => {
        setIsRoutingState(prevState => ({
            ...prevState,
            isCategoriesMenuOpen: true,
            isResourcesMenuOpen: false,
            isStepUpChartsMenuOpen: false,
            isExclusiveMenuOpen: false
        }));
    }
    const handlAppliancesLinkMouseLeave = () => {
        setIsRoutingState(prevState => ({
            ...prevState,
            isCategoriesMenuOpen: false
        }));
    }
    const handleResourcesLinkMouseEnter = () => {
        setIsRoutingState(prevState => ({
            ...prevState,
            isResourcesMenuOpen: true,
            isStepUpChartsMenuOpen: false,
            isCategoriesMenuOpen: false,
            isExclusiveMenuOpen: false
        }));
    }
    const handleResourcesLinkMouseLeave = () => {
        setIsRoutingState(prevState => ({
            ...prevState,
            isResourcesMenuOpen: false
        }));
    }
   
    const handleExclusiveLinkMouseEnter = () => {
        setIsRoutingState(prevState => ({
            ...prevState,
            isExclusiveMenuOpen: true,
            isCategoriesMenuOpen: false,
            isResourcesMenuOpen: false,
            isStepUpChartsMenuOpen: false,
        }));
    }
    const handleExclusiveLinkMouseLeave = () => {
        setIsRoutingState(prevState => ({
            ...prevState,
            isExclusiveMenuOpen: false
        }));
    }

   
    return (
        <>
            <div className={styles.desktopNavComponentContainer}>
                <GridSystem gridType='spread'>
                    {/* <GridSystem> */}
                    <div className={styles.desktopNavContainer}>
                        <div className={styles.desktopNavLogoWrapper}>
                            <LinkedLogo />
                        </div>
                        <section className={styles.desktopNavMenuWrapper}>
                            <div className={styles.dropdownSection} onMouseLeave={handlAppliancesLinkMouseLeave}>
                                <div
                                    className={styles.desktopNavMenuHeader}>
                                    <div onMouseEnter={handlAppliancesLinkMouseEnter} className={styles.desktopNavMenuText}>
                                        <PageText type='navTitleText'>Home Appliances</PageText>
                                    </div>
                                </div>
                                <AnimatePresence>
                                    {
                                        isRoutingState.isCategoriesMenuOpen &&
                                        <AnimatedComponent type='3dRoationDropdownEffects'>
                                            <div onMouseLeave={handlAppliancesLinkMouseLeave} className={styles.dropdownContainer}>
                                                <div id={styles.applianceDropdownWrapperWidth} className={styles.dropdownWrapper}>
                                                    <div className={styles.dropdownContent}>
                                                        <div className={styles.dropdownLinks}>
                                                            <ul className={styles.dropdownLinksList}>{RouteLinks(navCategoryLinks)}</ul>
                                                            <ul className={styles.dropdownLinksList}>{RouteLinks(navSecondaryCategoryLinks)}</ul>
                                                            <ul className={styles.dropdownLinksList}>{RouteLinks(allCategoryLink)}</ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </AnimatedComponent>
                                    }
                                </AnimatePresence>
                            </div>
                            <div className={styles.dropdownSection} onMouseLeave={handleResourcesLinkMouseLeave} >
                                <div
                                    className={styles.desktopNavMenuHeader}>
                                    <div onMouseEnter={handleResourcesLinkMouseEnter} className={styles.desktopNavMenuText}>
                                        <PageText type='navTitleText'>Resources</PageText>
                                    </div>
                                </div>
                                <AnimatePresence>
                                    {
                                        isRoutingState.isResourcesMenuOpen &&
                                        <AnimatedComponent type='3dRoationDropdownEffects'>
                                            <div onMouseLeave={handleResourcesLinkMouseLeave} className={styles.dropdownContainer}>
                                                <div id={styles.resourcesDropdownWrapperWidth} className={styles.dropdownWrapper}>
                                                    <div className={styles.dropdownContent}>
                                                        <div className={styles.dropdownLinks}>
                                                            <ul className={styles.dropdownLinksList}>{RouteLinks(stepUpChartLinks)}</ul>
                                                            <ul className={styles.dropdownLinksList}>{RouteLinks(resourceLinks)}</ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </AnimatedComponent>
                                    }
                                </AnimatePresence>
                            </div>
                            <div className={styles.dropdownSection} onMouseLeave={handleExclusiveLinkMouseLeave} >
                                <div className={styles.desktopNavMenuHeader}>
                                    <div className={styles.desktopNavMenuText} onMouseEnter={handleExclusiveLinkMouseEnter} >
                                        <PageText type='navTitleText'>Exclusive</PageText>
                                    </div>
                                </div>
                                <AnimatePresence>
                                    {
                                        isRoutingState.isExclusiveMenuOpen &&
                                        <AnimatedComponent type='3dRoationDropdownEffects'>
                                            <div onMouseLeave={handleExclusiveLinkMouseLeave} className={styles.dropdownContainer}>
                                                <div className={styles.dropdownWrapper}>
                                                    <div className={styles.dropdownContent}>
                                                        <div className={styles.dropdownLinks}>
                                                            <ul className={styles.dropdownLinksList}>{RouteLinks(exclusiveLinks)}</ul>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </AnimatedComponent>
                                    }
                                </AnimatePresence>
                            </div>

                        </section>

                        <section className={styles.desktopNavSearchWrapper}>
                            <SearchComponent type='desktop' />
                        </section>
                        <section className={styles.desktopNavMenuWrapper}>
                            <div className={styles.desktopNavIconsWrapper}>
                                <ProductListIcon />
                              
                            </div>

                        </section>
                    </div>
                </GridSystem>
            </div>
        </>
    );
}



export const Navigation = () => {
    return (
        <nav className={styles.mainNavComponentContainer}>
            <div className={styles.desktopNavWrapper}>
                <DesktopNav />
            </div>
            <div className={styles.mobileNavWrapper}>
                <MobileNav />
            </div>
        </nav>
    )

}