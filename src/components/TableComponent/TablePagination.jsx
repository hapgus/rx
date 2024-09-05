import styles from "./TablePagination.module.css";
// import SkeletonTable from "../Skeletons/TableSkeleton";
import { TableRowSkeleton } from "../Skeletons/TableSkeleton";
import { IconComponent } from "../Icon/IconComponent";

const TablePagination = ({
    itemsPerPage,
    tableData,
    setCurrentPage,
    currentPage
}) => {

    if (!Array.isArray(tableData) || tableData.length === 0) {
        return <TableRowSkeleton />;
    }

    const totalPages = itemsPerPage ? Math.ceil(tableData.length / itemsPerPage) : 0;
    const startingItem = (currentPage - 1) * itemsPerPage + 1;
    const endingItem = Math.min(currentPage * itemsPerPage, tableData.length);

    // if (totalPages <= 1) {
    //     return <div className={styles.pagination}><div className={styles.infoText2}>Showing all {tableData.length} records</div></div>;
    // }

    const generatePageNumbers = () => {
        const range = 3;
        let start = Math.max(currentPage - range, 1);
        let end = Math.min(currentPage + range, totalPages);

        if (totalPages <= 2 * range + 1) {
            start = 1;
            end = totalPages;
        } else if (currentPage <= range + 1) {
            end = start + 2 * range;
        } else if (currentPage >= totalPages - range) {
            start = end - 2 * range;
        }

        const pages = [];
        for (let i = start; i <= end; i++) {
            pages.push(i);
        }

        return pages;
    };

    const pageNumbers = generatePageNumbers();

    return (
        <>
            <div className={styles.pagination}>
                <div className={styles.paginationContentWrapper}>
                    <div className={styles.buttonWrapper}>
                        <button
                            type="button"
                            className={styles.paginationButton}
                            onClick={() => setCurrentPage(1)}
                            disabled={currentPage === 1}
                        >
                            First
                        </button>
                        <button
                            type="button"
                            className={styles.paginationButton}
                            onClick={() => setCurrentPage(prevPage => prevPage - 1)}
                            disabled={currentPage === 1}
                        >
                             <div className={styles.chevronWrapper}>
                                    <IconComponent iconType='leftChevron' />
                                </div>
                            {/* Previous */}
                        </button>

                        {/* {pageNumbers[0] !== 1 && <>...</>} */}
                        <div className={styles.pageNumberWrapper}>
                            {pageNumbers.map(number => (
                                <span
                                    key={number}
                                    className={`${styles.pagNum} ${number === currentPage ? styles.activePage : ""}`}
                                    onClick={() => setCurrentPage(number)}
                                >
                                    {number}
                                </span>
                            ))}
                        </div>
                        <div className={styles.spreadDotsWrapper}>
                            {pageNumbers[pageNumbers.length - 1] !== totalPages && <><p className={styles.pagNum}>...</p></>}
                        </div>
                        {/* <p> | Page {currentPage} of {totalPages}</p> */}
                        <div className={styles.buttonWrapper}>
                            <button
                                type="button"
                                className={styles.paginationButton}
                                onClick={() => setCurrentPage(prevPage => prevPage + 1)}
                                disabled={currentPage === totalPages}
                            >
                                <div className={styles.chevronWrapper}>
                                    <IconComponent iconType='rightChevron' />
                                </div>
                                {/* Next */}
                            </button>
                            <button
                                type="button"
                                className={styles.paginationButton}
                                onClick={() => setCurrentPage(totalPages)}
                                disabled={currentPage === totalPages}
                            >
                                Last
                            </button>
                        </div>
                    </div>
                    <div className={styles.tableInfoWrapper}>
                        <p className={styles.tableInfoText}>{`Showing ${startingItem} to ${endingItem} of ${tableData.length} records`}</p>
                    </div>
                </div>

            </div>

        </>

    );
};


export default TablePagination;
