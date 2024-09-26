import styles from './Specifications.module.css';
// import { ProductText } from '../TextComponent/TextComponent';
import { PageText } from '../../Text/Text';
import { capitalizeFirstLetterEachWord } from '../../../utils/text-help';


export const Specifications = ({ product, print=false }) => {

    function capitalizeFirstLetter(text) {
        text = text.toLowerCase();
        return text.charAt(0).toUpperCase() + text.slice(1);
    }

    const specListStyles = print === true 
    ? {
        ulStyles:styles.printUl,
        liStyles:styles.printLi
    }
    : {
        ulStyles:styles.specListWrapper,
        liStyles:styles.specListItem
    }

    return (

        <>
            <div className={styles.specificationComponentContainer}>
                {
                    product.specTitle1 && product.specList1 &&
                    <div>
                        <PageText type='productPageSpecTitle'>{capitalizeFirstLetterEachWord(product.specTitle1)}</PageText>
                        <ul className={styles.specListWrapper}>{product.specList1.map((e, idx) => (
                            <li className={styles.specListItem} key={idx}>
                                <PageText type='productPageSpecList'>{e}</PageText>
                            </li>
                        ))}
                        </ul>
                    </div>
                }
                {product.specTitle2 && product.specList2 &&
                    <div>
                        <PageText type='productPageSpecTitle'>{capitalizeFirstLetter(product.specTitle2)}</PageText>
                        <ul className={styles.specListWrapper}>{product.specList2.map((e, idx) => (
                            <li className={styles.specListItem} key={idx}>
                                <PageText type='productPageSpecList'>{e}</PageText>
                            </li>
                        ))}
                        </ul>
                    </div>
                }
                {product.specTitle3 && product.specList3 &&
                    <div>
                         <PageText type='productPageSpecTitle'>{capitalizeFirstLetter(product.specTitle3)}</PageText>
                        <ul className={styles.specListWrapper}>{product.specList3.map((e, idx) => (
                            <li className={styles.specListItem} key={idx}>
                                <PageText type='productPageSpecList'>{e}</PageText>
                            </li>
                        ))}
                        </ul>
                    </div>
                }
                {product.specTitle4 && product.specList4 &&
                    <div>
                         <PageText type='productPageSpecTitle'>{capitalizeFirstLetter(product.specTitle4)}</PageText>
                        <ul className={styles.specListWrapper}>{product.specList4.map((e, idx) => (
                            <li className={styles.specListItem} key={idx}>
                               <PageText type='productPageSpecList'>{e}</PageText>
                            </li>
                        ))}
                        </ul>
                    </div>
                }
            </div>
        </>
    );
};