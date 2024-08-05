import styles from './NavSearchPreviewCard.module.css';
import { useBuilderHook } from '../../../hooks/builder-hook';
import { GenerateProductURL } from '../../../utils/link-helper';
import { AddToListButton, RemoveFromListButton } from '../../Button/ProductButtons'


import { NavLink } from 'react-router-dom';
import { PageText } from '../../Text/Text';


export const NavSearchPreviewCard = ({ products }) => {
    const publicUrl = process.env.PUBLIC_URL;

    const { productsInList } = useBuilderHook();


    return (
        products && products.map((product, idx) => {
            const { title, subtitle, image, category } = product;
            const isProductInList = productsInList.some(p => p.title === product.title);
            const productURL = GenerateProductURL(category, title);
            return (
                <div key={idx} className={styles.searchResultsPreviewCardContainer}>
                    <div className={styles.searchResultsPreviewCardImageWrapper}>
                        <img
                            className={styles.searchResultsPreviewCardImage}
                            src={`${publicUrl}/assets/image/products/${image}`}
                            alt={`product ${title}`}
                        />
                    </div>
                    <div className={styles.searchResultsPreviewCardTextWrapper}>
                        <div >

                            <NavLink to={productURL} >
                                <div className={styles.searchResultsPreviewCardText}>

                                    <PageText type='productSearchNavTitle' >{title}</PageText>

                                </div>
                            </NavLink>

                        </div>
                        <PageText type='productSearchNavSubtitle' >
                            <span className={styles.clampedSubtitle}>{subtitle}</span>
                        </PageText>
                    </div>

                    {isProductInList ? (<RemoveFromListButton product={product} />) : (<AddToListButton product={product} />)}

                </div>
            );
        })

    );
};


