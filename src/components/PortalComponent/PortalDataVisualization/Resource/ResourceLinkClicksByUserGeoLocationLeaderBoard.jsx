import { useDataContext } from "../../../../hooks/data-hook";
import { PortalLeaderBoard } from "../../PortalPageComponent/PortalLeaderBoard/PortalLeaderBoard";
import { PortalLeaderBoardRow } from "../../PortalPageComponent/PortalLeaderBoard/PortalLeaderBoardRow";
import Skeleton from 'react-loading-skeleton';

export const ResourceLinkClicksByUserGeoLocationLeaderBoard = () => {
    const { isDataState } = useDataContext(); // Access filtered data from context
    const data = isDataState.resourceDataFilteredByDate; // Use filtered data for the date range

    const targetEvents = ['RESOURCE_CLICKED'];

    if (!data || !data.length) {
        return <Skeleton height={200} width="100%" />;
    }

    // Step 1: Filter 'Click_Resource_Link' events
    const filteredEvents = data.filter(event => targetEvents.includes(event.eventName));

    // Step 2: Aggregate eventCount by country and city
    const locationMap = new Map();

    filteredEvents.forEach(item => {
        const key = `${item.country}-${item.city}`;
        const eventCount = Number(item.eventCount);

        if (!locationMap.has(key)) {
            locationMap.set(key, { country: item.country, city: item.city, eventCount: 0 });
        }
        locationMap.get(key).eventCount += eventCount;
    });

    // Step 3: Sort the locations by eventCount
    const sortedLocations = Array.from(locationMap.values()).sort((a, b) => b.eventCount - a.eventCount);

    return (
        <PortalLeaderBoard title="Geo Location of Users Clicking Resource Links">
            <ul>
                {sortedLocations.map((location, idx) => (
                    <li key={idx}>
                        <PortalLeaderBoardRow
                            rank={idx + 1}
                            dimension={`${location.country}, ${location.city}`}
                            metric={location.eventCount}
                        />
                    </li>
                ))}
            </ul>
        </PortalLeaderBoard>
    );
};
