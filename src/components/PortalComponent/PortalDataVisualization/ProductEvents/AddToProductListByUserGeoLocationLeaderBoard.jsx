import { useDataContext } from "../../../../hooks/data-hook";
import { PortalLeaderBoard } from "../../PortalPageComponent/PortalLeaderBoard/PortalLeaderBoard";
import { PortalLeaderBoardRow } from "../../PortalPageComponent/PortalLeaderBoard/PortalLeaderBoardRow";
import Skeleton from 'react-loading-skeleton';

export const AddToProductListByUserGeoLocationLeaderBoard = () => {
    const { isDataState } = useDataContext();
    const data = isDataState.eventGeoLocationDataFilteredByDate; // Use filtered data from context

    const targetEvents = ['Add_Product_To_List'];

    if (!data || !data.length) {
        return <Skeleton height={200} width="100%" />;
    }

    // Step 1: Filter relevant events
    const filteredEvents = data.filter(event => targetEvents.includes(event.eventName));

    const locationMap = new Map();

    // Step 2: Aggregate event count by city and country
    filteredEvents.forEach((item) => {
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

    // Step 3: Sort the data by event count in descending order
    const sortedEvents = Array.from(locationMap.values()).sort((a, b) => b.eventCount - a.eventCount);

    return (
        <PortalLeaderBoard title="Geo Location of Users Adding Products to List">
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
