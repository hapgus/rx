import styles from './Label.module.css';
import { IconComponent } from '../../Icon/IconComponent';
import { PageText } from '../../Text/Text';
import { ToolTip } from '../../ToolTip/ToolTip';

export const Label = ({
    id,
    labelName,
    secondaryLabel,
    secondaryLabelToolTip,
    icon,
    iconType,
    iconStyleType,
    labelHeight,
    children

}) => {
    return (

        <label htmlFor={id} className={styles.mainLabelContainer} style={{
            minHeight:`${labelHeight && labelHeight}rem`
        }} >
            <div className={styles.labelHeaderWrapper}>
                <div className={styles.labelText}>
                    <PageText type='formLabel'> {labelName}</PageText>
                </div>
                 {icon ? <IconComponent iconType={iconType} iconStyleType={iconStyleType} /> : null}
                        {secondaryLabel ? <PageText type="formSecondaryLabel">{secondaryLabel}</PageText> : null}
                        {secondaryLabelToolTip ? <ToolTip positionTop='-70' positionRight='25' text={secondaryLabelToolTip}/> : null}
                {/* {
                    icon || secondaryLabel || secondaryLabelToolTip &&
                    <div className={styles.secondaryLabelDiv}>
                       
                    </div>
                } */}
            </div>
            {children}
        </label>

    );
}