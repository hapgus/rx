import { PortalPage } from "../../components/PortalComponent/PortalPageComponent/PortalPage/PortalPage";
import { useAuthUser } from "../../hooks/use-auth-hooks";

import { PortalDashboard } from "../../components/PortalComponent/PortalPageComponent/PortalDashboard/PortalDashboard";



const PortalDashboardPage = () => {

    const decodedToken = useAuthUser();


    return (

        <PortalPage
            pageTitle={`Welcome, ${decodedToken.firstName} ${decodedToken.lastName}`}
            pageDescription='LG Product Guide Administrator Portal'
            breadcrumb='Overview'
            breadcrumbDirectory="Dashboard"
            breadcrumbDirectoryLink="/portal/overview"
            // bodyTitle='Summary'
        >


<PortalDashboard/>

        </PortalPage>

    )
}

export default PortalDashboardPage;