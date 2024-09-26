

import { TableChart } from "../../PortalChartComponent/TableChart";
import { useChartConfig } from "../../../../hooks/chart-config-hook";
import { transformWithSchema } from "../../../../utils/data-transformer";
import { useDataContext } from "../../../../hooks/data-hook";


export const TechnicalOverviewTable = () => {
  const { isDataState } = useDataContext(); // Access the context data
  const tableData = isDataState.technicalDataFilteredByDate; 
  console.log(tableData)
  const { config: tableChartOptions } = useChartConfig('TableChart');

  if (!tableData || !tableData.length) {
    console.warn('No visitors table data found');
    return <div>No data available</div>;
  }

  // Sort the data by date in ascending order
  const sortedData = tableData.sort((a, b) => {
    const dateA = new Date(a.date.slice(0, 4), a.date.slice(4, 6) - 1, a.date.slice(6, 8));
    const dateB = new Date(b.date.slice(0, 4), b.date.slice(4, 6) - 1, b.date.slice(6, 8));
    return dateA - dateB;
  });

  let chartData = null;
  try {
    chartData = transformWithSchema(sortedData, 'technicalActivityOverview'); // Transform with the correct schema
  } catch (error) {
    console.error(`Error transforming data: ${error.message}`);
    return <div>Error loading data</div>;
  }

  return (
    <TableChart
      data={chartData}
      options={tableChartOptions}
    />
  );
};
