import { STEP_UP_CHART_CATEGORIES } from "../../../data/STATIC_DATA";
import { CATEGORY_VERBIAGE } from "../../../data/CATEGORY_VERBIAGE";
import { useParams } from "react-router";
import styles from './modelTransitionsPage.module.css'
import { GridSystem } from "../../../components/GridSystem/GridSystem";
import { PageText } from "../../../components/Text/Text";
import { ExternalLink } from "../../../utils/link-helper";
import { capitalizeFirstLetterEachWord } from "../../../utils/text-help";
import { HeroComponent } from "../../../components/HeroComponent/HeroComponent";

const ModelTransitionsPage = () => {

    // const { categoryId } = useParams();
    // const currentCategory = STEP_UP_CHART_CATEGORIES[categoryId];
    // const categoryVerbiage = CATEGORY_VERBIAGE[categoryId]

    // const stepUpCharts = currentCategory.charts;
    // const stepUpChartCTA = currentCategory.ctaText;
    // const stepUpChartURL = currentCategory.ctaUrl;
    // const heroImage = currentCategory.hero;

    // const categoryHeroVerbiage = {
    //     headline: categoryVerbiage.lineLogicHeadline,
    //     subHeadline: categoryVerbiage.lineLogicSubheadline,
    //     description: categoryVerbiage.lineLogicDescription,
    // }
    // const publicUrl = process.env.PUBLIC_URL
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
                                <img loading='lazy' src='/assets/image/model-transitions/transition-chart-q3.webp' alt={`Comparison`} />
                            </div>
                       
                    </div>
                </div>
            </GridSystem>
        </>
    )
}

export default ModelTransitionsPage;