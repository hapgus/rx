
import { UpdateProductForm } from '../../components/PortalComponent/PortalFormComponent/UpdateProductForm';
import { PortalPageHeader, PortalPageWrapper } from '../../components/PortalComponent/PortalPageComponent/PortalPageComponents';
import { PageText } from '../../components/Text/Text';
import { useParams } from 'react-router-dom';
import { PRODUCT_DATA } from '../../data/PRODUCT_DATA';

const AddProductTemplatePage = () => {
    const { productId } = useParams();

    const data = PRODUCT_DATA.map(e => e)
    return (
        <div>
            <PortalPageWrapper>
                <PortalPageHeader pageTitle={`Product ${productId && productId} Template`} pageDescription={`Use the product template to streamline product creation`} />
                <UpdateProductForm productTemplate={true} productId={productId} />

            </PortalPageWrapper>
        </div>
    );
}


export default AddProductTemplatePage;