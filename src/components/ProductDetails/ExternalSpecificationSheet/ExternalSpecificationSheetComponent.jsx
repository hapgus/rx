
import { ExternalLinkButton } from "../../../utils/link-helper";
import { Qrcode } from "../../Qrcode/Qrcode";
import { PageText } from "../../Text/Text";
import styles from './ExternalSpecificationSheet.module.css'

export const ExternalSpecificationSheetComponent = ({ product }) => {
    console.log(product)

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
                        <ul>
                            {
                                product.sections.map((e, idx) => (
                                    <>
                                        <li key={idx}><ExternalLinkButton linkText={`See ${e.resourceTitle}`} href={e.resourceUrl} /></li>
                                        <Qrcode
                                            title={`Scan qrcode ${e.resourceTitle}`}
                                            imageUrl={`${process.env.REACT_APP_AWS_URL}/${e.resourceQrCodeImage}`} />
                                    </>))
                            }
                        </ul>
                    </div>
                </>
            }

        </>
    );
}