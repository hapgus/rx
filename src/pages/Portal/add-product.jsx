

import { FormWrapper } from '../../components/FormComponent/FormWrapper/FormWrapper';
import { CreateProductForm } from '../../components/PortalComponent/PortalFormComponent/CreateProductForm';
import { PortalPage } from '../../components/PortalComponent/PortalPageComponent/PortalPage/PortalPage';


const AddProductPage = () => {
    return (
        <PortalPage
            pageTitle='Create Products'
            pageDescription='Complete the form below to Create and add products to the product guide'
            breadcrumb='Create Products'
            breadcrumbDirectory="Products"
            bodyTitle="Product Management Form"
        >
            <FormWrapper>
                <CreateProductForm />
            </FormWrapper>
        </PortalPage>


    );
}


export default AddProductPage;