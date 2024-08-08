import styles from './ApplianceCard.module.css';


import { useBuilderHook } from '../../../hooks/builder-hook';
import { Button } from '../../Button/Button';
import { LinkComponent } from '../../Links/LinkComponent';


import { PageText } from '../../Text/Text';
import { TruncateText } from '../../../utils/text-help';


import { GenerateProductURL } from '../../../utils/link-helper';

import { AddToListButton, RemoveFromListButton } from '../../Button/ProductButtons';
import { ProductImageComponent } from '../../ProductImageComponent/ProductImageComponent';

export const Card = ({ children }) => {
    return <div className={styles.card}>{children}</div>
}

//DYNAMIC ADD/REMOVE BUTTONS/ICONS --DONE
export const ApplianceCard = ({ product }) => {
const publicUrl = process.env.PUBLIC_URL;
    const { title, subtitle, availability, image, category, } = product;
    const configuredProductURL = GenerateProductURL(category, title);
    const productURL = `${publicUrl}${configuredProductURL}`;
    const { productsInList } = useBuilderHook();
    const isProductInList = productsInList.some(p => p.title === product.title);

    return (
        <Card >
            <div key={title} className={styles.productCardContainer}>
                <div className={styles.productCardWrapper}>

                    <ProductImageComponent className={styles.productCardImage} src={`${publicUrl}/assets/image/products/${image}`} alt={`product ${title}`} />

                    <PageText type='productTitle'>{title}</PageText>
                    <PageText type='productSubtitle'>
                        <span className={styles.clampedSubtitle}>{subtitle}</span>
                        {TruncateText(subtitle)}
                    </PageText>
                    <div className={styles.buttonsWrapper}>
                        {isProductInList ? <RemoveFromListButton product={product} /> : <AddToListButton product={product} />}
                      
                            <LinkComponent href={productURL}>
                                <Button buttonStyleType="secondary" buttonTextType="action">
                                    See the details
                                </Button>
                            </LinkComponent>
                       
                    </div>
                </div>
            </div>
        </Card>
    );
}
