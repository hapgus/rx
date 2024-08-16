import { PortalPageHeader, PortalPageWrapper, PortalPageBody } from "../../components/PortalComponent/PortalPageComponent/PortalPageComponents";
import { PortalUserForm } from "../../components/PortalComponent/PortalFormComponent/PortalUserForm";

const AddUserPage = () => {
    return (
        <PortalPageWrapper>
             <PortalPageHeader
                pageTitle='User Form'
                pageDescription='Create a new admin user'
            />
             <PortalPageBody>
             <PortalUserForm/>     
             </PortalPageBody>
          
           
            </PortalPageWrapper>
    );
}


export default AddUserPage;