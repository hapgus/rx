import styles from './Loader.module.css'


import { Backdrop } from '../Backdrop/Backdrop';

const Loader = () => {

  const publicUrl = process.env.PUBLIC_URL;
  return (
    <>
      <Backdrop />
    
      <div className={styles.loaderContainer}>
        <div className={styles.logoSpinnerContainer}>
          <img loading='lazy' src={`${publicUrl}/assets/image/gif/spinning-black.gif`} className={styles.gif} alt="loading gif" />
        </div>
        <div className={styles.loader} />
      </div>
    </>
  );
}

export default Loader;
