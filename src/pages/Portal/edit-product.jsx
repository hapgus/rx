
import { PageText } from '../../components/Text/Text';
import { useParams } from 'react-router-dom';


const EditProductPage = () => {
    const { productId } = useParams();
    return (
        <div>
            <PageText type='pageHeaderTitle'>Edit Product {productId && productId}</PageText>
            <PageText type='pageHeaderDescription'>Update and re publish products to the product guide</PageText>
        </div>
    );
}


export default EditProductPage;