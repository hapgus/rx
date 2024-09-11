import { PortalCard } from "../PortalPageComponent/PortalCard/PortalCard";
import { useData } from "../../../hooks/data-hook";
import { useChartConfig } from "../../../hooks/chart-config-hook";
import { transformWithSchema } from "../../../utils/data-transformer";
import { reduceEventsByDate } from "../../../utils/text-help";

import { BarChart } from "../PortalChartComponent/BarChart";


export const ExternalResourceLinkClickCard = () => {

    const { data } = useData('http://localhost:3005/data');

    // Use the helper function to reduce events by date
    const reducedEventsLists = data && data.eventOverview
        ? reduceEventsByDate(data.eventOverview)
        : {}; // Fallback in case data or eventOverview is not available

    // Step 1: Filter events related to "Select_Product_From_Search"
    const targetedEvent = reducedEventsLists['Click_Resource__Link'] || [];

    console.log(targetedEvent)

    // Step 2: Calculate total and average event counts
    const totalEventCount = targetedEvent.reduce((acc, curr) => acc + Number(curr.eventCount), 0);
    const avgEventCount = targetedEvent.length > 0 ? totalEventCount / targetedEvent.length : 0;

    const { config: barChartOptions } = useChartConfig('BarChart');

    let chartData = null;

    if (targetedEvent.length > 0) {
        try {
            // Step 3: Transform the filtered data to fit chart structure
            chartData = transformWithSchema(targetedEvent, 'eventSnapshot');
        } catch (error) {
            console.error(`Error transforming data: ${error.message}`);
        }
    } else {
        console.warn('No events found', targetedEvent);
    }

    return (
        <PortalCard
            cardTitle='Resource Link Clicks'
            cardData={totalEventCount.toLocaleString()}
            cardFooter={`${parseInt(avgEventCount)} resource link clicks per day on average`}
        >
            {chartData ? (

                <BarChart data={chartData} options={barChartOptions} />

            ) : (
                <div>No chart data available.</div>
            )}
        </PortalCard>
    )
}
