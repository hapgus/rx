
import { PortalBanner } from "../../PortalPageComponent/PortalBanner/PortalBanner"
import { SessionsCard } from "../SessionsCard"

import { SessionsByLocationLeaderBoard } from "./SessionsbyLocationLeaderBoard"


export const SessionsBoard = ({ title, toolTipText, footer }) => {
    return (
        <PortalBanner 
        title={title}
        toolTipText={toolTipText}
        footer={footer}
        // chart1={<SessionsCard />}
        chart2={<SessionsByLocationLeaderBoard/>}
        />
    );
};