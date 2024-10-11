import { PageText } from '../../Text/Text';
import styles from './ScrollHeader.module.css'
import { ScrollButtons } from '../Button/ScrollButtons'
import { CountBubble } from '../../CountBubble/CountBubble';

import { capitalizeFirstLetterEachWord } from '../../../utils/helper-functions';




export const ScrollHeader = ({
    headerText,
    itemCount,
    leftDisabled,
    leftOnClick,
    rightDisabled,
    rightOnClick
}) => {

    const categoryTitleMap = {
        signature: 'LG SIGNATURE',
        studio: 'LG STUDIO',
        vacuums: 'Vacuums',
        washtower:'WashTower'
    };
    const getCategoryTitle = (category) => {
        return categoryTitleMap[category] || capitalizeFirstLetterEachWord(category);
    }

    return (
        <div className={styles.scrollBarContainer}>
            <div className={styles.headerContainer}>
                {
                    headerText &&
                    <div className={styles.headerTitle}>
  {/* <PageText type='pageTitle'>{getCategoryTitle(headerText)}</PageText> */}
                        <PageText type='bodyTitle'>{headerText}</PageText>
                    </div>
                }

                <div className={styles.headerCountWrapper}>
                    <div className={styles.countTitle}>
                        <PageText type='bodyCountTitle'>Results</PageText>
                    </div>
                    <CountBubble itemCount={itemCount} />

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