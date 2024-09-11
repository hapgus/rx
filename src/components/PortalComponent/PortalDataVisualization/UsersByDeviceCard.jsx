import { PortalCard } from "../PortalPageComponent/PortalCard/PortalCard";
import { useData } from "../../../hooks/data-hook";
import { useChartConfig } from "../../../hooks/chart-config-hook";
import { transformWithSchema } from "../../../utils/data-transformer";
import { PieChart } from "../PortalChartComponent/PieChart";

export const UsersByDeviceCard = () => {

    const { data: pieData } = useData('http://localhost:3005/data');

    const { config: pieChartOptions } = useChartConfig('PieChart');

    if (!pieData || !pieData.deviceSnapshot) {
        console.warn('No data or deviceSnapshot found');
        return <div>No data available</div>;
    }

    // Aggregate the data by device category
    const aggregatedData = pieData.deviceSnapshot.reduce((acc, item) => {
        const category = item.deviceCategory;
        const totalUsers = Number(item.totalUsers);

        if (acc[category]) {
            acc[category] += totalUsers;
        } else {
            acc[category] = totalUsers;
        }
        return acc;
    }, {});

console.log('ag de',aggregatedData)
    const transformedData = Object.keys(aggregatedData).map(deviceCategory => ({
        deviceCategory,
        totalUsers: aggregatedData[deviceCategory],
    }));

    console.log('tran', transformedData)

    let chartData = null;
    try {
        chartData = transformWithSchema(transformedData, 'deviceSnapshot');
    } catch (error) {
        console.error(`Error transforming data: ${error.message}`);
        return <div>Error loading data</div>;
    }

    return (
        <PortalCard cardTitle="Users by Device">
            {chartData ? (
                <PieChart data={chartData} options={pieChartOptions} />
            ) : (
                <div>No chart data available.</div>
            )}
        </PortalCard>
    );
};
