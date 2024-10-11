import styles from './RelatedProductCard.module.css';
import { useBuilderHook } from '../../../hooks/use-builder-hooks';
import { Button } from '../../Button/Button';
import { capitalizeFirstLetterEachWord, TruncateText, GenerateProductURL } from '../../../utils/helper-functions';
import { PageText } from '../../Text/Text';

import { AddToListButton, RemoveFromListButton } from '../../Button/ProductButtons';
import { LinkComponent } from '../../Links/LinkComponent';



export const RelatedProductCard = ({ product }) => {
    const publicUrl = process.env.PUBLIC_URL;
    const { title, subtitle, image, category, subcategory } = product;
    // const productURL = GenerateProductURL(category, title);
    const configuredProductURL = GenerateProductURL(category, title);
    const productURL = `${publicUrl}${configuredProductURL}`;
    const { productsInList } = useBuilderHook();
    const isProductInList = productsInList.some(p => p.title === product.title);

    return (
        <div className={styles.relatedProductContainer}>
            <LinkComponent href={productURL}>
                <div className={styles.realtedProductImageWrapper}>
                    <img
                        loading='lazy'
                        className={styles.relatedProductImage} src={`${process.env.REACT_APP_AWS_URL}/${image}`} alt={`product ${title}`} />
                </div>
                <div className={styles.relatedProductTextWrapper}>
                    {/* <ProductText type='relatedProductAvailability'>{CapitalizeFirstLetter(availability)}</ProductText> */}

                    {/* <PageText type='productSearchSubtitle'>{`${capitalizeFirstLetterEachWord(subcategory)}`}</PageText> */}

                   
                    <div className={styles.productText}>
                        <PageText type='productCardTitle'>{`${title} | ${capitalizeFirstLetterEachWord(category)}`}</PageText>
                    </div>
                    <div className={styles.productText}>

                    <PageText type='productCardSubtitle'>
                        <span className={styles.clampedSubtitle}>{subtitle}</span>
                        {TruncateText(subtitle)}
                    </PageText>
                    </div>
                </div>

            </LinkComponent>
            <div className={styles.buttonWrapper}>
                <div>
                    {isProductInList ? (
                        <RemoveFromListButton product={product} />
                    ) : (
                        <AddToListButton product={product} />
                    )}
                </div>
                <LinkComponent href={productURL}>

                    <Button buttonStyleType="secondary" buttonTextType="action">
                        See details
                    </Button>
                </LinkComponent>
            </div>

        </div>
    )
}

