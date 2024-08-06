import { STEP_UP_CHART_CATEGORIES } from "../../../data/STATIC_DATA";
import { useParams } from "react-router";
import styles from './StepUpChartPages.module.css'
import { GridSystem } from "../../../components/GridSystem/GridSystem";
import { PageText } from "../../../components/Text/Text";
import { ExternalLink } from "../../../utils/link-helper";

const StepUpChartPage = () => {

    const { categoryId } = useParams();
    const currentCategory = STEP_UP_CHART_CATEGORIES[categoryId];

    const stepUpCharts = currentCategory.charts;
    const stepUpChartCTA = currentCategory.ctaText;
    const stepUpChartURL = currentCategory.ctaUrl;

    return (
        <>
            <div className={styles.pageHeaderContainer}>
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

            </div>


            <GridSystem containerBackgroundColor='#E6E1D6' >
                <div className={styles.chartBodyContainer}>
                    {stepUpCharts && stepUpCharts.map((imageSrc, index) => (
                        <div className={styles.chartImageWrapper} key={index}>
                            <img src={imageSrc} alt={`Comparison ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </GridSystem>
        </>
    )
}

export default StepUpChartPage;