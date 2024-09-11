
import { PortalBanner } from "../../PortalPageComponent/PortalBanner/PortalBanner"
import { SessionsCard } from "../SessionsCard"
import { ResourceLinkClicksByCategoryBarChart } from "./ResourceLinkClicksByCategoryBarChart";
import { ResourceLinkClicksByDateLineChart } from "./ResourceLinkClicksByDateLineChart";
import { ResourceLinkClicksByUserGeoLocationLeaderBoard } from "./ResourceLinkClicksByUserGeoLocationLeaderBoard";

import { ResourceLinkClicksByProductLeaderBoard } from "./ResourceLinkClicksByProductLeaderBoard"
import { ResourceLinkClicksByResourceTypeLeaderBoard } from "./ResourceLinkClicksByResourceTypeLeaderBoard";


export const ResourceActivityBoard = ({ title, toolTipText, footer }) => {
    return (
        <PortalBanner
            title={title}
            toolTipText={toolTipText}
            // chart1={<SessionsCard />}
            chart2={
                <>
                    <ResourceLinkClicksByProductLeaderBoard />
                    <ResourceLinkClicksByDateLineChart />
                    <ResourceLinkClicksByCategoryBarChart/>
                    <ResourceLinkClicksByUserGeoLocationLeaderBoard/>
                    <ResourceLinkClicksByResourceTypeLeaderBoard/>
                </>

            }
            footer={footer}
        />
    );
};