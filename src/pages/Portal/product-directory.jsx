import { PortalPage } from "../../components/PortalComponent/PortalPageComponent/PortalPage/PortalPage";

import { PortalPageBody, PortalPageWrapper } from "../../components/PortalComponent/PortalPageComponent/PortalPageComponents";

import { ProductDirectoryTable } from "../../components/PortalComponent/PortalTableComponent/ProductDirectoryTable";
const ProductDirectoryPage = () => {

    return (
        <PortalPage
            pageTitle='Product Directory'
            pageDescription='All home appliance featured on the product guide websites'

            breadcrumb='Product Directory'
            breadcrumbDirectory="Products"
            breadcrumbDirectoryLink="/portal/product-directory"
            breadcrumbLink="/portal/product-directory"
            // bodyTitle='Product Management Table'
        >
            <ProductDirectoryTable />
        </PortalPage>

    );
}

export default ProductDirectoryPage;