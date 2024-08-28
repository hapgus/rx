import styles from "./TableBody.module.css";

const TableBody = ({ columns, data }) => {
  const hasData = Array.isArray(data) && data.length > 0;

  return (
    !hasData ? <h1>No Data</h1> :
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead className={styles.columnHeader}>
            <tr className={styles.tableRows}>
              {columns.map((column, idx) => {
                return (
                  <th className={styles.tableHeader} key={idx}>{column.title}</th>
                )
              })}
            </tr>
          </thead>
          <tbody className={styles.tableBody}>

            {data.map((row, idx) => (
              // <tr className={styles.tableRows} key={row._id}>
              <tr className={styles.tableRows} key={idx}>
                {columns.map(column => (
                  <td className={styles.tableData} key={`${row._id}-${column.key}`}>
                    {column.render ? column.render(row) : row[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  );
}

export default TableBody;
