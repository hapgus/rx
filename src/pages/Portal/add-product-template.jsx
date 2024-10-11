

import { UpdateProductForm } from '../../components/PortalComponent/PortalFormComponent/UpdateProduct/UpdateProductForm';

import { useParams } from 'react-router-dom';

import { PortalPage } from '../../components/PortalComponent/PortalPageComponent/PortalPage/PortalPage';


const AddProductTemplatePage = () => {
    const { productId } = useParams();

    // const data = PRODUCT_DATA.map(e => e)
    return (
        <PortalPage
            pageTitle='Add New Product (Copied)'
            pageDescription='Update the product details in the form below and submit to create a new product'

            breadcrumb='Create Products from Template'
            breadcrumbDirectory="Products"
            breadcrumbDirectoryLink='/portal/product-directory'
        // bodyTitle="Product Management Form"
        >

            <UpdateProductForm productTemplate={true} productId={productId} />

        </PortalPage>

    );
}


export default AddProductTemplatePage;