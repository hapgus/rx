import { PortalBanner } from "../../PortalPageComponent/PortalBanner/PortalBanner"

// import { UserByDeviceModelCard } from "./UserByDeviceModelCard";
// import { UserByOSCard } from "./UserByOSCard";
// import { UserByScreenResCard } from "./UserByScreenResCard";

// import { UserByDeviceModelBrandingCard } from "./UserByDeviceModelBrandingCard";
import { LandingPageActivityOverviewTable } from "./LandingPageActivityOverviewTable";
export const LandingPageActivityBoard = () => {

    return (
        <PortalBanner
            title='Landing Page Overview'
            // toolTipText={toolTipText}
            // footer={footer}

            // chart1={<UserByOSCard />}
            // chart2={<UserByScreenResCard />}

            // chart3={<UserByDeviceModelCard/>}
            // chart4={<UserByDeviceModelBrandingCard />}
            // chart4={<UsersByDeviceCategoryPieChart />}
        >
            {/* <UsersByScreenResolutionBarChart/> */}
            <LandingPageActivityOverviewTable/>
          

        </PortalBanner>
    );
}