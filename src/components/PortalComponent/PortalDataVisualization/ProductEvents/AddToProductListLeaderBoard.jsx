import { useDataContext } from "../../../../hooks/data-hook";
import { PortalLeaderBoard } from "../../PortalPageComponent/PortalLeaderBoard/PortalLeaderBoard";
import { PortalLeaderBoardRow } from "../../PortalPageComponent/PortalLeaderBoard/PortalLeaderBoardRow";
import Skeleton from 'react-loading-skeleton';

export const AddToProductListLeaderBoard = ({ limit = 10 }) => {
    const { isDataState } = useDataContext(); // Use the filtered data from context
    const data = isDataState.productDataFilteredByDate; // Access product data filtered by date

    if (!data || !data.length) {
        return <Skeleton height={300} width='100%' />;
    }

    // Step 1: Filter and aggregate 'Add_Product_To_List' events by product name
    const addProductEvents = data.filter(event => 
        event.eventName === 'Add_Product_To_List' && 
        event['customEvent:productName'] !== '(not set)'
    );

    const productMap = new Map();

    addProductEvents.forEach(item => {
        const productName = item['customEvent:productName'] || 'Unknown Product'; 

        if (!productMap.has(productName)) {
            productMap.set(productName, { productName, totalAddToList: 0 });
        }
        const product = productMap.get(productName);
        product.totalAddToList += Number(item.eventCount);
    });

    // Step 2: Convert Map to array, sort by totalAddToList, and limit results
    const sortedProducts = Array.from(productMap.values())
        .sort((a, b) => b.totalAddToList - a.totalAddToList)
        .slice(0, limit);

    // Step 3: Display the leaderboard
    return (
        <PortalLeaderBoard title="Products Added to List">
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
