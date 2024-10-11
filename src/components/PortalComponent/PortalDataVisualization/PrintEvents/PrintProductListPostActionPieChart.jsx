import { PieChart } from "../../PortalChartComponent/PieChart";
import { PortalCard } from "../../PortalPageComponent/PortalCard/PortalCard";
import { transformWithSchema } from "../../../../utils/data-transformer";
import { useDataContext } from "../../../../hooks/data-hook"; 
import { useChartConfig } from "../../../../hooks/chart-config-hook";
import { formatChartLabel } from "../../../../utils/helper-functions";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'; 

export const PrintProductListPostActionPieChart = () => {
    const { isDataState } = useDataContext(); 
    const pieData = isDataState.printDataFilteredByDate; 
    const { config: pieChartOptions } = useChartConfig(
        'PieChart', 
        ''
    );

    const targetEvents = ['LIST_PRINTED'];

    if (!pieData || !pieData.length) {
        return <Skeleton height={200} width='100%' />;
    }

    // Step 1: Filter for 'Print_Product_List' events
    const filteredEvents = pieData.filter(
        event => targetEvents.includes(event.eventName)
    );

    // Step 2: Aggregate eventCount by postPrintListAction
    const aggregatedData = filteredEvents.reduce((acc, item) => {
        const postPrintListAction = item['customEvent:postPrintListAction'] || 'Unknown Action';
        const eventCount = Number(item.eventCount);

        if (acc[postPrintListAction]) {
            acc[postPrintListAction] += eventCount;
        } else {
            acc[postPrintListAction] = eventCount;
        }
        return acc;
    }, {});

    // Step 3: Find the category with the most users and calculate percentage
    const totalEvents = Object.values(aggregatedData).reduce((acc, curr) => acc + curr, 0);
    const maxCategory = Object.keys(aggregatedData).reduce((max, category) =>
        aggregatedData[category] > aggregatedData[max] ? category : max,
        Object.keys(aggregatedData)[0]
    );
    const maxCategoryEvents = aggregatedData[maxCategory];
    const percentage = ((maxCategoryEvents / totalEvents) * 100).toFixed(2);

    // Step 4: Transform aggregated data into a format suitable for the pie chart
    const transformedData = Object.keys(aggregatedData).map(action => ({
        postPrintListAction: formatChartLabel(action), // Format label if needed
        eventCount: aggregatedData[action],
    }));

    // Step 5: Use the schema for the pie chart
    let chartData = null;
    try {
        chartData = transformWithSchema(transformedData, 'printActivityOverview'); // Use the correct schema
    } catch (error) {
        console.error(`Error transforming data: ${error.message}`);
        return <div>Error loading data</div>;
    }

    return (
        <PortalCard 
            cardTitle="Post Print List Actions"
              toolTipText="This chart illustrates the distribution of actions users take after printing a product list."
            //  toolTipText="This chart illustrates the distribution of actions users take after printing a product list. It provides insights into common next steps, such as viewing, sharing, or saving the list."
            // toolTipText="This chart shows the actions taken after printing a product list."
            cardFooter={`${percentage}% of users took the action "${formatChartLabel(maxCategory)}" after printing the product list`}
        >
            {chartData ? (
                <PieChart data={chartData} options={pieChartOptions} />
            ) : (
                <Skeleton height={200} width='100%' />
            )}
        </PortalCard>
    );
};
