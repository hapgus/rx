import { useData } from "../../../../hooks/data-hook";
import { PieChart } from "../../PortalChartComponent/PieChart";
import { useChartConfig } from "../../../../hooks/chart-config-hook";
import { transformWithSchema } from "../../../../utils/data-transformer";
import { PortalCard } from "../../PortalPageComponent/PortalCard/PortalCard";
import { formatChartLabel } from "../../../../utils/text-help";

export const PrintProductListPostActionPieChart = () => {
    const { data: pieData } = useData('http://localhost:3005/data');
    const { config: pieChartOptions } = useChartConfig('PieChart');

    const targetEvents = [
        'Print_Product_List',
    ];

    if (!pieData || !pieData.productEventSnapshot) {
        console.warn('No data or productEventSnapshot found');
        return <div>No data available</div>;
    }

    // Step 1: Filter for 'Print_Product_List' events
    const filteredEvents = pieData.productEventSnapshot.filter(
        event => targetEvents.includes(event.eventName)
    );

    // Step 2: Aggregate eventCount by postPrintListAction
    const aggregatedData = filteredEvents.reduce((acc, item) => {
        const postPrintListAction = item['customEvent:postPrintListAction'] || 'Unknown Action'; // Default if missing
        const eventCount = Number(item.eventCount);

        if (acc[postPrintListAction]) {
            acc[postPrintListAction] += eventCount;
        } else {
            acc[postPrintListAction] = eventCount;
        }
        return acc;
    }, {});

    // Step 3: Transform aggregated data into a format suitable for the pie chart
    const transformedData = Object.keys(aggregatedData).map(action => ({
        postPrintListAction: formatChartLabel(action), // Format label if needed
        eventCount: aggregatedData[action],
    }));

    // Step 4: Use the schema for the pie chart
    let chartData = null;
    try {
        chartData = transformWithSchema(transformedData, 'productEventSnapShotPostPrintAction'); // Use the correct schema
    } catch (error) {
        console.error(`Error transforming data: ${error.message}`);
        return <div>Error loading data</div>;
    }

    return (
        <PortalCard cardTitle="Post Print List Actions" toolTipText="This chart shows the actions taken after printing a product list.">
            {chartData ? (
                <PieChart data={chartData} options={pieChartOptions} />
            ) : (
                <div>No chart data available.</div>
            )}
        </PortalCard>
    );
};
