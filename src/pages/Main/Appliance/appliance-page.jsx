import styles from './appliance.module.css';
import { useParams } from 'react-router-dom';

import { MobileAppliancePage } from './mobile-appliance.jsx';
import { DesktopAppliancePage } from './desktop-appliance.jsx';
import { useProductsHook } from '../../../hooks/product-hook.js';
import NotFoundPage from '../Error/not-found.jsx';
import { NormalizeSlugs } from '../../../utils/link-helper.js';

const AppliancePage = () => {
  // const { productId } = useParams();
  const { productId, categoryId } = useParams();
  const { publicProducts } = useProductsHook();

  // 404 LOGIC NEEDS TWEAKING

  const product = publicProducts.find(
    prod => NormalizeSlugs(prod.category) === categoryId && prod.title === productId
  );
  // If the product doesn't exist, render the 404 page
  if (!product) {
    return <NotFoundPage />;
  }

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