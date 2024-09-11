import { PortalCard } from "../PortalPageComponent/PortalCard/PortalCard";
import { useData } from "../../../hooks/data-hook";
import { useChartConfig } from "../../../hooks/chart-config-hook";
import { transformWithSchema } from "../../../utils/data-transformer";
import { AreaChart } from "../PortalChartComponent/AreaChart";
import { BarChart } from "../PortalChartComponent/BarChart";
import { LineChart } from "../PortalChartComponent/LineChart";
import { reduceEventsByDate } from "../../../utils/text-help";

export const SessionsCard = () => {

    const { data } = useData('http://localhost:3005/data');

    
    const totalSessionCount = data && data.sessionSnapshot
        ? data.sessionSnapshot.reduce((acc, curr) => acc + Number(curr.sessions), 0)
        : 0;
    const numberOfDaysSessions = data?.sessionSnapshot?.length || 0;
    const avgSessionsCount = numberOfDaysSessions > 0 ? totalSessionCount / numberOfDaysSessions : 0;



    const { config: barChartOptions } = useChartConfig('BarChart');

    let chartData = null;

    if (data) {
        try {
            // Step 3: Transform the filtered data to fit chart structure
            chartData = transformWithSchema(data.sessionSnapshot, 'sessionSnapshot');
        } catch (error) {
            console.error(`Error transforming data: ${error.message}`);
        }
    } else {
        console.warn('No events found', data.sessionSnapshot);
    }

    return (
        <PortalCard
        toolTipText='A session is a group of user interactions with your website that take place within a given time frame. Sessions end after 30 minutes of inactivity.'
            cardTitle='Total Sessions'
            cardData={totalSessionCount}
            cardFooter={`${parseInt(avgSessionsCount)} sessions per day on average`}
        >
            {chartData ? (
                <LineChart data={chartData} options={lineChartOptions} />

            ) : (
                <div>No chart data available.</div>
            )}
        </PortalCard>
    )
}
