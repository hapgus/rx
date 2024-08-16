import TableBody from "../../TableComponent/TableBody";
import TablePagination from "../../TableComponent/TablePagination";
import { useState, useEffect } from "react";

export const UserDirectoryTable = () => {

    const [isUsers, setIsUsers]=useState(false);
     const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const tableColumns = [
        { key: 'firstName', title: 'First Name' },
        { key: 'lastName', title: 'Last Name' },
        { key: 'email', title: 'Email' },
        { key: 'store', title: 'Store' },
        // { key: 'msrp', title: 'MSRP' },
        // { key: 'updatedAt', title: 'Last changed' },
        // { key: '', title: '' },
    ];
    const fetchUsers = async () => {
       
        try {
            const response = await fetch('http://localhost:3005/users');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            // console.log('data',data)
            setIsUsers(data.users);
        } catch (err) {
        console.log(`error ${err}`)
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

   
   

    console.log('dir', isUsers)

;

    return (
        isUsers &&
        <>
            <TableBody
                columns={tableColumns}
                data={isUsers.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)}
            />
            <TablePagination
                itemsPerPage={itemsPerPage}
                tableData={isUsers}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
        </>
    )



}