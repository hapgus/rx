import { PageText } from '../../../Text/Text'
import styles from './PortalLeaderBoard.module.css'

export const PortalLeaderBoard = ({title, children}) => {
    return(
        <div className={styles.leaderBoardContainer}>
            <div>
                <div className={styles.leaderBoardTitle}>
                    <PageText>{title}</PageText>
                </div>
            </div>
            <div className={styles.leaderBoardChildren}>
                {children}
            </div>
        </div>
    );
}