import { useChartConfig } from "../../../../hooks/chart-config-hook";
import { useDataContext } from "../../../../hooks/data-hook"; // Import the data context hook
import { transformWithSchema } from "../../../../utils/data-transformer";
import { AreaChart } from "../../PortalChartComponent/AreaChart";
import { ChartWrapper } from "../../PortalChartComponent/ChartWrapper";
import { ChartSkeleton } from "../../../Skeletons/ChartSkeleton";
import { parse } from 'date-fns';

export const PageViewsAreaChart = () => {
    const { isDataState } = useDataContext(); // Access filtered data from context
    const { config: areaChartOptions } = useChartConfig('AreaChart');

    // Filter for 'screenPageViews' by date
    const pageViewsData = isDataState?.isDataFilteredByDate?.filter(item => item.eventName === 'page_view') || [];

    // Transform the filtered data for the chart
    const chartData = pageViewsData.length > 0
        ? pageViewsData.map(item => ({
              date: parse(item.date, 'yyyyMMdd', new Date()), // Convert string date to a Date object
              screenPageViews: Number(item.screenPageViews)
          }))
        : [];

    let transformedData = null;

    if (chartData.length > 0) {
        try {
            transformedData = transformWithSchema(chartData, 'eventSnapshot');
        } catch (error) {
            console.error(`Error transforming data: ${error.message}`);
        }
    } else {
        console.warn('No events found');
    }

    return (
        transformedData ? (
            <ChartWrapper>
                <AreaChart data={transformedData} options={areaChartOptions} />
            </ChartWrapper>
        ) : (
            <ChartWrapper>
                <ChartSkeleton />
            </ChartWrapper>
        )
    );
};
