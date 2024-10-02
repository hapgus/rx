
import { PortalDataFilterBar } from '../PortalDataFilter/PortalDataFilterBar';

import styles from './PortalDashboard.module.css'

import { LandingPageViewsCard } from '../../PortalDataVisualization/LandingPages/LandingPageViewsCard';

import { PortalBanner } from '../PortalBanner/PortalBanner';

import { LandingPageSessionsCard } from '../../PortalDataVisualization/LandingPages/LandingPageSessionsCard';
import { LandingPageUsersCard } from '../../PortalDataVisualization/LandingPages/LandingPageUsersCard';
import { LandingPageEventsCard } from '../../PortalDataVisualization/LandingPages/LandingPageEventsCard';

import { LandingPageViewsByGeoLocationLeaderBoard } from '../../PortalDataVisualization/LandingPages/LandingPageByGeolocationLeaderboard';
import { LandingPageCategoryByPageViewsBarChart } from '../../PortalDataVisualization/LandingPages/LandingPageCategoryByPageViewsBarChart';

import { EventsColumnChart } from '../../PortalDataVisualization/AllEvents/EventsColumnChart';
import { EventsByLocationLeaderboard } from '../../PortalDataVisualization/AllEvents/EventsByLocationLeaderboard';

export const PortalDashboard = () => {


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
                        <EventsByLocationLeaderboard  limit={10}/>
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
