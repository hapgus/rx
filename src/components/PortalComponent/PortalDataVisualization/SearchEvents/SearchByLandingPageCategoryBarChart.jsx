import { useDataContext } from "../../../../hooks/data-hook";
import { BarChart } from "../../PortalChartComponent/BarChart";

import { useChartConfig } from "../../../../hooks/chart-config-hook";
import { transformWithSchema } from "../../../../utils/data-transformer";
import { PortalCard } from "../../PortalPageComponent/PortalCard/PortalCard";
import { categorizePagePath } from "../../../../utils/text-help";
import Skeleton from 'react-loading-skeleton';

export const SearchByLandingPageCategoryBarChart = () => {
    const { isDataState } = useDataContext(); 
    const data = isDataState.searchDataFilteredByDate; // Use filtered search data
    const { config: barChartOptions } = useChartConfig('BarChart', 'Page Group', 'Event Count'); 

    const targetEvents = ['Select_Product_From_Search'];

    if (!data || !data.length) {
        return <Skeleton height={200} width="100%" />;
    }

    // Step 1: Filter relevant events
    const filteredEvents = data.filter(event => targetEvents.includes(event.eventName));

    // Step 2: Aggregate eventCount by pagePath
    const eventPageMap = new Map();

    filteredEvents.forEach(item => {
        const pageCategory = categorizePagePath(item.pagePath);
        const eventCount = Number(item.eventCount);

        if (!eventPageMap.has(pageCategory)) {
            eventPageMap.set(pageCategory, { pageCategory, totalEventCount: 0 });
        }

        const pageData = eventPageMap.get(pageCategory);
        pageData.totalEventCount += eventCount;
    });

    // Step 3: Sort the aggregated data in descending order by totalEventCount
    const sortedPages = Array.from(eventPageMap.values()).sort((a, b) => b.totalEventCount - a.totalEventCount);

    // Step 4: Format the data for BarChart
    const chartData = [
        ['Page Group', 'Event Count'], 
        ...sortedPages.map(item => [item.pageCategory, item.totalEventCount])
    ];

    // Step 5: Calculate total and average event count
    const totalEventCount = sortedPages.reduce((acc, curr) => acc + curr.totalEventCount, 0);
    const avgEventCount = sortedPages.length > 0 ? totalEventCount / sortedPages.length : 0;

    return (
        <PortalCard 
            cardTitle="Event Count by Page Group"
            toolTipText="Page categories based on user search."
            cardData={totalEventCount}
            cardFooter={`Total events: ${totalEventCount.toLocaleString()}, Avg events per page: ${avgEventCount.toFixed(2)}`}
        >
            {chartData.length > 1 ? (
                <BarChart data={chartData} options={barChartOptions} />
            ) : (
                <div>No chart data available.</div>
            )}
        </PortalCard>
    );
};
