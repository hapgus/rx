import { useDataContext } from "../../../../hooks/data-hook"
import { PortalLeaderBoard } from "../../PortalPageComponent/PortalLeaderBoard/PortalLeaderBoard";
import { PortalLeaderBoardRow } from "../../PortalPageComponent/PortalLeaderBoard/PortalLeaderBoardRow";

export const EventsByLocationLeaderboard = () => {
    const { isDataState } = useDataContext();
    const data = isDataState.isDataFilteredByDate;  // Use the filtered event data

    if (!data || !data.length) {
        return <h1>No Data</h1>; // Return skeleton loading state if no data
    }

    const targetEvents = [
       'SEARCHED_PRODUCT_SELECTED', 'SEARCHED_PRODUCT_ADDED' ,'LIST_PRINTED', 'RESOURCE_CLICKED', 'PRODUCT_ADDED',
    ];

    const filteredEvents = data.filter(event => targetEvents.includes(event.eventName));


    const eventsMap = new Map();

    // Step 1: Aggregate page views by city and country
    filteredEvents.forEach((item) => {
        const key = `${item.country}-${item.city}-${item.region}`;

        if (!eventsMap.has(key)) {
            eventsMap.set(key, {
                
                country: item.country,
                city: item.city,
                region:item.region,
                event: item.eventName,
                totalEvents: 0,
            });
        }
        const current = eventsMap.get(key);
        current.totalEvents += Number(item.eventCount); // Aggregate page views by location
    });

    const sortedEvents = Array.from(eventsMap.values()).sort((a, b) => b.totalEvents - a.totalEvents);
    console.log(sortedEvents)
    return (

        <PortalLeaderBoard title={`Event Count by Location`}>
            {
                sortedEvents && sortedEvents.length !== 0 ?
                    <ul>
                        {sortedEvents.map((e, idx) => (
                            <li key={idx}>
                                <PortalLeaderBoardRow
                                    rank={idx + 1}
                                    dimension={`${e.city}, ${e.region}. ${e.country}`} // Display city and country
                                    metric={e.totalEvents} // Display total page views
                                />
                            </li>
                        ))}
                    </ul> : <h1>No Data</h1>
            }

        </PortalLeaderBoard>
    )

}