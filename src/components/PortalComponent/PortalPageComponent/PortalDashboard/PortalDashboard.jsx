import styles from './PortalDashboard.module.css';
import { useData } from '../../../../hooks/data-hook';
import { DashboardSkeleton } from '../../../Skeletons/DashboardSkeleton';

import { useChartConfig } from '../../../../hooks/chart-config-hook';
import { transformWithSchema } from '../../../../utils/data-transformer';
import { LineChart } from '../../PortalChartComponent/LineChart';
import { DateComponent } from '../../../Date/DateComponent';
import { AreaChart } from '../../PortalChartComponent/AreaChart';
import { PortalCard } from '../PortalCard/PortalCard';
import { convertSecondsToMinutes } from '../../../../utils/text-help';
import { VisitorsCard } from '../../PortalDataVisualization/VisitorsCard';

import { PageViewsCard } from '../../PortalDataVisualization/PageViewsCard';
import { ListsPrintedCard } from '../../PortalDataVisualization/ListsPrintedCard';
import { ProductsSelectedBySearch } from '../../PortalDataVisualization/ProductsSelectedBySearch';
import { ExternalResourceLinkClickCard } from '../../PortalDataVisualization/ExternalResourceLinkClickCard';
import { UsersByDeviceCard } from '../../PortalDataVisualization/UsersByDeviceCard';
import { VisitorsAnalyticsBoard } from '../../PortalDataVisualization/VisitorsAnalyticsBoard';
import { SessionsCard } from '../../PortalDataVisualization/SessionsCard';
import { EventsCard } from '../../PortalDataVisualization/EventsCard';
import { PortalBanner } from '../PortalBanner/PortalBanner';
import { SessionsBoard } from '../../PortalDataVisualization/Sessions/SessionsBoard';
import { SearchActivityBoard } from '../../PortalDataVisualization/Search/SearchActivityBoard';
import { AddToProductListActivityBoard } from '../../PortalDataVisualization/ProductList/AddToProductListActivityBoard';
import { PrintProductListActivityBoard } from '../../PortalDataVisualization/ProductList/PrintProductListActivityBoard';
import { ResourceActivityBoard } from '../../PortalDataVisualization/Resource/ResourceActivityBoard';



