import styles from './PortalDashboard.module.css';
import { useData } from '../../../../hooks/data-hook';
import { DashboardSkeleton } from '../../../Skeletons/DashboardSkeleton';

import { useChartConfig } from '../../../../hooks/chart-config-hook';
import { transformWithSchema } from '../../../../utils/data-transformer';
import { LineChart } from '../../PortalChartComponent/LineChart';
import { DateComponent } from '../../../Date/DateComponent';
import { AreaChart } from '../../PortalChartComponent/AreaChart';
import { PortalCard } from '../PortalCard/PortalCard';



export const PortalDashboard = () => {
    const { data } = useData('http://localhost:3005/data');
    console.log(data)

    const totalUserCount = data && data.visitorSnapshot
        ? data.visitorSnapshot.reduce((acc, curr) => acc + Number(curr.totalUsers), 0)
        : 0;
        const numberOfDays = data?.visitorSnapshot?.length || 0;
    // const numberOfDays = data ? data.visitorSnapshot.length : 0;
    const avgUserCount = numberOfDays > 0 ? totalUserCount / numberOfDays : 0;

    //SAME AS ABOVE - DEALS WITH CORRUPT DATA WHEN SOME VALUES MISSING OR NOT NUMBERS
    //         const validDays = data && data.visitorSnapshot
    //     ? data.visitorSnapshot.filter(day => day.totalUsers && !isNaN(Number(day.totalUsers)))
    //     : [];
    // const totalUserCount = validDays.reduce((acc, curr) => acc + Number(curr.totalUsers), 0);
    // const avgUserCount = validDays.length > 0 ? totalUserCount / validDays.length : 0;

    // Get the chart config for LineChart
    const { config: lineChartOptions } = useChartConfig('LineChart');
    const { config: areaChartOptions } = useChartConfig('AreaChart');

    let chartData = null;
    let areaChartData = null;

    if (data && data.visitorSnapshot) {
        try {
            // Transform the visitorSnapshot data using the schema-based transformation
            chartData = transformWithSchema(data.visitorSnapshot, 'visitorSnapshot');
            areaChartData = transformWithSchema(data.visitorSnapshot, 'visitorSnapshot');

        } catch (error) {
            console.error(`Error transforming data: ${error.message}`);
        }
    } else {
        console.warn('No visitorSnapshot found in data', data);
    }

    console.log('use data', totalUserCount);

    return (
        data ?
            <div className={styles.dashboardSkeletonContainer}>
                <div className={styles.gridContainer}>
                    <div className={styles.itemsWrapper}>
                        <PortalCard
                            cardTitle='Total Visits'
                            cardData={totalUserCount}
                            cardFooter={`${avgUserCount} visits per day on average`}
                        >
                            {chartData ? (
                                <>
                                    {/* <LineChart
                                        data={chartData}  // Pass the transformed data
                                        options={lineChartOptions}
                                    /> */}
                                    <AreaChart
                                        data={areaChartData}
                                        options={areaChartOptions}
                                    />
                                </>
                            ) : (
                                <div>No chart data available.</div>
                            )}
                        </PortalCard>
                        <PortalCard
                            cardTitle='Total Visitors'
                            cardData={totalUserCount}
                        >
                            {chartData ? (
                                <>
                                    {/* <LineChart
                                        data={chartData}  // Pass the transformed data
                                        options={lineChartOptions}
                                    /> */}
                                    <AreaChart
                                        data={areaChartData}
                                        options={areaChartOptions}
                                    />
                                </>
                            ) : (
                                <div>No chart data available.</div>
                            )}
                        </PortalCard>
                        <PortalCard
                            cardTitle='Total Visitors'
                            cardData={totalUserCount}
                        >
                            {chartData ? (
                                <>
                                    {/* <LineChart
                                        data={chartData}  // Pass the transformed data
                                        options={lineChartOptions}
                                    /> */}
                                    <AreaChart
                                        data={areaChartData}
                                        options={areaChartOptions}
                                    />
                                </>
                            ) : (
                                <div>No chart data available.</div>
                            )}
                        </PortalCard>
                        <PortalCard
                            cardTitle='Total Visitors'
                            cardData={totalUserCount}
                        >
                            {chartData ? (
                                <>
                                    {/* <LineChart
                                        data={chartData}  // Pass the transformed data
                                        options={lineChartOptions}
                                    /> */}
                                    <AreaChart
                                        data={areaChartData}
                                        options={areaChartOptions}
                                    />
                                </>
                            ) : (
                                <div>No chart data available.</div>
                            )}
                        </PortalCard>
                    </div>
                    <div className={styles.bodyWrapper}>
                        <div className={styles.bodyItem1}></div>
                        <div className={styles.bodyItem2}></div>
                        <div className={styles.bodyItem3}></div>
                    </div>
                </div>
            </div>
            : <DashboardSkeleton />
    );
}
