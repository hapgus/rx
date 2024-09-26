import { PortalCard } from "../../PortalPageComponent/PortalCard/PortalCard";
import { useChartConfig } from "../../../../hooks/chart-config-hook";
import { transformWithSchema } from "../../../../utils/data-transformer";
import { ColumnChart } from "../../PortalChartComponent/ColumnChart";
import { useDataContext } from "../../../../hooks/data-hook";
import { SkeletonComponent } from "../../../Skeletons/SkeletonComponent";

export const ProductsAddedFromSearchCard = () => {
    const { isDataState } = useDataContext();
    const data = isDataState.eventGeoLocationDataFilteredByDate;
    
    const { config: columnChartOptions } = useChartConfig(
        'ColumnChart', 
        'Page Path', 
        'Page Views'
    ); // Set up BarChart options

  
    if (!data || data.length === 0) {
        return <div>No data available</div>;
    }
  const targetEvents = ['Add_Product_To_List'];

  const filteredEvents = data.filter(event => targetEvents.includes(event.eventName));
  
  const eventsMap = new Map();
  filteredEvents.forEach((item) => {
    const key = item.eventName;
    // const pageViews = Number(item.eventCount);

    if (!eventsMap.has(key)) {
        eventsMap.set(key, {
            event: item.eventName,
            totalEvents: 0,
        });
    }
    const current = eventsMap.get(key);
    current.totalEvents += Number(item.eventCount); // Aggregate page views by location
});

const sortedEvents = Array.from(eventsMap.values()).sort((a, b) => b.totalEvents - a.totalEvents);

  // Step 3: Calculate total and average page views
  const totalPageEvents = sortedEvents.reduce((acc, curr) => acc + curr.totalEvents, 0);
  const avgPageEvents = sortedEvents.length > 0 ? totalPageEvents / sortedEvents.length : 0;

  const chartData = [
    ['Event Name', 'Event Count'], 
    ...sortedEvents.map(item => [item.event, item.totalEvents])
];

// Step 5: Identify the most popular page by page views
const mostPopularEvent =  sortedEvents[0] ?  sortedEvents[0].event : 'Unknown Event';
const mostPopularEventCount =  sortedEvents[0] ?  sortedEvents[0].event : 0;
console.log(chartData)
    return (
       
            <PortalCard
                cardTitle='Products Added from Search'
                // cardData={totalPageViewCount.toLocaleString()}
                // cardFooter={`${parseInt(avgPageViewCount)} page ZZZviews per day on average`}
                toolTipText='The number of web pages your users viewed. Repeated views of a single page or screen are counted.'
            >
                {chartData ? (
                    <ColumnChart data={chartData} options={columnChartOptions} />
                ) : (
                    <div>No chart data available.</div>
                )}
            </PortalCard>
        // ) : (
        //     <SkeletonComponent height='33rem' width='40rem' count={1} />
        // )
    );
};
