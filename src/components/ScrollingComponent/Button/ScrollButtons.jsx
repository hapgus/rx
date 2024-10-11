import styles from './ScrollButtons.module.css'


// ABOUT MATERIAL SYMBOLS LIGHT
const RightChevron = () => {
    return (
        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.88502 13.27L7.52002 6.635L0.88502 0L2.00272e-05 0.885L5.75002 6.635L2.00272e-05 12.385L0.88502 13.27Z" fill="black" />
        </svg>
    );



}
const LeftChevron = () => {
    return (
        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.635 13.27L0 6.635L6.635 0L7.52 0.885L1.77 6.635L7.52 12.385L6.635 13.27Z" fill="black" />
        </svg>
    );
}

export const ScrollButtons = ({
    leftOnClick,
    rightOnClick,
    leftDisabled,
    rightDisabled,
}) => {
    return (
        <div className={styles.scrollButtonsContainer}>
            <button
className={`${styles.scrollButton} ${leftDisabled ? styles.disabled : ''}`}
                // className={styles.scrollButton}
                onClick={leftOnClick}
                disabled={leftDisabled}

            >
                <LeftChevron />
            </button>
            <button
              className={`${styles.scrollButton} ${rightDisabled ? styles.disabled : ''}`}
            //   className={styles.scrollButton}
                onClick={rightOnClick}
                disabled={rightDisabled}
            >
                <RightChevron />
            </button>
        </div>
    );
}