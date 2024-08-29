import styles from './Homepage.module.css';
import { GridSystem } from "../../../components/GridSystem/GridSystem";
import { PageText } from '../../../components/Text/Text';

import { SearchComponent } from '../../../components/Search/SearchComponent/SearchComponent';
import { useSearchHook } from '../../../hooks/search-hook';
import { categoryLinks } from '../../../utils/link-helper';
import { LinkComponent } from '../../../components/Links/LinkComponent';
import { Button } from '../../../components/Button/Button';
import { IconComponent } from '../../../components/Icon/IconComponent';
import { useResponsiveMediaStateHook } from '../../../hooks/responsive-hook';


const Homepage = () => {
    const publicUrl = process.env.PUBLIC_URL;
    const { setIsHomepageSearchState, isHomepageSearchState, setIsMobileSearchState } = useSearchHook();

    const handleHomepageSearchClick = () => {
        setIsHomepageSearchState(prevState => ({ ...prevState, isHomepageSearch: true }))
    }

    const handleHomepageMobileSearchClick = () => {
        setIsMobileSearchState(prevState => ({ ...prevState, isMobileSearch: true }))
    }

    const { isMediaMobile } = useResponsiveMediaStateHook();

    const introStyles = isMediaMobile 
    ? {}
    : 'spread'

    const benefits = [
        {
            title: "Home Appliance Showcase",
            description: "Real-time access to the latest home appliances, including specs, media, install and specification details, and more.",
            shortDescription: "Real-time access to the latest home appliances."
        },
        {
            title: "Resource Hub",
            description: "Enjoy feature breakdowns, warranty insights, product comparisson charts, model transitions updates, at your fingertips.",
            shortDescription: "Enjoy a up-to-date product information resources"
        },
        {
            title: "LG Product List Builder",
            description: "Experience true power with our exclusive tool that lets you search, select, and organize products with ease, creating customized lists that meet your exact needs. Share print-ready lists that highlight the most relevant features for your customers, helping them make informed decisions.",
            shortDescription: "Get exclusive access to the LG Product List Builder"
        }

    ];

    const resourcesCallout = [
        {
            title: 'Feature Definitions',
            description: "Dive deeper into LG’s cutting edge technology and innovation",
            icon: 'infoDoc'
        },
        {
            title: 'Step Up Charts',
            description: "Compare products across specifications, key features, dimensions and more",
            icon: 'compare'
        },
        {
            title: 'Limited Warranties',
            description: "Learn how LG provides customers with confidence on their purchase",
               icon: 'warrantyShield'
        }

    ];

    return (
        <>
            <GridSystem gridType='spread' >

                <div className={styles.heroContainer}>
                    <div className={styles.contentWrapper}>
                        <div className={styles.heroWrapper}>
                            <div className={styles.heroHeader}>
                                <div className={styles.title}>
                                    <PageText type='pageTitle'>LG Product Guide</PageText>
                                </div>
                                {/* <div className={styles.subtitle}>
                                    <PageText type='pageSubtitle'>Find home appliances</PageText>
                                </div> */}
                            </div>
                            <div className={styles.heroSearch}>
                                <div className={styles.desktopHomeSearchWrapper}>
                                    <div onClick={handleHomepageSearchClick} className={styles.desktopHomeSearchInputWrapper}>
                                        <SearchComponent type='homepage' />
                                    </div>
                                </div>
                                <div className={styles.mobileHomeSearchWrapper}>
                                    <div onClick={handleHomepageMobileSearchClick} className={styles.mobileHomeSearchInputWrapper}>
                                        <SearchComponent type='homepage' />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className={styles.footer}>
                                    <PageText type='pageSubtitle'>Discover best-in-class products and accessories at the LG Product Guide</PageText>
                                </div>
                            </div>
                          
                        </div>
                    </div>
                </div>
            </GridSystem>
            <div className={styles.collar}>
                <GridSystem gridType='spread'>
                    <div >
                        <ul className={styles.collarList}>
                            {/* <div className={styles.exploreText}>
                                <PageText type='mobileNavTitle'>Explore Categories </PageText>
                            </div> */}
                            {categoryLinks.map((category, idx) => (
                                <li key={idx}>
                                    <LinkComponent href={category.href}>
                                        <PageText type='mobileNavTitle'> {category.text}</PageText>
                                    </LinkComponent>
                                </li>
                            ))}
                        </ul>
                    </div>
                </GridSystem>
            </div>
            <GridSystem gridType='spread' containerBackgroundColor='#E6E1D6'>
                <div className={styles.contentWrapper}>
                    <div className={styles.introductionContainer}>
                        <div className={styles.textWrapper}>
                            <div className={styles.introTitle}>
                                <div className={styles.introTitleText}>
                                    <PageText type='pageTitle'>Welcome to the LG Product Guide</PageText>
                                </div>
                                <div className={styles.longSubtitle}>
                                    <PageText type='pageSubtitle'>Your gateway to mastering LG's line of best-in-class home appliances is here. The LG Product Guide is your one-stop-shop for everything home appliance. </PageText>
                                </div>
                                <div className={styles.shortSubtitle}>
                                    <PageText type='pageSubtitle'>Your gateway to mastering LG's line of best-in-class home appliances </PageText>
                                </div>
                            </div>
                        </div>
                        <div className={styles.imageWrapper}>
                            <div className={styles.headImageGroup}>
                                <div className={styles.headImage1}>
                                    <img src={`/assets/image/backgrounds/builder/lg-customer.webp`} />
                                </div>
                                <div className={styles.headImage2}>
                                    <img className={styles.rep1} src={`/assets/image/backgrounds/builder/lg-rep.webp`} />
                                    <img className={styles.rep2} src={`/assets/image/backgrounds/builder/lg-rep-bottom.webp`} />
                                </div>
                            </div>
                        </div>
                        <div className={styles.introDescription}>
                            <div className={styles.introDescriptionHeader}>
                                <PageText type='pageSubtitle'>The LG Product Guide is your one-stop-shop for everything home appliance.</PageText>
                            </div>
                            <div className={styles.benefitsList}>
                                {
                                    benefits.map((e, idx) => {
                                        return (
                                            <div key={idx} className={styles.benefitCard}>
                                                <div className={styles.benefitCardCount}>
                                                    <div className={styles.iconWrapper}>
                                                      
                                                        <IconComponent iconType='warranty' />
                                                    </div>
                                                    {/* <CountBubble itemCount={idx + 1} /> */}
                                                </div>
                                                <div className={styles.benefitCardText}>
                                                    <PageText type='bodyBenefitTitle'>{e.title}</PageText>
                                                    <div className={styles.longBenefitText}>
                                                        <PageText type='bodyBenefitDescription'>{e.description}</PageText>
                                                    </div>
                                                    <div className={styles.shortBenefitText}>
                                                        <PageText type='bodyBenefitDescription'>{e.shortDescription}</PageText>
                                                    </div>

                                                </div>
                                            </div>
                                        )
                                    })}
                            </div>
                        </div>

                        <div className={styles.buttonWrapper}>
                            <Button buttonStyleType='primaryAction'>Explore Home Appliances</Button>
                        </div>
                    </div>
                </div>
            </GridSystem>
            <GridSystem
                gridType='spread'
                containerBorderTop="1px solid #D0CBC1"
                containerBackgroundColor='#F6F3EB'
            // containerPaddingTop='4rem'
            // containerPaddingBottom='4rem'
            >
                <div className={styles.contentWrapper}>
                    <div className={styles.sectionHeader}>
                        <div className={styles.sectionTitle}>
                            <PageText type='pageTitle'>Resources</PageText>
                        </div>
                        <div className={styles.sectionSubtitle}>
                            <PageText type='pageTertiaryTitle'>Your hub for product knowledge and support</PageText>
                        </div>

                    </div>
                    <div className={styles.qCardWrapper}>
                        {resourcesCallout.map((e, idx) => {
                            return (
                                <div key={idx} className={styles.qCard}>
                                    <div className={styles.qText}>
                                        <PageText type='pageSubtitle'>{e.title}</PageText>
                                        <PageText type='bodyDescription'>{e.description}</PageText>
                                    </div>
                                    <div className={styles.qIcon}>
                                        <IconComponent iconType={e.icon} />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </GridSystem>


        </>
    )
}

export default Homepage;