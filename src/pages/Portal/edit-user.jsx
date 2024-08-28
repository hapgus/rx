
import { ManageUserForm } from '../../components/AuthComponent/ManageUserForm';
import { PageText } from '../../components/Text/Text';
import { useParams } from 'react-router';

const EditUserPage = () => {
    
    return (
        <div>
            <PageText type='pageHeaderTitle'>Change / manage / approve a user account</PageText>
            <PageText type='pageHeaderDescription'>Change status, role, or access level of any user</PageText>
            <ManageUserForm  />



        </div>
    );
}


export default EditUserPage;