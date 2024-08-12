import styles from './appliance.module.css';
import { useParams } from 'react-router-dom';

import { MobileAppliancePage } from './mobile-appliance.jsx';
import { DesktopAppliancePage } from './desktop-appliance.jsx';

const AppliancePage = () => {
  const { productId } = useParams();
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