
import { UpdateProductForm } from '../../components/PortalComponent/PortalFormComponent/UpdateProductForm';
import { PortalPageHeader, PortalPageWrapper } from '../../components/PortalComponent/PortalPageComponent/PortalPageComponents';
import { PageText } from '../../components/Text/Text';
import { useParams } from 'react-router-dom';
import { PRODUCT_DATA } from '../../data/PRODUCT_DATA';

const EditProductPage = () => {
    const { productId } = useParams();

    const data = PRODUCT_DATA.map(e=>e)
    return (
        <div>
            <PortalPageWrapper>
                <PortalPageHeader pageTitle={`Edit Product ${productId && productId}`} pageDescription={`Update text, selections, or media, of product model ${productId}`} />
<UpdateProductForm productId={productId} />

            </PortalPageWrapper>
        </div>
    );
}


export default EditProductPage;