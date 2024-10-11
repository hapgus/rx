import { useMemo } from 'react';
import { ExternalLink, EmailLink } from "../Links/ExternalLink";
import { LinkComponent } from '../Links/LinkComponent';
import LinkedLogo from '../Logo/LinkedLogo';
import { textStripper } from '../../utils/helper-functions';
import { useLinkConfig } from '../../hooks/use-link-config-hooks';
import styles from './Footer.module.css';
import { PageText } from '../Text/Text';
import { GridSystem } from '../GridSystem/GridSystem';

// Memoized column generation to avoid re-rendering
const footerColumn = (title, data = []) => (
    <div className={styles.column}>
        <PageText type='footerTitle'>{title}</PageText>
        <ul className={styles.columnList}>
            {data.length > 0 ? data.map(link => (
                <li key={link.href}>
                    <LinkComponent
                        href={link.href}
                        linkText={link.text}
                        type='trackedLinks'
                    />
                </li>
            )) : <li>No links available</li>}
        </ul>
    </div>
);

// Separate memoized function for external links
const footerExternalLinks = (title, data = []) => (
    <div className={styles.column}>
        <PageText type='footerTitle'>{title}</PageText>
        <ul className={styles.columnList}>
            {data.length > 0 ? data.map(link => (
                <li key={link.href}>
                    <ExternalLink href={link.href}>
                        <PageText type='footerMenuItem'>{link.text}</PageText>
                    </ExternalLink>
                </li>
            )) : <li>No external links available</li>}
        </ul>
    </div>
);

// Memoized function for email links
const footerEmailLinks = (title, email) => (
    <div className={styles.column}>
        <PageText type='footerTitle'>{title}</PageText>
        <ul className={styles.columnList}>
            <li>
                <PageText type='footerMenuItem'>
                    <EmailLink linkText='Email' href={`mailto:${email}`} />
                </PageText>
            </li>
        </ul>
    </div>
);

const Footer = () => {
    // Use the hook to get all link configurations
    const {
        categoryLinks,
        resourceLinks,
        stepUpChartLinks,
        externalLinks,
        nativeEmailLinks, 
        exclusiveLinks
    } = useLinkConfig();

    // Memoize the footer content to avoid unnecessary re-renders
    const memoizedFooterContent = useMemo(() => (
        <>
            {footerColumn('Home Appliances', categoryLinks)}
            {footerColumn('Step Up Charts', textStripper(stepUpChartLinks, 'Step Up Charts'))}
            {footerColumn('Resources', resourceLinks)}
            {footerColumn('Exclusive', exclusiveLinks)}
            {footerExternalLinks('Support', externalLinks)}
            {footerEmailLinks('Contact Us', nativeEmailLinks[0].href)}
        </>
    ), [categoryLinks, resourceLinks, stepUpChartLinks, externalLinks, nativeEmailLinks]);

    return (
        <footer>
            <GridSystem gridType='spread' containerBorderTop='1px solid #D0CBC1' containerBorderBottom='1px solid #D0CBC1' containerBackgroundColor='#F0ECE4'>
                <div className={styles.contentWrapper}>
                    <div className={styles.wrapper1}>
                        <div className={styles.section1}>
                            {memoizedFooterContent}
                        </div>
                    </div>
                </div>
                <div className={styles.contentWrapper}>
                    <div className={styles.wrapper2}>
                        <div className={styles.section2}>
                        <LinkedLogo />
                        
                        </div>
                    </div>
                </div>
            </GridSystem>
            <GridSystem gridType='spread' containerBackgroundColor='#E6E1D6'>
                <div className={styles.contentWrapper}>
                    <div className={styles.wrapper3}>
                        <div className={styles.section3}>
                            <PageText type='bodyDescription'>
                                All rights reserved LG Home Appliances 2024
                            </PageText>
                        </div>
                    </div>
                </div>
            </GridSystem>
        </footer>
    );
};

export default Footer;
