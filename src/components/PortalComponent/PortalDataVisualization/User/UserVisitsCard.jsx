import { PortalCard } from "../../PortalPageComponent/PortalCard/PortalCard";
import { useChartConfig } from "../../../../hooks/chart-config-hook";
import { transformWithSchema } from "../../../../utils/data-transformer";
import { AreaChart } from "../../PortalChartComponent/AreaChart";
import { useDataContext } from "../../../../hooks/data-hook";

export const UserVisitsCard = () => {
    const { isDataState } = useDataContext();
    const data = isDataState.isDataFilteredByDate;

    // Sort the data by date in ascending order
    const sortedData = data?.sort((a, b) => {
        const dateA = new Date(a.date.slice(0, 4), a.date.slice(4, 6) - 1, a.date.slice(6, 8));
        const dateB = new Date(b.date.slice(0, 4), b.date.slice(4, 6) - 1, b.date.slice(6, 8));
        return dateA - dateB;
    }) || [];

    // Filter valid days where totalUsers is a number
    const validDays = sortedData.filter(day => day.totalUsers && !isNaN(Number(day.totalUsers)));

    // Calculate total user count and average user count
    const totalUserCount = validDays.reduce((acc, curr) => acc + Number(curr.totalUsers), 0);
    const avgUserCount = validDays.length > 0 ? totalUserCount / validDays.length : 0;

    const { config: areaChartOptions } = useChartConfig(
        'AreaChart',
        'Users visits',
        '','',
        { minValue: 0 },
        '#3366CC',
        false,
      
    
    );
    let areaChartData = null;

    if (sortedData.length > 0) {
        try {
            areaChartData = transformWithSchema(sortedData, 'visitorSnapshot');
        } catch (error) {
            console.error(`Error transforming data: ${error.message}`);
        }
    } else {
        console.warn('No visitorSnapshot found in data', data);
    }

    return (
        <PortalCard
            cardTitle='Total Visits'
            cardData={totalUserCount.toLocaleString()}
            cardFooter={`${parseInt(avgUserCount)} visits per day on average`}
        >
            {areaChartData ? (
                <AreaChart data={areaChartData} options={areaChartOptions} />
            ) : (
                <div>No chart data available.</div>
            )}
        </PortalCard>
    );
};
