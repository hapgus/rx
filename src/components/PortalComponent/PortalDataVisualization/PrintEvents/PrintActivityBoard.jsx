import { PortalBanner } from "../../PortalPageComponent/PortalBanner/PortalBanner"
import { PrintActivityOverviewTable } from "./PrintActivityOverviewTable";


export const PrintActivityBoard = () => {

    return (
        <PortalBanner
            title='Print Events Overview'
            // toolTipText={toolTipText}
            // footer={footer}

            // chart1={<UserByOSCard />}
            // chart2={<UserByScreenResCard />}

            // chart3={<UserByDeviceModelCard/>}
            // chart4={<UserByDeviceModelBrandingCard />}
            // chart4={<UsersByDeviceCategoryPieChart />}
        >
            {/* <UsersByScreenResolutionBarChart/> */}
          
    
          <PrintActivityOverviewTable/>

        </PortalBanner>
    );
}