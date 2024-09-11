import TableBody from "../../../TableComponent/TableBody";
import TablePagination from "../../../TableComponent/TablePagination";
import { useData } from "../../../../hooks/data-hook";
import { useEffect, useState } from "react";
import { formatDate } from "../../../Date/DateComponent";
import { convertSecondsToMinutes } from "../../../../utils/text-help";

export const LandingPageSummaryTable = () => {
    const { data } = useData('http://localhost:3005/data');

    const [currentPage, setCurrentPage] = useState(1);
    const [isSummaryData, setIsSummaryData] = useState([]);

    useEffect(() => {
        if (data && data.landingPageSummary) {
            // Clone and sort data by 'date' in descending order (most recent first)
            const sortedData = [...data.landingPageSummary].sort((a, b) => {
                const dateA = new Date(a.date.replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3'));
                const dateB = new Date(b.date.replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3'));
                return dateB - dateA; // Sorting in descending order
            });
            setIsSummaryData(sortedData);
        }
    }, [data]);

    const itemsPerPage = 10;

    const tableColumns = [
        {
            key: 'date',
            title: 'Date',
            render: row => (
                formatDate('customFormat', row.date.replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3'))
            )
        },
        { key: 'pagePath', title: 'Page' },
        { key: 'screenPageViews', title: 'Views' },
        {
            key: 'userEngagementDuration',
            title: 'Time on page',
            render: row => convertSecondsToMinutes(row.userEngagementDuration)
        },
        { key: 'activeUsers', title: 'Users' },
        { key: 'newUsers', title: 'New Users' },
        { key: '', title: '' },
    ];

    return (
        isSummaryData.length > 0 && (
            <>
                <TableBody
                    columns={tableColumns}
                    data={isSummaryData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)}
                />
                <TablePagination
                    itemsPerPage={itemsPerPage}
                    tableData={isSummaryData}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                />
            </>
        )
    );
};
