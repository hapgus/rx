import { PortalCard } from "../../PortalPageComponent/PortalCard/PortalCard";
import { useData } from "../../../../hooks/data-hook";
import { useChartConfig } from "../../../../hooks/chart-config-hook";
import { transformWithSchema } from "../../../../utils/data-transformer";
import { AreaChart } from "../../PortalChartComponent/AreaChart";
import { BarChart } from "../../PortalChartComponent/BarChart";
import { LineChart } from "../../PortalChartComponent/LineChart";

export const PageViewsCard = () => {

    const { data } = useData('http://localhost:3005/data');
    
    const reducedEventsLists = data && data.eventOverview
        ? data.eventOverview.reduce((acc, item) => {
            if (!acc[item.eventName]) {
                acc[item.eventName] = [];
            }
            const existingDateEntry = acc[item.eventName].find(event => event.date === item.date);
            if (existingDateEntry) {
                existingDateEntry.eventCount += Number(item.eventCount);
            } else {
                acc[item.eventName].push({
                    date: item.date,
                    eventCount: Number(item.eventCount),
                });
            }
            return acc;
        }, {})
        : {}; // Fallback in case data or eventOverview is not available

    // Step 1: Filter events related to "Select_Product_From_Search"
    const targetedEvent  = reducedEventsLists['page_view'] || [];

    console.log(targetedEvent)

    // Step 2: Calculate total and average event counts
    const totalEventCount = targetedEvent.reduce((acc, curr) => acc + Number(curr.eventCount), 0);
    const avgEventCount = targetedEvent.length > 0 ? totalEventCount /targetedEvent.length : 0;

    // const { config: lineChartOptions } = useChartConfig('LineChart');
    // const { config: barChartOptions } = useChartConfig('BarChart');
    const { config: areaChartOptions } = useChartConfig('AreaChart');
 
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
          toolTipText="Screen Page Views refers to the total number of pages viewed by users. Repeated views of a single page are counted each time the page is loaded."
            cardTitle='Page Views'
            cardData={ totalEventCount.toLocaleString()}
            cardFooter={`${parseInt(avgEventCount)} page views per day on average`}
        >
            {chartData ? (
                <AreaChart data={chartData} options={areaChartOptions} />
        
            ) : (
                <div>No chart data available.</div>
            )}
        </PortalCard>
    )
}
