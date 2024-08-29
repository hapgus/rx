import { useBuilderHook } from "../../hooks/builder-hook";
import styles from './PrintScreen.module.css';
import { PageText } from "../Text/Text";

export const PrintScreen = () => {
    const publicUrl = process.env.PUBLIC_URL;
    const { productsInList } = useBuilderHook();

    if (productsInList) {
        return (
            <div className={styles.printScreenContainer}>
                {/* <div className={styles.printScreenCoverWrapper}>
                    <div className={styles.cover}>
                        <div className={styles.header}>
                            <div className={styles.headerContent}>
                                <PageText type="coverTitle">Product Guide Exclusive</PageText>
                                <PageText type="pageTertiaryTitle">LG Home Appliance Product List</PageText>

                            
                            </div>
                        </div>
                        <div className={styles.footer}>
                            <div className={styles.footerContent}>
                                <PageText type="pageTertiaryTitle"></PageText>
                                <div className={styles.logoWrapper}>
                                    <img src={`${publicUrl}/assets/image/logos/lg-logo.webp`} alt="LG Logo" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                <section className={`${styles.productContent} ${styles.pageBreakBefore}`}>
                    {productsInList.map((p, idx) => (
                        <div key={idx}>
                            <div>
                                <PageText type="pageHeaderTitle">{p.title}</PageText>
                                <PageText type="pageHeaderSubtitle">{p.subtitle}</PageText>
                            </div>
                            <div>
                                <img src={`${process.env.REACT_APP_AWS_URL_IMAGE}/${p.image}`} alt="LG Logo" />
                            </div>
                        </div>
                    ))}
                </section>
            </div>

        );
    }
}
