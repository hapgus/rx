
import { useProductsHook } from "../../../hooks/product-hook";
import { IconComponent } from "../../Icon/IconComponent";
import TableBody from "../../TableComponent/TableBody"
import { useNavigate } from "react-router";
import { useNotificationHook } from "../../../hooks/notification-hook";
import TablePagination from "../../TableComponent/TablePagination";
import { useState } from "react";
import { useAuth } from '../../../hooks/auth-hook';
import { DateComponent } from "../../Date/DateComponent";
import styles from './TableComponent.module.css'

export const ProductDirectoryTable = () => {

    const redirect = useNavigate();
    // const { publicProducts,  fetchProducts } = useProductsHook();
    const { allProducts,  fetchProducts } = useProductsHook();
    const { isModal, setIsModal } = useNotificationHook();
    const { authUserId } = useAuth();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const handleDeleteProduct = async (productId) => {
        console.log('product to delete', productId)
        setIsModal({
            show: true,
            modalType: 'infoModal',
            title: 'Are You Sure You Want to Delete',
            message: `You are about to permanently delete this product. This action cannot be undone. Are you sure you want to proceed?`,
            confirmText: 'Delete product',
            cancelText: 'Go back',
            onConfirm: async () => {
                try {
                    const response = await fetch(
                        `${process.env.REACT_APP_BACKEND_URL}delete-product/${productId}`,
                        {
                            method: 'DELETE',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                adminId: authUserId,
                            })
                        }
                    )
                    if (response.status === 200) {
                        fetchProducts();
                        alert('product delete')
                         setIsModal({ show: false })
                    }
                    console.log('delete response', response)
                } catch (err) {
                    console.log('deletion', err)
                }

                // setIsModal({ show: false })
            },
            onCancel: () => {
                setIsModal({ show: false })
            }

        })
        // try {
        //     const response = await fetch(
        //         `${process.env.REACT_APP_BACKEND_URL}delete-product/${productId}`,
        //         {
        //             method: 'DELETE',
        //             headers: {
        //                 'Content-Type': 'application/json',
        //             },
        //             body: JSON.stringify({
        //                 adminId: authUserId,
        //             })
        //         }
        //     )
        //     if (response.status === 200) {
        //         alert('product delete')
        //     }
        //     console.log('delete response', response)
        // } catch (err) {
        //     console.log('deletion', err)
        // }

    }



    const tableColumns = [
        { key: 'title', title: 'Model' },
        { key: 'category', title: 'Category' },
        { key: 'subcategory', title: 'Subcategory' },
        { key: 'msrp', title: 'MSRP' },
        {
            key: 'updatedAt',
            title: 'Last Changed',
            render: row => (
                <DateComponent
                    dateType="customFormat" // Or 'isoDate', 'fullDate', etc.
                    dateValue={row.updatedAt} // Pass the updatedAt date
                />
            )
        },
        {
            key: 'actions',
            title: 'Actions',
            render: row => (
                <div className={styles.actionIconContainer}>

                    <IconComponent onClick={() => redirect(`/portal/edit-product/${row._id}`)} iconType='edit' />
                    <IconComponent onClick={() => redirect(`/portal/add-template-product/${row._id}`)} iconType='copy' />
                    <IconComponent onClick={() => handleDeleteProduct(row._id)} iconType='trash' />
                </div>
            )

        }
        // { key: '', title: '' },
    ];
    console.log('table', allProducts)
    return (

        allProducts &&
        <>
            <TableBody
                columns={tableColumns}
                data={allProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)}
            />
            <TablePagination
                itemsPerPage={itemsPerPage}
                tableData={allProducts}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
        </>
        // publicProducts &&
        // <>
        //     <TableBody
        //         columns={tableColumns}
        //         data={publicProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)}
        //     />
        //     <TablePagination
        //         itemsPerPage={itemsPerPage}
        //         tableData={publicProducts}
        //         setCurrentPage={setCurrentPage}
        //         currentPage={currentPage}
        //     />
        // </>
    )



}