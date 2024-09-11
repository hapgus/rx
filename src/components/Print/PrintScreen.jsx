import { useBuilderHook } from "../../hooks/builder-hook";
import styles from './PrintScreen.module.css';
import { PageText } from "../Text/Text";
import { Specifications } from "../ProductDetails/Specifications/Specifications";
import { TechnologyLogo } from "../ProductDetails/Technology/TechnologyLogo";
import { Qrcode } from "../Qrcode/Qrcode";

export const PrintScreen = () => {
    // const publicUrl = process.env.PUBLIC_URL;
    const { productsInList } = useBuilderHook();
  
    if (productsInList) {
        return (
            <div className={styles.printScreenPage} >
                <div className={styles.printScreenCoverContainer}>
                    <div className={styles.printScreenCoverWrapper}>
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
                                    <img src={`/assets/image/logos/lg-logo.webp`} alt="LG Logo" />
                                </div>
                            </div>
                            <div className={styles.legalTextWrapper}>
                                <p className={styles.legalText}>Design, features and specifications are subject to change without notice.
                                    © 2024 LG Electronics USA, Inc. All rights reserved. "LG Life's Good" is a registered trademark of LG Corp. All other product and brand names are trademarks or registered trademarks of their respective
                                    companies.
                                </p>
                            </div>
                        </div>

                    </div>

                </div>
                <div className={styles.printScreenBodyContainer}>
                    {productsInList.map((p, idx) => (
                        <div key={idx} className={styles.productPage}>
                            <div className={styles.productHeaderText}>
                                <PageText type="pageTitle">{p.title}</PageText>
                                <PageText type="pageSubtitle">{p.subtitle}</PageText>
                            </div>
                            <div className={styles.productImage}>
                                <img src={`${process.env.REACT_APP_AWS_URL}/${p.image}`} alt="LG Logo" />
                            </div>
                            <div className={styles.productSpecs}>
                                <Specifications product={p} />
                            </div>
                            {
                                p.specSheetQrcode &&
                                <div className={styles.productQrcodes}>
                                    <Qrcode title='Scan Spec Sheet QR Code' imageUrl={`${process.env.REACT_APP_AWS_URL}/${p.resourceQrCodeImage}`} />
                                    
                                </div>
                            }
                            {
                                p.sections.length !== 0 && p.sections.resourceQrCodeImage !== '' ?
                                    <div className={styles.qrcodeWrapper}>
                                        {
                                            p.sections.map((q) => (
                                                <Qrcode 
                                                title={`Scan qrcode ${q.resourceTitle}`}
                                                imageUrl={`${process.env.REACT_APP_AWS_URL}/${q.resourceQrCodeImage}`} />

                                            ))
                                        }
                                    </div>
                                    : null
                            }


                            {
                                p.logos &&
                                <div className={styles.productTechLogos}>
                                    <TechnologyLogo logos={p.logos} />
                                </div>
                            }

                        </div>
                    ))}

                </div>
            </div>


        );
    }
}
