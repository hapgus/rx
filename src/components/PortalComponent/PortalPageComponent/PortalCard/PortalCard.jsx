import { PageText } from '../../../Text/Text'
import { ToolTip } from '../../../ToolTip/ToolTip'
import styles from './PortalCard.module.css'

export const PortalCard = ({ cardTitle, toolTipText, cardData, children, cardFooter }) =>
    <div className={styles.cardContainer}>
        <div className={styles.cardTitleWrapper}>
            <div className={styles.cardTitle}>
                <PageText> {cardTitle}</PageText>
            </div>
            <div className={styles.toolTipWrapper}>
                <div className={styles.toolTip}>
                    <ToolTip text={toolTipText} />
                </div>
            </div>
        </div>
        <div className={styles.cardDataWrapper}>
            <div className={styles.cardData}>
                <PageText> {cardData}</PageText>
            </div>
        </div>
        <div className={styles.cardChildrenWrapper}>
            <div className={styles.cardChildren}>
                <PageText> {children}</PageText>
            </div>
        </div>
        <div className={styles.cardFooterWrapper}>
            <div className={styles.cardFooter}>
                <PageText> {cardFooter}</PageText>
            </div>
        </div>


    </div>