import { useDataContext } from "../../../../hooks/data-hook";
import { ColumnChart } from "../../PortalChartComponent/ColumnChart";
import { useChartConfig } from "../../../../hooks/chart-config-hook";
import { PortalCard } from "../../PortalPageComponent/PortalCard/PortalCard";

export const EventsColumnChart = () => {
 
    const { isDataState } = useDataContext();
    const data = isDataState.isDataFilteredByDate;  // Use the filtered event data

    const { config: barChartOptions } = useChartConfig(
        'ColumnChart', 
        'Page Path', 
        'Page Views'
    ); // Set up BarChart options

    if (!data || !data.length) {
        return <h1>No Data</h1>; // Return skeleton loading state if no data
    }

    const targetEvents = [
       'SEARCHED_PRODUCT_SELECTED', 'SEARCHED_PRODUCT_ADDED' ,'LIST_PRINTED', 'RESOURCE_CLICKED', 'PRODUCT_ADDED',
    ];

    const filteredEvents = data.filter(event => targetEvents.includes(event.eventName));


    const eventsMap = new Map();

    // Step 1: Aggregate page views by city and country
    filteredEvents.forEach((item) => {
        const key = item.eventName;
        // const pageViews = Number(item.eventCount);

        if (!eventsMap.has(key)) {
            eventsMap.set(key, {
                event: item.eventName,
                totalEvents: 0,
            });
        }
        const current = eventsMap.get(key);
        current.totalEvents += Number(item.eventCount); // Aggregate page views by location
    });

    const sortedEvents = Array.from(eventsMap.values()).sort((a, b) => b.totalEvents - a.totalEvents);

      // Step 3: Calculate total and average page views
      const totalPageEvents = sortedEvents.reduce((acc, curr) => acc + curr.totalEvents, 0);
      const avgPageEvents = sortedEvents.length > 0 ? totalPageEvents / sortedEvents.length : 0;

      const chartData = [
        ['Event Name', 'Event Count'], 
        ...sortedEvents.map(item => [item.event, item.totalEvents])
    ];

    // Step 5: Identify the most popular page by page views
    const mostPopularEvent =  sortedEvents[0] ?  sortedEvents[0].event : 'Unknown Event';
    const mostPopularEventCount =  sortedEvents[0] ?  sortedEvents[0].event : 0;

    return (
        <PortalCard 
            cardTitle="Popular Events"
            cardFooter={`Most popular events: "${mostPopularEvent}" with ${mostPopularEventCount.toLocaleString()} views.`}
        >
            {chartData.length > 1 ? (
                <ColumnChart data={chartData} options={barChartOptions} />  // Render BarChart with transformed data
            ) : (
                <div>No chart data available.</div>
            )}
        </PortalCard>
    );
};
