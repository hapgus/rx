
import { DatePicker } from '../../../Date/DatePicker';
import { useDataContext } from '../../../../hooks/data-hook';
import { PortalDataFilterBar } from '../PortalDataFilter/PortalDataFilterBar';

import styles from './PortalDashboard.module.css'

import { LandingPageViewsCard } from '../../PortalDataVisualization/LandingPage/LandingPageViewsCard';
import { UserVisitsCard } from '../../PortalDataVisualization/User/UserVisitsCard';
import { PortalBanner } from '../PortalBanner/PortalBanner';
import { UsersByDeviceCategoryPieChart } from '../../PortalDataVisualization/Technical/UsersByDeviceCategoryPieChart';
import { AddToProductListByDateLineChart } from '../../PortalDataVisualization/ProductEvents/AddToProductListByDateLineChart';
import { PrintProductListPostActionPieChart } from '../../PortalDataVisualization/PrintEvents/PrintProductListPostActionPieChart';
import { SearchByDateLineChart } from '../../PortalDataVisualization/SearchEvents/SearchByDateLineChart';
import { SearchProductsLeaderBoard } from '../../PortalDataVisualization/SearchEvents/SearchProductsLeaderBoard';
import { SearchByUserGeoLocationLeaderBoard } from '../../PortalDataVisualization/SearchEvents/SearchByUserGeoLocationLeaderBoard';
import { SearchTypePieChart } from '../../PortalDataVisualization/SearchEvents/SearchTypePieChart';
import { SearchByLandingPageCategoryBarChart } from '../../PortalDataVisualization/SearchEvents/SearchByLandingPageCategoryBarChart';
import { SearchByLandingPageBarChart } from '../../PortalDataVisualization/SearchEvents/SearchByLandingPageBarChart';
import { AddToProductListByLandingPageBarChart } from '../../PortalDataVisualization/ProductEvents/AddToProductListByLandingPageBarChart';
import { AddToProductListByLandingPageCategoryBarChart } from '../../PortalDataVisualization/ProductEvents/AddToProductListByLandingPageCategoryBarChart';
import { AddToProductListByUserGeoLocationLeaderBoard } from '../../PortalDataVisualization/ProductEvents/AddToProductListByUserGeoLocationLeaderBoard';
import { AddToProductListLeaderBoard } from '../../PortalDataVisualization/ProductEvents/AddToProductListLeaderBoard';
import { PrintProductListByUserGeoLocationLeaderBoard } from '../../PortalDataVisualization/PrintEvents/PrintProductListByUserGeoLocationLeaderBoard';
import { PrintProductListLeaderBoard } from '../../PortalDataVisualization/ProductList/PrintProductListLeaderBoard';
import { PrintProductListByDateLineChart } from '../../PortalDataVisualization/PrintEvents/PrintProductListByDateLineChart';
import { EventsCard } from '../../PortalDataVisualization/AllEvents/EventsCard';
import { ResourceLinkClicksByDateLineChart } from '../../PortalDataVisualization/Resource/ResourceLinkClicksByDateLineChart';
import { ResourceLinkClicksByProductLeaderBoard } from '../../PortalDataVisualization/Resource/ResourceLinkClicksByProductLeaderBoard';
import { ResourceLinkClicksByUserGeoLocationLeaderBoard } from '../../PortalDataVisualization/Resource/ResourceLinkClicksByUserGeoLocationLeaderBoard';
import { ResourceLinkClicksByResourceTypeLeaderBoard } from '../../PortalDataVisualization/Resource/ResourceLinkClicksByResourceTypeLeaderBoard';
import { ResourceLinkClicksByCategoryBarChart } from '../../PortalDataVisualization/Resource/ResourceLinkClicksByCategoryBarChart';
import { ResourceLinkClicksByLandingPageBarChart } from '../../PortalDataVisualization/Resource/ResourceLinkClicksByLandingPageBarChart';
import { LandingPageSessionsCard } from '../../PortalDataVisualization/LandingPage/LandingPageSessionsCard';
import { LandingPageUsersCard } from '../../PortalDataVisualization/LandingPage/LandingPageUsersCard';
import { LandingPageEventsCard } from '../../PortalDataVisualization/LandingPage/LandingPageEventsCard';
import { LandingPageByPageViewsBarChart } from '../../PortalDataVisualization/LandingPage/LandingPageByPageViewsBarChart';
import { LandingPageViewsByGeoLocationLeaderBoard } from '../../PortalDataVisualization/LandingPage/LandingPageByGeolocationLeaderboard';
import { LandingPageCategoryByPageViewsBarChart } from '../../PortalDataVisualization/LandingPage/LandingPageCategoryByPageViewsBarChart';
import { LandingPageByPageViewsLineChart } from '../../PortalDataVisualization/LandingPage/LandingPageByPageViewsLineChart';
import { LandingPageByPageViewsColumnChart } from '../../PortalDataVisualization/LandingPage/LandingPageByPageViewsColumnChart';
import { EventsLeaderboard } from '../../PortalDataVisualization/AllEvents/EventsLeaderboard';
import { EventsColumnChart } from '../../PortalDataVisualization/AllEvents/EventsColumnChart';
import { EventsByLocationLeaderboard } from '../../PortalDataVisualization/AllEvents/EventsByLocationLeaderboard';

