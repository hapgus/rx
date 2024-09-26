import styles from './PortalDashboard.module.css';

import { PageViewsCard } from '../../PortalDataVisualization/PageViews/PageViewsCard';
import { SessionsCard } from '../../PortalDataVisualization/Sessions/SessionsCard';



export const PortalDashboard = () => {
 

    return (
    
        <>
        <div className={styles.gridContainer}>
            <div className={styles.featureCard}>
            <PageViewsCard/>
            </div>
            <div className={styles.featureCard}>
            <SessionsCard/>
           
            </div>
            <div className={styles.featureCard}>
            <PageViewsCard/>
            </div>
            <div className={styles.featureCard}>
            <PageViewsCard/>
            </div>

{/* <PageViewsAreaChart/> */}


        </div>
        {/* <TechnicalActivityBoard title='Technical Overview'/>
        <UserActivityBoard title='User Overview' />

        <SessionsBoard title='Session Overview'/>
        <SearchActivityBoard title='Product Search Overview' />
        <AddToProductListActivityBoard title='Add to Product List Overview' />
        <PrintProductListActivityBoard title='Product List Print Overview'/>
        <ResourceActivityBoard  title="Product External Resource Links " /> */}
       
        </>
         
         
    );
}
