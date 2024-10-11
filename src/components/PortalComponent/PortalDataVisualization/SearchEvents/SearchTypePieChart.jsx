import { useDataContext } from "../../../../hooks/data-hook";
import { PieChart } from "../../PortalChartComponent/PieChart";
import { useChartConfig } from "../../../../hooks/chart-config-hook";
import { transformWithSchema } from "../../../../utils/data-transformer";
import { PortalCard } from "../../PortalPageComponent/PortalCard/PortalCard";
import { formatChartLabel } from "../../../../utils/helper-functions";


export const SearchTypePieChart = () => {

    const { isDataState } = useDataContext(); 
    const pieData = isDataState.searchDataFilteredByDate; 
    const { config: pieChartOptions } = useChartConfig(
        'PieChart', ''
    );
  
    const targetEvents = ['Select_Product_From_Search'];
    if (!pieData || !pieData.length) {
        console.warn('No data or deviceSnapshot found');
        return <div>No data available</div>;
    }
    
    const filteredData = pieData.filter(item => {
        const searchType = item['customEvent:searchType'];
        return searchType && searchType !== '(not set)' && searchType.trim() !== '';
    });

    // Aggregate the data 
    const aggregatedData = filteredData.reduce((acc, item) => {
        const searchType = item['customEvent:searchType'];
        const searchCount = Number(item.eventCount);

        if (acc[searchType]) {
            acc[searchType] += searchCount;
        } else {
            acc[searchType] = searchCount;
        }
        return acc;
    }, {});
  // Step 3: Find the category with the most users and calculate percentage
  const totalEvents = Object.values(aggregatedData).reduce((acc, curr) => acc + curr, 0);
  const maxCategory = Object.keys(aggregatedData).reduce((max, category) =>
      aggregatedData[category] > aggregatedData[max] ? category : max,
      Object.keys(aggregatedData)[0]
  );
  const maxCategoryEvents = aggregatedData[maxCategory];
  const percentage = ((maxCategoryEvents / totalEvents) * 100).toFixed(2);

    const transformedData = Object.keys(aggregatedData).map(searchEngine => ({
        searchEngine: formatChartLabel(searchEngine), 
        searches: aggregatedData[searchEngine],
    }));

    let chartData = null;
    try {
        chartData = transformWithSchema(transformedData, 'searchTypeSnapshot');
    } catch (error) {
        console.error(`Error transforming data: ${error.message}`);
        return <div>Error loading data</div>;
    }
 
    return (
     
            <PortalCard 
            toolTipText="This chart breaks down user searches based on where they originated. 'Homepage Search' indicates searches conducted from the homepage search bar, while 'Nav Search' represents searches from the navigation bar. Understanding the distribution of search types provides insight into user behavior and their preferred search entry points."

                // toolTipText='Search type refers to the type of search used. Homepage search refers to the search bar on the homepage. Nav search refers to the search bar in the navigation.'
                cardTitle="Search by Search Type"
                cardData={totalEvents}
                cardFooter={`${percentage}% of users searched using the ${formatChartLabel(maxCategory)}.`} // Add footer insight
            >
                {chartData ? (
                    <PieChart data={chartData} options={pieChartOptions} />
                ) : (
                    <div>No chart data available.</div>
                )}
            </PortalCard>
    );
};