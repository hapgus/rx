import { PortalPage } from "../../components/PortalComponent/PortalPageComponent/PortalPage/PortalPage";
import { useAuthUser } from "../../hooks/auth-hook";
const PortalDashboardPage = () => {

    const decodedToken = useAuthUser()

    return (

        <PortalPage
            pageTitle={`Welcome, ${decodedToken.firstName} ${decodedToken.lastName}`}
            pageDescription='LG Product Guide Administrator Portal'

            breadcrumb='Overview'
            breadcrumbDirectory="Dashboard"
            breadcrumbDirectoryLink="/portal/dashboard"
            bodyTitle='Summary'
        >

        </PortalPage>

    )
}

export default PortalDashboardPage;