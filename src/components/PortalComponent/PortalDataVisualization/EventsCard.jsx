import { PortalCard } from "../PortalPageComponent/PortalCard/PortalCard";
import { useData } from "../../../hooks/data-hook";
import { useChartConfig } from "../../../hooks/chart-config-hook";
import { transformWithSchema } from "../../../utils/data-transformer";
import { LineChart } from "../PortalChartComponent/LineChart";
import { reduceEventsByDate } from "../../../utils/text-help";


export const EventsCard = () => {
    const { data } = useData('http://localhost:3005/data');

    // Step 1: Define the array of target event names to sum
    const targetEvents = [
        'Print_Product_List',
        'Add_Product_To_List',
        'Click_Resource_Link',
        'Select_Product_From_Search',

    ]; // Replace with the actual event names you want to target

    // Step 2: Reduce the eventOverview data for the specified target events
    const reducedEventsLists = data && data.eventOverview
        ? reduceEventsByDate(data.eventOverview) : {};


    // Step 3: Calculate total and average event counts for all target events
    const allTargetEvents = targetEvents.reduce((acc, eventName) => {
        return acc.concat(reducedEventsLists[eventName] || []);
    }, []);

    const totalEventCount = allTargetEvents.reduce((acc, curr) => acc + Number(curr.eventCount), 0);
    const avgEventCount = allTargetEvents.length > 0 ? totalEventCount / allTargetEvents.length : 0;

    const { config: lineChartOptions } = useChartConfig('LineChart');

    let chartData = null;
    if (allTargetEvents.length > 0) {
        try {
            chartData = transformWithSchema(allTargetEvents, 'eventSnapshot');
        } catch (error) {
            console.error(`Error transforming data: ${error.message}`);
        }
    } else {
        console.warn('No events found', allTargetEvents);
    }

    return (
        <PortalCard
            toolTipText="Events are user interactions with content that can be tracked independently from page or screen loads. This can include clicks, downloads, video plays, and other custom actions."
            cardTitle='Event Summary'
            cardData={totalEventCount.toLocaleString()}
            cardFooter={`${parseInt(avgEventCount)} events per day on average`}
        >
            {/* {chartData ? (
                <LineChart data={chartData} options={lineChartOptions} />
            ) : (
                <div>No chart data available.</div>
            )} */}
        </PortalCard>
    );
};
