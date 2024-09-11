import { useData } from "../../../../hooks/data-hook";
import { BarChart } from "../../PortalChartComponent/BarChart";
import { useChartConfig } from "../../../../hooks/chart-config-hook";
import { transformWithSchema } from "../../../../utils/data-transformer";
import { PortalCard } from "../../PortalPageComponent/PortalCard/PortalCard";

export const SearchByLandingPageBarChart = () => {

    const { data } = useData('http://localhost:3005/data');
    const { config: barChartOptions } = useChartConfig('BarChart'); // Use BarChart config

    const targetEvents = [
        // 'Print_Product_List',
        // 'Add_Product_To_List',
        // 'Click_Resource_Link',
        'Select_Product_From_Search',
    ];

    if (!data || !data.eventPageOverview) {
        return <div>No data available</div>;
    }

  const filteredEvents = data.eventPageOverview.filter(event => targetEvents.includes(event.eventName));

    // Step 1: Aggregate eventCount by pagePath
    const eventPageMap = new Map();

    filteredEvents.forEach(item => {
        const pagePath = item.pagePath || 'Unknown Page';  // Fallback if pagePath is missing
        const eventCount = Number(item.eventCount);

        if (!eventPageMap.has(pagePath)) {
            eventPageMap.set(pagePath, { pagePath, totalEventCount: 0 });
        }

        const pageData = eventPageMap.get(pagePath);
        pageData.totalEventCount += eventCount;

    });

    // Step 2: Convert the Map to an array and sort by totalEventCount in descending order
    const sortedPages = Array.from(eventPageMap.values()).sort((a, b) => b.totalEventCount - a.totalEventCount);
console.log(sortedPages)
    // Step 3: Transform the data for the Bar Chart
    let chartData = null;
    try {
        chartData = transformWithSchema(sortedPages, 'eventPageOverview'); // Use the correct schema
    } catch (error) {
        console.error(`Error transforming data: ${error.message}`);
        return <div>Error loading data</div>;
    }

    return (
        <PortalCard cardTitle="Page user was on when they selected a product to visit from search results">
            {chartData ? (
                <BarChart data={chartData} options={barChartOptions} />  // Use BarChart
            ) : (
                <div>No chart data available.</div>
            )}
        </PortalCard>
    );
};
