import { useDataContext } from "../../../../hooks/data-hook";
import { BarChart } from "../../PortalChartComponent/BarChart";
import { useChartConfig } from "../../../../hooks/chart-config-hook";
import { transformWithSchema } from "../../../../utils/data-transformer";
import { PortalCard } from "../../PortalPageComponent/PortalCard/PortalCard";
import Skeleton from "react-loading-skeleton";

export const SearchByLandingPageBarChart = () => {
    const { isDataState } = useDataContext(); 
    const data = isDataState.searchDataFilteredByDate; // Use filtered search data
    const { config: barChartOptions } = useChartConfig('BarChart', 'Page Path', 'Event Count'); 

    const targetEvents = ['SEARCHED_PRODUCT_SELECTED'];

    if (!data || !data.length) {
        return <Skeleton height={200} width="100%" />;
    }

    // Step 1: Filter relevant events
    const filteredEvents = data.filter(event => targetEvents.includes(event.eventName));

    // Step 2: Aggregate eventCount by pagePath
    const eventPageMap = new Map();

    filteredEvents.forEach(item => {
        console.log(item)
        const pagePath = item.pagePath || 'Unknown Page';  // Fallback if pagePath is missing
        const eventCount = Number(item.eventCount);

        if (!eventPageMap.has(pagePath)) {
            eventPageMap.set(pagePath, { pagePath, totalEventCount: 0 });
        }

        const pageData = eventPageMap.get(pagePath);
        pageData.totalEventCount += eventCount;
    });

    // Step 3: Sort the aggregated data in descending order by totalEventCount
    const sortedPages = Array.from(eventPageMap.values()).sort((a, b) => b.totalEventCount - a.totalEventCount);

    // Step 4: Calculate total and average event count
    const totalEventCount = sortedPages.reduce((acc, curr) => acc + curr.totalEventCount, 0);
    const avgEventCount = sortedPages.length > 0 ? totalEventCount / sortedPages.length : 0;

    // Step 5: Identify the most popular page
    const mostPopularPage = sortedPages[0] ? sortedPages[0].pagePath : 'Unknown Page';
    const mostPopularPageEvents = sortedPages[0] ? sortedPages[0].totalEventCount : 0;

    // Step 6: Format the data for BarChart
    const chartData = [
        ['Page Path', 'Event Count'], 
        ...sortedPages.map(item => [item.pagePath, item.totalEventCount])
    ];

    return (
        <PortalCard 
            cardTitle="Page user was on when they selected a product to visit from search results"
            cardFooter={`Total events: ${totalEventCount.toLocaleString()}, Avg events per page: ${avgEventCount.toFixed(2)}. Most popular page: "${mostPopularPage}" with ${mostPopularPageEvents.toLocaleString()} events.`}
        >
            {chartData.length > 1 ? (
                <BarChart data={chartData} options={barChartOptions} />  // Use BarChart
            ) : (
                <div>No chart data available.</div>
            )}
        </PortalCard>
    );
};
