import styles from './CountBubble.module.css'


export const CountBubble = ({ itemCount, onClick }) =>
    <span onClick={onClick} className={styles.countBubble}>
        {itemCount}
    </span>;

