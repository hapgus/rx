
import { PageText } from '../../Text/Text';
import styles from './GenericScrollHeader.module.css';
import { ScrollButtons } from '../Button/ScrollButtons';

export const GenericScrollHeader = ({
    headerText,
    leftDisabled,
    leftOnClick,
    rightDisabled,
    rightOnClick
}) => {

    return (
        <div className={styles.scrollBarContainer}>
            {
                headerText ?
                    <div className={styles.headerContainer}>
                        <div className={styles.headerTitleWrapper}>
                            <PageText type='bodyTertiaryTitleBold'>{headerText}</PageText>
                        </div>
                    </div>
                    : null
            }

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