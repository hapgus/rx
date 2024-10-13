import styles from './Homepage.module.css';
import { GridSystem } from "../../../components/GridSystem/GridSystem";
import { PageText } from '../../../components/Text/Text';

import { SearchComponent } from '../../../components/Search/SearchComponent/SearchComponent';
import { useSearchHook } from '../../../hooks/use-search-hooks';
// import { useRetailer } from '../../../hooks/use-routing-hooks';

import { Button } from '../../../components/Button/Button';
import { IconComponent } from '../../../components/Icon/IconComponent';


// import { Collar } from '../../../components/Collar/Collar';
import { AnimatedComponent } from '../../../hooks/use-framer-motion';
import { motion } from 'framer-motion';
import { AnimatedCheckmark } from '../../../components/AnimatedCheckmark/AnimatedCheckmark';
import { useEffect, useState } from 'react';
import { HomePageSkeletonComponent } from './HomePageSkeleton';
import { LinkComponent } from '../../../components/Links/LinkComponent';
import { useLinkConfig } from '../../../hooks/use-link-config-hooks';

const listVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1 // Adjust for timing between children
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};


const Homepage = () => {

    const { categoryLinks } = useLinkConfig();
    const { setIsHomepageSearchState, setIsMobileSearchState } = useSearchHook();

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Set a timer for 1 second to handle the loading state
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 700);

        // Cleanup the timer on component unmount
        return () => clearTimeout(timer);
    }, []);

    const handleHomepageSearchClick = () => {
        setIsHomepageSearchState(prevState => ({ ...prevState, isHomepageSearch: true }))
    }

    const handleHomepageMobileSearchClick = () => {
        setIsMobileSearchState(prevState => ({ ...prevState, isMobileSearch: true }))
    }



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

    // Check if still loading, display the skeleton loader
    if (isLoading) {
        return <HomePageSkeletonComponent />;
    }

    return (
        <>

            <GridSystem gridType='spread' containerBackgroundColor="#F0ECE4" >
          
               
                    <div className={styles.heroContainer}>
                        <div className={styles.contentWrapper}>
                            <div className={styles.heroWrapper}>
                                <div className={styles.heroHeader}>
                                    <div className={styles.title}>
                                        <AnimatedComponent type="wipeEffect" directionStart='left' delay={0.5}>
                                            <PageText type='heroSubtitle'>LG Product Guide</PageText>
                                        </AnimatedComponent>
                                    </div>
                                    <div className={styles.title}>
                                        <AnimatedComponent type="wipeEffect" directionStart='left' delay={1}>
                                            <PageText type='heroTitle'>Explore LG home appliances</PageText>
                                        </AnimatedComponent>
                                    </div>
                                    {/* <div className={styles.subtitle}>
                                    <AnimatedComponent type="wipeEffect" directionStart='left' delay={0.3}>
                                        <PageText type='heroDescription'>Discover best-in-class products and accessories at the LG Product Guide</PageText>
                                    </AnimatedComponent>
                                </div> */}
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

                                        <AnimatedComponent type="wipeEffect" directionStart='left' delay={1}>
                                            <PageText type='heroDescription'>Discover best-in-class products and accessories at the LG Product Guide</PageText>
                                        </AnimatedComponent>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
          
            </GridSystem>

            {/* <Collar/> */}


            <div className={styles.collar}>
                <GridSystem gridType='spread'>
                    {/* <div className={styles.collarHeaderWrapper}>
                        <div className={styles.collarHeaderText}>
                            <PageText type='heroSubtitle'>Browse</PageText>
                        </div>
                    </div> */}

                    <div className={styles.collarList}>
                        {categoryLinks.map((category, idx) => (

                            <span className={styles.collarText} key={idx}>
                                <LinkComponent href={category.href}>
                                    {category.text}
                                </LinkComponent>
                            </span>
                        ))}
                    </div>

                </GridSystem>
            </div>
            <GridSystem gridType='spread'
                containerBackgroundColor='#E6E1D6'
            >
                <div className={styles.contentWrapper}>
                    <div className={styles.introductionContainer}>
                        <div className={styles.textWrapper}>
                            <div className={styles.introTitle}>
                                <div className={styles.introTitleText}>
                                    <PageText type='bodyTitle'>Welcome to the LG Product Guide</PageText>
                                </div>
                                <div className={styles.introTitleDescription}>
                                    <div className={styles.longSubtitle}>
                                        <PageText type='bodySubtitle'>Your gateway to mastering LG's line of best-in-class home appliances is here. The LG Product Guide is your one-stop-shop for everything home appliance. </PageText>
                                    </div>
                                    <div className={styles.shortSubtitle}>
                                        <PageText type='pageSubtitle'>Your gateway to mastering LG's line of best-in-class home appliances.</PageText>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.imageWrapper}>
                            <div className={styles.headImageGroup}>
                                <div className={styles.headImage1}>
                                    <img alt="LG customer on her phone looking at Home Appliance Product List" src={`/assets/image/backgrounds/builder/lg-customer.webp`} />
                                </div>
                                <div className={styles.headImage2}>
                                    <img alt="LG rep on his tablet creating the LG Home Appliance Product List" className={styles.rep1} src={`/assets/image/backgrounds/builder/lg-rep.webp`} />
                                    <img alt="Bottom view of LG rep on his tablet creating the LG Home Appliance Product List" className={styles.rep2} src={`/assets/image/backgrounds/builder/lg-rep-bottom.webp`} />
                                </div>
                            </div>
                        </div>
                        <div className={styles.introDescription}>
                            <div className={styles.introDescriptionHeader}>
                                <PageText type='pageSubtitle'>The LG Product Guide is your one-stop-shop for everything home appliance.</PageText>
                            </div>
                            <motion.div
                                variants={listVariants}
                                initial="hidden"
                                animate="visible"
                                className={styles.benefitsList}>
                                {
                                    benefits.map((e, idx) => {
                                        return (
                                            <motion.div
                                                variants={itemVariants}
                                                key={idx} className={styles.benefitCard}>
                                                <motion.div
                                                    variants={itemVariants}
                                                    className={styles.iconWrapper}>


                                                    <AnimatedCheckmark />


                                                </motion.div>
                                                <div className={styles.benefitCardText}>
                                                    <PageText type='bodyCalloutTitle'>{e.title}</PageText>
                                                    <div className={styles.longBenefitText}>
                                                        <PageText type='bodyCallout'>{e.description}</PageText>
                                                    </div>
                                                    <div className={styles.shortBenefitText}>
                                                        <PageText type='bodyCallout'>{e.shortDescription}</PageText>
                                                    </div>

                                                </div>
                                            </motion.div>
                                        )
                                    })}
                            </motion.div>
                        </div>

                        <div className={styles.buttonWrapper}>
                            <LinkComponent href='/appliances/' >
                                <Button buttonStyleType='primaryAction'>Explore Home Appliances</Button>
                            </LinkComponent>
                        </div>
                    </div>
                </div>
            </GridSystem>

            <GridSystem
                gridType='spread'
            // containerBorderTop="1px solid #D0CBC1"
            // containerBackgroundColor='#F6F3EB'
            // containerPaddingTop='4rem'
            // containerPaddingBottom='4rem'
            >

                <div className={styles.contentWrapper}>
                  
                    <div className={styles.sectionHeader}>
                        <div className={styles.sectionTitle}>
                            <PageText type='bodyTitle'>Resources</PageText>
                        </div>
                        <div className={styles.sectionSubtitle}>
                            <PageText type='bodySubtitle'>Your hub for product knowledge and support</PageText>
                        </div>

                    </div>
                    <div className={styles.qCardWrapper}>
                        {resourcesCallout.map((e, idx) => {
                            return (
                                <div key={idx} className={styles.qCard}>
                                    <div className={styles.qText}>
                                        <PageText type='bodyCalloutTitle'>{e.title}</PageText>
                                        <PageText type='bodyCallout'>{e.description}</PageText>
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