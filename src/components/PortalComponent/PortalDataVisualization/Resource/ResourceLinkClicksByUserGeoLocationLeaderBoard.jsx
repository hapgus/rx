import { useData } from "../../../../hooks/data-hook";
import { transformWithSchema } from "../../../../utils/data-transformer";
import { PageText } from "../../../Text/Text";
import { PortalLeaderBoard } from "../../PortalPageComponent/PortalLeaderBoard/PortalLeaderBoard";
import { PortalLeaderBoardRow } from "../../PortalPageComponent/PortalLeaderBoard/PortalLeaderBoardRow";




export const ResourceLinkClicksByUserGeoLocationLeaderBoard = () => {
    const { data } = useData('http://localhost:3005/data');

    if (!data || !data.eventGeoLocationOverview) {
        return <div>No data available</div>;
    }
    const targetEvents = ['Click_Resource_Link'];


    const filteredEvents = data.eventGeoLocationOverview.filter(event => targetEvents.includes(event.eventName));


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
        <PortalLeaderBoard title="Geo Location of Users Clicking Resource Links">
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
