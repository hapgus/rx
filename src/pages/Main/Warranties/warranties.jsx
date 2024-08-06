import styles from './warranties.module.css'

import { WARRANTY_DATA } from '../../../data/STATIC_DATA';
import { PageText } from '../../../components/Text/Text';
import { GridSystem } from '../../../components/GridSystem/GridSystem';



const WarrantiesPage = () => {

    return (
        <div className={styles.warrantiesPageContainer}>

            <div className={styles.pageHeaderContainer}>
                <GridSystem>
                    <PageText type="pageSubtitle">Resources</PageText>
                    <PageText type="pageTitle">Limited Warrantiess</PageText>
                    <PageText type="bodyDescription">LG is committed to making sure that each of our products perform at the highest level for years to come. We are constantly innovating to make sure our customers can purchase with confidence, and pride ourselves in creating the most reliable appliances on the market</PageText>
                </GridSystem>

            </div>
            <GridSystem containerBackgroundColor='#E6E1D6'>
                <div className={styles.bodySection}>
                    {WARRANTY_DATA.map((warranties, idx) => {

                        return (
                            <div key={idx} className={styles.warrantyCard}>
                                <div className={styles.warrantyCardTitle}>
                                    <PageText type='bodyTertiaryTitle'>{warranties.warranty_category}</PageText>
                                </div>

                                <ul className={styles.warrantyItemListWrapper}> {warranties.description.map((list, idx) => {
                                    return <li className={styles.warrantyItem} key={idx}>
                                        <PageText type='bodyDescription'>{list}</PageText>

                                    </li>;
                                })}</ul>

                            </div>
                        );
                    })}
                </div>
            </GridSystem>



        </div>



    );
}
export default WarrantiesPage;