
import { PortalBanner } from "../../PortalPageComponent/PortalBanner/PortalBanner"
import { SessionsCard } from "../SessionsCard"
import { PrintProductListByDateLineChart } from "./PrintProductListByDateLineChart";
import { PrintProductListByUserGeoLocationLeaderBoard } from "./PrintProductListByUserGeoLocationLeaderBoard";

import { PrintProductListLeaderBoard } from "./PrintProductListLeaderBoard";
import { PrintProductListPostActionPieChart } from "./PrintProductListPostActionPieChart";

export const PrintProductListActivityBoard = ({ title, toolTipText, footer }) => {
    return (
        <PortalBanner 
        title={title}
        toolTipText={toolTipText}
        // chart1={<SessionsCard />}
        chart2={
    <>
     <PrintProductListByUserGeoLocationLeaderBoard/>
       <PrintProductListByDateLineChart/>
    <PrintProductListLeaderBoard/>
    <PrintProductListPostActionPieChart/>
    </>
            
    }
        footer={footer}
       />
    );
};