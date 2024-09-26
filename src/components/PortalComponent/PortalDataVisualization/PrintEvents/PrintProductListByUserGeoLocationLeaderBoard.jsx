import { useDataContext } from "../../../../hooks/data-hook";
import { PortalLeaderBoard } from "../../PortalPageComponent/PortalLeaderBoard/PortalLeaderBoard";
import { PortalLeaderBoardRow } from "../../PortalPageComponent/PortalLeaderBoard/PortalLeaderBoardRow";
import Skeleton from 'react-loading-skeleton';

export const PrintProductListByUserGeoLocationLeaderBoard = () => {
    const { isDataState } = useDataContext();
    const data = isDataState.eventGeoLocationDataFilteredByDate; // Use filtered geolocation data from context

    if (!data || !data.length) {
        return <Skeleton height={300} width='100%' />;
    }

    const targetEvents = ['Print_Product_List'];

    // Step 1: Filter 'Print_Product_List' events
    const filteredEvents = data.filter(event => targetEvents.includes(event.eventName));

    const locationMap = new Map();

    // Step 2: Aggregate sessions by city and country using a Map
    filteredEvents.forEach(item => {
        const key = `${item.country}-${item.city}`;

        if (!locationMap.has(key)) {
            locationMap.set(key, {
                country: item.country,
                city: item.city,
                eventCount: 0,
            });
        }

        const current = locationMap.get(key);
        current.eventCount += Number(item.eventCount);
    });

    // Step 3: Convert Map to array and sort by eventCount
    const sortedEvents = Array.from(locationMap.values())
        .sort((a, b) => b.eventCount - a.eventCount);

    return (
        <PortalLeaderBoard title="Geo Location of Users Printing List">
            <ul>
                {sortedEvents.map((location, idx) => (
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
