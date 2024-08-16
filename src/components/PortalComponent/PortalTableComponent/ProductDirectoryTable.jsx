
import { useProductsHook } from "../../../hooks/product-hook";
import TableBody from "../../TableComponent/TableBody"

import TablePagination from "../../TableComponent/TablePagination";
import { useState } from "react";

export const ProductDirectoryTable = () => {

    const { publicProducts } = useProductsHook();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    console.log('dir', publicProducts)

    const tableColumns = [
        { key: 'title', title: 'Model' },
        { key: 'category', title: 'Category' },
        { key: 'subcategory', title: 'Subcategory' },
        { key: 'msrp', title: 'MSRP' },
        { key: 'updatedAt', title: 'Last changed' },
        // { key: '', title: '' },
    ];

    return (
        publicProducts &&
        <>
            <TableBody
                columns={tableColumns}
                data={publicProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)}
            />
            <TablePagination
                itemsPerPage={itemsPerPage}
                tableData={publicProducts}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
        </>
    )



}