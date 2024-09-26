import styles from './Loader.module.css'

export const NakedLoader = () => {

  return (
    <>
      
      <div className={styles.loaderContainer}>
        <div className={styles.logoSpinnerContainer}>
          <img loading='lazy' src={`/assets/image/gif/spinning-black.gif`} className={styles.gif} alt="loading gif" />
        </div>
        <div className={styles.loader} />
      </div>
    </>
  );
}

