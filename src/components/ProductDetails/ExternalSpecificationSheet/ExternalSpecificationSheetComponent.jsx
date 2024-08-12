
import { ExternalLinkButton } from "../../../utils/link-helper";
import { PageText } from "../../Text/Text";
import styles from './ExternalSpecificationSheet.module.css'

export const ExternalSpecificationSheetComponent = ({ product }) => {

    return (
        <>
            {
                product.specSheetLink &&
                <>
                    <div className={styles.titleContainer}>
                        <PageText type='productPageSection'>External Resources</PageText>
                    </div>
                    <div>
                        <ExternalLinkButton linkText={`See ${product.title} Spec Sheet`} href={product.specSheetLink} />
                    </div>
                </>
            }

        </>
    );
}