export const PortalDashboard = () => {
    const { isDateRangeState, isDataState } = useDataContext();
    console.log('date range', isDateRangeState);
    console.log('data state', isDataState);


    return (
        <>
            <div className={styles.filterWrapper}>
                <PortalDataFilterBar />
            </div>
            <PortalBanner
                row1={
                    <>
                        <LandingPageViewsCard />
                        <LandingPageSessionsCard />
                        <LandingPageUsersCard />
                        <LandingPageEventsCard />
                    </>
                }
                row2Chart1={
                    <>
                        <LandingPageCategoryByPageViewsBarChart />
                        <LandingPageViewsByGeoLocationLeaderBoard limit={10} />
                    </>
                }
                row2Chart2={
                    <>
                        <EventsColumnChart />
                        <EventsByLocationLeaderboard />
                    </>
                }

                featureChart1={
                    <>
                        {/* <EventsCard /> */}
                        {/*  */}

                        <EventsByLocationLeaderboard />
                    </>
                }
                featureChart2={
                    <>
                        {/* <EventsLeaderboard /> */}
                        {/* <LandingPageViewsByGeoLocationLeaderBoard limit={7} /> */}
                    </>
                }
            // featureChart2={<LandingPageViewsByGeoLocationLeaderBoard }
            // featureBodyChart={<LandingPageByPageViewsColumnChart />}
            // featureBodyChart={<LandingPageByPageViewsBarChart />}
            // featureBodyChart={<LandingPageByPageViewsLineChart />}

            >
                {/* <LandingPageByPageViewsBarChart /> */}

                {/*  */}

            </PortalBanner>
        </>
        // <div className={styles.dashboardContainer}>
        //    
        //     <div>
        //         <div className={styles.cardRow}>
        //           
        //             <UserVisitsCard />
        //             <EventsCard />
        //             <UsersByDeviceCategoryPieChart />
        //         </div>
        //         <div className={styles.cardRow}>

        //         </div>
        //         <div className={styles.cardRow}>
        //             <SearchProductsLeaderBoard />
        //             <SearchByUserGeoLocationLeaderBoard />

        //             <PrintProductListPostActionPieChart />
        //         </div>
        //         <div className={styles.cardRow}>
        //             <AddToProductListByDateLineChart />
        //             <AddToProductListByLandingPageCategoryBarChart />
        //             <AddToProductListByUserGeoLocationLeaderBoard />
        //             <AddToProductListLeaderBoard />
        //             <AddToProductListByLandingPageBarChart />
        //         </div>

        //         <div className={styles.cardRow}>

        //             <PrintProductListByUserGeoLocationLeaderBoard />
        //             <PrintProductListLeaderBoard />
        //             <PrintProductListByDateLineChart />
        //         </div>
        //         <div className={styles.cardRow}>
        //             <SearchByDateLineChart />
        //             <SearchTypePieChart />
        //             <SearchByLandingPageCategoryBarChart />
        //             <SearchByLandingPageBarChart />
        //         </div>

        //         <div className={styles.cardRow}>
        //             <ResourceLinkClicksByDateLineChart />
        //             <ResourceLinkClicksByProductLeaderBoard />
        //             <ResourceLinkClicksByUserGeoLocationLeaderBoard />
        //             <ResourceLinkClicksByResourceTypeLeaderBoard />
        //             <ResourceLinkClicksByCategoryBarChart />
        //             <ResourceLinkClicksByLandingPageBarChart />
        //         </div>



        //     </div>
        // </div>




    )
}
