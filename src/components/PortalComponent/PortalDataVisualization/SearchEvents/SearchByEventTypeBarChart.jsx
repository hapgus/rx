import { useDataContext } from "../../../../hooks/data-hook";
import { BarChart } from "../../PortalChartComponent/BarChart";
import { useChartConfig } from "../../../../hooks/chart-config-hook";
import { PortalCard } from "../../PortalPageComponent/PortalCard/PortalCard";
import Skeleton from "react-loading-skeleton";

export const SearchByEventTypeBarChart = () => {
    const { isDataState } = useDataContext(); 
    const data = isDataState.searchDataFilteredByDate; // Use filtered search data
    const { config: barChartOptions } = useChartConfig('BarChart', 'Search Event', 'Event Count'); // Updated chart config

    const targetEvents = ['SEARCHED_PRODUCT_SELECTED', 'SEARCHED_PRODUCT_ADDED'];

    if (!data || !data.length) {
        return <Skeleton height={200} width="100%" />;
    }

    // Step 1: Define a mapping of full event names to their shorter versions
    const eventNameMapping = {
        'SEARCHED_PRODUCT_SELECTED': 'Visiting Product Pages',
        'SEARCHED_PRODUCT_ADDED': 'Adding Products to List'
    };

    // Step 2: Filter relevant events based on the search events
    const filteredEvents = data.filter(event => targetEvents.includes(event.eventName));

    // Step 3: Aggregate event counts by search event name and by date
    const eventMap = new Map();
    const dateMap = new Map();  // Track events by date

    filteredEvents.forEach(item => {
        const eventName = item.eventName;  // Get the event name (e.g., SEARCHED_PRODUCT_SELECTED)
        const eventCount = Number(item.eventCount);  // Get the event count and ensure it's a number
        const eventDate = item.date;  // Capture the event date

        // Aggregate event count by event name
        if (!eventMap.has(eventName)) {
            eventMap.set(eventName, { eventName, totalEventCount: 0 });
        }
        const eventData = eventMap.get(eventName);
        eventData.totalEventCount += eventCount;  // Accumulate the count for each event

        // Aggregate event count by date
        if (!dateMap.has(eventDate)) {
            dateMap.set(eventDate, 0);
        }
        dateMap.set(eventDate, dateMap.get(eventDate) + eventCount);  // Accumulate event count by date
    });

    // Step 4: Sort the aggregated data for events (optional)
    const sortedEvents = Array.from(eventMap.values()).sort((a, b) => b.totalEventCount - a.totalEventCount);

    // Step 5: Calculate the total and average event count
    const totalEventCount = sortedEvents.reduce((acc, curr) => acc + curr.totalEventCount, 0);
    const avgEventCount = sortedEvents.length > 0 ? totalEventCount / sortedEvents.length : 0;

    // Step 6: Find the most active date
    const mostActiveDateEntry = Array.from(dateMap.entries()).sort((a, b) => b[1] - a[1])[0];
    const mostActiveDate = mostActiveDateEntry ? mostActiveDateEntry[0] : 'Unknown';
    const mostActiveDateEvents = mostActiveDateEntry ? mostActiveDateEntry[1] : 0;

    // Step 7: Format the data for BarChart (shortened event names and their totals)
    const chartData = [
        ['Search Event', 'Event Count'], 
        ...sortedEvents.map(item => [
            eventNameMapping[item.eventName] || item.eventName,  // Use shortened name if available
            item.totalEventCount
        ])
    ];

    // Step 8: Render the bar chart with the updated footer
    return (
        <PortalCard 
            cardTitle="Aggregated Totals for Search Events"
            cardFooter={`Most active date: ${mostActiveDate} with ${mostActiveDateEvents.toLocaleString()} events.`}
        >
            {chartData.length > 1 ? (
                <BarChart data={chartData} options={barChartOptions} />  // Render BarChart
            ) : (
                <div>No chart data available.</div>
            )}
        </PortalCard>
    );
};
