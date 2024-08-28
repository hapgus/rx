import styles from './Label.module.css';
import { IconComponent } from '../../Icon/IconComponent';
import { PageText } from '../../Text/Text';

export const Label = ({
    id,
    labelName,
    secondaryLabel,
    icon,
    iconType,
    iconStyleType,
    children

}) => {
    return (

        <label htmlFor={id} className={styles.mainLabelContainer}>
            <div className={styles.labelHeaderWrapper}>
                <div className={styles.labelText}>
                    <PageText> {labelName}</PageText>
                </div>
                {
                    icon || secondaryLabel &&
                    <div className={styles.secondaryLabelDiv}>
                        {icon ? <IconComponent iconType={iconType} iconStyleType={iconStyleType} /> : null}
                        {secondaryLabel ? <PageText type="formLabelSecondary">{secondaryLabel}</PageText> : null}
                    </div>
                }
            </div>
            {children}
        </label>

    );
}