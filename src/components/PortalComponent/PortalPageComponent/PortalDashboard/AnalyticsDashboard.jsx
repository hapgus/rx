import styles from './PortalDashboard.module.css'

import { useDataContext } from '../../../../hooks/data-hook';
import { ProductActivityBoard } from '../../PortalDataVisualization/ProductEvents/ProductActivityBoard';
import { EventActivityOverviewTable } from '../../PortalDataVisualization/ProductEvents/ProductActivityOverviewTable';
import { LandingPageActivityBoard } from '../../PortalDataVisualization/LandingPage/LandingPageActivityBoard';
import { PageActivityBoard } from '../../PortalDataVisualization/PageViews/PageActivityBoard';
import { SearchActivityBoard } from '../../PortalDataVisualization/SearchEvents/SearchActivityBoard';
import { TechnicalActivityBoard } from '../../PortalDataVisualization/Technical/TechnicalActivityBoard';

import { PortalDataFilterBar } from '../PortalDataFilter/PortalDataFilterBar';
import { PrintActivityBoard } from '../../PortalDataVisualization/PrintEvents/PrintActivityBoard';
import { PortalBanner } from '../PortalBanner/PortalBanner';
import { UserByDeviceModelCard } from '../../PortalDataVisualization/Technical/UserByDeviceModelCard';
import { UserByOSCard } from '../../PortalDataVisualization/Technical/UserByOSCard';
import { UserByScreenResCard } from '../../PortalDataVisualization/Technical/UserByScreenResCard';
import { UserByDeviceModelBrandingCard } from '../../PortalDataVisualization/Technical/UserByDeviceModelBrandingCard';
import { UsersByDeviceCategoryPieChart } from '../../PortalDataVisualization/Technical/UsersByDeviceCategoryPieChart';
import { TechnicalOverviewTable } from '../../PortalDataVisualization/Technical/TechnicalOverviewTable';
import { ResourceLinkClicksByLandingPageBarChart } from '../../PortalDataVisualization/Resource/ResourceLinkClicksByLandingPageBarChart';
import { ResourceLinkClicksByCategoryBarChart } from '../../PortalDataVisualization/Resource/ResourceLinkClicksByCategoryBarChart';
import { ResourceLinkClicksByUserGeoLocationLeaderBoard } from '../../PortalDataVisualization/Resource/ResourceLinkClicksByUserGeoLocationLeaderBoard';
import { ResourceLinkClicksByResourceTypeLeaderBoard } from '../../PortalDataVisualization/Resource/ResourceLinkClicksByResourceTypeLeaderBoard';
import { ResourceLinkClicksByProductLeaderBoard } from '../../PortalDataVisualization/Resource/ResourceLinkClicksByProductLeaderBoard';
import { ResourceLinkClicksByDateLineChart } from '../../PortalDataVisualization/Resource/ResourceLinkClicksByDateLineChart';
import { PrintProductListByUserGeoLocationLeaderBoard } from '../../PortalDataVisualization/PrintEvents/PrintProductListByUserGeoLocationLeaderBoard';
import { PrintProductListPostActionPieChart } from '../../PortalDataVisualization/PrintEvents/PrintProductListPostActionPieChart';
import { PrintProductListByDateLineChart } from '../../PortalDataVisualization/PrintEvents/PrintProductListByDateLineChart';
import { PrintProductListLeaderBoard } from '../../PortalDataVisualization/PrintEvents/PrintProductListLeaderBoard';
import { AddToProductListByLandingPageBarChart } from '../../PortalDataVisualization/ProductEvents/AddToProductListByLandingPageBarChart';
import { AddToProductListByLandingPageCategoryBarChart } from '../../PortalDataVisualization/ProductEvents/AddToProductListByLandingPageCategoryBarChart';
import { AddToProductListByUserGeoLocationLeaderBoard } from '../../PortalDataVisualization/ProductEvents/AddToProductListByUserGeoLocationLeaderBoard';
import { AddToProductListLeaderBoard } from '../../PortalDataVisualization/ProductEvents/AddToProductListLeaderBoard';
import { SearchByDateLineChart } from '../../PortalDataVisualization/SearchEvents/SearchByDateLineChart';
import { SearchByLandingPageBarChart } from '../../PortalDataVisualization/SearchEvents/SearchByLandingPageBarChart';
import { SearchByLandingPageCategoryBarChart } from '../../PortalDataVisualization/SearchEvents/SearchByLandingPageCategoryBarChart';
import { SearchByUserGeoLocationLeaderBoard } from '../../PortalDataVisualization/SearchEvents/SearchByUserGeoLocationLeaderBoard';

