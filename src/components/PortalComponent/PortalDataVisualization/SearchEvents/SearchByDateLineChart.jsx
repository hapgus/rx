import { useDataContext } from "../../../../hooks/data-hook";
import { LineChart } from "../../PortalChartComponent/LineChart";
import { useChartConfig } from "../../../../hooks/chart-config-hook";
import { transformWithSchema } from "../../../../utils/data-transformer";
import { PortalCard } from "../../PortalPageComponent/PortalCard/PortalCard";

export const SearchByDateLineChart = () => {
    const { isDataState } = useDataContext(); // Access filtered data from context
    const data = isDataState.searchDataFilteredByDate;
    console.log('sebydat',data)
    const { config: lineChartOptions } = useChartConfig('LineChart'); // Use LineChart config

    const targetEvents = ['SEARCHED_PRODUCT_SELECTED', 'SEARCHED_PRODUCT_ADDED' ];
    

    if (!data || data.length === 0) {
        return <div>No data available</div>;
    }

    // Step 1: Filter eventPageOverview for target events
    const filteredEvents = data.filter(event => targetEvents.includes(event.eventName));
console.log('from search',filteredEvents )
    // Step 2: Aggregate eventCount by date using reduce()
    const eventCountsByDate = filteredEvents.reduce((acc, event) => {
        const eventDate = event.date;
        const eventCount = Number(event.eventCount);

        // Initialize the date if it doesn't exist
        if (!acc[eventDate]) {
            acc[eventDate] = 0;
        }

        // Add the eventCount for the current date
        acc[eventDate] += eventCount;
        return acc;
    }, {});

    // Step 3: Convert the aggregated data into a new array format
    const newList = Object.keys(eventCountsByDate).map(date => ({
        date,
        eventCount: eventCountsByDate[date],
    }));

    // Sort the newList by eventCount in descending order
    const sortedList = newList.sort((a, b) => b.eventCount - a.eventCount);

    // Step 4: Calculate total and average event count
    const totalEventCount = sortedList.reduce((acc, curr) => acc + curr.eventCount, 0);
    const avgEventCount = sortedList.length > 0 ? totalEventCount / sortedList.length : 0;

    // Find the most active date for product searches
    const mostActiveDate = sortedList.length > 0 ? sortedList[0].date : 'N/A';

    // Step 5: Transform the data for the Line Chart
    let chartData = null;
    if (newList.length > 0) {
        try {
            chartData = transformWithSchema(newList, 'eventPageOverviewForLineChart');
        } catch (error) {
            console.error(`Error transforming data: ${error.message}`);
        }
    }

    return (
        <PortalCard 
            cardTitle="How Often Users Interact With Search"
            cardData={totalEventCount.toLocaleString()}
            cardFooter={`Average ${parseInt(avgEventCount)} search interactions a day.`}
            // cardFooter={`Average ${parseInt(avgEventCount)} search interactions a day. Most active date: ${mostActiveDate}`}
        >
            {chartData ? (
                <LineChart data={chartData} options={lineChartOptions} />  // Use LineChart
            ) : (
                <div>No chart data available.</div>
            )}
        </PortalCard>
    );
};
