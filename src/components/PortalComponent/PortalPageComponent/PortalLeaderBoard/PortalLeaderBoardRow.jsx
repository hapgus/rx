import { PageText } from '../../../Text/Text'
import styles from './PortalLeaderBoardRow.module.css'

export const PortalLeaderBoardRow = ({ rank, dimension, metric, children }) => {
    return (
        <div className={styles.rowContainer}>
            <div>
                {rank}
            </div>
            <div>
                <PageText>{dimension}</PageText>
            </div>
            <div>
                <PageText>{metric}</PageText>
            </div>
          

        </div>
    )
}