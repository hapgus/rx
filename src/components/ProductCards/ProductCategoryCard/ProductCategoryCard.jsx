import { PageText } from '../../Text/Text';
import { HashLink } from 'react-router-hash-link';
import styles from './ProductCategoryCard.module.css';


export const ProductCategoryCard = ({
    subcategory,
    hashLinkPath,
    subcategoryImagePath,

}) => {


    return (
        
        <HashLink to={hashLinkPath}>
            <div className={styles.categoryCardContainer}>

                <div className={styles.imageWrapper}>
                    <img loading='lazy' src={`${process.env.REACT_APP_AWS_URL_IMAGE}/${subcategoryImagePath}`} alt={subcategory} />
                </div>
                <div className={styles.titleWrapper}>
                    <PageText type='productCardTitle'>{subcategory}</PageText>
                </div>

            </div>
        </HashLink>
    );
}

