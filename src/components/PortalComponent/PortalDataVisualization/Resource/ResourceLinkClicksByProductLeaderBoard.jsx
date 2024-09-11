import { useData } from "../../../../hooks/data-hook";

import { PortalLeaderBoard } from "../../PortalPageComponent/PortalLeaderBoard/PortalLeaderBoard";
import { PortalLeaderBoardRow } from "../../PortalPageComponent/PortalLeaderBoard/PortalLeaderBoardRow";


export const ResourceLinkClicksByProductLeaderBoard = ({ limit = 10 }) => {
    const { data } = useData('http://localhost:3005/data');

    if (!data || !data.eventOverview) { return <div>No data available</div>; }

    const resourceLinkClickEvents = data.eventOverview
        .filter(event =>
            event.eventName === 'Click_Resource_Link' &&
            event['customEvent:productName'] !== '(not set)');
  
    const productMap = new Map();

    resourceLinkClickEvents.forEach(item => {
      
        const productName = item['customEvent:productName'] || 'Unknown Product';

        if (!productMap.has(productName)) {
            productMap.set(productName, { productName, totalLinkClicks: 0 });
        }
        const product = productMap.get(productName);
       
        product.totalLinkClicks += Number(item.eventCount);
    });



    // Step 3: Convert Map to array and sort by totalAddToList in descending order
    const sortedProducts =
        Array.from(productMap.values())
            .sort((a, b) => b.totalLinkClicks - a.totalLinkClicks)
            .slice(0, limit);

    return (
        <PortalLeaderBoard title="Top Product Pages for Resource Clicks">
            <ul>
                {sortedProducts.map((product, idx) => (
                    <li key={idx}>
                        <PortalLeaderBoardRow
                            rank={idx + 1}
                            dimension={product.productName}
                            metric={product.totalLinkClicks}
                        />
                    </li>
                ))}
            </ul>
        </PortalLeaderBoard>
    );
};