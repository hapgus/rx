import { PageText } from '../../../Text/Text'
import { ToolTip } from '../../../ToolTip/ToolTip'
import styles from './PortalBanner.module.css'

export const PortalBanner = ({
    title,
    toolTipText,
    row1,
    row2Chart1,
    row2Chart2,
    row3Chart1,
    row3Chart2,

   
    footer,
    linkFromDashboard,
    children

}) =>
    <div className={styles.bannerContainer} id={linkFromDashboard}>
        <div className={styles.headerWrapper}>
            {
                title &&
                <div className={styles.title}>
                    <PageText type='bodyTitle'> {title}</PageText>
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
        {row1 && <div className={styles.rowWrapper}>{row1}</div>}

        <div className={styles.rowWrapper}>
            <div className={styles.firstChartGroupRow2}>{row2Chart1}</div>
            <div className={styles.lastChartGroupRow2}>{row2Chart2}</div>

        </div>

        {
            row3Chart1 &&
            <div className={styles.rowWrapper}>
                {row3Chart1}
                {/* <div className={styles.lastChartGroupRow2}>{row3Chart2}</div> */}

            </div>
        }
  {
            row3Chart2 &&
            <div className={styles.rowWrapper}>
                {row3Chart2}
                {/* <div className={styles.lastChartGroupRow2}>{row3Chart2}</div> */}

            </div>
        }

        {footer &&
            <div className={styles.cardFooterWrapper}>
                <div className={styles.cardFooter}>
                    <PageText> {footer}</PageText>
                </div>
            </div>
        }
    </div>