import { PortalBanner } from "../../PortalPageComponent/PortalBanner/PortalBanner"
import { TechnicalOverviewTable } from "./TechnicalOverviewTable";
import { UserByDeviceModelCard } from "./UserByDeviceModelCard";
import { UserByOSCard } from "./UserByOSCard";
import { UserByScreenResCard } from "./UserByScreenResCard";

import { UserByDeviceModelBrandingCard } from "./UserByDeviceModelBrandingCard";
export const TechnicalActivityBoard = ({ title, toolTipText, footer }) => {

    return (
        <PortalBanner
            title='Technical Overview'
            toolTipText={toolTipText}
            footer={footer}

            chart1={<UserByOSCard />}
            chart2={<UserByScreenResCard />}

            chart3={<UserByDeviceModelCard/>}
            chart4={<UserByDeviceModelBrandingCard />}
            // chart4={<UsersByDeviceCategoryPieChart />}
        >
            {/* <UsersByScreenResolutionBarChart/> */}
            <TechnicalOverviewTable />

        </PortalBanner>
    );
}