import { IconComponent } from "../Icon/IconComponent";
import { useState } from "react";
import styles from './ToolTip.module.css';
import { PageText } from "../Text/Text";

export const ToolTip = ({ text }) => {
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
                    <div className={styles.toolTipInnerDiv} >
                        <div className={styles.toolTipText}>
                            <PageText>{text}</PageText>
                        </div>
                    </div>
                }
            </div>

        </div>
    );
};
