

import { PortalPageBody, PortalPageWrapper } from "../../components/PortalComponent/PortalPageComponent/PortalPageComponents";

import { ProductDirectoryTable } from "../../components/PortalComponent/PortalTableComponent/ProductDirectoryTable";
const ProductDirectoryPage = () => {

    return (
        <PortalPageWrapper 
         pageTitle='Product Table' pageDescription='See all products'
        >
        
            <PortalPageBody>
                <ProductDirectoryTable />

            </PortalPageBody>

        </PortalPageWrapper>
    );
}

export default ProductDirectoryPage;