import { PortalPage } from "../../components/PortalComponent/PortalPageComponent/PortalPage/PortalPage";

import { AnalyticsDashboard } from "../../components/PortalComponent/PortalPageComponent/PortalDashboard/AnalyticsDashboard";
const AnalyticsPage = () => {

 
    return (
       
        <PortalPage
        pageTitle='Analytics'
        pageDescription='Stats and insights on application usage and performance'

        breadcrumb='Analytics'
        breadcrumbDirectory="Dashboard"
        breadcrumbDirectoryLink="/portal/overview"
        breadcrumbLink="/portal/analytics"
        // bodyTitle='Summary'
    >

        <AnalyticsDashboard/>
        {/* <VisitorsAnalyticsBoard/>

        <LandingPageSummaryTable/> */}

    </PortalPage>


    );
}


export default AnalyticsPage;