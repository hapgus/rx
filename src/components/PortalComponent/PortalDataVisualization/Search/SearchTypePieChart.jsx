import { useData } from "../../../../hooks/data-hook";
import { PieChart } from "../../PortalChartComponent/PieChart";
import { useChartConfig } from "../../../../hooks/chart-config-hook";
import { transformWithSchema } from "../../../../utils/data-transformer";
import { PortalCard } from "../../PortalPageComponent/PortalCard/PortalCard";
import { formatChartLabel } from "../../../../utils/text-help";
export const SearchTypePieChart = () => {
    const { data: pieData } = useData('http://localhost:3005/data');
    const { config: pieChartOptions } = useChartConfig('PieChart');
  
    if (!pieData || !pieData.eventOverview) {
        console.warn('No data or deviceSnapshot found');
        return <div>No data available</div>;
    }
      
    


    const filteredData = pieData.eventOverview.filter(item => {
        const searchType = item['customEvent:searchType'];
        return searchType && searchType !== '(not set)' && searchType.trim() !== '';
    });
    // Aggregate the data by device category
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

    const transformedData = Object.keys(aggregatedData).map(searchEngine => ({
        // searchEngine,
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
        <PortalCard toolTipText='Search type refers to the type of search that was used. Homepage search refers to the search bar on the homepage. Nav search refers to the search bar in the navigation.' cardTitle="Search by Search Type">
            {chartData ? (
                <PieChart data={chartData} options={pieChartOptions} />
            ) : (
                <div>No chart data available.</div>
            )}
        </PortalCard>
        // <PortalLeaderBoard title="Products Selected from Search">
        //     <ul>
        //         {sortedProducts.map((product, idx) => (
        //             <li key={idx}>
        //                 <PortalLeaderBoardRow
        //                     rank={idx + 1}
        //                     dimension={product.productName}
        //                     metric={product.totalAddToList}
        //                 />
        //             </li>
        //         ))}
        //     </ul>
        // </PortalLeaderBoard>
    );
};