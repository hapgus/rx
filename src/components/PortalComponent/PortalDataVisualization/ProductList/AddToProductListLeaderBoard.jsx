import { useData } from "../../../../hooks/data-hook";
import { transformWithSchema } from "../../../../utils/data-transformer";
import { PageText } from "../../../Text/Text";
import { PortalLeaderBoard } from "../../PortalPageComponent/PortalLeaderBoard/PortalLeaderBoard";
import { PortalLeaderBoardRow } from "../../PortalPageComponent/PortalLeaderBoard/PortalLeaderBoardRow";


export const AddToProductListLeaderBoard = ({ limit = 10 }) => {
    const { data } = useData('http://localhost:3005/data');

    if (!data || !data.eventOverview) { return <div>No data available</div>;}

    const addProductEvents = data.eventOverview
    .filter(event =>
         event.eventName === 'Add_Product_To_List' && 
         event['customEvent:productName'] !== '(not set)');

    const productMap = new Map();

    addProductEvents.forEach(item => {
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