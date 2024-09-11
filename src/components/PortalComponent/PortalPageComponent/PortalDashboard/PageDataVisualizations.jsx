import { useData } from "../../../../hooks/data-hook";
import { transformWithSchema } from "../../../../utils/data-transformer";

import { LineChart } from "../../PortalChartComponent/LineChart";
import { useChartConfig } from "../../../../hooks/chart-config-hook";

export const PageViewsLinChart = () => {

    const { data: lineData } = useData('http://localhost:3005/data');
    const { config: lineChartOptions } = useChartConfig('LineChart');
    
    console.log(lineData);

    let chartData = null;

    if (lineData && lineData.pageData) {
        try {
          // Transform the lineData using the schema-based transformation
          chartData = transformWithSchema(lineData.pageData, 'pageData');
        } catch (error) {
          console.error(`Error transforming data: ${error.message}`);
        }
      } else {
        console.warn('No pageData found in lineData', lineData);
      }

    return (
        <>
            {chartData ? (
        <LineChart data={chartData} options={lineChartOptions} />
      ) : (
        <div>No chart data available.</div>
      )}
        </>
    );
};
