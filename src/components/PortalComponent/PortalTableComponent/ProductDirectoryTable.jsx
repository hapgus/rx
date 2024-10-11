
import { useProductsHook } from "../../../hooks/use-product-hooks";
import { IconComponent } from "../../Icon/IconComponent";
import TableBody from "../../TableComponent/TableBody"
import { useNavigate } from "react-router";
import { useNotificationHook } from "../../../hooks/use-notification-hooks";
import TablePagination from "../../TableComponent/TablePagination";
import { useState } from "react";
import { useAuth, useLogout } from '../../../hooks/use-auth-hooks';
import { DateComponent } from "../../Date/DateComponent";
import styles from './TableComponent.module.css'
import { LinkComponent } from "../../Links/LinkComponent";
import { useDataContext } from "../../../hooks/data-hook";
import { NormalizeSlugs } from "../../../utils/helper-functions";

// import { SearchFilterInput } from "./SearchFilterInput";

export const ProductDirectoryTable = () => {
    const { authUserId, isSuperAdmin, isAdmin } = useAuth();
    const logout = useLogout();
    const redirect = useNavigate();
    const { setIsModal } = useNotificationHook();
    const { isManagedDataState, setIsManagedDataState } = useDataContext();

    // const { publicProducts,  fetchProducts } = useProductsHook();
    const { allProducts, fetchProducts } = useProductsHook();

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    // const [filteredProducts, setFilteredProducts] = useState(allProducts);

    /* --------------------------------------------------------------------------------------- */
    /* HANDLE NO AUTH REDIRECTS*/
    /* --------------------------------------------------------------------------------------- */
    const handleUnAuthorizedAccess = () => {

        logout();
        setIsModal({ show: false })
    }



    

    const handleDeleteProduct = async (productId) => {
        if (!(isSuperAdmin || isAdmin)) {
            setIsModal({
                show: true,
                modalType: 'confirmationModal',
                title: "Error",
                message: `Please contact an administrator.`,
                cancelText: "Close",
                onCancel: handleUnAuthorizedAccess,
            })
            return
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
    }

    const tableColumns = [
        {
            key: 'title',
            title: 'Model',
            render: row => {
                // Use normalizeSlug to normalize the category
                const normalizedCategory = row && NormalizeSlugs(row.category);
    
                return (
                    <span className={styles.tableLink}>
                        <LinkComponent
                            href={
                                row && row.store === 'hd'
                                    ? `/home-depot/appliances/${normalizedCategory}/${row.title}`
                                    : `/appliances/${normalizedCategory}/${row.title}`
                            }
                        >
                            {row.title}
                        </LinkComponent>
                    </span>
                );
            }
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


    // console.log('table', allProducts)
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