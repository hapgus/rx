import styles from './UpcCode.module.css';

import { PageText } from '../../Text/Text';

export const UpcCode = ({ upc }) => {

    return (
        <>
            {
                upc ?
                    <>
                        <PageText type='productPageSectionText'>UPC Codes</PageText>
                        <ul className={styles.upcListWrapper}>
                            {upc.map((e, idx) => (<li className={styles.upcListItem} key={idx}>
                                <PageText type='productPageSpecListText'>{e}</PageText>

                            </li>))}
                        </ul>
                    </>

                    : null
            }
        </>
    );
}

