import { useDataContext } from "../../../../hooks/data-hook";

import { ColumnChart } from "../../PortalChartComponent/ColumnChart";
import { useChartConfig } from "../../../../hooks/chart-config-hook";

import { PortalCard } from "../../PortalPageComponent/PortalCard/PortalCard";
import { categorizePagePath } from "../../../../utils/helper-functions";
import Skeleton from 'react-loading-skeleton';

export const LandingPageCategoryByPageViewsBarChart = () => {
    const { isDataState } = useDataContext();
    const data = isDataState.isDataFilteredByDate;  // Use filtered search data from context
    const { config: barChartOptions } = useChartConfig(
        'ColumnChart', 
        '', 
        'Landing Page Type',
        'Views',
        { minValue: 0 },
        ['#3366CC'],
        false, // Show legend
        true, // Show X-axis labels
        true,
    );

    if (!data || !data.length) {
        return <Skeleton height={200} width="100%" />; // Skeleton for loading state
    }

    // Step 1: Filter relevant events with 'screenPageViews'
    const filteredEvents = data.filter(event => event.screenPageViews && !isNaN(Number(event.screenPageViews)));

    // Step 2: Aggregate screenPageViews by categorized page paths
    const eventPageMap = new Map();

    filteredEvents.forEach(item => {
        const pageCategory = categorizePagePath(item.pagePath); // Categorize the page path
        const pageViews = Number(item.screenPageViews);

        if (!eventPageMap.has(pageCategory)) {
            eventPageMap.set(pageCategory, { pageCategory, totalPageViews: 0 });
        }

        const pageData = eventPageMap.get(pageCategory);
        pageData.totalPageViews += pageViews; // Aggregate page views for the category
    });

    // Step 3: Sort the aggregated data in descending order by totalPageViews
    const sortedPages = Array.from(eventPageMap.values()).sort((a, b) => b.totalPageViews - a.totalPageViews);

    // Step 4: Calculate total and average page view count
    const totalPageViewCount = sortedPages.reduce((acc, curr) => acc + curr.totalPageViews, 0);
    const avgPageViewCount = sortedPages.length > 0 ? totalPageViewCount / sortedPages.length : 0;

    // Step 5: Transform the data for BarChart
    const chartData = [
        ['Page Category', 'Page Views'],
        ...sortedPages.map(item => [item.pageCategory, item.totalPageViews])
    ];

    // Step 6: Identify the most popular page category
    const mostPopularCategory = sortedPages[0] ? sortedPages[0].pageCategory : 'Unknown Category';
    const mostPopularCategoryViews = sortedPages[0] ? sortedPages[0].totalPageViews : 0;

    // Step 7: Render the BarChart
    return (

        <PortalCard
        toolTipText="This chart displays the most viewed types of pages on your site, categorized by their purpose. These include 'Homepage', 'All Category Pages', 'Category Pages', 'Product Pages', 'Resource Pages', 'Step-Up Charts', and 'Product List Builder'. Each category represents a different area of user interest and engagement on your site."


            cardTitle="Popular Types of Pages"
            cardFooter={ `Most popular page type: "${mostPopularCategory}" with ${mostPopularCategoryViews.toLocaleString()} views.`}
        >
            {
                chartData.length > 1 ? (
                    <ColumnChart data={chartData} options={barChartOptions} />  // Use BarChart to display the data
                ) : (
                    <div>No chart data available.</div>
                )
            }

        </PortalCard>
    );
};