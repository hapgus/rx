import { BodyText, HeaderText, PageText, ProductText } from '../TextComponent/TextComponent'
import styles from './ScrollHeader.module.css'
import { ScrollButtons } from './ScrollButtons'
import { CountBubble } from '../IconComponent/CountBubble';

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
                    
                    <PageText type='pageBodyTitle'>{headerText}</PageText>
                </div>
                <div className={styles.headerCountWrapper}>
                <ProductText type='productCountTitle'>Results</ProductText>
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