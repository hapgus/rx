import { useDataContext } from '../../../../hooks/data-hook';
import { PortalDataFilterBar } from '../PortalDataFilter/PortalDataFilterBar';

import styles from './PortalDashboard.module.css'

import { LandingPageViewsCard } from '../../PortalDataVisualization/LandingPage/LandingPageViewsCard';

import { PortalBanner } from '../PortalBanner/PortalBanner';

import { LandingPageSessionsCard } from '../../PortalDataVisualization/LandingPage/LandingPageSessionsCard';
import { LandingPageUsersCard } from '../../PortalDataVisualization/LandingPage/LandingPageUsersCard';
import { LandingPageEventsCard } from '../../PortalDataVisualization/LandingPage/LandingPageEventsCard';

import { LandingPageViewsByGeoLocationLeaderBoard } from '../../PortalDataVisualization/LandingPage/LandingPageByGeolocationLeaderboard';
import { LandingPageCategoryByPageViewsBarChart } from '../../PortalDataVisualization/LandingPage/LandingPageCategoryByPageViewsBarChart';

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
                        <EventsByLocationLeaderboard />
                    </>
                }
                featureChart2={
                    <>
                        {/* <EventsLeaderboard /> */}
                        {/* <LandingPageViewsByGeoLocationLeaderBoard limit={7} /> */}
                    </>
                }
            >
            </PortalBanner>
        </>
    )
}
