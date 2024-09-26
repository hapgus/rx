import { PortalBanner } from "../../PortalPageComponent/PortalBanner/PortalBanner"
import { ProductActivityOverviewTable } from "./ProductActivityOverviewTable";


export const ProductActivityBoard = () => {

    return (
        <PortalBanner
            title='Product Events Overview'
            // toolTipText={toolTipText}
            // footer={footer}

            // chart1={<UserByOSCard />}
            // chart2={<UserByScreenResCard />}

            // chart3={<UserByDeviceModelCard/>}
            // chart4={<UserByDeviceModelBrandingCard />}
            // chart4={<UsersByDeviceCategoryPieChart />}
        >
            {/* <UsersByScreenResolutionBarChart/> */}
          
    
          <ProductActivityOverviewTable/>

        </PortalBanner>
    );
}