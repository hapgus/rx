import { PageText } from '../../../Text/Text'
import { ToolTip } from '../../../ToolTip/ToolTip'
import styles from './PortalBanner.module.css'

export const PortalBanner = ({ 
    title, 
    toolTipText, 
    chart1,
    chart2,
    footer 

}) =>
    <div className={styles.bannerContainer}>
        <div className={styles.headerWrapper}>
            {
                title &&
                <div className={styles.title}>
                    <PageText> {title}</PageText>
                </div>
            }
            {toolTipText &&
                <div className={styles.toolTipWrapper}>
                    <div className={styles.toolTip}>
                        <ToolTip text={toolTipText} />
                    </div>
                </div>
            }
        </div>
        <div className={styles.bannerFeatureCharts}>
            <div className={styles.chart1}>
                {chart1 && chart1}
            </div>
            <div className={styles.chart2}>
                {chart2 && chart2}
            </div>
            
        </div>
        {
            footer &&
            <div className={styles.cardFooterWrapper}>
                <div className={styles.cardFooter}>
                    <PageText> {footer}</PageText>
                </div>
            </div>
        }
    </div>