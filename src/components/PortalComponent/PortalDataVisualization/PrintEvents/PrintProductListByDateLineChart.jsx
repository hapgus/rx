import { useDataContext } from "../../../../hooks/data-hook";
import { LineChart } from "../../PortalChartComponent/LineChart";
import { useChartConfig } from "../../../../hooks/chart-config-hook";
import { transformWithSchema } from "../../../../utils/data-transformer";
import { PortalCard } from "../../PortalPageComponent/PortalCard/PortalCard";
import Skeleton from 'react-loading-skeleton';

export const PrintProductListByDateLineChart = () => {
    const { isDataState } = useDataContext();  // Access filtered data from context
    const data = isDataState.printDataFilteredByDate;  // Use filtered print data from context
    const { config: lineChartOptions } = useChartConfig('LineChart');  // Use LineChart config

    const targetEvents = ['Print_Product_List'];

    if (!data || data.length === 0) {
        return <Skeleton height={200} width="100%" />;
    }

    // Step 1: Filter 'Print_Product_List' events
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

    // Step 3: Convert aggregated data into an array format
    const newList = Object.keys(eventCountsByDate).map(date => ({
        date,
        eventCount: eventCountsByDate[date],
    }));

    // Sort the newList by eventCount in descending order
    const sortedList = newList.sort((a, b) => b.eventCount - a.eventCount);

    // Step 4: Calculate total and average event count
    const totalEventCount = sortedList.reduce((acc, curr) => acc + curr.eventCount, 0);
    const avgEventCount = sortedList.length > 0 ? totalEventCount / sortedList.length : 0;

    // Find the most active date for product list prints
    const mostActiveDate = sortedList.length > 0 ? sortedList[0].date : 'N/A';

    // Step 5: Transform the data for the Line Chart
    let chartData = null;
    if (newList.length > 0) {
        try {
            chartData = transformWithSchema(newList, 'eventPageOverviewForLineChart');  // Use the correct schema
        } catch (error) {
            console.error(`Error transforming data: ${error.message}`);
            return <div>Error loading data</div>;
        }
    }

    return (
        <PortalCard 
            cardTitle="Product Lists Printed by Date"
            cardData={totalEventCount.toLocaleString()}
            cardFooter={`Average: ${parseInt(avgEventCount)} prints/day. Most active date: ${mostActiveDate}`}
        >
            {chartData ? (
                <LineChart data={chartData} options={lineChartOptions} />
            ) : (
                <div>No chart data available.</div>
            )}
        </PortalCard>
    );
};
