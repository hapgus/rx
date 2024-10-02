import { PortalCard } from "../../PortalPageComponent/PortalCard/PortalCard";
import { useChartConfig } from "../../../../hooks/chart-config-hook";
import { transformWithSchema } from "../../../../utils/data-transformer";
import { AreaChart } from "../../PortalChartComponent/AreaChart";
import { useDataContext } from "../../../../hooks/data-hook";
import { SkeletonComponent } from "../../../Skeletons/SkeletonComponent";

export const LandingPageSessionsCard = () => {
    const { isDataState } = useDataContext();
    const data = isDataState.isDataFilteredByDate;

    // Step 1: Aggregate the data by date
    
    const aggregatedData = isDataState && isDataState.isDataFilteredByDate && data 
    ? data.reduce((acc, curr) => {
        const date = curr.date; // Assuming the date is in the 'YYYYMMDD' format
        const pageViews = Number(curr.sessions);

        // If the date already exists, add the page views
        if (acc[date]) {
            acc[date].sessions += pageViews;
        } else {
            acc[date] = { ...curr, sessions: pageViews };
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
    const validDays = sortedData.filter(day => day.sessions && !isNaN(Number(day.sessions)));

    // Step 5: Calculate total and average page view counts
    const totalPageViewCount = validDays.reduce((acc, curr) => acc + Number(curr.sessions), 0);
    const avgPageViewCount = validDays.length > 0 ? totalPageViewCount / validDays.length : 0;

    // Step 6: Dynamically generate the Y-axis ticks
    const minValue = 0; // Ensure the ticks always start at 0
    const maxValue = Math.ceil(Math.max(...validDays.map(day => Number(day.screenPageViews))) / 20) * 20;
    const stepSize = 50; // Fixed step size
    // const minValue = Math.floor(Math.min(...validDays.map(day => Number(day.sessions))) / 20) * 20;
    // const maxValue = Math.ceil(Math.max(...validDays.map(day => Number(day.sessions))) / 20) * 20;
    // const stepSize = 50; // Fixed step size

    // Generate ticks dynamically with a step size of 20
    const vAxisTicks = [];
    for (let i = minValue; i <= maxValue; i += stepSize) {
        vAxisTicks.push(i);
    }
    // Step 7: Configure the chart options
    const { config: areaChartOptions } = useChartConfig(
        'AreaChart',
        '',
        '', // Horizontal Axis Title
        'Sessions', // Vertical Axis Title
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
                cardTitle='Total Sessions'
                cardData={totalPageViewCount.toLocaleString()}
                cardFooter={`${parseInt(avgPageViewCount)} sessions per day on average`}
                toolTipText='A session is a group of user interactions with your website that take place within a given time frame. Sessions end after 30 minutes of inactivity.'
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
