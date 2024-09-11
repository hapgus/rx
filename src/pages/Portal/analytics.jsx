import { PortalPage } from "../../components/PortalComponent/PortalPageComponent/PortalPage/PortalPage";
import { LandingPageSummaryTable } from "../../components/PortalComponent/PortalPageComponent/PortalDashboard/LandingPageSummaryTable";
import { VisitorsAnalyticsBoard } from "../../components/PortalComponent/PortalDataVisualization/VisitorsAnalyticsBoard";
const AnalyticsPage = () => {

   

 
    return (
       
        <PortalPage
        pageTitle='Analytics'
        pageDescription='Stats and insights on application usage and performance'

        breadcrumb='Analytics'
        breadcrumbDirectory="Dashboard"
        breadcrumbDirectoryLink="/portal/dashboard"
        breadcrumbLink="/portal/analytics"
        bodyTitle='Summary'
    >
        <VisitorsAnalyticsBoard/>

        <LandingPageSummaryTable/>

    </PortalPage>


    );
}


export default AnalyticsPage;