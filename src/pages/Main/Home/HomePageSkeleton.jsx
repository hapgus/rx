import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { SkeletonComponent } from '../../../components/Skeletons/SkeletonComponent';
import styles from './HomePageSkeleton.module.css'
import { GridSystem } from '../../../components/GridSystem/GridSystem';



const HomeSkeleton = () => {

    return (
        <GridSystem gridType='spread'>
            <div className={styles.hero}>
                <SkeletonComponent width='60%' height="7rem" />
                <SkeletonComponent width='100%' height="8rem" />

                <div className={styles.description}>
                    <SkeletonComponent width='100%' height="5rem" />
                    <SkeletonComponent width='100%' height="5rem" />
                </div>
            </div>
            <div className={styles.body}>
                <div className={styles.bodyText}>
                    <div className={styles.text}>
                        <SkeletonComponent width='90%' height="7rem" />
                        <SkeletonComponent width='100%' height="5rem" />
                        <SkeletonComponent width='100%' height="5rem" />
                    </div>
                </div>
                <div className={styles.imageWrapper}>
                    <div>
                        <SkeletonComponent width='100%' height="15rem" />
                    </div>
                    <div>
                        <SkeletonComponent width='100%' height="30rem" />
                    </div>
                </div>
                <div className={styles.bodyText}>
                    <div className={styles.text}>
                        <SkeletonComponent width='100%' height="5rem" />
                        <SkeletonComponent width='100%' height="5rem" />
                    </div>
                </div>
            </div>
            {/* DESKTOP */}
            <div className={styles.dHero}>
                <SkeletonComponent width='25%' height="6rem" />
                <SkeletonComponent width='40%' height="8rem" />

                <div className={styles.description}>
                    <SkeletonComponent width='50%' height="5rem" />

                    {/* <SkeletonComponent width='100%' height="5rem" /> */}
                </div>
            </div>
            <div className={styles.dBody}>
                <div className={styles.dTextContent}>
                    <div className={styles.dTextWrapper}>
                        <div className={styles.dText}>
                            <SkeletonComponent width='60%' height="6rem" />
                        </div>
                        <div className={styles.dText}>
                            <SkeletonComponent width='100%' height="5rem" />
                            <SkeletonComponent width='100%' height="5rem" />
                            {/* <SkeletonComponent width='50%' height="5rem" /> */}
                        </div>
                    </div>
                    <div className={styles.dBenefitsWrapper}>
                        <div className={styles.dBenefitsItem}>
                            <div className={styles.checkmark}>
                                <SkeletonComponent width='80%' height="8rem" />
                            </div>
                            <div className={styles.benefits}>
                                <SkeletonComponent width='60%' height="6rem" />
                                <SkeletonComponent width='100%' height="5rem" />
                                <SkeletonComponent width='100%' height="5rem" />
                            </div>
                        </div>
                    </div>
                    <div className={styles.dBenefitsWrapper}>
                        <div className={styles.dBenefitsItem}>
                            <div className={styles.checkmark}>
                                <SkeletonComponent width='80%' height="8rem" />
                            </div>
                            <div className={styles.benefits}>
                                <SkeletonComponent width='60%' height="6rem" />
                                <SkeletonComponent width='100%' height="5rem" />
                                <SkeletonComponent width='100%' height="5rem" />
                            </div>
                        </div>
                    </div>
                    <div className={styles.dBenefitsWrapper}>
                        <div className={styles.dBenefitsItem}>
                            <div className={styles.checkmark}>
                                <SkeletonComponent width='80%' height="8rem" />
                            </div>
                            <div className={styles.benefits}>
                                <SkeletonComponent width='60%' height="6rem" />
                                <SkeletonComponent width='100%' height="5rem" />
                                <SkeletonComponent width='100%' height="5rem" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.dImage}>
                    <SkeletonComponent width='100%' height="25rem" />
                    <SkeletonComponent width='100%' height="40rem" />
                </div>



            </div>
        </GridSystem>
    );
}

export const HomePageSkeletonComponent = () => {
    return (
        <div className={styles.skComponentWrapper}>
            <HomeSkeleton />


        </div>
    )
}