import styles from './AuthTemplate.module.css';
import {  homeLink } from '../../utils/helper-functions';
import { ExternalLink } from '../../components/Links/ExternalLink';

import { LinkComponent } from '../../components/Links/LinkComponent';
import { GridSystem } from '../../components/GridSystem/GridSystem';

export const AuthTemplate = ({ children }) => {

    return (
        <div className={styles.mainContainer}>
            <div className={styles.body}>
                <GridSystem>
                    {children}
                </GridSystem>

            </div>
            <div className={styles.footer}>
                <GridSystem>
                    <div className={styles.footerLinks}>
                        <ExternalLink href={'https://www.lg.com/us/legal'} >Terms</ExternalLink>
                        <ExternalLink href={'https://privacy.us.lg.com/policies'} >Privacy</ExternalLink>
                        <LinkComponent href={homeLink}>Homepage</LinkComponent>
                    </div>
                </GridSystem>
            </div>
        </div>
    );
}