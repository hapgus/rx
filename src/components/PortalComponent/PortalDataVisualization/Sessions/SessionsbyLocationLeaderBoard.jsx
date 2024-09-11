import { useData } from "../../../../hooks/data-hook";
import { transformWithSchema } from "../../../../utils/data-transformer";
import { PageText } from "../../../Text/Text";
import { PortalLeaderBoard } from "../../PortalPageComponent/PortalLeaderBoard/PortalLeaderBoard";
import { PortalLeaderBoardRow } from "../../PortalPageComponent/PortalLeaderBoard/PortalLeaderBoardRow";




export const SessionsByLocationLeaderBoard = () => {
    const { data } = useData('http://localhost:3005/data');

    if (!data || !data.sessionByLocationSnapshot) {
        return <div>No data available</div>;
    }

    const sessionMap = new Map();

    // Step 1: Aggregate sessions by city and country using a Map
    data.sessionByLocationSnapshot.forEach((item) => {
        const key = `${item.country}-${item.city}`;

        if (!sessionMap.has(key)) {
            sessionMap.set(key, {
                country: item.country,
                city: item.city,
                totalSessions: 0,
            });
        }

        const current = sessionMap.get(key);
        current.totalSessions += Number(item.sessions);
    });

    // Step 2: Convert Map to array and sort by total sessions
    const sortedSessions = Array.from(sessionMap.values()).sort((a, b) => b.totalSessions - a.totalSessions);

    return (
        <PortalLeaderBoard title="Sessions by Location">
            <ul>
                {sortedSessions.map((location, idx) => (
                    <li key={idx}>
                        <PortalLeaderBoardRow
                        rank={idx + 1}
                        dimension={`${location.country}, ${location.city} `}
                        metric={location.totalSessions}
                        />
                    </li>
                ))}
            </ul>
        </PortalLeaderBoard>
    );
};
