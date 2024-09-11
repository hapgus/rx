import { useState } from "react";
import styles from "./TableBody.module.css";
import { TableSkeleton } from "../Skeletons/TableSkeleton";

const TableBody = ({ columns, data }) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  // Handle sorting on column click
  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  // Sorting logic based on sortConfig
  const sortedData = sortConfig.key
    ? [...data].sort((a, b) => {
        let order = sortConfig.direction === 'asc' ? 1 : -1;
        if (a[sortConfig.key] < b[sortConfig.key]) return -order;
        if (a[sortConfig.key] > b[sortConfig.key]) return order;
        return 0;
      })
    : data; // If no sorting is active, just use the data as is

  const hasData = Array.isArray(data) && data.length > 0;

  return (
    !hasData ? <TableSkeleton height={50}/> :
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead className={styles.columnHeader}>
          <tr className={styles.tableRows}>
            {columns.map((column, idx) => (
              <th
                className={styles.tableHeader}
                key={idx}
                onClick={() => handleSort(column.key)}  // Trigger sort on header click
              >
                {column.title}
                {sortConfig.key === column.key && (
                  <span>
                    {sortConfig.direction === 'asc' ? ' ↑' : ' ↓'}
                  </span> // Show direction arrow (optional)
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={styles.tableBody}>
          {sortedData.map((row, idx) => (
            <tr key={idx} className={styles.tableRows}>
              {columns.map((column) => (
                <td key={`${idx}-${column.key}`} className={styles.tableData}>
                  {column.render ? column.render(row) : row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableBody;
