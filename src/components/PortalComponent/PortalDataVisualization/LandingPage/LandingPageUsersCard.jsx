import { PortalCard } from "../../PortalPageComponent/PortalCard/PortalCard";
import { useChartConfig } from "../../../../hooks/chart-config-hook";
import { transformWithSchema } from "../../../../utils/data-transformer";
import { AreaChart } from "../../PortalChartComponent/AreaChart";
import { useDataContext } from "../../../../hooks/data-hook";
import { SkeletonComponent } from "../../../Skeletons/SkeletonComponent";

export const LandingPageUsersCard = () => {
    const { isDataState } = useDataContext();
    const data = isDataState.isDataFilteredByDate;

    // Step 1: Aggregate the data by date
    
    const aggregatedData = isDataState && isDataState.isDataFilteredByDate && data 
    ? data.reduce((acc, curr) => {
        const date = curr.date; // Assuming the date is in the 'YYYYMMDD' format
        const pageViews = Number(curr.totalUsers);

        // If the date already exists, add the page views
        if (acc[date]) {
            acc[date].totalUsers += pageViews;
        } else {
            acc[date] = { ...curr, totalUsers: pageViews };
        }
        return acc;
    }, {}):{}

    // Step 2: Convert the aggregated object back into an array
    const aggregatedDataArray = Object.values(aggregatedData);

    // Step 3: Sort the aggregated data by date in ascending order
    const sortedData = aggregatedDataArray.sort((a, b) => {
        const dateA = new Date(a.date.slice(0, 4), a.date.slice(4, 6) - 1, a.date.slice(6, 8));
        const dateB = new Date(b.date.slice(0, 4), b.date.slice(4, 6) - 1, b.date.slice(6, 8));
        return dateA - dateB;
    });

    // Step 4: Filter valid days where screenPageViews is a number
    const validDays = sortedData.filter(day => day.totalUsers && !isNaN(Number(day.totalUsers)));

    // Step 5: Calculate total and average page view counts
    const totalPageViewCount = validDays.reduce((acc, curr) => acc + Number(curr.totalUsers), 0);
    const avgPageViewCount = validDays.length > 0 ? totalPageViewCount / validDays.length : 0;

    // Step 6: Dynamically generate the Y-axis ticks
    const minValue = 0; // Ensure the ticks always start at 0
    const maxValue = Math.ceil(Math.max(...validDays.map(day => Number(day.totalUsers))) / 20) * 20;
    const stepSize = 10; // Fixed step size
    // const minValue = Math.floor(Math.min(...validDays.map(day => Number(day.screenPageViews))) / 20) * 20;
    // const maxValue = Math.ceil(Math.max(...validDays.map(day => Number(day.screenPageViews))) / 20) * 20;
    // const stepSize = 50; // Fixed step size

    // Generate ticks dynamically with a step size of 20
    const vAxisTicks = [];
    for (let i = minValue; i <= maxValue; i += stepSize) {
        vAxisTicks.push(i);
    }
    // Step 7: Configure the chart options
    const { config: areaChartOptions } = useChartConfig(
        'AreaChart',
        'Users',
        '', // Horizontal Axis Title
        '', // Vertical Axis Title
        { minValue: 0 }, // Y Axis Range
        ['#3366CC'], // Colors
        false, // Show legend
        true, // Show X-axis labels
        true, // Show Y-axis labels
        vAxisTicks // Set the tick intervals for the Y-axis
    );

    let areaChartData = null;
    if (sortedData.length > 0) {
        try {
            areaChartData = transformWithSchema(sortedData, 'pageViewSnapshot');
        } catch (error) {
            console.error(`Error transforming data: ${error.message}`);
        }
    } else {
        console.warn('No pageViewSnapshot found in data', data);
    }

    return (
        totalPageViewCount && avgPageViewCount && areaChartData !== null ? (
            <PortalCard
                cardTitle='Total Users'
                cardData={totalPageViewCount.toLocaleString()}
                cardFooter={`${parseInt(avgPageViewCount)} users per day on average`}
                toolTipText='The number of distinct users who have logged at least one event, regardless of whether the site or app was in use when that event was logged.'
            >
                {areaChartData ? (
                    <AreaChart data={areaChartData} options={areaChartOptions} />
                ) : (
                    <div>No chart data available.</div>
                )}
            </PortalCard>
        ) : (
            <SkeletonComponent height='33rem' width='40rem' count={1} />
        )
    );
};
