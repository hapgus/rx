import styles from './appliance.module.css';
import { useParams } from 'react-router-dom';

import { MobileAppliancePage } from './mobile-appliance.jsx';
import { DesktopAppliancePage } from './desktop-appliance.jsx';
import { useProductsHook } from '../../../hooks/product-hook.js';
import NotFoundPage from '../Error/not-found.jsx';

const AppliancePage = () => {
  // const { productId } = useParams();
  const { productId, categoryId } = useParams();
  const { publicProducts } = useProductsHook();

  // 404 LOGIC NEEDS TWEAKING
  // // Fetch the product based on the categoryId and productId
  // const product = publicProducts.find(
  //   prod => prod.category === categoryId && prod.title === productId
  // );


  // // If the product doesn't exist, render the 404 page
  // if (!product) {
  //   return <NotFoundPage />;
  // }

  return (
    <>
      <div className={styles.mobileAppliancePageContainer}>
        <MobileAppliancePage productId={productId} />
      </div>
      <div className={styles.desktopAppliancePageContainer}>
        <DesktopAppliancePage productId={productId} />
      </div>
    </>
  );
}

export default AppliancePage;