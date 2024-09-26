import { PortalLeaderBoard } from "../../PortalPageComponent/PortalLeaderBoard/PortalLeaderBoard";
import { PortalLeaderBoardRow } from "../../PortalPageComponent/PortalLeaderBoard/PortalLeaderBoardRow";
import { useDataContext } from "../../../../hooks/data-hook";


export const AddToListProductSearchByUserGeoLocationLeaderBoard = () => {
    const { isDataState } = useDataContext(); // Access filtered data from context
    const data = isDataState.eventGeoLocationDataFilteredByDate;

    const targetEvents = ['SEARCHED_PRODUCT_ADDED'];
    if (!data || data.length === 0) {
        return <div>No data available</div>;
    }

  // Step 1: Filter eventPageOverview for target events
  const filteredEvents = data.filter(event => targetEvents.includes(event.eventName));
console.log(filteredEvents)


    const locationMap = new Map();

    // Step 1: Aggregate sessions by city and country using a Map
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

    // Step 2: Convert Map to array and sort by total sessions
    const sortedEvents = Array.from(locationMap.values()).sort((a, b) => b.eventCount - a.eventCount);
console.log(sortedEvents)
    return (
        <PortalLeaderBoard title="Geo Location of Users Selecting Products from Search">
            <ul>
                {sortedEvents.map((location, idx) => (
                    <li key={idx}>
                        <PortalLeaderBoardRow
                        rank={idx + 1}
                        dimension={`${location.country}, ${location.city} `}
                        metric={location.eventCount}
                        />
                    </li>
                ))}
            </ul>
        </PortalLeaderBoard>
    );
};
