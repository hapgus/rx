import { STEP_UP_CHART_CATEGORIES } from "../../../data/STATIC_DATA";
import { CATEGORY_VERBIAGE } from "../../../data/CATEGORY_VERBIAGE";
import { useParams } from "react-router";
import styles from './StepUpChartPages.module.css'
import { GridSystem } from "../../../components/GridSystem/GridSystem";
import { PageText } from "../../../components/Text/Text";
import { ExternalLink } from "../../../utils/link-helper";
import { capitalizeFirstLetterEachWord } from "../../../utils/text-help";

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
    const publicUrl = process.env.PUBLIC_URL
    return (
        <>
            <div className={styles.pageHeaderContainer}>
                <GridSystem gridType="spread" >
                    <div className={styles.contentWrapper}>
                        <div className={styles.heroGridContainer}>
                            <div className={styles.heroGridWrapper}>
                                <div className={styles.gridItem1}>
                                    <div className={styles.subtitle}>
                                        <PageText type="pageTertiaryTitle">Step Up Charts</PageText>
                                    </div>
                                    <div className={styles.title}>
                                        <PageText type="pageTitle">{capitalizeFirstLetterEachWord(categoryId)}</PageText>
                                    </div>
                                    <div className={styles.description}>

                                        <PageText type="bodyDescriptionMedium">{categoryHeroVerbiage.description}</PageText>



                                    </div>
                                    <div className={styles.heroCallout}>

                                        <PageText type="bodyDescriptionMedium">
                                            {`${stepUpChartCTA} `}
                                            <span className={styles.ctaLinkText}>
                                                <ExternalLink href={stepUpChartURL}>LG Line Logic.</ExternalLink>
                                            </span>
                                        </PageText>

                                    </div>
                                </div>
                                <div className={styles.gridItem2}>
                                    <div className={styles.gridItem2Image}>
                                        <img alt={`${categoryId} appliance lifestyle view`} src={heroImage} />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </GridSystem>
            </div>
            {/* <div className={styles.pageHeaderContainer}>
                <GridSystem>
                    <PageText type="pageSubtitle">Resources</PageText>
                    <PageText type="pageTitle">Step Up Charts</PageText>
                    <PageText type="bodyDescription">
                        {`${stepUpChartCTA} `}
                        <span className={styles.ctaLinkText}>
                            <ExternalLink href={stepUpChartURL}>LG Line Logic.</ExternalLink>
                        </span>
                    </PageText>
                </GridSystem>

            </div> */}


            <GridSystem gridType="spread" containerBackgroundColor='#E6E1D6' >
                <div className={styles.contentWrapper}>
                    <div className={styles.chartBodyContainer}>
                        {stepUpCharts && stepUpCharts.map((imageSrc, index) => (
                            <div className={styles.chartImageWrapper} key={index}>
                                <img loading='lazy' src={imageSrc} alt={`Comparison ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>
            </GridSystem>
        </>
    )
}

export default StepUpChartPage;