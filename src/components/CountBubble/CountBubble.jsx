import styles from './CountBubble.module.css'


export const CountBubble = ({ 
    itemCount,
    onClick,
    backgroundColor='white',
    borderColor = '#716F6A',
    color='#262626'
 }) =>
    <span 
    style={{
        backgroundColor:`${backgroundColor}`,
         border:`1px solid ${borderColor}`,
         color:`${color}`
    }}
    onClick={onClick} className={styles.countBubble}>
        {itemCount}
    </span>;

