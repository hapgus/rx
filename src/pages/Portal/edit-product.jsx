import { PortalPage } from '../../components/PortalComponent/PortalPageComponent/PortalPage/PortalPage';
import { UpdateProductForm } from '../../components/PortalComponent/PortalFormComponent/UpdateProduct/UpdateProductForm';
// import { UpdateProductForm } from '../../components/PortalComponent/PortalFormComponent/UpdateProductForm';

import { useParams } from 'react-router-dom';


const EditProductPage = () => {
    const { productId } = useParams();

    return (
        <PortalPage
            pageTitle='Update Product'
            pageDescription='Complete the form below to Update your product'
            breadcrumb='Edit Products'
            breadcrumbDirectory="Products"
        >
            <UpdateProductForm productId={productId} />
        </PortalPage>
    );
}


export default EditProductPage;