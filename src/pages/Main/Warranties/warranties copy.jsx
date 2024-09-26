import styles from './warranties.module.css'

import { WARRANTY_DATA } from '../../../data/STATIC_DATA';
import { PageText } from '../../../components/Text/Text';
import { GridSystem } from '../../../components/GridSystem/GridSystem';



const WarrantiesPage = () => {
    const publicUrl = process.env.PUBLIC_URL
    return (
        <div className={styles.warrantiesPageContainer}>

            <div className={styles.pageHeaderContainer}>
                <GridSystem gridType="spread" >
                    <div className={styles.contentWrapper}>
                        <div className={styles.heroGridContainer}>
                            <div className={styles.heroGridWrapper}>
                                <div className={styles.gridItem1}>
                                    <div className={styles.subtitle}>
                                        <PageText type="pageSubtitle">Resources</PageText>
                                    </div>
                                    <div className={styles.title}>
                                    <PageText type="pageTitle">Limited Warranties</PageText>
                                    </div>
                                    <div className={styles.description}>
                                        <div className={styles.shortDescription}>
                                            <PageText type="bodySubtitle">LG is committed to making sure that each of our products perform at the highest level for years to come.  </PageText>
                                        </div>
                                        <div className={styles.longDescription}>
                                        <PageText type="bodySubtitle">LG is committed to making sure that each of our products perform at the highest level for years to come. We are constantly innovating to make sure our customers can purchase with confidence, and pride ourselves in creating the most reliable appliances on the market.</PageText>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.gridItem2}>
                                    <div className={styles.gridItem2Image}>
                                        <img alt="lg dad and son" src={`/assets/image/backgrounds/resources/lg-dad-shape.webp`} />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </GridSystem>
            </div>
          
            <GridSystem gridType="spread" containerBackgroundColor='#E6E1D6'>
                <div className={styles.contentWrapper}>
                    <div className={styles.bodySection}>
                        {WARRANTY_DATA.map((warranties, idx) => {

                            return (
                                <div key={idx} className={styles.warrantyCard}>
                                    <div className={styles.warrantyCardTitle}>
                                        <PageText type='bodySubtitleBold'>{warranties.warranty_category}</PageText>
                                    </div>

                                    <ul className={styles.warrantyItemListWrapper}> {warranties.description.map((list, idx) => {
                                        return <li className={styles.warrantyItem} key={idx}>
                                            <PageText type='bodyDescriptionLarge'>{list}</PageText>

                                        </li>;
                                    })}</ul>

                                </div>
                            );
                        })}
                    </div>
                </div>
            </GridSystem>



        </div>



    );
}
export default WarrantiesPage;