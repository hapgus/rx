import { TableChart } from "../../PortalChartComponent/TableChart";
import { useChartConfig } from "../../../../hooks/chart-config-hook";
import { transformWithSchema } from "../../../../utils/data-transformer";
import { useDataContext } from "../../../../hooks/data-hook";

export const SearchActivityOverviewTable = () => {
  const { isDataState } = useDataContext(); // Access the context data
  const tableData = isDataState.searchDataFilteredByDate; // Use filtered data
  console.log(tableData)
  const { config: tableChartOptions } = useChartConfig('TableChart'); // Get config for TableChart

  // List of specific events to target
  const targetEvents = [
    'Select_Product_From_Search',

  ]; // Add your desired event names here

  // Filter the table data to only include specific events
  const filteredEvents = tableData?.filter(event => targetEvents.includes(event.eventName)) || [];

  if (!filteredEvents.length) {
    console.warn('No matching events found');
    return <div>No data available</div>;
  }

  // Sort the data by date in ascending order
  const sortedData = filteredEvents.sort((a, b) => {
    const dateA = new Date(a.date.slice(0, 4), a.date.slice(4, 6) - 1, a.date.slice(6, 8));
    const dateB = new Date(b.date.slice(0, 4), b.date.slice(4, 6) - 1, b.date.slice(6, 8));
    return dateA - dateB;
  });

  // Transform data for TableChart
  let chartData = null;
  try {
    chartData = transformWithSchema(sortedData, 'searchActivityOverview'); // Adjust schema as needed
  } catch (error) {
    console.error(`Error transforming data: ${error.message}`);
    return <div>Error loading data</div>;
  }

  return (
    <TableChart
      data={chartData}
      options={tableChartOptions} // Pass table chart options correctly
    />
  );
};
