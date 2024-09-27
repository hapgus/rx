
// import { UpdateProductForm } from '../../components/PortalComponent/PortalFormComponent/UpdateProductForm';
import { UpdateProductForm } from '../../components/PortalComponent/PortalFormComponent/UpdateProduct/UpdateProductForm';
// import { PortalPageHeader, PortalPageWrapper } from '../../components/PortalComponent/PortalPageComponent/PortalPageComponents';
// import { PageText } from '../../components/Text/Text';
import { useParams } from 'react-router-dom';
// import { PRODUCT_DATA } from '../../data/PRODUCT_DATA';
import { PortalPage } from '../../components/PortalComponent/PortalPageComponent/PortalPage/PortalPage';
import { FormWrapper } from '../../components/FormComponent/FormWrapper/FormWrapper';

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