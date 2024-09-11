import { useData } from "../../../../hooks/data-hook";
import { BarChart } from "../../PortalChartComponent/BarChart";
import { useChartConfig } from "../../../../hooks/chart-config-hook";
import { transformWithSchema } from "../../../../utils/data-transformer";
import { PortalCard } from "../../PortalPageComponent/PortalCard/PortalCard";
import { categorizeAppliancePath} from "../../../../utils/text-help";  // Updated categorizePagePath function

export const ResourceLinkClicksByCategoryBarChart = () => {
    const { data } = useData('http://localhost:3005/data');
    const { config: barChartOptions } = useChartConfig('BarChart'); // Use BarChart config

    const targetEvents = ['Click_Resource_Link'];

    if (!data || !data.eventPageOverview) {
        return <div>No data available</div>;
    }

    // Step 1: Filter eventPageOverview for target events
    const filteredEvents = data.eventPageOverview.filter(event => targetEvents.includes(event.eventName));

    // Step 2: Aggregate eventCount by page category using the hybrid categorizePagePath function
    const eventPageMap = new Map();

    filteredEvents.forEach(item => {
        const pageCategory = categorizeAppliancePath(item.pagePath);  // Categorize the page
        const eventCount = Number(item.eventCount);

        if (!eventPageMap.has(pageCategory)) {
            eventPageMap.set(pageCategory, { pageCategory, totalEventCount: 0 });
        }

        const pageData = eventPageMap.get(pageCategory);
        pageData.totalEventCount += eventCount;
    });

    // Step 3: Convert the Map to an array and sort by totalEventCount in descending order
    const sortedPages = Array.from(eventPageMap.values()).sort((a, b) => b.totalEventCount - a.totalEventCount);

    // Step 4: Transform the data for the Bar Chart
    let chartData = null;
    try {
        chartData = transformWithSchema(sortedPages, 'eventPageOverviewForBarChart'); // Use the correct schema
    } catch (error) {
        console.error(`Error transforming data: ${error.message}`);
        return <div>Error loading data</div>;
    }

    return (
        <PortalCard cardTitle="Clicks on Resource Links by Category">
            {chartData ? (
                <BarChart data={chartData} options={barChartOptions} />  // Use BarChart
            ) : (
                <div>No chart data available.</div>
            )}
        </PortalCard>
    );
};
