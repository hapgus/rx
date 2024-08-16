import { PortalPageBody, PortalPageWrapper } from "../../components/PortalComponent/PortalPageComponent/PortalPageComponents";

import { UserDirectoryTable } from "../../components/PortalComponent/PortalTableComponent/UserDirectoryTable";
const UserDirectoryPage = () => {
    return (
        <PortalPageWrapper
        pageTitle='User Table' pageDescription='See all users' 
        >

            <PortalPageBody>
                <UserDirectoryTable />
            </PortalPageBody>
        </PortalPageWrapper>




    );
}

export default UserDirectoryPage;