

import { PortalPage } from '../../components/PortalComponent/PortalPageComponent/PortalPage/PortalPage';
import { CreateProductForm } from '../../components/PortalComponent/PortalFormComponent/CreateProduct/CreateProductForm';

const AddProductPage = () => {
    return (
        <PortalPage
            pageTitle='Create Products'
            pageDescription='Complete the form below to add a product'
            breadcrumb='Create Products'
            breadcrumbDirectory="Products"
              breadcrumbDirectoryLink='/portal/product-directory'
            // bodyTitle="Product Management Form"
        >

         
            {/* <FormWrapper> */}
                <CreateProductForm />
            {/* </FormWrapper> */}
        </PortalPage>
    );
}


export default AddProductPage;