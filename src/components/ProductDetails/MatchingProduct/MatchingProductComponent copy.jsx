
import { RelatedProductCard } from "../../ProductCards/RelatedProductCard/RelatedProductCard";
export const MatchingProductComponent = ({ product }) => {

    return (
        <>
            {
                product ?
                    <>
                    <div>
                        {/* <ProductText type='productPageSectionText'>Related Appliances</ProductText> */}
                        {product.map((p, idx) => (
                            <RelatedProductCard key={idx} product={p} />
                        ))}
                        </div>
                    </>
                    : null
            }
        </>
    );
}