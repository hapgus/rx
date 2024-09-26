
import { TableChart } from "../PortalChartComponent/TableChart";
import { useData } from "../../../hooks/data-hook";
import { useChartConfig } from "../../../hooks/chart-config-hook";
import { transformWithSchema } from "../../../utils/data-transformer";



export const VisitorsAnalyticsBoard = () => {

  const { data: tableData } = useData('http://localhost:3005/data');
  const { config: tableChartOptions } = useChartConfig('TableChart');

  if (!tableData || !tableData.visitorOverview) {
    console.warn('No visitors table data found');
    return <div>No data available</div>;
  }

  let chartData = null;
  try {
    chartData = transformWithSchema(tableData.visitorOverview, 'visitorOverview');
  } catch (error) {
    console.error(`Error transforming data: ${error.message}`);
    return <div>Error loadings data</div>;
  }
  return (
    <TableChart
      data={chartData} options={tableChartOptions}
    />
  )
}