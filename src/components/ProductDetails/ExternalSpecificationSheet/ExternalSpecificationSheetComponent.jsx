
import { ExternalLinkButton } from "../../../utils/link-helper";
import { Qrcode } from "../../Qrcode/Qrcode";
import { PageText } from "../../Text/Text";
import styles from './ExternalSpecificationSheet.module.css';
import { logEvent } from "../../../utils/google-analytics";

export const ExternalSpecificationSheetComponent = ({ product }) => {

    const handleExternalLinkClick = () => {
        logEvent('RESOURCE_CLICKED', {
            productName: product.title,
            productCategory: product.category,
            productSubcategory: product.subcategory,
            destinationUrl: product.specSheetLink, 
            resourceType: 'Spec sheet',
        });
    }

    return (
        <>
            {
                product.specSheetLink &&
                <>
                    <div className={styles.titleContainer}>
                        <PageText type='productPageSection'>External Resources</PageText>
                    </div>
                    <div className={styles.resourceButtonsWrapper}>
                        <div onClick={handleExternalLinkClick}>
                        <ExternalLinkButton linkText={`See ${product.title} Spec Sheet`} href={product.specSheetLink} />
                       </div>
                        <ul>
                            {
                                product.sections.map((e, idx) => (
                                    <>
                                        <li  key={idx}>
                                            <ExternalLinkButton linkText={`See ${e.resourceTitle}`} href={e.resourceUrl} />
                                        </li>
                                        {/* <Qrcode
                                            title={`Scan qrcode ${e.resourceTitle}`}
                                            imageUrl={`${process.env.REACT_APP_AWS_URL}/${e.resourceQrCodeImage}`} /> */}
                                    </>))
                            }
                        </ul>
                    </div>
                </>
            }

        </>
    );
}