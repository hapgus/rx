import { useDataContext } from "../../../../hooks/data-hook";
import { PortalLeaderBoard } from "../../PortalPageComponent/PortalLeaderBoard/PortalLeaderBoard";
import { PortalLeaderBoardRow } from "../../PortalPageComponent/PortalLeaderBoard/PortalLeaderBoardRow";
import Skeleton from 'react-loading-skeleton';

export const PrintProductListLeaderBoard = ({ limit = 10 }) => {
    const { isDataState } = useDataContext();
    const data = isDataState.printDataFilteredByDate; // Use filtered print data from context

    if (!data || !data.length) {
        return <Skeleton height={300} width='100%' />;
    }

    // Step 1: Filter 'Print_Product_List' events
    const printProductEvents = data.filter(event => 
        event.eventName === 'Print_Product_List' && 
        event['customEvent:productName'] !== '(not set)'
    );

    const productMap = new Map();

    // Step 2: Aggregate data by product name
    printProductEvents.forEach(item => {
        const productsInList = item['customEvent:productsInList'] || '';
        const products = productsInList.split(',').map(product => product.trim());
    
        products.forEach(product => {
            if (product === '(not set)' || product === '') return;
            if (!productMap.has(product)) {
                productMap.set(product, { productName: product, timesInList: 0 });
            }
            productMap.get(product).timesInList += 1;
        });
    });

    // Step 3: Convert the Map to an array and sort by timesInList
    const sortedProducts = Array.from(productMap.values())
        .sort((a, b) => b.timesInList - a.timesInList)
        .slice(0, limit);

    return (
        <PortalLeaderBoard title="Products in Printed List">
            <ul>
                {sortedProducts.map((product, idx) => (
                    <li key={idx}>
                        <PortalLeaderBoardRow
                            rank={idx + 1}
                            dimension={product.productName}
                            metric={product.timesInList}
                        />
                    </li>
                ))}
            </ul>
        </PortalLeaderBoard>
    );
};
