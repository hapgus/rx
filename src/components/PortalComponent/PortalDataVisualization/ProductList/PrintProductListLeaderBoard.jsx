import { useData } from "../../../../hooks/data-hook";
import { transformWithSchema } from "../../../../utils/data-transformer";
import { PageText } from "../../../Text/Text";
import { PortalLeaderBoard } from "../../PortalPageComponent/PortalLeaderBoard/PortalLeaderBoard";
import { PortalLeaderBoardRow } from "../../PortalPageComponent/PortalLeaderBoard/PortalLeaderBoardRow";


export const PrintProductListLeaderBoard = ({ limit = 10 }) => {
    const { data } = useData('http://localhost:3005/data');

    if (!data || !data.productEventSnapshot) { return <div>No data available</div>; }

    const printProductEvents = data.productEventSnapshot
        .filter(event =>
            event.eventName === 'Print_Product_List' &&
            event['customEvent:productName'] !== '(not set)');

    const productMap = new Map();

    printProductEvents.forEach(item => {
        const productsInList = item['customEvent:productsInList'] || '';
        const products = productsInList.split(',').map(product => product.trim());
    
        products.forEach(product => {
            if (product === '(not set)' || product === '') return;  // Ignore invalid products
            if (!productMap.has(product)) {
                productMap.set(product, { productName: product, timesInList: 0 });
            }
            productMap.get(product).timesInList += 1;
        });
    });

console.log(productMap)

    // Step 3: Convert Map to array and sort by totalAddToList in descending order
    const sortedProducts = 
    Array.from(productMap.values())
    .sort((a, b) => b.timesInList - a.timesInList);
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