import { SearchTypePieChart } from '../../PortalDataVisualization/SearchEvents/SearchTypePieChart';
// import { SearchQueriesLeaderBoard } from '../../PortalDataVisualization/SearchEvents/SearchQueriesLeaderBoard';
import { ProductsAddedFromSearchCard } from '../../PortalDataVisualization/SearchEvents/ProductsAddedFromSearchCard';
import { SearchByEventTypeBarChart } from '../../PortalDataVisualization/SearchEvents/SearchByEventTypeBarChart';
import { SearchProductsAddedLeaderBoard } from '../../PortalDataVisualization/SearchEvents/SearchProductsAddedLeaderBoard';
import { SearchProductsSelectedLeaderBoard } from '../../PortalDataVisualization/SearchEvents/SearchProductsSelectedLeaderBoard';
import { SearchQueriesUsedLeaderBoard } from '../../PortalDataVisualization/SearchEvents/SearchQueriesUsedLeaderBoard';
import { SearchEventsByDateAreaChart } from '../../PortalDataVisualization/SearchEvents/SearchEventsByDateAreaChart';
import { AddToListSearchEventsByDateAreaChart } from '../../PortalDataVisualization/SearchEvents/AddToListSearchEventsByDateAreaChart';
import { SelectProductSearchEventsByDateAreaChart } from '../../PortalDataVisualization/SearchEvents/SelectProductSearchEventsByDateAreaChart';
import { SearchTypeAreaChart } from '../../PortalDataVisualization/SearchEvents/SearchTypeAreaChart';
import { SelectProductSearchByUserGeoLocationLeaderBoard } from '../../PortalDataVisualization/SearchEvents/SelectProductSearchByUserGeoLocationLeaderBoard';
import { SearchQueriesUsedWhenAddingProductToListLeaderBoard } from '../../PortalDataVisualization/SearchEvents/SearchQueriesUsedWhenAddingProductToListLeaderBoard';
import { SearchQueriesUsedWhenProductSelectedLeaderBoard } from '../../PortalDataVisualization/SearchEvents/SearchQueriesUsedWhenProductSelectedLeaderBoard';
import { AddToListProductSearchByLandingPageCategoryBarChart } from '../../PortalDataVisualization/SearchEvents/AddToListProductSearchByLandingPageCategoryBarChart';
import { SelectProductSearchByLandingPageCategoryBarChart } from '../../PortalDataVisualization/SearchEvents/SelectProductSearchByLandingPageCategoryBarChart';
import { AddToListSearchByLandingPageBarChart } from '../../PortalDataVisualization/SearchEvents/AddToListSearchByLandingPageBarChart';
import { SelectProductSearchByLandingPageBarChart } from '../../PortalDataVisualization/SearchEvents/SelectProductsSearchByLandingPageBarChart';
import { ResourceEventsByDateAreaChart } from '../../PortalDataVisualization/Resource/ResourceEventsByDateAreaChart';
import { PrintEventsByDateAreaChart } from '../../PortalDataVisualization/PrintEvents/PrintEventsByDateAreaChart';

export const AnalyticsDashboard = () => {
    const { isDateRangeState, isDataState } = useDataContext();
    console.log('date range analytics', isDateRangeState);
    console.log('data state analytics', isDataState);


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

            {/* <PortalBanner
                title='Product Interaction Overview'
                row1={
                    <>
                        <AddToProductListByLandingPageBarChart />
                        <AddToProductListByLandingPageCategoryBarChart />
                        <AddToProductListByUserGeoLocationLeaderBoard />
                        <AddToProductListLeaderBoard />
                    </>
                }
            /> */}
        </div>

    );
}
