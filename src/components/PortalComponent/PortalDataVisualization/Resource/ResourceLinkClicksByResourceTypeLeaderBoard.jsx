import { useData } from "../../../../hooks/data-hook";
import { PortalLeaderBoard } from "../../PortalPageComponent/PortalLeaderBoard/PortalLeaderBoard";
import { PortalLeaderBoardRow } from "../../PortalPageComponent/PortalLeaderBoard/PortalLeaderBoardRow";

export const ResourceLinkClicksByResourceTypeLeaderBoard = ({ limit = 10 }) => {
    const { data } = useData('http://localhost:3005/data');

    if (!data || !data.eventOverview) {
        return <div>No data available</div>;
    }

    // Step 1: Filter for 'Click_Resource_Link' events
    const resourceLinkClickEvents = data.eventOverview.filter(
        event => event.eventName === 'Click_Resource_Link' && event['customEvent:resourceType'] !== '(not set)'
    );
    console.log(resourceLinkClickEvents);

    // Step 2: Aggregate eventCount by resourceType
    const resourceMap = new Map();

    resourceLinkClickEvents.forEach(item => {
        const resourceType = item['customEvent:resourceType'] || 'Unknown Resource';  // Default if resourceType is missing
        const eventCount = Number(item.eventCount);

        if (!resourceMap.has(resourceType)) {
            resourceMap.set(resourceType, {
                resourceType: resourceType,
                totalEventCount: 0,
            });
        }

        const current = resourceMap.get(resourceType);
        current.totalEventCount += eventCount;
    });

    // Step 3: Convert Map to array and sort by totalEventCount in descending order
    const sortedResources = Array.from(resourceMap.values())
        .sort((a, b) => b.totalEventCount - a.totalEventCount)
        .slice(0, limit);

    console.log(sortedResources);

    return (
        <PortalLeaderBoard title="Top Resources by Click Count">
            <ul>
                {sortedResources.map((resource, idx) => (
                    <li key={idx}>
                        <PortalLeaderBoardRow
                            rank={idx + 1}
                            dimension={resource.resourceType}  // Show resourceType
                            metric={resource.totalEventCount}  // Show total event count
                        />
                    </li>
                ))}
            </ul>
        </PortalLeaderBoard>
    );
};
