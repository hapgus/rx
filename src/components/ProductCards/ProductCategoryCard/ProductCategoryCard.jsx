import { PageText } from '../../Text/Text';
import { HashLink } from 'react-router-hash-link';
import styles from './ProductCategoryCard.module.css';


export const ProductCategoryCard = ({
    subcategory,
    hashLinkPath,
    subcategoryImagePath,
    idx
}) => {

    const publicUrl = process.env.PUBLIC_URL;
    return (
        <div key={idx} className={styles.categoryCardContainer}>
            <HashLink to={hashLinkPath}>
                <div className={styles.categoryCardWrapper}>
                   
                    <div className={styles.productCategoryCardImage}>
                        <img src={`${publicUrl}${subcategoryImagePath}`} alt={subcategory} />
                    </div>
                    <PageText type='productCategory'>{subcategory}</PageText>
                </div>
            </HashLink>
        </div>
    );
}