export const PortalDashboard = () => {
    const { data } = useData('http://localhost:3005/data');
    console.log(data)

    const totalUserCount = data && data.visitorSnapshot
        ? data.visitorSnapshot.reduce((acc, curr) => acc + Number(curr.totalUsers), 0)
        : 0;
    const numberOfDays = data?.visitorSnapshot?.length || 0;
    const avgUserCount = numberOfDays > 0 ? totalUserCount / numberOfDays : 0;


    const totalPageViewCount = data && data.pageViewSnapshot
        ? data.pageViewSnapshot.reduce((acc, curr) => acc + Number(curr.screenPageViews), 0)
        : 0;
    const numberOfDaysPageViews = data?.pageViewSnapshot?.length || 0;
    const avgPageViewCount = numberOfDaysPageViews > 0 ? totalPageViewCount / numberOfDaysPageViews : 0;


    const totalSessionCount = data && data.sessionSnapshot
        ? data.sessionSnapshot.reduce((acc, curr) => acc + Number(curr.sessions), 0)
        : 0;
    const numberOfDaysSessions = data?.sessionSnapshot?.length || 0;
    const avgSessionsCount = numberOfDaysSessions > 0 ? totalSessionCount / numberOfDaysSessions : 0;


    const totalDurationCount = data && data.engagementTimeSnapshot
        ? data.engagementTimeSnapshot.reduce((acc, curr) => acc + Number(curr.userEngagementDuration), 0)
        : 0;

    const totalDurationInMinutes = convertSecondsToMinutes(totalDurationCount);  // Convert to minutes

    const numberOfDaysEngagement = data?.engagementTimeSnapshot?.length || 0;
    const avgEngagementTimeCount = numberOfDaysEngagement > 0
        ? convertSecondsToMinutes(totalDurationCount / numberOfDaysSessions)  // Convert average to minutes
        : 0;

    // Get the chart config for LineChart
    const { config: lineChartOptions } = useChartConfig('LineChart');
    const { config: areaChartOptions } = useChartConfig('AreaChart');

    let chartData = null;
    let areaChartData = null;
    let pageViewsAreaChart = null;
    let sessionsAreaChart = null;
    let engagementTimeAreaChart = null;

    // if (data && data.visitorSnapshot) {
    if (data) {
        try {
            // Transform the visitorSnapshot data using the schema-based transformation
            chartData = transformWithSchema(data.visitorSnapshot, 'visitorSnapshot');
            areaChartData = transformWithSchema(data.visitorSnapshot, 'visitorSnapshot');
            pageViewsAreaChart = transformWithSchema(data.pageViewSnapshot, 'pageViewSnapshot');
            sessionsAreaChart = transformWithSchema(data.sessionSnapshot, 'sessionSnapshot');
            engagementTimeAreaChart = transformWithSchema(data.engagementTimeSnapshot, 'engagementTimeSnapshot');

        } catch (error) {
            console.error(`Error transforming data: ${error.message}`);
        }
    } else {
        console.warn('No visitorSnapshot found in data', data);
    }

    console.log('use data', totalUserCount);

    return (
        data ?
        <>
        <SessionsBoard title='Session Overview'/>
        <SearchActivityBoard title='Product Search Overview' />
        <AddToProductListActivityBoard title='Add to Product List Overview' />
        <PrintProductListActivityBoard title='Product List Print Overview'/>
        <ResourceActivityBoard  title="Product External Resource Links " />
        {/* 
        <AddToProductListActivityBoard title='Add to Product List Overview' />
        <PrintProductListActivityBoard title='Product List Print Overview'/>
        <ResourceActivityBoard  title="Product External Resource Links " /> */}
        </>
            // <div className={styles.dashboardSkeletonContainer}>
            //     <div className={styles.gridContainer}>
            //         <div className={styles.itemsWrapper}>


            //             <VisitorsCard />
            //             <EventsCard />
            //             {/* <PageViewsCard /> */}
            //             {/* <SessionsCard/> */}
            //             <PortalCard
            //                 toolTipText='Time on page (User Engagement Duration) measures the total time users spend engaging with your website or app, excluding inactive periods, such as when the user minimizes the tab or window.'
            //                 cardTitle='Total Time on Page'
            //                 cardData={totalDurationInMinutes}
            //                 cardFooter={`${parseInt(avgEngagementTimeCount)} minutes per day on average`}
            //             >
            //                 {chartData ? (
            //                     <AreaChart data={engagementTimeAreaChart} options={areaChartOptions} />
            //                 ) : (
            //                     <div>No chart data available.</div>
            //                 )}
            //             </PortalCard>
            //        <SessionsBoard/>
            //             {/* <VisitorsAnalyticsBoard /> */}
            //             {/* 
            //             <ListsPrintedCard />
            //             <ProductsSelectedBySearch />
            //             <ExternalResourceLinkClickCard />
            //             <UsersByDeviceCard /> */}

            //             {/* <PortalCard
            //                 cardTitle='Total Page Views'
            //                 cardData={totalPageViewCount.toLocaleString()}
            //                 cardFooter={`${parseInt(avgPageViewCount)} page views per day on average`}
            //             >
            //                 {chartData ? (
            //                     <AreaChart data={pageViewsAreaChart} options={areaChartOptions} />
            //                 ) : (
            //                     <div>No chart data available.</div>
            //                 )}
            //             </PortalCard> */}

            //             {/* <PortalCard
            //                 cardTitle='Total Sessions'
            //                 cardData={totalSessionCount}
            //                 cardFooter={`${parseInt(avgSessionsCount)} sessions per day on average`}
            //             >
            //                 {chartData ? (
            //                     <AreaChart data={sessionsAreaChart} options={areaChartOptions} />
            //                 ) : (
            //                     <div>No chart data available.</div>
            //                 )}
            //             </PortalCard> */}

            //         </div>
            //         <div className={styles.bodyWrapper}>
            //             <div className={styles.bodyItem1}>
            //                 {/* LIST THIS BY PAGE INSTEAD OF DATE - MAKE NEW VERSION FOR THIS SPACE */}
            //                 <PageViewsCard />
            //             </div>
            //             <div className={styles.bodyItem2}>
            //                 <SessionsCard />
            //             </div>
            //             <div className={styles.bodyItem3}>

            //             </div>
            //         </div>
            //     </div>
            // </div>
            : <DashboardSkeleton />
    );
}
