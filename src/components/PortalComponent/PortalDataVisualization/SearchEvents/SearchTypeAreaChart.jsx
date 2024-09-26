import { useDataContext } from "../../../../hooks/data-hook";
import { AreaChart } from "../../PortalChartComponent/AreaChart";
import { useChartConfig } from "../../../../hooks/chart-config-hook";
import { PortalCard } from "../../PortalPageComponent/PortalCard/PortalCard";
import { formatChartLabel } from "../../../../utils/text-help";

export const SearchTypeAreaChart = () => {
    const { isDataState } = useDataContext();
    const data = isDataState.searchDataFilteredByDate;  // Get filtered search data
    const { config: areaChartOptions } = useChartConfig(
        'AreaChart', 
        'Search Type Over Time', 
        'Date',  // X-axis
        'Search Count',  // Y-axis
        { minValue: 0 }, // Y Axis Range
        ['#3366CC', "red", "green"], // Colors
    );

    const targetEvents = ['Select_Product_From_Search'];
    
    if (!data || !data.length) {
        console.warn('No data found');
        return <div>No data available</div>;
    }

    // Step 1: Filter relevant events and search types
    const filteredData = data.filter(item => {
        const searchType = item['customEvent:searchType'];
        return searchType && searchType !== '(not set)' && searchType.trim() !== '';
    });

    // Step 2: Aggregate data by date and search type
    const aggregatedData = filteredData.reduce((acc, item) => {
        const date = item.date;  // Assuming the date is in 'YYYYMMDD' format
        const searchType = item['customEvent:searchType'];
        const eventCount = Number(item.eventCount);

        // Initialize the date if not present
        if (!acc[date]) {
            acc[date] = {};
        }

        // Accumulate event count per search type
        acc[date][searchType] = (acc[date][searchType] || 0) + eventCount;

        return acc;
    }, {});

    // Step 3: Ensure all dates have values for all search types
    const allSearchTypes = Array.from(
        new Set(filteredData.map(item => item['customEvent:searchType']))
    );

    const chartData = [
        ['Date', ...allSearchTypes.map(formatChartLabel)],  // Header with search types
        ...Object.entries(aggregatedData).map(([date, searchTypes]) => {
            const formattedDate = `${date.slice(0, 4)}-${date.slice(4, 6)}-${date.slice(6, 8)}`;
            // Fill missing search types with 0
            const rowData = allSearchTypes.map(type => searchTypes[type] || 0);
            return [formattedDate, ...rowData];
        })
    ];

    // Step 4: Calculate total and most popular search type for footer insight
    const totalSearches = Object.values(aggregatedData).reduce((acc, day) => {
        return acc + Object.values(day).reduce((sum, count) => sum + count, 0);
    }, 0);
console.log(allSearchTypes)
    const searchTypeCounts = filteredData.reduce((acc, item) => {
        const searchType = item['customEvent:searchType'];
        const searchCount = Number(item.eventCount);

        if (acc[searchType]) {
            acc[searchType] += searchCount;
        } else {
            acc[searchType] = searchCount;
        }
        console.log('ac', acc)
        return acc;
    }, {});

    const maxSearchType = Object.keys(searchTypeCounts).reduce((max, type) =>
        searchTypeCounts[type] > searchTypeCounts[max] ? type : max,
        Object.keys(searchTypeCounts)[0]
    );

    const maxSearchTypeCount = searchTypeCounts[maxSearchType];
    const percentage = ((maxSearchTypeCount / totalSearches) * 100).toFixed(2);

    // Step 5: Render the Area Chart inside the PortalCard
    return (
        <PortalCard
            toolTipText='Search type refers to the type of search used. This chart shows how search activity trends over time based on search type.'
            cardTitle="Search Activity by Search Type Over Time"
            cardData={totalSearches}
            cardFooter={`${percentage}% of users used the "${formatChartLabel(maxSearchType)}" search type.`}
        >
            {chartData.length > 1 ? (
                <AreaChart data={chartData} options={areaChartOptions} />
            ) : (
                <div>No chart data available.</div>
            )}
        </PortalCard>
    );
};
