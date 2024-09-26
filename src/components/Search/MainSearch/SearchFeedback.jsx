import { ToolTip } from "../../ToolTip/ToolTip";
import { useState } from "react";
import { PageText } from "../../Text/Text";
import styles from "./SearchFeedback.module.css"
import { AnimatedComponent } from "../../../hooks/use-framer-motion";

export const SearchFeedback = ({ feedback, positionTop, positionRight }) => {

    const [visible, setVisible] = useState(true);

    return (
        <AnimatedComponent>
            <div
                className={styles.toolTipContainer}
                onMouseEnter={() => setVisible(true)}
                onMouseLeave={() => setVisible(false)}
            >
                <div className={styles.toolTipWrapper}>

                    {visible &&
                        <div className={styles.toolTipInnerDiv}
                            style={{
                                top: positionTop && `${positionTop}px`,
                                right: positionRight && `${positionRight}px`
                            }} >
                            <div className={styles.toolTipText}>
                                <PageText type="toolTip">{feedback}</PageText>
                            </div>
                        </div>
                    }
                </div>

            </div>
        </AnimatedComponent>
    )

    // <ToolTip positionRight={positionRight} positionTop={positionTop} text={feedback} />;
}