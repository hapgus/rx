import styles from './modelTransitionsPage.module.css'
import { GridSystem } from "../../../components/GridSystem/GridSystem";
import { useEffect, useState } from "react";
import { HeroComponent } from "../../../components/HeroComponent/HeroComponent";
import { ImageWithSkeleton } from '../../../components/Skeletons/ImageSkeleton';

const ModelTransitionsPage = () => {

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
                title="Model Transitions"
                subtitle="Resources"
                description={'Review model transition charts for Q3 2024'}
                imgAlt="lg mom and daughter"
                imgSrc="/assets/image/backgrounds/resources/transition-hero.png"
            />




            <GridSystem gridType="spread" containerBackgroundColor='#E6E1D6' >
                <div className={styles.contentWrapper}>
                    <div className={styles.chartBodyContainer}>
                        <div className={styles.chartImageWrapper}>
                            <ImageWithSkeleton
                                src='/assets/image/model-transitions/transition-chart-q3.webp'
                                alt={`Model Transitions q3`}
                                skeletonHeight="500px"
                            />

                        </div>

                    </div>
                </div>
            </GridSystem>
        </>
    )
}

export default ModelTransitionsPage;