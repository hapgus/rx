import { PageText } from '../Text/Text';
import styles from './ScrollHeader.module.css'
import { ScrollButtons } from './ScrollButtons'
import { CountBubble } from '../CountBubble/CountBubble';

export const ScrollHeader = ({
    headerText,
    itemCount,
    leftDisabled,
    leftOnClick,
    rightDisabled,
    rightOnClick
}) => {

    return (
        <div className={styles.scrollBarContainer}>
            <div className={styles.headerContainer}>
                <div className={styles.headerTitleWrapper}>
                    
                    <PageText type='pageSubtitle'>{headerText}</PageText>
                </div>
                <div className={styles.headerCountWrapper}>
                <PageText type='pageTertiaryTitle'>Results</PageText>
                <CountBubble itemCount={itemCount}/>   
                    
                </div>
            </div>
            <div className={styles.buttonContainer}>
                <ScrollButtons
                    leftDisabled={leftDisabled}
                    leftOnClick={leftOnClick}
                    rightDisabled={rightDisabled}
                    rightOnClick={rightOnClick}
                />
            </div>
        </div>
    );
}