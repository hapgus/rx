import styles from './PortalDashboard.module.css'



import { PortalDataFilterBar } from '../PortalDataFilter/PortalDataFilterBar';

import { PortalBanner } from '../PortalBanner/PortalBanner';
import { UserByDeviceModelCard } from '../../PortalDataVisualization/Technical/UserByDeviceModelCard';
import { UserByOSCard } from '../../PortalDataVisualization/Technical/UserByOSCard';

import { UserByDeviceModelBrandingCard } from '../../PortalDataVisualization/Technical/UserByDeviceModelBrandingCard';
import { UsersByDeviceCategoryPieChart } from '../../PortalDataVisualization/Technical/UsersByDeviceCategoryPieChart';

import { ResourceLinkClicksByLandingPageBarChart } from '../../PortalDataVisualization/Resource/ResourceLinkClicksByLandingPageBarChart';
import { ResourceLinkClicksByCategoryBarChart } from '../../PortalDataVisualization/Resource/ResourceLinkClicksByCategoryBarChart';

import { ResourceLinkClicksByResourceTypeLeaderBoard } from '../../PortalDataVisualization/Resource/ResourceLinkClicksByResourceTypeLeaderBoard';
import { ResourceLinkClicksByProductLeaderBoard } from '../../PortalDataVisualization/Resource/ResourceLinkClicksByProductLeaderBoard';

import { PrintProductListPostActionPieChart } from '../../PortalDataVisualization/PrintEvents/PrintProductListPostActionPieChart';

import { PrintProductListLeaderBoard } from '../../PortalDataVisualization/PrintEvents/PrintProductListLeaderBoard';


import { SearchTypePieChart } from '../../PortalDataVisualization/SearchEvents/SearchTypePieChart';

import { SearchProductsAddedLeaderBoard } from '../../PortalDataVisualization/SearchEvents/SearchProductsAddedLeaderBoard';
import { SearchProductsSelectedLeaderBoard } from '../../PortalDataVisualization/SearchEvents/SearchProductsSelectedLeaderBoard';

import { SearchEventsByDateAreaChart } from '../../PortalDataVisualization/SearchEvents/SearchEventsByDateAreaChart';
import { AddToListSearchEventsByDateAreaChart } from '../../PortalDataVisualization/SearchEvents/AddToListSearchEventsByDateAreaChart';
import { SelectProductSearchEventsByDateAreaChart } from '../../PortalDataVisualization/SearchEvents/SelectProductSearchEventsByDateAreaChart';

import { SearchQueriesUsedWhenAddingProductToListLeaderBoard } from '../../PortalDataVisualization/SearchEvents/SearchQueriesUsedWhenAddingProductToListLeaderBoard';
import { SearchQueriesUsedWhenProductSelectedLeaderBoard } from '../../PortalDataVisualization/SearchEvents/SearchQueriesUsedWhenProductSelectedLeaderBoard';
import { AddToListProductSearchByLandingPageCategoryBarChart } from '../../PortalDataVisualization/SearchEvents/AddToListProductSearchByLandingPageCategoryBarChart';
import { SelectProductSearchByLandingPageCategoryBarChart } from '../../PortalDataVisualization/SearchEvents/SelectProductSearchByLandingPageCategoryBarChart';
import { AddToListSearchByLandingPageBarChart } from '../../PortalDataVisualization/SearchEvents/AddToListSearchByLandingPageBarChart';
import { SelectProductSearchByLandingPageBarChart } from '../../PortalDataVisualization/SearchEvents/SelectProductsSearchByLandingPageBarChart';
import { ResourceEventsByDateAreaChart } from '../../PortalDataVisualization/Resource/ResourceEventsByDateAreaChart';
import { PrintEventsByDateAreaChart } from '../../PortalDataVisualization/PrintEvents/PrintEventsByDateAreaChart';

export const AnalyticsDashboard = () => {


    return (
        <div>
            <div className={styles.filterWrapper}>
                <PortalDataFilterBar />
            </div>

            <PortalBanner
                title='Product Search Activity'
                row1={
                    <>
                        <SearchEventsByDateAreaChart />
                        <AddToListSearchEventsByDateAreaChart />
                        <SelectProductSearchEventsByDateAreaChart />
                        <SearchTypePieChart />
                    </>
                }
                row2Chart1={
                    <>
                        <SearchProductsAddedLeaderBoard />
                        <SearchQueriesUsedWhenProductSelectedLeaderBoard />
                    </>
                }
                row2Chart2={
                    <>
                        <SearchProductsSelectedLeaderBoard />
                        <SearchQueriesUsedWhenAddingProductToListLeaderBoard />
                    </>
                }
                row3Chart1={
                    <>
                        <AddToListSearchByLandingPageBarChart />
                        <SelectProductSearchByLandingPageBarChart />
                    </>
                }
                row3Chart2={
                    <>
                        <AddToListProductSearchByLandingPageCategoryBarChart />
                        <SelectProductSearchByLandingPageCategoryBarChart />
                    </>
                }
            />
            <PortalBanner
                title='Devices and List Printed'
                row1={
                    <>
                        <UserByDeviceModelCard />
                        <UserByOSCard />
                        {/* <UserByScreenResCard/> */}
                        <UserByDeviceModelBrandingCard />
                        <UsersByDeviceCategoryPieChart />
                    </>
                }
            />
            <PortalBanner
                row2Chart1={
                    <>
                        <PrintProductListLeaderBoard />
                    </>
                }
                row2Chart2={
                    <>
                        <PrintEventsByDateAreaChart />
                        <PrintProductListPostActionPieChart />
                    </>
                }
            />
            <PortalBanner
                title='Product Resource Interactions'
                row1={
                    <>
                        <ResourceEventsByDateAreaChart />
                        <ResourceLinkClicksByLandingPageBarChart />
                        <ResourceLinkClicksByCategoryBarChart />
                    </>
                }
                row2Chart1={
                    <>
                        <ResourceLinkClicksByResourceTypeLeaderBoard />
                    </>
                }
                row2Chart2={
                    <>
                        <ResourceLinkClicksByProductLeaderBoard />
                    </>
                }
            />
        </div>

    );
}
