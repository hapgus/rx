import { ManageUserForm } from '../../components/AuthComponent/ManageUserForm';
import { PortalPage } from '../../components/PortalComponent/PortalPageComponent/PortalPage/PortalPage';
import { FormWrapper } from '../../components/FormComponent/FormWrapper/FormWrapper';

const EditUserPage = () => {
    return (
        <PortalPage
            pageTitle='Update User Access'
            pageDescription='Complete the form below to change the status or role of a user'
           
            breadcrumb='Edit User'
            breadcrumbDirectory="Users"
            breadcrumbDirectoryLink='/portal/user-directory'
            bodyTitle="User Management Form"
        >
            <FormWrapper>
                <ManageUserForm />;
            </FormWrapper>
        </PortalPage>
    )
}

export default EditUserPage;