import { useData } from "../../../../hooks/data-hook";
import { transformWithSchema } from "../../../../utils/data-transformer";
import { BarChart } from "../../PortalChartComponent/BarChart";
import { useChartConfig } from "../../../../hooks/chart-config-hook";

export const NewVsTotalUsersBarChart = () => {

    const { data: barData } = useData('http://localhost:3005/data');
    const { config: barChartOptions } = useChartConfig('BarChart');
    
    console.log(barData);

    let chartData = null;

    if (barData && barData.pageData) {
        try {
            // Transform the barData using the schema-based transformation
            chartData = transformWithSchema(barData.pageData, 'pageData');
        } catch (error) {
            console.error(`Error transforming data: ${error.message}`);
        }
    } else {
        console.warn('No pageData found in barData', barData);
    }

    return (
        <>
            {chartData ? (
                <BarChart data={chartData} options={barChartOptions} />
            ) : (
                <div>No chart data available.</div>
            )}
        </>
    );
};
