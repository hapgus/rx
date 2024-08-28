

import { PageText } from '../../../components/Text/Text';
import { SavedListTable } from '../../../components/MemberComponent/SavedListsTable';
import { GridSystem } from '../../../components/GridSystem/GridSystem';

const UserSavedListsPage = () => {
    return (
        <>
            <GridSystem>
                <div>
                    <PageText type='pageTitle'>My Saved List</PageText>
                    <PageText type='pageSubtitle'>User saved list page</PageText>
                </div>
                <div>
                    <SavedListTable />
                </div>
            </GridSystem>
        </>
    );
}


export default UserSavedListsPage;