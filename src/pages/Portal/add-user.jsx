
import { AdminAccountForm } from "../../components/PortalComponent/PortalFormComponent/CreateUser/AdminAccountForm";
import { PortalPage } from "../../components/PortalComponent/PortalPageComponent/PortalPage/PortalPage";
import { FormWrapper } from "../../components/FormComponent/FormWrapper/FormWrapper";

const AddUserPage = () => {
    return (
        <PortalPage
            pageTitle='Create Administrator'
            pageSubtitle='Complete the form below to create a new administrator'
            pageDescription='Complete the form below to create a new administrator'
            breadcrumb='Create Admin User'
            breadcrumbDirectory="Users"
            breadcrumbDirectoryLink='/portal/user-directory'
            
            // bodyTitle='Create Admin User Form'
        >
            <FormWrapper>
                <AdminAccountForm />
            </FormWrapper>
        </PortalPage>
        
    );
}


export default AddUserPage;