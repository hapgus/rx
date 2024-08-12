import { PageText } from '../../Text/Text';
import { HashLink } from 'react-router-hash-link';
import styles from './ProductCategoryCard.module.css';


export const ProductCategoryCard = ({
    subcategory,
    hashLinkPath,
    subcategoryImagePath,

}) => {

    const publicUrl = process.env.PUBLIC_URL;
    return (
        <HashLink to={hashLinkPath}>
            <div className={styles.categoryCardContainer}>

                <div className={styles.imageWrapper}>
                    <img loading='lazy' src={`${publicUrl}${subcategoryImagePath}`} alt={subcategory} />
                </div>
                <div className={styles.titleWrapper}>
                    <PageText type='pageTertiaryTitle'>{subcategory}</PageText>
                </div>

            </div>
        </HashLink>
    );
}

