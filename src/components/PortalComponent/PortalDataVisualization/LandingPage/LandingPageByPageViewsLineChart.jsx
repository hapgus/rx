import { useDataContext } from "../../../../hooks/data-hook";
import { BarChart } from "../../PortalChartComponent/BarChart";
import { LineChart } from "../../PortalChartComponent/LineChart";
import { useChartConfig } from "../../../../hooks/chart-config-hook";
import { transformWithSchema } from "../../../../utils/data-transformer";
import { PortalCard } from "../../PortalPageComponent/PortalCard/PortalCard";
import Skeleton from "react-loading-skeleton";

export const LandingPageByPageViewsLineChart = () => {
    const { isDataState } = useDataContext();
    const data = isDataState.isDataFilteredByDate; // Use filtered data from context
    const ticks = [0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500]
    // Step 7: Configure the chart options
    const { config: lineChartOptions } = useChartConfig(
        'LineChart',
        'Sessions',
        'Landing Page', // Horizontal Axis Title
        'Views', // Vertical Axis Title
        { minValue: 0 }, // Y Axis Range
        ['#3366CC'], // Colors
        false, // Show legend
        true, // Show X-axis labels
        true, // Show Y-axis labels
        ticks // Set the tick intervals for the Y-axis
    );


    if (!data || !data.length) {
        return <Skeleton height={200} width="100%" />;  // Return skeleton loading state if no data
    }

    // Step 1: Aggregate page views by pagePath
    const pageViewMap = new Map();

    data.forEach(item => {
        const pagePath = item.pagePath || 'Unknown Page';  // Fallback if pagePath is missing
        const pageViews = Number(item.screenPageViews);

        if (!pageViewMap.has(pagePath)) {
            pageViewMap.set(pagePath, { pagePath, totalPageViews: 0 });
        }

        const pageData = pageViewMap.get(pagePath);
        pageData.totalPageViews += pageViews;  // Aggregate page views for each page
    });

    // Step 2: Sort the aggregated data in descending order by totalPageViews
    const sortedPages = Array.from(pageViewMap.values()).sort((a, b) => b.totalPageViews - a.totalPageViews);

    // Step 3: Calculate total and average page views
    const totalPageViews = sortedPages.reduce((acc, curr) => acc + curr.totalPageViews, 0);
    const avgPageViews = sortedPages.length > 0 ? totalPageViews / sortedPages.length : 0;

    // Step 4: Transform the data for the BarChart
    const chartData = [
        ['Page Path', 'Page Views'],
        ...sortedPages.map(item => [item.pagePath, item.totalPageViews])
    ];

    // Step 5: Identify the most popular page by page views
    const mostPopularPage = sortedPages[0] ? sortedPages[0].pagePath : 'Unknown Page';
    const mostPopularPageViews = sortedPages[0] ? sortedPages[0].totalPageViews : 0;

    return (
        chartData.length > 1 ? (
            <LineChart data={chartData} options={lineChartOptions} />  // Render BarChart with transformed data
        ) : (
            <div>No chart data available.</div>
        )
        // <PortalCard
        //     cardTitle="Page Views by Landing Page"
        //     cardFooter={`Total page views: ${totalPageViews.toLocaleString()}, Avg page views per page: ${avgPageViews.toFixed(2)}. Most popular page: "${mostPopularPage}" with ${mostPopularPageViews.toLocaleString()} views.`}
        // >
        //     {chartData.length > 1 ? (
        //         <LineChart data={chartData} options={barChartOptions} />  // Render BarChart with transformed data
        //     ) : (
        //         <div>No chart data available.</div>
        //     )}
        // </PortalCard>
    );
};
