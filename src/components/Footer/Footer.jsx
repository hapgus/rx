import { NavLink } from 'react-router-dom';

import { ExternalLink, EmailLink, resourceLinks, stepUpChartFooterLinks, stepUpChartLinks, categoryLinks, exclusiveLinks, externalLinks, nativeEmailLinks } from '../../utils/link-helper';

import { LinkComponent } from '../Links/LinkComponent';

import styles from './Footer.module.css';
import Logo from '../Logo/Logo';
import { PageText } from '../Text/Text';
import { GridSystem } from '../GridSystem/GridSystem';
export function footerColumn(title, data = []) {
    return (
        <div className={styles.column}>
            <div >
                <PageText type='footerTitle'>{title}</PageText>
            </div>
            {/* <p className={styles.columnTitle}>{title}</p> */}
            <ul className={styles.columnList}>
                {data.length > 0 ? data.map(link => (
                    <li key={link.href}>
                        <LinkComponent
                            href={link.href}
                            type='trackedLinks'
                        >
                            {/* <NavLink to={link.href}> */}
                            <PageText type='footerMenuItem' className={styles.columnListMenuItem}>{link.text}</PageText>
                            {/* </NavLink> */}
                        </LinkComponent>
                        {/* <LinkComponent
                            childElement='footer'
                            type='footerMenuListText'
                            href={link.href}
                            linkText={link.text}
                        /> */}
                    </li>
                )) : <li>No links available</li>}
            </ul>
        </div>
    );
}

export function footerExternalLinks(title, data = []) {
    return (
        <div className={styles.column}>
            <PageText type='footerTitle'>{title}</PageText>
            <ul className={styles.columnList}>
                {data.length > 0 ? data.map(link => (
                    <li key={link.href}>

                        <ExternalLink href={link.href} >
                            <PageText type='footerMenuItem' >{link.text}</PageText>
                        </ExternalLink>
                    </li>
                )) : <li>No external links available</li>}
            </ul>
        </div>
    );
}

export function footerEmailLinks(title) {
    return (
        <div className={styles.column}>
            <PageText type='footerTitle'>{title}</PageText>
            <ul className={styles.columnList}>
                <li >
                    <PageText type='footerMenuItem' > <EmailLink linkText='Email' href={'mailto:productguide@teamlg.ca'} /></PageText>
                </li>
            </ul>
        </div>
    );
}


const Footer = () => {
    return (

        <footer >
            <GridSystem  gridType='spread' containerBorderTop='1px solid #D0CBC1' containerBorderBottom='1px solid #D0CBC1' containerBackgroundColor='#F0ECE4'>
                <div className={styles.contentWrapper}>
                    <div className={styles.wrapper1}>
                        <div className={styles.section1}>

                            {footerColumn('Home Appliances', categoryLinks)}
                            {footerColumn('Step Up Charts', stepUpChartFooterLinks)}
                            {footerColumn('Resources', resourceLinks)}
                            {footerColumn('Exclusive', exclusiveLinks)}
                            {footerExternalLinks('Support', externalLinks)}
                            {footerEmailLinks('Contact Us', nativeEmailLinks)}
                        </div>
                    </div>
                </div>
                <div className={styles.contentWrapper}>
                    <div className={styles.wrapper2}>
                        <div className={styles.section2}>
                            <NavLink to='/'>
                                <Logo type='lgVertical' style='lgVertical' />
                            </NavLink>
                        </div>
                    </div>
                </div>

            </GridSystem>
            <GridSystem gridType='spread' containerBackgroundColor='#E6E1D6'>
                <div className={styles.contentWrapper}>
                    <div className={styles.wrapper3}>
                        <div className={styles.section3}>
                            <PageText type='footerMenuItem' > All rights reserved LG Home Appliances 2024</PageText>
                            {/* <p className={styles.footerRightsText}></p> */}
                        </div>
                    </div>
                </div>
            </GridSystem>
        </footer>
    );
}

export default Footer;