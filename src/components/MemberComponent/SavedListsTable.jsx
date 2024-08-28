import TableBody from "../TableComponent/TableBody"
import TablePagination from "../TableComponent/TablePagination"
import { useState, useEffect } from "react";
import { useAuth } from "../../hooks/auth-hook";
import { useHttpClient } from "../../hooks/http-hook";
import styles from './SavdListsTable.module.css';
import { useProductsHook } from "../../hooks/product-hook";
import { IconComponent } from "../Icon/IconComponent";
import { useNavigate } from "react-router";


export const SavedListTable = () => {
    const redirect = useNavigate()
    const { publicProducts } = useProductsHook();
    const { sendRequest } = useHttpClient();
    const { authUserId } = useAuth();
    const [currentPage, setCurrentPage] = useState(1);
    const [isSavedList, setIsSavedList] = useState([]);

    const itemsPerPage = 10;

    //FETCH LIST
    useEffect(() => {
        if (authUserId) {
            const fetchProductData = async () => {
                try {
                    const response = await sendRequest(`http://localhost:3005/user-lists/${authUserId}`);
                    const listData = await response.responseData.userLists;
                    console.log(listData)
                    setIsSavedList(listData)

                } catch (err) {
                    console.error('Error fetching product data:', err);
                }
            };

            fetchProductData();
        }
    }, [authUserId])

    //DELETE LIST
    const handleDeleteList = async (listId) => {

        if (authUserId) {

            try {
                const response = await sendRequest(
                    `http://localhost:3005/delete-list/${listId}`,
                    'DELETE',
                )
                console.log('response',response)
                if (response.responseStatusCode === 200) {
                    alert('deleted')
                }
            } catch (err) {
                console.log(err)
            }
        }
    };

    const tableColumns = [
        { key: 'listName', title: 'List name' },
        { key: 'listNotes', title: 'Notes' },
        { key: 'productCount', title: 'Products' },
        { key: 'lastUpdated', title: 'Last changed' },
        {
            key: 'actions',
            title: 'Actions',
            render: row => (
                <div className={styles.actionIconContainer}>

                    <IconComponent onClick={() => (
                         redirect(`/hapg/edit-product-list-builder/${row.listId}`),
                        alert(row)
                    )
                       
                        } iconType='edit' />
                  
                    <IconComponent onClick={() => handleDeleteList(row._id)} iconType='trash' />
                </div>
            )

        }
        // { key: '', title: '' },
    ];


console.log(tableColumns)
    return (
        <>
            <TableBody
                columns={tableColumns}
                data={isSavedList?.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)}
            />
            <TablePagination
                itemsPerPage={itemsPerPage}
                tableData={isSavedList}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
        </>
    )
}