import Skeleton from 'react-loading-skeleton';
import { LinkComponent } from '../../../Links/LinkComponent';
import { PageText } from '../../../Text/Text'
import styles from './PortalPage.module.css'

export const PortalPage = ({ 
    pageTitle, 
    pageDescription, 
    breadcrumbDirectory, 
    breadcrumbDirectoryLink, 
    breadcrumb,
    breadcrumbLink, 
    bodyTitle, children }) => {

    return (
        <div className={styles.portalPageContainer} >
            <div className={styles.portalPageHeaderWrapper} >
                <div className={styles.portalPageHeaderInnerDiv}>
                    {breadcrumb &&
                        <div className={styles.breadcrumbs}>
                            <LinkComponent href='/portal/dashboard'>
                                <PageText>Portal</PageText>
                            </LinkComponent>

                            <span className={styles.slash1}>{`/`}</span>

                            <LinkComponent href={breadcrumbDirectoryLink}>
                                <PageText>{breadcrumbDirectory}</PageText>
                            </LinkComponent>

                            <span className={styles.slash2}>{`/`}</span>
                            <LinkComponent href={breadcrumbLink}>
                                <div className={styles.currentPage}>
                                    <PageText>{breadcrumb}</PageText>
                                </div>
                            </LinkComponent>
                        </div>
                    }
                    <div className={styles.headerText}>

                        {pageTitle && <div className={styles.pageTitle}><PageText type='pageTitle'>{pageTitle}</PageText></div>}
                        {pageTitle && <div className={styles.pageDescription}><PageText type='pageTertiaryTitle'>{pageDescription}</PageText></div>}
                    </div>
                </div>
            </div>
            <div className={styles.portalPageBodyWrapper}>
                <div className={styles.portalPageBodyInnerDiv}>
                    <div className={styles.bodyTitleWrapper}>
                        <div className={styles.bodyTitle}> <PageText type='pageSubtitle'>{bodyTitle}</PageText></div>
                    </div>
                    <div className={styles.bodyContent}>
                        {children}
                    </div>
                </div>

            </div>
            {/* <div className={styles.portalPageWrapper}>
                <div className={styles.header}>

                    {pageTitle && <div className={styles.pageTitle}><PageText>{pageTitle}</PageText></div>}
                    {pageTitle && <div className={styles.pageDescription}><PageText>{pageDescription}</PageText></div>}
                </div>
               
            </div> */}
        </div>
    );

}