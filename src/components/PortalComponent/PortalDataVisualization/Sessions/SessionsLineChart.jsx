
import { useChartConfig } from "../../../../hooks/chart-config-hook"
import { useData } from "../../../../hooks/data-hook"
import { transformWithSchema } from "../../../../utils/data-transformer"
import { reduceEventsByDate } from "../../../../utils/text-help"

import { LineChart } from "../../PortalChartComponent/LineChart"
import { ChartWrapper } from "../../PortalChartComponent/ChartWrapper"
import { ChartSkeleton } from "../../../Skeletons/ChartSkeleton"

export const SessionsLineChart = () => {

    const { data } = useData('http://localhost:3005/data');
    const { config: lineChartOptions } = useChartConfig('LineChart');
console.log(data)
    const reducedEventsLists = data && data.sessionSnapshot
        ? reduceEventsByDate(data.sessionSnapshot) : {};

console.log(reducedEventsLists)

    let chartData = null;

    if (reducedEventsLists.length > 0) {
        try {
            chartData = transformWithSchema(reducedEventsLists, 'eventSnapshot');
        } catch (error) {
            console.error(`Error transforming data: ${error.message}`);
        }
    } else {
        console.warn('No events found', reducedEventsLists);
    }

    return (
        chartData ? (
            <ChartWrapper>
                <LineChart data={chartData} options={lineChartOptions} />
            </ChartWrapper>
        ) : (
            <ChartWrapper>
                <ChartSkeleton />
            </ChartWrapper>
        )
    )

}