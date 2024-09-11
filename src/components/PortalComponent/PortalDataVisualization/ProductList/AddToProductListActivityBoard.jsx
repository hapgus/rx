
import { PortalBanner } from "../../PortalPageComponent/PortalBanner/PortalBanner"
import { SessionsCard } from "../SessionsCard"
import { AddToProductListByDateLineChart } from "./AddToProductListByDateLineChart";
import { AddToProductListByLandingPageBarChart } from "./AddToProductListByLandingPageBarChart";
import { AddToProductListByLandingPageCategoryBarChart } from "./AddToProductListByLandingPageCategoryBarChart";
import { AddToProductListByUserGeoLocationLeaderBoard } from "./AddToProductListByUserGeoLocationLeaderBoard";

import { AddToProductListLeaderBoard, SessionsByLocationLeaderBoard } from "./AddToProductListLeaderBoard"


export const AddToProductListActivityBoard = ({ title, toolTipText, footer }) => {
    return (
        <PortalBanner 
        title={title}
        toolTipText={toolTipText}
        // chart1={<SessionsCard />}
        chart2={
            <>
            <AddToProductListByDateLineChart/>
        <AddToProductListLeaderBoard/>

        <AddToProductListByLandingPageBarChart/>
        <AddToProductListByLandingPageCategoryBarChart/>
        <AddToProductListByUserGeoLocationLeaderBoard/>
    </>
    }
        footer={footer}
       />
    );
};