


import { ExternalLinkButton } from "../../Button/ExternalLinkButton";
import { PageText } from "../../Text/Text";
import styles from './ExternalSpecificationSheet.module.css';
import { logEvent } from "../../../utils/google-analytics";

export const ExternalSpecificationSheetComponent = ({ product }) => {

    const handleExternalLinkClick = (url, title) => {
        logEvent('RESOURCE_CLICKED', {
            productName: product.title,
            productCategory: product.category,
            productSubcategory: product.subcategory,
            destinationUrl: url, 
            resourceType: title,
        });
    }
   
    // Add specSheetLink as the first item in the sections array
    const resources = [
        { resourceTitle: `${product.title} Spec Sheet`, resourceUrl: product.specSheetLink },
        ...product.sections,
    ];

    return (
        <>
            {
                product.specSheetLink &&
                <>
                    <div className={styles.titleContainer}>
                        <PageText type='bodyTitle'>External Resources</PageText>
                    </div>
                    <div className={styles.resourceButtonsWrapper}>


                        {/* <div onClick={handleExternalLinkClick}> */}
                            {resources.map((e, idx) => (
                                <span key={idx} onClick={() => handleExternalLinkClick(e.resourceUrl, e.resourceTitle)}>
                                    <ExternalLinkButton linkText={`${e.resourceTitle}`} href={e.resourceUrl} />
                                </span>
                            ))}
                            {/* <ExternalLinkButton linkText={`See ${product.title} Spec Sheet`} href={product.specSheetLink} /> */}
                        {/* </div> */}
                        {/* <ul>
                            {
                                product.sections.map((e, idx) => (
                                    <>
                                        <li key={idx}>
                                            <ExternalLinkButton linkText={`See ${e.resourceTitle}`} href={e.resourceUrl} />
                                        </li>
                                        
                                    </>))
                            }
                        </ul> */}
                    </div>
                </>
            }

        </>
    );
}