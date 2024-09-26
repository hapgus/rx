import { PortalBanner } from "../../PortalPageComponent/PortalBanner/PortalBanner"

import { SearchActivityOverviewTable } from "./SearchActivityOverviewTable";


export const SearchActivityBoard = () => {

    return (
        <PortalBanner
            title='Search Events Overview'
            // toolTipText={toolTipText}
            // footer={footer}

            // chart1={<UserByOSCard />}
            // chart2={<UserByScreenResCard />}

            // chart3={<UserByDeviceModelCard/>}
            // chart4={<UserByDeviceModelBrandingCard />}
            // chart4={<UsersByDeviceCategoryPieChart />}
        >
            {/* <UsersByScreenResolutionBarChart/> */}
          
            <SearchActivityOverviewTable/>
          

        </PortalBanner>
    );
}