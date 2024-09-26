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
import { SearchProductsLeaderBoard } from '../../PortalDataVisualization/SearchEvents/SearchProductsLeaderBoard';
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
                title='Resources Overview'
                row1={
                    <>
                        <ResourceLinkClicksByDateLineChart />
                        <ResourceLinkClicksByLandingPageBarChart />
                        <ResourceLinkClicksByCategoryBarChart />

                        <ResourceLinkClicksByResourceTypeLeaderBoard />
                        <ResourceLinkClicksByUserGeoLocationLeaderBoard />
                        <ResourceLinkClicksByProductLeaderBoard />
                    </>
                }
            />

            <PortalBanner
                title='Print Overview'
                row1={
                    <>
                        <PrintProductListPostActionPieChart />
                        <PrintProductListByUserGeoLocationLeaderBoard />
                        <PrintProductListByDateLineChart />
                        <PrintProductListLeaderBoard />

                    </>
                }
            />
             <PortalBanner
                title='Product Interaction Overview'
                row1={
                    <>
                        <AddToProductListByLandingPageBarChart/>
                        <AddToProductListByLandingPageCategoryBarChart/>
                        <AddToProductListByUserGeoLocationLeaderBoard/>
                        <AddToProductListLeaderBoard/>

                    </>
                }
            />
              <PortalBanner
                title='Product Search Overview'
                row1={
                    <>
                    <SearchEventsByDateAreaChart/>
                    <AddToListSearchEventsByDateAreaChart/>
                    <SelectProductSearchEventsByDateAreaChart/>
                    {/* <SearchTypeAreaChart/> */}
                    <SearchTypePieChart/>
                       
                    </>
                }
                row2Chart1={
                    <>
                          <SearchProductsLeaderBoard/>
                        <SearchQueriesUsedWhenProductSelectedLeaderBoard/>
                        {/* <LandingPageViewsByGeoLocationLeaderBoard limit={10} /> */}
                    </>
                }
                row2Chart2={
                    <>
                         <SearchQueriesUsedWhenAddingProductToListLeaderBoard/>
                         <SearchProductsAddedLeaderBoard/>
                        {/* <LandingPageViewsByGeoLocationLeaderBoard limit={10} /> */}
                    </>
                }

                row3Chart1={
                    <>
                    
                      <SearchQueriesUsedLeaderBoard/>
                      <SelectProductSearchByUserGeoLocationLeaderBoard/>
                    </>
                }
                row3Chart2={
                    <>
                      <SearchQueriesUsedLeaderBoard/>
                      <AddToProductListByUserGeoLocationLeaderBoard/>
                    </>
                }
              
               
            />

            {/* <div>
                
                <LandingPageActivityBoard/>
                <TechnicalActivityBoard/>
              
                <ProductActivityBoard/>
                <PrintActivityBoard/>
                <SearchActivityBoard/>
            </div> */}

        </div>

    );
}
