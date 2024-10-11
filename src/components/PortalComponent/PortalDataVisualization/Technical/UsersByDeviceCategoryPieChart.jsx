import { PieChart } from "../../PortalChartComponent/PieChart";
import { PortalCard } from "../../PortalPageComponent/PortalCard/PortalCard";
import { transformWithSchema } from "../../../../utils/data-transformer";
import { useDataContext } from "../../../../hooks/data-hook"; 
import { useChartConfig } from "../../../../hooks/chart-config-hook";
import { formatChartLabel } from "../../../../utils/helper-functions";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'; 

export const UsersByDeviceCategoryPieChart = () => {
    const { isDataState } = useDataContext(); 
    const pieData = isDataState.technicalDataFilteredByDate; 
  

    const { config: pieChartOptions } = useChartConfig(
        'PieChart',
        ''
    );

    if (!pieData || !pieData.length) {
        return <Skeleton height={200} width='100%' />;
    }

    // Aggregate data by device category
    const aggregatedData = pieData.reduce((acc, item) => {
        if (item.deviceCategory && !isNaN(Number(item.totalUsers))) {
            const category = item.deviceCategory;
            const totalUsers = Number(item.totalUsers);

            if (acc[category]) {
                acc[category] += totalUsers;
            } else {
                acc[category] = totalUsers;
            }
        }
        return acc;
    }, {});

    // Transform aggregated data for chart
    const transformedData = Object.keys(aggregatedData).map(deviceCategory => ({
        deviceCategory: formatChartLabel(deviceCategory),
        totalUsers: aggregatedData[deviceCategory],
    }));

     // Find category with the most users and calculate percentage
     const totalUsers = Object.values(aggregatedData).reduce((acc, curr) => acc + curr, 0);
     const maxCategory = Object.keys(aggregatedData).reduce((max, category) =>
         aggregatedData[category] > aggregatedData[max] ? category : max
     , Object.keys(aggregatedData)[0]);
 
     const maxCategoryUsers = aggregatedData[maxCategory];
     const percentage = ((maxCategoryUsers / totalUsers) * 100).toFixed(2);

    let chartData = null;
    try {
        chartData = transformWithSchema(transformedData, 'technicalActivityDeviceCategorySnapshot');
    } catch (error) {
        console.error(`Error transforming data: ${error.message}`);
        return <div>Error loading data</div>;
    }

    return (
        <PortalCard 
        cardTitle="User Distribution by Device Category"
        toolTipText="This chart categorizes users based on the type of device they use to visit your site, such as Desktop, Tablet, or Mobile. Understanding the breakdown helps optimize the user experience for each device type."
        // cardFooter={`${percentage}% of users visit via ${formatChartLabel(maxCategory)} devices.`}
        >
            {chartData ? (
                <PieChart data={chartData} options={pieChartOptions} />
            ) : (
                <Skeleton height={200} width='100%' />
            )}
        </PortalCard>
    );
}
