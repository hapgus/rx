import { PortalBanner } from "../../PortalPageComponent/PortalBanner/PortalBanner"
import { PageActivityOverviewTable } from "./PageActivityOverviewTable";



export const PageActivityBoard = ({ title, toolTipText, footer }) => {

    return (
        <PortalBanner
            title='Page Activity Overview'
            toolTipText={toolTipText}
            footer={footer}
            chart1={
                <>

                </>
            }
        >
          <PageActivityOverviewTable/>
        </PortalBanner>
    );
}