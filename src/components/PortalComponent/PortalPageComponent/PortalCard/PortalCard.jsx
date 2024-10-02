import { PageText } from '../../../Text/Text';
import { ToolTip } from '../../../ToolTip/ToolTip';
import styles from './PortalCard.module.css';
import { HashLink } from 'react-router-hash-link';

export const PortalCard = ({
    cardTitle,
    toolTipText,
    cardData,
    linkToAnalytics,
    children,
    cardFooter
}) =>
    // <HashLink to={linkToAnalytics}>
        <div className={styles.cardContainer}>


            <div className={styles.cardTitleWrapper}>
                <div className={styles.cardTitle}>
                    {cardTitle && <PageText> {cardTitle}</PageText>}
                </div>
                <div className={styles.toolTipWrapper}>
                    <div className={styles.toolTip}>
                        {toolTipText && <ToolTip text={toolTipText} />}
                    </div>
                </div>
            </div>

            {
                cardData &&
                <div className={styles.cardDataWrapper}>
                    <div className={styles.cardData}>
                        <PageText> {cardData}</PageText>
                    </div>
                </div>
            }
            {
                children && <div className={styles.cardChildrenWrapper}>
                    <div className={styles.cardChildren}>
                        <PageText> {children}</PageText>
                    </div>
                </div>
            }

            {
                cardFooter &&
                <div className={styles.cardFooterWrapper}>
                    <div className={styles.cardFooter}>
                        <PageText> {cardFooter}</PageText>
                    </div>
                </div>
            }


        </div>
    // </HashLink>