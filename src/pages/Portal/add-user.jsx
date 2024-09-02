import { PortalPageHeader, PortalPageWrapper, PortalPageBody } from "../../components/PortalComponent/PortalPageComponent/PortalPageComponents";
import { PortalUserForm } from "../../components/PortalComponent/PortalFormComponent/PortalUserForm";
import { AdminAccountForm } from "../../components/AuthComponent/AdminAccountForm";
import { GridSystem } from "../../components/GridSystem/GridSystem";
import { PageContainerComponent } from "../../components/PageComponent/PageContainerComponent";
import { PortalPage } from "../../components/PortalComponent/PortalPageComponent/PortalPage";

const AddUserPage = () => {
    return (
        <PortalPage
            pageTitle='Create Administrator'
            pageSubtitle='Complete the form below to create a new administrator'
            pageDescription='Complete the form below to create a new administrator'
        >
            <AdminAccountForm />
        </PortalPage>
        // <PortalPageWrapper>
        //     <GridSystem>
        //         <PortalPageHeader
        //             pageTitle='Admin User Form'
        //             pageDescription='Create a new admin user'
        //         />
        //         <PortalPageBody>
        //             
        //             {/* <PortalUserForm/>      */}
        //         </PortalPageBody>
        //     </GridSystem>

        // </PortalPageWrapper>
    );
}


export default AddUserPage;