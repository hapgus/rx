import { IconComponent } from "../Icon/IconComponent";
import { useState } from "react";
import styles from './ToolTip.module.css';
import { PageText } from "../Text/Text";

export const ToolTip = ({ text,positionTop, positionRight }) => {
    const [visible, setVisible] = useState(false);

    return (
        <div
            className={styles.toolTipContainer}
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
        >
            <div className={styles.toolTipWrapper}>
                <IconComponent iconType="toolTip" />
                {visible &&
                    <div className={styles.toolTipInnerDiv} 
                    style={{ 
                        top: positionTop && `${positionTop}px` ,
                        right: positionRight && `${positionRight}px` 
                        }} >
                        <div className={styles.toolTipText}>
                            <PageText type="toolTip">{text}</PageText>
                        </div>
                    </div>
                }
            </div>

        </div>
    );
};
