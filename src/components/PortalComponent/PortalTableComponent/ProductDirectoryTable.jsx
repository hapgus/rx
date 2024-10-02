
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
import { LinkComponent } from "../../Links/LinkComponent";
import { useDataContext } from "../../../hooks/data-hook";

// import { SearchFilterInput } from "./SearchFilterInput";

export const ProductDirectoryTable = () => {
    const { authUserId, isSuperAdmin, isAdmin } = useAuth();
    const redirect = useNavigate();
    const { setIsModal } = useNotificationHook();
    const { isManagedDataState, setIsManagedDataState } = useDataContext();

    // const { publicProducts,  fetchProducts } = useProductsHook();
    const { allProducts, fetchProducts } = useProductsHook();

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    // const [filteredProducts, setFilteredProducts] = useState(allProducts);

    // HANDLE MODAL OPTIONS




    const handleDeleteProduct = async (productId) => {
        if (!isSuperAdmin || !isAdmin) {
            setIsModal({
                show: true,
                modalType: 'errorModal',
                title: "Error",
                message: `We cannot let you delete products at this time. Please contact the administrator.`,
                onCancel: () => setIsModal({ show: false }),
                cancelText: "Close",
            });

        }
        if (isSuperAdmin || isAdmin) {

            setIsModal({
                show: true,
                modalType: 'confirmationModal',
                title: "Confirm Deletion of Product",
                message: `Are you sure you want to delete this product? This action is permanent and cannot be undone. Please confirm if you wish to proceed.`,
                errorList: [],
                // onConfirm: () => handleDeleteProduct(),
                confirmText: 'Confirm deletion',
                onCancel: () => setIsModal({ show: false }),
                cancelText: "Go back",
                onConfirm: async () => {
                    setIsManagedDataState(prevState => ({ ...prevState, loading: true }));
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
                            setIsManagedDataState(prevState => ({ ...prevState, loading: false }));
                            setIsModal({
                                show: true,
                                modalType: 'successModal',
                                title: 'Product Deleted Successfully',
                                message: `The product has been permanently deleted from the directory. All associated information is no longer available.`,
                                cancelText: "Close",
                                onCancel: () => setIsModal({ show: false }),
                            });
                            // alert('product delete')
                            // setIsModal({ show: false })
                        }

                    } catch (err) {
                        setIsManagedDataState(prevState => ({ ...prevState, loading: false }));
                        setIsModal({
                            show: true,
                            modalType: 'errorModal',
                            title: "Error",
                            message: `Product could not be deleted ${err}`,
                            onCancel: () => setIsModal({ show: false }),
                            cancelText: "Close",
                        });

                    }


                },
               
            });
        }
        // console.log('product to delete', productId)
        // setIsModal({
        //     show: true,
        //     modalType: 'infoModal',
        //     title: 'Are You Sure You Want to Delete',
        //     message: `You are about to permanently delete this product. This action cannot be undone. Are you sure you want to proceed?`,
        //     confirmText: 'Delete product',
        //     cancelText: 'Go back',
        //     onConfirm: async () => {
        //         try {
        //             const response = await fetch(
        //                 `${process.env.REACT_APP_BACKEND_URL}delete-product/${productId}`,
        //                 {
        //                     method: 'DELETE',
        //                     headers: {
        //                         'Content-Type': 'application/json',
        //                     },
        //                     body: JSON.stringify({
        //                         adminId: authUserId,
        //                     })
        //                 }
        //             )
        //             if (response.status === 200) {
        //                 fetchProducts();
        //                 alert('product delete')
        //                 setIsModal({ show: false })
        //             }
        //             console.log('delete response', response)
        //         } catch (err) {
        //             console.log('deletion', err)
        //         }

        //         // setIsModal({ show: false })
        //     },
        //     onCancel: () => {
        //         setIsModal({ show: false })
        //     }

        // })
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
        {
            key: 'title',
            title: 'Model',
            render: row => (
                <span className={styles.tableLink} ><LinkComponent href={`/appliances/${row.category}/${row.title}`}>{row.title}</LinkComponent></span>
            )
        },
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

            {/* <SearchFilterInput
                data={allProducts}
                setFilteredData={setFilteredProducts}
                placeholder="Search products..."
                searchBy={['category']} // Array of keys to search
            /> */}
            <TableBody
                columns={tableColumns}
                // data={filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)}
                data={allProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)}
            />
            <TablePagination
                itemsPerPage={itemsPerPage}
                // tableData={filteredProducts}
                tableData={allProducts}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
        </>
    )



}