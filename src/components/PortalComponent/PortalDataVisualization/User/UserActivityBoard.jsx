import { PortalBanner } from "../../PortalPageComponent/PortalBanner/PortalBanner"
import { UserOverviewTable } from "./UserOverviewTable";


export const UserActivityBoard = ({ title, toolTipText, footer }) => {

    return (
        <PortalBanner
            title={title}
            toolTipText={toolTipText}
            footer={footer}
            chart1={
                <>

                </>
            }
        >
            <UserOverviewTable />
        </PortalBanner>
    );
}