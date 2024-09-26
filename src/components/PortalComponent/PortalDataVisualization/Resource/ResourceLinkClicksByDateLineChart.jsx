import { useDataContext } from "../../../../hooks/data-hook";
import { LineChart } from "../../PortalChartComponent/LineChart";
import { useChartConfig } from "../../../../hooks/chart-config-hook";
import { transformWithSchema } from "../../../../utils/data-transformer";
import { PortalCard } from "../../PortalPageComponent/PortalCard/PortalCard";
import Skeleton from 'react-loading-skeleton';

export const ResourceLinkClicksByDateLineChart = () => {
    const { isDataState } = useDataContext();  // Access filtered data from context
    const data = isDataState.eventGeoLocationDataFilteredByDate;  // Use filtered page data
    const { config: lineChartOptions } = useChartConfig('LineChart');  // Use LineChart config

    const targetEvents = ['Click_Resource_Link'];

    if (!data || !data.length) {
        return <Skeleton height={200} width="100%" />;
    }

    // Step 1: Filter 'Click_Resource_Link' events
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

    // Step 4: Calculate total and average event count
    const totalEventCount = newList.reduce((acc, curr) => acc + curr.eventCount, 0);
    const avgEventCount = newList.length > 0 ? totalEventCount / newList.length : 0;

    // Step 5: Transform data for the Line Chart
    let chartData = null;
    if (newList.length > 0) {
        try {
            chartData = transformWithSchema(newList, 'eventPageOverviewForLineChart');  // Use the correct schema
        } catch (error) {
            console.error(`Error transforming data: ${error.message}`);
            return <div>Error loading data</div>;
        }
    }

    return (
        <PortalCard 
            cardTitle="External Resource Link Clicks"
            cardData={`Total clicks: ${totalEventCount.toLocaleString()}`}
            cardFooter={`Average clicks per day: ${avgEventCount.toFixed(2)}`}
        >
            {chartData ? (
                <LineChart data={chartData} options={lineChartOptions} />
            ) : (
                <div>No chart data available.</div>
            )}
        </PortalCard>
    );
};
