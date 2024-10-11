import { useDataContext } from "../../../../hooks/data-hook";
import { BarChart } from "../../PortalChartComponent/BarChart";
import { useChartConfig } from "../../../../hooks/chart-config-hook";
import { PortalCard } from "../../PortalPageComponent/PortalCard/PortalCard";
import { categorizeAppliancePath } from "../../../../utils/helper-functions";  
import Skeleton from 'react-loading-skeleton';



export const ResourceLinkClicksByCategoryBarChart = () => {
    const { isDataState } = useDataContext(); // Access context data
    const data = isDataState.resourceDataFilteredByDate; // Filtered product data
    console.log('RESO',data)
    const { config: barChartOptions } = useChartConfig('BarChart', 
        '', 
        'Resource Clicks',
        '',
        { minValue: 0 },
        ['#3366CC'],
        false, // Show legend
        true, // Show X-axis labels
        true,); // BarChart config

    const targetEvents = ['RESOURCE_CLICKED'];

    if (!data || !data.length) {
        return <Skeleton height={200} width="100%" />;
    }

    // Step 1: Filter for 'Click_Resource_Link' events
    const filteredEvents = data.filter(event => targetEvents.includes(event.eventName));

    // Step 2: Aggregate event counts by page category
    const eventPageMap = new Map();

    filteredEvents.forEach(item => {
        const pageCategory = categorizeAppliancePath(item.pagePath); // Categorize the page
        const eventCount = Number(item.eventCount);

        if (!eventPageMap.has(pageCategory)) {
            eventPageMap.set(pageCategory, { pageCategory, totalEventCount: 0 });
        }

        const pageData = eventPageMap.get(pageCategory);
        pageData.totalEventCount += eventCount;
    });

    // Step 3: Sort by total event count
    const sortedPages = Array.from(eventPageMap.values()).sort((a, b) => b.totalEventCount - a.totalEventCount);

    // Step 4: Prepare data for the BarChart
    const chartData = [
        ['Category', 'Event Count'],
        ...sortedPages.map(item => [item.pageCategory, item.totalEventCount])
    ];

    // Step 5: Calculate total, average, and most popular category
    const totalEventCount = sortedPages.reduce((acc, curr) => acc + curr.totalEventCount, 0);
    const avgEventCount = sortedPages.length > 0 ? totalEventCount / sortedPages.length : 0;
    const mostPopularCategory = sortedPages[0] ? sortedPages[0].pageCategory : 'Unknown';
    const mostPopularCategoryEvents = sortedPages[0] ? sortedPages[0].totalEventCount : 0;

    return (
        <PortalCard
            cardTitle="Resource Link Clicks Grouped by Page Types"
             toolTipText="This chart highlights how often users clicked resource links based on different page types. It helps identify which page types have the highest user engagement through resource links."
            cardFooter={` Most popular page type: "${mostPopularCategory}" (${mostPopularCategoryEvents.toLocaleString()} events)`}
            // cardFooter={`The category with the most resource link clicks is "${mostPopularCategory}", with a total of ${mostPopularCategoryEvents.toLocaleString()} events. The average number of clicks across all categories is ${avgEventCount.toFixed(2)}.`}
        >
            {chartData.length > 1 ? (
                <BarChart data={chartData} options={barChartOptions} />
            ) : (
                <Skeleton height={200} width="100%" />
            )}
        </PortalCard>
    );
};
