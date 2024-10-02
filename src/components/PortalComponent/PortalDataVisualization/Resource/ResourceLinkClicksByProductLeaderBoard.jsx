import { useDataContext } from "../../../../hooks/data-hook";
import { PortalLeaderBoard } from "../../PortalPageComponent/PortalLeaderBoard/PortalLeaderBoard";
import { PortalLeaderBoardRow } from "../../PortalPageComponent/PortalLeaderBoard/PortalLeaderBoardRow";
import Skeleton from 'react-loading-skeleton';

export const ResourceLinkClicksByProductLeaderBoard = ({ limit = 10 }) => {
    const { isDataState } = useDataContext(); // Access filtered data from context
    const data = isDataState.resourceDataFilteredByDate;

    const targetEvents = ['RESOURCE_CLICKED'];

    if (!data || !data.length) {
        return <Skeleton height={200} width="100%" />;
    }

    // Step 1: Filter 'Click_Resource_Link' events
    const filteredEvents = data.filter(event => targetEvents.includes(event.eventName));

    // Step 2: Aggregate eventCount by productName
    const productMap = new Map();

    filteredEvents.forEach(item => {
        const productName = item['customEvent:productName'] || 'Unknown Product';
        const eventCount = Number(item.eventCount);

        if (!productMap.has(productName)) {
            productMap.set(productName, { productName, totalLinkClicks: 0 });
        }
        productMap.get(productName).totalLinkClicks += eventCount;
    });

    // Step 3: Sort products by totalLinkClicks and limit the result
    const sortedProducts = Array.from(productMap.values())
        .sort((a, b) => b.totalLinkClicks - a.totalLinkClicks)
        .slice(0, limit);

    return (
        <PortalLeaderBoard title="Most Clicked Resource Links by Product">
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
