import { PortalPage } from "../../components/PortalComponent/PortalPageComponent/PortalPage/PortalPage";

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

    </PortalPage>


    );
}


export default AnalyticsPage;