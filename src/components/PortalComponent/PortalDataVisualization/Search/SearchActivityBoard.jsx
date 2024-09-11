
import { PortalBanner } from "../../PortalPageComponent/PortalBanner/PortalBanner"
import { SessionsCard } from "../SessionsCard"
import { UsersByDeviceCard } from "../UsersByDeviceCard";
import { SearchByDateLineChart } from "./SearchByDateLineChart";
import { SearchByLandingPageBarChart } from "./SearchByLandingPageBarChart";
import { SearchByLandingPageCategoryBarChart } from "./SearchByLandingPageCategoryBarChart";
import { SearchByUserGeoLocationLeaderBoard } from "./SearchByUserGeoLocationLeaderBoard";

import { SearchProductsLeaderBoard, SessionsByLocationLeaderBoard } from "./SearchProductsLeaderBoard"
import { SearchTypePieChart } from "./SearchTypePieChart";


export const SearchActivityBoard = ({ title, toolTipText, footer }) => {
    return (
        <PortalBanner 
        title={title}
        toolTipText={toolTipText}
        chart1={
       
       <>
       <SearchByDateLineChart/>
        {/* <SessionsCard /> */}
        <SearchTypePieChart/>
        <SearchByLandingPageBarChart/>
        <SearchByLandingPageCategoryBarChart/>
        <SearchByUserGeoLocationLeaderBoard/>
        
    </>
    }
        chart2={<SearchProductsLeaderBoard/>}
        footer={footer}
       />
    );
};