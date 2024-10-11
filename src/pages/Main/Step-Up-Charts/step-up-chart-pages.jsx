import { STEP_UP_CHART_CATEGORIES } from "../../../data/STATIC_DATA";
import { CATEGORY_VERBIAGE } from "../../../data/CATEGORY_VERBIAGE";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import styles from './StepUpChartPages.module.css'
import { GridSystem } from "../../../components/GridSystem/GridSystem";

import { capitalizeFirstLetterEachWord } from "../../../utils/helper-functions";
import { ImageWithSkeleton } from "../../../components/Skeletons/ImageSkeleton";

import { HeroComponent } from "../../../components/HeroComponent/HeroComponent";

const StepUpChartPage = () => {

    const { categoryId } = useParams();
    const currentCategory = STEP_UP_CHART_CATEGORIES[categoryId];
    const categoryVerbiage = CATEGORY_VERBIAGE[categoryId]

    const stepUpCharts = currentCategory.charts;
    const stepUpChartCTA = currentCategory.ctaText;
    const stepUpChartURL = currentCategory.ctaUrl;
    const heroImage = currentCategory.hero;

    const categoryHeroVerbiage = {
        headline: categoryVerbiage.lineLogicHeadline,
        subHeadline: categoryVerbiage.lineLogicSubheadline,
        description: categoryVerbiage.lineLogicDescription,
    }
    const [isHeroLoading, setIsHeroLoading] = useState(true);  // Track loading state for hero section

    // Function to simulate checking when the page's assets are loaded
    const handleAssetLoad = () => {
        setIsHeroLoading(false);  // Set to false once assets are loaded
    };

    useEffect(() => {
        // Example of waiting for all assets (could include custom fonts, images, etc.)
        const timeout = setTimeout(() => {
            handleAssetLoad();
        }, 1000);  // Simulate loading delay

        return () => clearTimeout(timeout);  // Clean up on unmount
    }, []);
    return (
        <>
          <HeroComponent
           title={capitalizeFirstLetterEachWord(categoryId)}
           subtitle="Step Up Charts"
           description={categoryHeroVerbiage.description}
           imgAlt={`${categoryId} appliance lifestyle view`}
           imgSrc={heroImage}
           calloutText={stepUpChartCTA}
           externalLinkCallout={true}
           calloutLinkText="LG Line Logic."
           calloutLinkUrl={stepUpChartURL}
           />
    
            <GridSystem gridType="spread" containerBackgroundColor='#E6E1D6' >
                <div className={styles.contentWrapper}>
                    <div className={styles.chartBodyContainer}>
                        {stepUpCharts && stepUpCharts.map((imageSrc, index) => (
                            <div className={styles.chartImageWrapper} key={index}>
                                <ImageWithSkeleton
                                    src={imageSrc}
                                    alt={`Comparison ${index + 1}`}
                                    skeletonHeight="500px"
                                />
                                {/* <img loading='lazy' src={imageSrc} alt={`Comparison ${index + 1}`} /> */}
                            </div>
                        ))}
                    </div>
                </div>
            </GridSystem>
        </>
    )
}

export default StepUpChartPage;