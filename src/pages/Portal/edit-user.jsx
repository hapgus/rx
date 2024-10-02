import { ManageUserForm } from '../../components/PortalComponent/PortalFormComponent/ManageUser/ManageUserForm';
import { PortalPage } from '../../components/PortalComponent/PortalPageComponent/PortalPage/PortalPage';
import { FormWrapper } from '../../components/FormComponent/FormWrapper/FormWrapper';
import { useParams } from 'react-router';
import { useAuth } from '../../hooks/auth-hook';

const EditUserPage = () => {

const {isAuthenticated, isSuperAdmin}= useAuth()


const authUserTableBreadcrumbLink = isSuperAdmin && isAuthenticated 
? "/portal/admin-directory" : "/member/login"

    return (
        <PortalPage
            pageTitle='Update User Access'
            pageDescription='Complete the form below to change the status or role of a user'
           
            breadcrumb='Edit User'
            breadcrumbDirectory="Users"
            breadcrumbDirectoryLink={authUserTableBreadcrumbLink}
            // bodyTitle="User Management Form"
        >
            <FormWrapper>
                <ManageUserForm />
            </FormWrapper>
        </PortalPage>
    )
}

export default EditUserPage;