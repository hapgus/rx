import { PortalPage } from "../../components/PortalComponent/PortalPageComponent/PortalPage/PortalPage";
import { useAuthUser } from "../../hooks/auth-hook";
import { useHttpClient } from "../../hooks/http-hook";
import { useEffect } from "react";
import { Chart } from 'react-google-charts';
import { useData } from "../../hooks/data-hook";
import { useChartConfig } from "../../hooks/chart-config-hook";
import { BarChart } from "../../components/PortalComponent/PortalChartComponent/BarChart";
import { transformWithSchema } from "../../utils/data-transformer";
import { NewVsTotalUsersBarChart } from "../../components/PortalComponent/PortalPageComponent/PortalDashboard/UserVisualization";
import { PageViewsLinChart } from "../../components/PortalComponent/PortalPageComponent/PortalDashboard/PageDataVisualizations";



const PortalDashboardPage = () => {

    const decodedToken = useAuthUser();


    return (

        <PortalPage
            pageTitle={`Welcome, ${decodedToken.firstName} ${decodedToken.lastName}`}
            pageDescription='LG Product Guide Administrator Portal'

            breadcrumb='Overview'
            breadcrumbDirectory="Dashboard"
            breadcrumbDirectoryLink="/portal/dashboard"
            bodyTitle='Summary'
        >

<NewVsTotalUsersBarChart/>
<PageViewsLinChart/>
        </PortalPage>

    )
}

export default PortalDashboardPage;