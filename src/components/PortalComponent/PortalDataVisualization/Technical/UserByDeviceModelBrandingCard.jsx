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
        '', 
        'Users',
        '',
        { minValue: 0 },
        ['#3366CC'],
        false, // Show legend
        true, // Show X-axis labels
        true,
        // 'BarChart',
        // 'Device Branding',
        // 'Users',
        // '',
        // { minValue: 0 },
        // [singleColor],
        // false
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
            cardTitle="User Distribution by Device Brand"
           toolTipText="This chart displays the number of users categorized by the branding of their devices, providing insights into which device brands are most commonly used to access your application."
            // toolTipText="Manufacturer or branded name (examples: Samsung, HTC, Verizon, T-Mobile)."
       
        >
            {chartData ? (
                <BarChart data={chartData} options={barChartOptions} />
            ) : (
                <Skeleton height={200} width='100%' />
            )}
        </PortalCard>
    );
};