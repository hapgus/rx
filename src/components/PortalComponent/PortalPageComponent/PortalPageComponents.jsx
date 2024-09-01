import styles from './PortalComponents.module.css';
import { GridSystem } from '../../GridSystem/GridSystem';

import { PageText } from '../../Text/Text';


export const PortalPageHeader = ({ pageTitle, pageDescription }) => {

    return (
        <div className={styles.headerContainer}>

            {pageTitle ?
                <div className={styles.title}>
                    <PageText >{pageTitle}</PageText>
                </div>
                : null}
            {pageDescription ?
                <div className={styles.description}>
                    <PageText >{pageDescription}</PageText>
                </div>
                : null
            }
        </div>
    );
}




export const PortalPageWrapper = ({ children, pageTitle, pageDescription, type = "default" }) => {

    const portalPageTypeMap = {
        longform: styles.longFormPageContainer,
        default: styles.defaultPageContainer
    }

    const pageStyles = portalPageTypeMap[type];

    return (
        <GridSystem gridType='spread' containerBackgroundColor='#F0ECE4'>
            <div className={pageStyles}>

                <div className={styles.pageBodyContainer}>


                    {
                        pageTitle && pageDescription &&
                        <div className={styles.pageHeaderWrapper}>
                            <PortalPageHeader
                                pageTitle={pageTitle}
                                pageDescription={pageDescription}
                            />
                        </div>
                    }


                    <div className={styles.pageBodyWrapper}>
                        {children}
                    </div>
                </div>

            </div>
        </GridSystem>
    );
}

export const PortalPageBody = ({ children }) => {

    return (
        <div className={styles.bodyContainer}>
            {children}
        </div>
    );
}
