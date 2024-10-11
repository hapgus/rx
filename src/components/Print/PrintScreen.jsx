import { useBuilderHook } from "../../hooks/builder-hook";
import styles from './PrintScreen.module.css';
import { PageText } from "../Text/Text";
import { Specifications } from "../ProductDetails/Specifications/Specifications";
import { TechnologyLogo } from "../ProductDetails/Technology/TechnologyLogo";
import { Qrcode } from "../Qrcode/Qrcode";
import { useRetailer } from "../../hooks/retailer-hook";

export const PrintScreen = () => {

    const { productsInList } = useBuilderHook();
    const { isHomeDepotApp } = useRetailer();

    const branding = isHomeDepotApp && isHomeDepotApp.isHomeDepotActive === true

        ? {
            logoPath: "/assets/image/logos/lg-red-gray-home-depot.webp",
            altText: "Home Depot Logo",
            description: "The Home Depot / LG Home Appliances",
        }

        : {
            logoPath: "/assets/image/logos/lg-logo.webp",
            altText: "LG Logo",
            description: "LG Home Appliances",
        }

    if (productsInList) {
        return (
            <div className={styles.printScreenPage} >
                <div className={styles.printScreenCoverContainer}>
                    <div className={styles.printScreenCoverWrapper}>
                        <div className={styles.header}>
                            <div className={styles.headerContent}>
                                <PageText type="coverSubtitle">My Product List</PageText>
                                <PageText type="coverTitle">Product Guide Exclusive</PageText>
                                <PageText type="pageTertiaryTitle">{branding.description} </PageText>
                            </div>
                        </div>
                        <div className={styles.footer}>
                            <div className={styles.footerContent}>
                                <PageText type="pageTertiaryTitle"></PageText>
                                <div className={styles.logoWrapper}>

                                    <img src={branding.logoPath} alt={branding.altText} />
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
                                <div className={styles.productTitle}>
                                    <PageText >{p.title}</PageText>
                                </div>
                                <div className={styles.productSubtitle}>
                                <PageText>{p.subtitle}</PageText>
                                </div>
                            </div>
                            <div className={styles.productImage}>
                                <img src={`${process.env.REACT_APP_AWS_URL}/${p.image}`} alt="LG Logo" />
                            </div>
                            <div className={styles.productSpecs}>
                                <Specifications product={p} print={true}/>
                            </div>
                            {
                                p.qrcode &&
                                <div className={styles.productQrcodes}>
                                    <Qrcode title='Scan Spec Sheet QR Code' imageUrl={`${process.env.REACT_APP_AWS_URL}/${p.qrcode}`} />

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
