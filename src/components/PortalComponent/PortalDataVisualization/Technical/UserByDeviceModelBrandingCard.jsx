import { PortalCard } from "../../PortalPageComponent/PortalCard/PortalCard";
import { useChartConfig } from "../../../../hooks/chart-config-hook";

import Skeleton from "react-loading-skeleton";
import { BarChart } from "../../PortalChartComponent/BarChart";
import { useDataContext } from "../../../../hooks/data-hook";

export const UserByDeviceModelBrandingCard = () => {

    const { isDataState } = useDataContext(); 
    const data = isDataState.technicalDataFilteredByDate; 
  
    const singleColor = '#3366CC'; // Define a single color for all columns

    const { config: barChartOptions } = useChartConfig(
        'BarChart',
        'Device Branding',
        'Users',
        '',
        { minValue: 0 },
        [singleColor],
        false
    );

    if (!data || !data.length) {
        return <Skeleton height={200} width='100%' />;
    }

    // Aggregate data by operating system
    const dataMap = new Map();

    data.forEach((item) => {
        const target = item.mobileDeviceBranding|| 'Unknown';
        const count = Number(item.totalUsers);

        if (!dataMap.has(target)) {
            dataMap.set(target, { target, totalUsers: 0 });
        }

        const targetedData = dataMap.get(target);
        targetedData.totalUsers += count;
    });

    // Sort the aggregated data in descending order by totalUsers
    const aggregatedData = Array.from(dataMap.values()).sort((a, b) => b.totalUsers - a.totalUsers);

    // Format the aggregated data for chart rendering
    const chartData = [
        ['Device Model Branding', 'Users'], // Column headers for the chart
        ...aggregatedData.map(item => [item.target, item.totalUsers]) // Map OS and user count
    ];

    return (
        <PortalCard
            cardTitle="Device Model Branding"
            toolTipText="Manufacturer or branded name (examples: Samsung, HTC, Verizon, T-Mobile)."
        cardFooter='Footer text here ---'
        >
            {chartData ? (
                <BarChart data={chartData} options={barChartOptions} />
            ) : (
                <Skeleton height={200} width='100%' />
            )}
        </PortalCard>
    );
};