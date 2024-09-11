import { useData } from "../../../../hooks/data-hook";
import { LineChart } from "../../PortalChartComponent/LineChart";
import { useChartConfig } from "../../../../hooks/chart-config-hook";
import { transformWithSchema } from "../../../../utils/data-transformer";
import { PortalCard } from "../../PortalPageComponent/PortalCard/PortalCard";
import { reduceEventsByDate } from "../../../../utils/text-help";

export const AddToProductListByDateLineChart = () => {
    const { data } = useData('http://localhost:3005/data');
    const { config: lineChartOptions } = useChartConfig('LineChart'); // Use LineChart config

    const targetEvents = [
       'Add_Product_To_List',
    ];

    if (!data || !data.eventPageOverview) {
        return <div>No data available</div>;
    }

  // Step 1: Filter eventPageOverview for target events
  const filteredEvents = data.eventPageOverview.filter(event => targetEvents.includes(event.eventName));

  // Step 2: Aggregate eventCount by date using reduce()
  const eventCountsByDate = filteredEvents.reduce((acc, event) => {
      const eventDate = event.date;
      const eventCount = Number(event.eventCount);

      // Initialize the date if it doesn't exist
      if (!acc[eventDate]) {
          acc[eventDate] = 0;
      }

      // Add the eventCount for the current date
      acc[eventDate] += eventCount;
      return acc;
  }, {});
  console.log("Aggregated Data by Date:", eventCountsByDate);
  // Step 3: Convert the aggregated data into a new array format
  const newList = Object.keys(eventCountsByDate).map(date => ({
      date,
      eventCount: eventCountsByDate[date],
  }));

  console.log("Aggregated Data by Date:", newList);

  // Step 4: Transform the data for the Line Chart
  let chartData = null;
  if (newList.length > 0) {
      try {
          chartData = transformWithSchema(newList, 'eventPageOverviewForLineChart');
      } catch (error) {
          console.error(`Error transforming data: ${error.message}`);
      }
  } else {
      console.warn('No events found', newList);
  }

  return (
      <PortalCard cardTitle="Products Added to List">
          {chartData ? (
              <LineChart data={chartData} options={lineChartOptions} />  // Use LineChart
          ) : (
              <div>No chart data available.</div>
          )}
      </PortalCard>
  );
};