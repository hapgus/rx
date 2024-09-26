import { useDataContext } from "../../../../hooks/data-hook";
import { LineChart } from "../../PortalChartComponent/LineChart";
import { useChartConfig } from "../../../../hooks/chart-config-hook";
import { transformWithSchema } from "../../../../utils/data-transformer";
import { PortalCard } from "../../PortalPageComponent/PortalCard/PortalCard";

export const AddToProductListByDateLineChart = () => {
    const { isDataState } = useDataContext(); // Access filtered data from context
    const data = isDataState.productDataFilteredByDate; 
    const { config: lineChartOptions } = useChartConfig('LineChart'); // Use LineChart config

    const targetEvents = ['Add_Product_To_List'];

    if (!data) {
        return <div>No data available</div>;
    }

    // Step 1: Filter data for target events
    const filteredEvents = data.filter(event => targetEvents.includes(event.eventName));

    // Step 2: Aggregate eventCount by date
    const eventCountsByDate = filteredEvents.reduce((acc, event) => {
        const eventDate = event.date;
        const eventCount = Number(event.eventCount);

        if (!acc[eventDate]) {
            acc[eventDate] = 0;
        }

        acc[eventDate] += eventCount;
        return acc;
    }, {});

    // Step 3: Convert to array format
    const newList = Object.keys(eventCountsByDate).map(date => ({
        date,
        eventCount: eventCountsByDate[date],
    }));

    // Sort the newList by eventCount in descending order
    const sortedList = newList.sort((a, b) => b.eventCount - a.eventCount);

    // Step 4: Calculate total and average event count
    const totalEventCount = sortedList.reduce((acc, curr) => acc + curr.eventCount, 0);
    const avgEventCount = sortedList.length > 0 ? totalEventCount / sortedList.length : 0;

    // Step 5: Transform data for Line Chart
    let chartData = null;
    if (sortedList.length > 0) {
        try {
            chartData = transformWithSchema(sortedList, 'productDataOverview');
        } catch (error) {
            console.error(`Error transforming data: ${error.message}`);
        }
    }

    return (
        <PortalCard
            cardTitle="Products Added to List"
            cardData={totalEventCount.toLocaleString()}
            cardFooter={`${parseInt(avgEventCount)} products added per day on average`}
        >
            {chartData ? (
                <LineChart data={chartData} options={lineChartOptions} />
            ) : (
                <div>No chart data available.</div>
            )}
        </PortalCard>
    );
};
