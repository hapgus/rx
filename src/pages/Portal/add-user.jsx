import { PortalPageHeader, PortalPageWrapper, PortalPageBody } from "../../components/PortalComponent/PortalPageComponent/PortalPageComponents";
import { PortalUserForm } from "../../components/PortalComponent/PortalFormComponent/PortalUserForm";
import { AdminAccountForm } from "../../components/AuthComponent/AdminAccountForm";
import { GridSystem } from "../../components/GridSystem/GridSystem";

const AddUserPage = () => {
    return (
        <PortalPageWrapper>
            <GridSystem>
             <PortalPageHeader
                pageTitle='Admin User Form'
                pageDescription='Create a new admin user'
            />
             <PortalPageBody>
                <AdminAccountForm/>
             {/* <PortalUserForm/>      */}
             </PortalPageBody>
          </GridSystem>
           
            </PortalPageWrapper>
    );
}


export default AddUserPage;