
import styles from './ProductImageComponent.module.css';

export const ProductImageComponent = ({ 
    src, 
    alt, 
    className = '', 
    style = {}, 
    // caption = '' 
}) => {
    return (
        <div className={`${styles.imageWrapper} ${className}`} style={style}>
            <img src={src} alt={alt} className={styles.image} loading='lazy' />
            {/* {caption && <p className={styles.caption}>{caption}</p>} */}
        </div>
    );
};
