import TableBody from "../../TableComponent/TableBody";
import TablePagination from "../../TableComponent/TablePagination";
import { useState, useEffect } from "react";
import styles from './TableComponent.module.css'
import { IconComponent } from "../../Icon/IconComponent";
import { useNavigate } from "react-router";
import { useRoutingHook } from "../../../hooks/routing-hook";


export const UserDirectoryTable = () => {

    const redirect = useNavigate();
    const { setIsAdminRoutingState } = useRoutingHook();

    const [isUsers, setIsUsers] = useState(false);

    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 10;

    const tableColumns = [
        { key: 'firstName', title: 'First Name' },
        { key: 'lastName', title: 'Last Name' },
        { key: 'email', title: 'Email' },
        { key: 'store', title: 'Store' },
        {
            key: 'status',
            title: 'Status',
            render: row => row.status === "approved" 
            ? <div  onClick={
                () => {
                    setIsAdminRoutingState(row.userId)
                    redirect(`/portal/edit-user/${row.userId}`)
                }
            } className={styles.greenPill}><span>Approved</span></div> 
            : row.status === "notApproved" 
            ?<div  onClick={
                () => {
                    setIsAdminRoutingState(row.userId)
                    redirect(`/portal/edit-user/${row.userId}`)
                }
            } className={styles.redPill}><span>Not Approved</span></div>
            :row.status === "pending"
            ? <div  onClick={
                () => {
                    setIsAdminRoutingState(row.userId)
                    redirect(`/portal/edit-user/${row.userId}`)
                }
            } className={styles.yellowPill}><span>Pending</span></div>
            : "Status Not Set"

        },
        {
            key: 'role',
            title: 'Role',
            render: row => row.role === "superAdmin"
                ? "Super Administrator"
                : row.role === "admin" ? "Administrator"
                    : row.role === "user" ? "User" : "Role Not Set"
        },
        {
            key: 'manage',
            title: 'Manage',
            render: row => (
                <div className={styles.actionIconContainer}>

                    <IconComponent
                        iconType='edit'
                        onClick={
                            () => {
                                setIsAdminRoutingState(row.userId)
                                redirect(`/portal/edit-user/${row.userId}`)
                            }
                        }
                    />

                </div>
            )
        }

    ];
    const fetchUsers = async () => {

        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}users`);
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




    console.log(isUsers)

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