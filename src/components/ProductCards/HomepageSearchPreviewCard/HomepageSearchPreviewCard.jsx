import styles from './HomepageSearchPreviewCard.module.css';
import { useBuilderHook } from '../../../hooks/builder-hook';


import { capitalizeFirstLetterEachWord } from '../../../utils/text-help';
import { PageText } from '../../Text/Text';
import { GenerateProductURL } from '../../../utils/link-helper';

import { AddToListButton, RemoveFromListButton } from '../../Button/ProductButtons';
import { NavLink } from 'react-router-dom';
import { LinkComponent } from '../../Links/LinkComponent';




export const HomepageSearchPreviewCard = ({ products }) => {
    const publicUrl = process.env.PUBLIC_URL;
    const { productsInList } = useBuilderHook();

    return (
        products && products.map((product, idx) => {
            const { title, subtitle, image, category } = product;
            const isProductInList = productsInList.some(p => p.title === product.title);
            const configuredProductURL = GenerateProductURL(category, title);
            const productURL = `${publicUrl}${configuredProductURL}`;

            return (
                < div key={idx} className={styles.searchResultsPreviewCardContainer} >
                    <div className={styles.searchResultsPreviewCardImageWrapper}>
                        <img 
                        loading='lazy'
                        className={styles.searchResultsPreviewCardImage} 
                        src={`${publicUrl}/assets/image/products/${image}`} 
                        alt={`product ${title}`} 
                        />
                    </div>
                    <div className={styles.searchResultsPreviewCardTextWrapper}>
                        <div >
                            <LinkComponent href={productURL}>
                            
                                {/* <NavigationLink href={productURL}> */}
                                <div className={styles.searchResultsPreviewCardText}>
                                    <PageText type='productSearchTitle' >{capitalizeFirstLetterEachWord(category)}</PageText>
                                    <PageText type='productSearchTitle'>| {title}</PageText>
                                    {/* <NakedIcon iconType='rightChevron' /> */}
                                </div>
                                {/* </NavigationLink> */}
                          
                            </LinkComponent>
                        </div>
                        <PageText type='productSearchSubtitle' >
                            <span className={styles.clampedSubtitle}>{subtitle}</span>
                        </PageText>
                    </div>
                    {isProductInList ? (<RemoveFromListButton product={product} />) : (<AddToListButton product={product} />)}
                </div >
            )
        })

    );
};
