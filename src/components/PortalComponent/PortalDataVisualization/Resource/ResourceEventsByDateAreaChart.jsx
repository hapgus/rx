import { PortalCard } from "../../PortalPageComponent/PortalCard/PortalCard";
import { useChartConfig } from "../../../../hooks/chart-config-hook";
import { AreaChart } from "../../PortalChartComponent/AreaChart";
import { useDataContext } from "../../../../hooks/data-hook";
import { SkeletonComponent } from "../../../Skeletons/SkeletonComponent";

export const ResourceEventsByDateAreaChart = () => {
    const { isDataState } = useDataContext();
    const data = isDataState.resourceDataFilteredByDate;

    // Step 1: Define target events (e.g., 'SEARCHED_PRODUCT_SELECTED')
    const targetEvents = ['RESOURCE_CLICKED'];

    // Step 2: Filter the data to include only the target events
    const filteredEvents = data ? data.filter(event => targetEvents.includes(event.eventName)) : [];

    // Step 3: Aggregate the filtered data by date for search events
    const aggregatedData = filteredEvents.reduce((acc, curr) => {
        const date = curr.date; // Assuming the date is in 'YYYYMMDD' format
        const eventCount = Number(curr.eventCount);

        if (acc[date]) {
            acc[date].totalEventCount += eventCount;
        } else {
            acc[date] = { date, totalEventCount: eventCount };
        }
        return acc;
    }, {});

    // Step 4: Convert the aggregated object back into an array
    const aggregatedDataArray = Object.values(aggregatedData);

    // Step 5: Sort the aggregated data by date in ascending order
    const sortedData = aggregatedDataArray.sort((a, b) => {
        const dateA = new Date(a.date.slice(0, 4), a.date.slice(4, 6) - 1, a.date.slice(6, 8));
        const dateB = new Date(b.date.slice(0, 4), b.date.slice(4, 6) - 1, b.date.slice(6, 8));
        return dateA - dateB;
    });

    // Step 6: Filter valid days where totalEventCount is a number
    const validDays = sortedData.filter(day => day.totalEventCount && !isNaN(Number(day.totalEventCount)));

    // Step 7: Calculate total and average event count
    const totalEventCount = validDays.reduce((acc, curr) => acc + Number(curr.totalEventCount), 0);
    const avgEventCount = validDays.length > 0 ? totalEventCount / validDays.length : 0;

    // Step 8: Dynamically generate the Y-axis ticks
    const minValue = 0; // Ensure the ticks always start at 0
    const maxValue = Math.ceil(Math.max(...validDays.map(day => Number(day.totalEventCount))) / 20) * 20;
    const stepSize = 2; // Fixed step size for now

    const vAxisTicks = [];
    for (let i = minValue; i <= maxValue; i += stepSize) {
        vAxisTicks.push(i);
    }

    // Step 9: Manually format the data for AreaChart
    const areaChartData = [
        ['Date', 'Event Count'],  // Header for the chart
        ...validDays.map(day => {
            const formattedDate = `${day.date.slice(0, 4)}-${day.date.slice(4, 6)}-${day.date.slice(6, 8)}`;
            return [formattedDate, day.totalEventCount];
        })
    ];

    // Step 10: Configure chart options for AreaChart
    const { config: areaChartOptions } = useChartConfig(
        'AreaChart',
        '',
        '', // Horizontal Axis Title
        'Resource Clicks', // Vertical Axis Title
        { minValue: 0 }, // Y Axis Range
        ['#3366CC'], // Colors
        false, // Show legend
        true, // Show X-axis labels
        true, // Show Y-axis labels
        vAxisTicks // Y-axis tick intervals
    );

    // Step 11: Render the AreaChart and show a card summary
    return (
        totalEventCount && avgEventCount && areaChartData.length > 1 ? (
            <PortalCard
            toolTipText="This chart displays the number of times users clicked on resource links over a specific period. It helps identify trends in user engagement with resources provided on product pages."
                cardTitle="Resource Event Activity Over Time"
                // cardData={totalEventCount.toLocaleString()}
                cardFooter={`Average ${parseInt(avgEventCount)} resource link(s) click from product pages per day`}
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
