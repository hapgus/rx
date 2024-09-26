import { CountBubble } from '../../../CountBubble/CountBubble'
import { ListBubble } from '../../../ListBubble/ListBubble'
import { PageText } from '../../../Text/Text'
import styles from './PortalLeaderBoardRow.module.css'

export const PortalLeaderBoardRow = ({ rank, dimension, metric, children }) => {
    return (
        <div className={styles.rowContainer}>
            <div>
                <ListBubble backgroundColor='#EA1917' borderColor='#EA1917' color='white' itemCount={rank}/>
             
               
            </div>
            <div className={styles.dimensionText}>
                <PageText>{dimension}</PageText>
            </div>
            <div className={styles.metricText}>
                <PageText>{` - ${metric}`}</PageText>
            </div>
          

        </div>
    )
}