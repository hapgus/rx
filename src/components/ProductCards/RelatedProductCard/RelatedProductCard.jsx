import styles from './RelatedProductCard.module.css';


import { useBuilderHook } from '../../../hooks/builder-hook';
import { Button } from '../../Button/Button';
// import { NavigationLink } from "../../NavigationComponent/NavigationLink";

import { capitalizeFirstLetterEachWord, TruncateText } from '../../../utils/text-help';
import { PageText } from '../../Text/Text';


import { GenerateProductURL } from '../../../utils/link-helper';

import { AddToListButton, RemoveFromListButton } from '../../Button/ProductButtons';


import { NavLink } from 'react-router-dom';
import { LinkComponent } from '../../Links/LinkComponent';



export const RelatedProductCard = ({ product }) => {
    const publicUrl = process.env.PUBLIC_URL;
    const { title, subtitle, availability, image, category, subcategory } = product;
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
                        className={styles.relatedProductImage} src={`${publicUrl}/assets/image/products/${image}`} alt={`product ${title}`} />
                </div>
                <div className={styles.realtedProductTextWrapper}>
                    {/* <ProductText type='relatedProductAvailability'>{CapitalizeFirstLetter(availability)}</ProductText> */}
                    <PageText type='productSearchSubtitle'>{`${capitalizeFirstLetterEachWord(subcategory)}`}</PageText>

                    <PageText type='productSearchTitle'>{`${capitalizeFirstLetterEachWord(category)} | ${title} `}</PageText>

                    <PageText type='productSearchSubtitle'>
                        <span className={styles.clampedSubtitle}>{subtitle}</span>
                        {TruncateText(subtitle)}
                    </PageText>
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

