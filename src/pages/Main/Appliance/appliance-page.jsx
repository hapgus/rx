import styles from './appliance.module.css';
import { useParams } from 'react-router-dom';

import { MobileAppliancePage } from './mobile/mobile-appliance.jsx';
import { DesktopAppliancePage } from './desktop/desktop-appliance.jsx';
import { useProductsHook } from '../../../hooks/use-product-hooks.js';
import NotFoundPage from '../Error/not-found.jsx';
import { NormalizeSlugs } from '../../../utils/helper-functions.js';
import { AppliancePageSkeletonComponent } from './AppliancePageSkeleton.jsx';
import { useEffect, useState } from 'react';

const AppliancePage = () => {
  // const { productId } = useParams();
  const { productId, categoryId } = useParams();
  const { publicProducts } = useProductsHook();
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Check immediately if the product exists
    const foundProduct = publicProducts.find(
      prod => NormalizeSlugs(prod.category) === categoryId && prod.title === productId
    );
    if (foundProduct) {
      setProduct(foundProduct);
      setIsLoading(false);
    } else {
      // If not found initially, set a timer to check again after 2 seconds
      const timer = setTimeout(() => {
        setIsLoading(false); // Stop loading after 2 seconds
      }, 2000);

      return () => clearTimeout(timer); // Cleanup timer on unmount
    }
  }, [publicProducts, categoryId, productId]);

  // While loading, render the skeleton component
  if (isLoading) {
    return <AppliancePageSkeletonComponent />;
  }

  // If the product was found, render the appropriate page
  if (product) {
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

  // If loading finished and no product was found, render the 404 page
  return <NotFoundPage />;
};

export default AppliancePage;