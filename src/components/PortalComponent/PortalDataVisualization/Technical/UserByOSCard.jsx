import { PortalCard } from "../../PortalPageComponent/PortalCard/PortalCard";
import { useChartConfig } from "../../../../hooks/chart-config-hook";

import Skeleton from "react-loading-skeleton";
import { BarChart } from "../../PortalChartComponent/BarChart";
import { useDataContext } from "../../../../hooks/data-hook";

export const UserByOSCard = () => {
    const { isDataState } = useDataContext(); // Access filtered data from context
    const data = isDataState.technicalDataFilteredByDate; 

    const singleColor = '#3366CC'; // Define a single color for all columns

    const { config: barChartOptions } = useChartConfig(
        'BarChart',
        'Operating System (OS)',
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
        const target = item.operatingSystem || 'Unknown';
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
        ['Operating System', 'Users'], // Column headers for the chart
        ...aggregatedData.map(item => [item.target, item.totalUsers]) // Map OS and user count
    ];

    return (
        <PortalCard
            cardTitle="Operating System by Users"
            toolTipText="The operating systems used by visitors to your app or website. Includes desktop and mobile operating systems such as Windows and Android."
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