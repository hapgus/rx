import { PortalPage } from '../../components/PortalComponent/PortalPageComponent/PortalPage/PortalPage';
import { UpdateProductForm } from '../../components/PortalComponent/PortalFormComponent/UpdateProductForm';
import { FormWrapper } from '../../components/FormComponent/FormWrapper/FormWrapper';
import { useParams } from 'react-router-dom';


const EditProductPage = () => {
    const { productId } = useParams();

 
    return (
        <PortalPage
            pageTitle='Update Product'
            pageDescription='Complete the form below to Update your product'
           
            breadcrumb='Edit Products'
            breadcrumbDirectory="Products"
            bodyTitle="Product Management Form"
        >
            <FormWrapper>
                <UpdateProductForm productId={productId} />
            </FormWrapper>
        </PortalPage>

    );
}


export default EditProductPage;