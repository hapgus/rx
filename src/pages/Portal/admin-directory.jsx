import { PortalPage } from "../../components/PortalComponent/PortalPageComponent/PortalPage/PortalPage";

import { AdminUserDirectoryTable } from "../../components/PortalComponent/PortalTableComponent/AdminUserDirectoryTable";
const AdminDirectoryPage = () => {
    return (
        <PortalPage
            pageTitle='Admin Directory'
            pageDescription='All administrator and super administrator users'

            breadcrumb='Admin Directory'
            breadcrumbDirectory="Users"
            breadcrumbDirectoryLink="/portal/admin-directory"
            breadcrumbLink="/portal/admin-directory"
            bodyTitle='Admin User Management Table'
        >
            <AdminUserDirectoryTable />
        </PortalPage>


    );
}

export default AdminDirectoryPage;