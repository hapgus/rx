
import { ExternalLinkButton } from "../../../utils/link-helper";
import { PageText } from "../../Text/Text";


export const ExternalSpecificationSheetComponent = ({ product }) => {

    return (
        <>
        { 
        product.specSheetLink &&
            <>
           
            <PageText type='productPageSectionText'>Spec Sheet Links</PageText>

            <div>
                <ExternalLinkButton linkText={`See ${product.title} Spec Sheet`} href={product.specSheetLink} />
            </div> 
            </>
        }
           
        </>
    );
}