import { useDataContext } from "../../../../hooks/data-hook";
import { PortalLeaderBoard } from "../../PortalPageComponent/PortalLeaderBoard/PortalLeaderBoard";
import { PortalLeaderBoardRow } from "../../PortalPageComponent/PortalLeaderBoard/PortalLeaderBoardRow";
import Skeleton from 'react-loading-skeleton';

export const LandingPageViewsByGeoLocationLeaderBoard = ({ limit = 10 }) => {
    const { isDataState } = useDataContext();
    const data = isDataState.isDataFilteredByDate; // Use filtered geolocation data from context

    if (!data || !data.length) {
        return <Skeleton height={200} width="100%" />; // Return skeleton loading state if no data
    }

    const locationMap = new Map();

    // Step 1: Aggregate page views by city and country
    data.forEach((item) => {
        const key = `${item.country}-${item.city}`; // Create a unique key for each location
        const pageViews = Number(item.screenPageViews);

        if (!locationMap.has(key)) {
            locationMap.set(key, {
                country: item.country,
                city: item.city,
                totalPageViews: 0,
            });
        }

        const current = locationMap.get(key);
        current.totalPageViews += pageViews; // Aggregate page views by location
    });

    // Step 2: Sort the data by totalPageViews in descending order
    const sortedLocations = Array.from(locationMap.values()).sort((a, b) => b.totalPageViews - a.totalPageViews);

    // Step 3: Limit the number of locations displayed based on the `limit` prop
    const limitedLocations = sortedLocations.slice(0, limit);


    // Step 3: Render the leaderboard
    return (
          <PortalLeaderBoard title={`Top ${limit} Page Views by Geo Location`}>
            <ul>
                {limitedLocations.map((location, idx) => (
                    <li key={idx}>
                        <PortalLeaderBoardRow
                            rank={idx + 1}
                            dimension={`${location.country}, ${location.city}`} // Display city and country
                            metric={location.totalPageViews} // Display total page views
                        />
                    </li>
                ))}
            </ul>
        </PortalLeaderBoard>
    );
};
