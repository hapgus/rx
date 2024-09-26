import { PortalPage } from "../../components/PortalComponent/PortalPageComponent/PortalPage/PortalPage";

import { UserDirectoryTable } from "../../components/PortalComponent/PortalTableComponent/UserDirectoryTable";
const UserDirectoryPage = () => {
    return (

        <PortalPage
            pageTitle='User Directory'
            pageDescription='All users approved, not approved or pending approval'

            breadcrumb='User Directory'
            breadcrumbDirectory="Users"
            breadcrumbDirectoryLink="/portal/user-directory"
            breadcrumbLink="/portal/user-directory"
            // bodyTitle='User Management Table'
        >
            <UserDirectoryTable />
        </PortalPage>


    );
}

export default UserDirectoryPage;