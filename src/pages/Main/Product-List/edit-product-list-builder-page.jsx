
import { useBuilderHook } from '../../../hooks/builder-hook';
import { useProductsHook } from '../../../hooks/product-hook';

import { PrintScreen } from '../../../components/Print/PrintScreen';
import { useHttpClient } from '../../../hooks/http-hook';
import { EmptyListPage } from './EmptyListPage';
import { ActiveListPage } from './ActiveListPage';
import { useParams, useNavigate } from 'react-router';
import { useAuth } from '../../../hooks/auth-hook';
import { useEffect, useState } from "react";
const EditProductListBuilderPage = () => {
    const { listId } = useParams();
    const { productsInList, productsInListSaved, setProductsInListSaved } = useBuilderHook();
    const { sendRequest } = useHttpClient();
    const { publicProducts } = useProductsHook();


    const { authUserId } = useAuth();


    const [isSavedList, setIsSavedList] = useState([]);

    useEffect(() => {
        if (authUserId) {
            const fetchProductData = async () => {
                try {
                    const response = await sendRequest(`${process.env.REACT_APP_BACKEND_URL}user-list/${listId}`);
                    const listData = await response.responseData.savedList;
                    setIsSavedList(listData)
                  // Debugging: Log each item and its corresponding product
                  const newMatchedProducts = listData.list.map(item => {
                   
                    const matchedProduct = publicProducts.find(product => product._id === item._id);
                    // const matchedProduct = publicProducts.find(product => product._id.toString() === item._id.toString());
                    return matchedProduct || null;  // Ensure to return null if no match found
                });

                setProductsInListSaved(newMatchedProducts);  

              

                } catch (err) {
                    console.error('Error fetching product data:', err);
                }
            };

            fetchProductData();
        }
    }, [authUserId, listId, sendRequest, publicProducts, setProductsInListSaved]);
  console.log(isSavedList)

    if (productsInListSaved.length !== 0) {
        return (
            // <GridSystem>
            <>
                <PrintScreen />
                <ActiveListPage isEditing={true} />
                {/* <PopulatedListScreen /> */}
            </>
            // </GridSystem>
        );
    }
    if (productsInList.length === 0) {
        return (
            // <GridSystem>
            <EmptyListPage />
            // </GridSystem>
        );
    }

}

export default EditProductListBuilderPage;