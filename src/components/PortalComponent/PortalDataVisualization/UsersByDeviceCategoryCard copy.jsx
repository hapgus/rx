import { PortalCard } from "../PortalPageComponent/PortalCard/PortalCard";
import { useData } from "../../../hooks/data-hook";
import { useChartConfig } from "../../../hooks/chart-config-hook";
import { transformWithSchema } from "../../../utils/data-transformer";


import { PieChart } from "../PortalChartComponent/PieChart";


export const UsersByDeviceCard = () => {

    const { data } = useData('http://localhost:3005/data');
    
    const reducedEventsLists = data && data.deviceSnapshot
        ? data.deviceSnapshot.reduce((acc, item) => {
            if (!acc[item.eventName]) {
                acc[item.eventName] = [];
            }
            const existingDateEntry = acc[item.deviceCategory].find(event => event.date === item.date);
            if (existingDateEntry) {
                existingDateEntry.totalUsers += Number(item.totalUsers);
            } else {
                acc[item.eventName].push({
                    date: item.date,
                    totalUsers: Number(item.totalUsers),
                });
            }
            return acc;
        }, {})
        : {}; // Fallback in case data or eventOverview is not available

    // Step 1: Filter events related to "Select_Product_From_Search"
    // const targetedEvent  = reducedEventsLists['Print_Product_List'] || [];

    // console.log(targetedEvent)

    // // Step 2: Calculate total and average event counts
    // const totalEventCount = targetedEvent.reduce((acc, curr) => acc + Number(curr.eventCount), 0);
    // const avgEventCount = targetedEvent.length > 0 ? totalEventCount /targetedEvent.length : 0;

    const { config: pieChartOptions } = useChartConfig('PieChart');
 
    let chartData = null;

    if (reducedEventsLists.length > 0) {
        try {
            // Step 3: Transform the filtered data to fit chart structure
            chartData = transformWithSchema(reducedEventsLists, 'deviceSnapshot');
        } catch (error) {
            console.error(`Error transforming data: ${error.message}`);
        }
    } else {
        console.warn('No events found', reducedEventsLists);
    }

    return (
        <PortalCard
            cardTitle='Printed Lists'
            // cardData={ reducedEventsLists.toLocaleString()}
            // cardFooter={`${parseInt(avgEventCount)} lists printed per day on average`}
        >
            {chartData ? (
             
                <PieChart data={reducedEventsLists} options={pieChartOptions} />
        
            ) : (
                <div>No chart data available.</div>
            )}
        </PortalCard>
    )
}
