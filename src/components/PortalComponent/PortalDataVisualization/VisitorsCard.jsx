import { PortalCard } from "../PortalPageComponent/PortalCard/PortalCard";
import { useData } from "../../../hooks/data-hook";
import { useChartConfig } from "../../../hooks/chart-config-hook";
import { transformWithSchema } from "../../../utils/data-transformer";
import { AreaChart } from "../PortalChartComponent/AreaChart";


export const VisitorsCard = () => {
    const { data } = useData('http://localhost:3005/data');

    
    const totalUserCount = data && data.visitorSnapshot
        ? data.visitorSnapshot.reduce((acc, curr) => acc + Number(curr.totalUsers), 0)
        : 0;
    const numberOfDays = data?.visitorSnapshot?.length || 0;
    const avgUserCount = numberOfDays > 0 ? totalUserCount / numberOfDays : 0;

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