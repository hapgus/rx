import { useDataContext } from "../../../../hooks/data-hook";
import { PortalLeaderBoard } from "../../PortalPageComponent/PortalLeaderBoard/PortalLeaderBoard";
import { PortalLeaderBoardRow } from "../../PortalPageComponent/PortalLeaderBoard/PortalLeaderBoardRow";
import Skeleton from 'react-loading-skeleton';

export const ResourceLinkClicksByResourceTypeLeaderBoard = ({ limit = 10 }) => {
    const { isDataState } = useDataContext(); // Access filtered data from context
    const data = isDataState.resourceDataFilteredByDate;

    const targetEvents = ['RESOURCE_CLICKED'];

    if (!data || !data.length) {
        return <Skeleton height={200} width="100%" />;
    }

    // Step 1: Filter 'Click_Resource_Link' events
    const filteredEvents = data.filter(event => targetEvents.includes(event.eventName));
console.log(filteredEvents)
    // Step 2: Aggregate eventCount by resourceType
    const resourceMap = new Map();

    filteredEvents.forEach(item => {
        const resourceType = item['customEvent:resourceType'] || 'Unknown Resource';
        const eventCount = Number(item.eventCount);

        if (!resourceMap.has(resourceType)) {
            resourceMap.set(resourceType, { resourceType, totalEventCount: 0 });
        }
        resourceMap.get(resourceType).totalEventCount += eventCount;
    });

    // Step 3: Sort resources by eventCount and limit the result
    const sortedResources = Array.from(resourceMap.values())
        .sort((a, b) => b.totalEventCount - a.totalEventCount)
        .slice(0, limit);

    return (
        <PortalLeaderBoard title="Resources with Highest Click Frequency">
            <ul>
                {sortedResources.map((resource, idx) => (
                    <li key={idx}>
                        <PortalLeaderBoardRow
                            rank={idx + 1}
                            dimension={resource.resourceType}
                            metric={resource.totalEventCount}
                        />
                    </li>
                ))}
            </ul>
        </PortalLeaderBoard>
    );
};
