

import { PortalLeaderBoard } from "../../PortalPageComponent/PortalLeaderBoard/PortalLeaderBoard";
import { PortalLeaderBoardRow } from "../../PortalPageComponent/PortalLeaderBoard/PortalLeaderBoardRow";
import { useDataContext } from "../../../../hooks/data-hook";

export const SearchProductsSelectedLeaderBoard = ({ limit = 10 }) => {
    const { isDataState } = useDataContext(); // Access filtered data from context
    const data = isDataState.searchDataFilteredByDate;

    const targetEvents = ['SEARCHED_PRODUCT_SELECTED'];
    if (!data || data.length === 0) {
        return <div>No data available</div>;
    }

  // Step 1: Filter eventPageOverview for target events
  const filteredEvents = data.filter(event => targetEvents.includes(event.eventName));
console.log(filteredEvents)

    const productMap = new Map();

    filteredEvents.forEach(item => {
        const productName = item['customEvent:productName'] || 'Unknown Product'; 

        if (!productMap.has(productName)) {
            productMap.set(productName, { productName, totalAddToList: 0 });
        }
        const product = productMap.get(productName);
        product.totalAddToList += Number(item.eventCount);
    });



    // Step 3: Convert Map to array and sort by totalAddToList in descending order
    const sortedProducts = 
    Array.from(productMap.values())
    .sort((a, b) => b.totalAddToList - a.totalAddToList)
    .slice(0, limit);

    return (
        <PortalLeaderBoard title="Products Visited from Search">
            <ul>
                {sortedProducts.map((product, idx) => (
                    <li key={idx}>
                        <PortalLeaderBoardRow
                            rank={idx + 1}
                            dimension={product.productName}
                            metric={product.totalAddToList}
                        />
                    </li>
                ))}
            </ul>
        </PortalLeaderBoard>
    );
};