import { PortalCard } from "../PortalPageComponent/PortalCard/PortalCard";
import { useData } from "../../../hooks/data-hook";
import { useChartConfig } from "../../../hooks/chart-config-hook";
import { transformWithSchema } from "../../../utils/data-transformer";
import { AreaChart } from "../PortalChartComponent/AreaChart";


export const VisitorsCard = () => {

    const { data } = useData('http://localhost:3005/data');

    const validDays = data && data.visitorSnapshot
        ? data.visitorSnapshot.filter(day => day.totalUsers && !isNaN(Number(day.totalUsers)))
        : [];

    const totalUserCount = validDays.reduce((acc, curr) => acc + Number(curr.totalUsers), 0);
    const avgUserCount = validDays.length > 0 ? totalUserCount / validDays.length : 0;

    const { config: areaChartOptions } = useChartConfig('AreaChart');

    let areaChartData = null;

    if (data) {
        try {
            areaChartData = transformWithSchema(data.visitorSnapshot, 'visitorSnapshot');
        } catch (error) {
            console.error(`Error transforming data: ${error.message}`);
        }
    } else {
        console.warn('No visitorSnapshot found in data', data);
    }
    return (
        <PortalCard
        toolTipText="Total Users represents the unique number of users who have visited your website or app during a specified time period. Each user is counted only once, even if they visit multiple times."
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
    )
}