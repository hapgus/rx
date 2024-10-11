import { useDataContext } from "../../../../hooks/data-hook";
import { useChartConfig } from "../../../../hooks/chart-config-hook";
import { transformWithSchema } from "../../../../utils/data-transformer";
import { PortalCard } from "../../PortalPageComponent/PortalCard/PortalCard";
import { LineChart } from "../../PortalChartComponent/LineChart";
import Skeleton from 'react-loading-skeleton';

export const EventsCard = () => {
    const { isDataState } = useDataContext();  // Access filtered data from context
    const data = isDataState.isDataFilteredByDate;  // Use the filtered event data

    const { config: lineChartOptions } = useChartConfig(
        'LineChart',
    'Key Engagement Events',
    '','',
    { minValue: 0 },
    '#3366CC',
    false,
    false
    );  // Use LineChart config

    const targetEvents = [
       'SEARCHED_PRODUCT_SELECTED', 'SEARCHED_PRODUCT_ADDED' ,'LIST_PRINTED', 'RESOURCE_CLICKED', 'PRODUCT_ADDED',
    ];

    if (!data || data.length === 0) {
        return <Skeleton height={200} width="100%" />;
    }

    // Step 1: Filter relevant events
    const filteredEvents = data.filter(event => targetEvents.includes(event.eventName));

    // Step 2: Aggregate eventCount by date
    const eventCountsByDate = filteredEvents.reduce((acc, event) => {
        const eventDate = event.date;
        const eventCount = Number(event.eventCount);

        if (!acc[eventDate]) {
            acc[eventDate] = 0;
        }
        acc[eventDate] += eventCount;
        return acc;
    }, {});

    // Step 3: Convert aggregated data into an array format
    const newList = Object.keys(eventCountsByDate).map(date => ({
        date,
        eventCount: eventCountsByDate[date],
    }));

    // Step 4: Calculate total and average event counts
    const totalEventCount = newList.reduce((acc, curr) => acc + curr.eventCount, 0);
    const avgEventCount = newList.length > 0 ? totalEventCount / newList.length : 0;

    // Step 5: Transform the data for the Line Chart
    let chartData = null;
    if (newList.length > 0) {
        try {
            chartData = transformWithSchema(newList, 'eventPageOverviewForLineChart');
        } catch (error) {
            console.error(`Error transforming data: ${error.message}`);
        }
    }
console.log(chartData)
    return (
        <PortalCard
            toolTipText="Events are user interactions with content that can be tracked independently from page or screen loads. This can include clicks, downloads, video plays, and other custom actions."
            cardTitle='Key Events Summary'
            cardData={totalEventCount.toLocaleString()}
            cardFooter={`${parseInt(avgEventCount)} events per day on average`}
        >
            {chartData ? (
                <LineChart data={chartData} options={lineChartOptions} />
            ) : (
                <div>No chart data available.</div>
            )}
        </PortalCard>
    );
};
