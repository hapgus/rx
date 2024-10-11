import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { SkeletonComponent } from '../../../components/Skeletons/SkeletonComponent';
import styles from './AppliancePageSkeleton.module.css'
import { GridSystem } from '../../../components/GridSystem/GridSystem';



const ApplianceDetailsSkeleton = () => {

    return (
        <GridSystem>

            {/* MOBILE */}
            <div className={styles.skMobileHeader}>
                <div className={styles.headerText}>
                    <SkeletonComponent width='20rem' height="3.2rem" />
                    <SkeletonComponent width='100%' height="5rem" />
                    <SkeletonComponent width='100%' height="5rem" />
                </div>
                <div className={styles.productImage}>
                    <SkeletonComponent width='100%' height="40rem" />
                </div>
                <div>
                    <div className={styles.colorLegend}>
                        <div>
                            <SkeletonComponent width='5rem' height="4rem" />
                        </div>

                        <div>
                            <SkeletonComponent width='15rem' height="4rem" />
                        </div>
                    </div>
                    <div className={styles.button}>
                        <SkeletonComponent width='100%' height="5rem" />
                    </div>
                </div>
            </div>
            <div className={styles.skMobileColumns}>
                <div className={styles.column}>
                    <div>
                        <SkeletonComponent width='30rem' height="5rem" />
                    </div>
                    <div className={styles.items}>
                        <SkeletonComponent width='100%' height="5rem" />
                        <SkeletonComponent width='100%' height="5rem" />
                        <SkeletonComponent width='100%' height="5rem" />
                        <SkeletonComponent width='100%' height="5rem" />

                    </div>
                </div>
                <div className={styles.column}>
                    <div>
                        <SkeletonComponent width='30rem' height="5rem" />
                    </div>
                    <div className={styles.items}>
                        <SkeletonComponent width='100%' height="5rem" />
                        <SkeletonComponent width='100%' height="5rem" />
                        <SkeletonComponent width='100%' height="5rem" />
                        <SkeletonComponent width='100%' height="5rem" />

                    </div>
                </div>
            </div>


            {/* DESKTOP */}
            <div className={styles.dHeader}>
                <div className={styles.dTextContent}>
                    <SkeletonComponent width='30rem' height="5rem" />
                    <SkeletonComponent width='55rem' height="7rem" />
                    <SkeletonComponent width='60rem' height="7rem" />
                    <div className={styles.dButton}>
                        <SkeletonComponent width='15rem' height="5rem" />
                    </div>
                    <div className={styles.dLegend}>
                        <SkeletonComponent width='5rem' height="5rem" />
                        <SkeletonComponent width='20rem' height="5rem" />
                    </div>

                </div>
                <span className={styles.medImage}>
                    <SkeletonComponent width='40rem' height="50rem" />
                </span>
                <span className={styles.largeImage}>
                    <SkeletonComponent width='50rem' height="50rem" />
                </span>

            </div>
            <div className={styles.dColumns}>
                <div className={styles.column}>
                    <div>
                        <SkeletonComponent width='100%' height="5rem" />
                    </div>
                    <div className={styles.items}>
                        <SkeletonComponent width='100%' height="5rem" />
                        <SkeletonComponent width='100%' height="5rem" />
                        <SkeletonComponent width='100%' height="5rem" />
                        <SkeletonComponent width='100%' height="5rem" />
                        <SkeletonComponent width='100%' height="5rem" />
                        <SkeletonComponent width='100%' height="5rem" />
                        <SkeletonComponent width='100%' height="5rem" />
                        <SkeletonComponent width='100%' height="5rem" />

                    </div>
                </div>
                <div className={styles.column}>
                    <div>
                        <SkeletonComponent width='100%' height="5rem" />
                    </div>
                    <div className={styles.items}>
                        <SkeletonComponent width='100%' height="5rem" />
                        <SkeletonComponent width='100%' height="5rem" />
                        <SkeletonComponent width='100%' height="5rem" />
                        <SkeletonComponent width='100%' height="5rem" />
                        <SkeletonComponent width='100%' height="5rem" />
                        <SkeletonComponent width='100%' height="5rem" />
                        <SkeletonComponent width='100%' height="5rem" />
                        <SkeletonComponent width='100%' height="5rem" />

                    </div>
                </div>
                <div className={styles.column}>
                    <div>
                        <SkeletonComponent width='100%' height="5rem" />
                    </div>
                    <div className={styles.items}>
                        <SkeletonComponent width='100%' height="5rem" />
                        <SkeletonComponent width='100%' height="5rem" />
                        <SkeletonComponent width='100%' height="5rem" />
                        <SkeletonComponent width='100%' height="5rem" />
                        <SkeletonComponent width='100%' height="5rem" />
                        <SkeletonComponent width='100%' height="5rem" />
                        <SkeletonComponent width='100%' height="5rem" />
                        <SkeletonComponent width='100%' height="5rem" />

                    </div>
                </div>
                <div className={styles.column}>
                    <div>
                        <SkeletonComponent width='100%' height="5rem" />
                    </div>
                    <div className={styles.items}>
                        <SkeletonComponent width='100%' height="5rem" />
                        <SkeletonComponent width='100%' height="5rem" />
                        <SkeletonComponent width='100%' height="5rem" />
                        <SkeletonComponent width='100%' height="5rem" />
                        <SkeletonComponent width='100%' height="5rem" />
                        <SkeletonComponent width='100%' height="5rem" />
                        <SkeletonComponent width='100%' height="5rem" />
                        <SkeletonComponent width='100%' height="5rem" />

                    </div>
                </div>
            </div>
            <div className={styles.dMedia}>
                <div className={styles.mediaTitle}>
                    <SkeletonComponent width='100%' height="5rem" />
                </div>

                <div className={styles.mediaButtonsWrapper}>
                    <div className={styles.mediaButtons}>
                        <SkeletonComponent width='100%' height="5rem" />
                        <SkeletonComponent width='100%' height="5rem" />
                    </div>
                </div>


                <div className={styles.dMediaItems}>
                    <SkeletonComponent width='100%' height="30rem" />
                    <SkeletonComponent width='100%' height="30rem" />
                    <SkeletonComponent width='100%' height="30rem" />
                    <SkeletonComponent width='100%' height="30rem" />
                </div>

            </div>
        </GridSystem>
    );
}

export const AppliancePageSkeletonComponent = () => {
    return (
        <div className={styles.skComponentWrapper}>
            <ApplianceDetailsSkeleton />
            {/* <ApplianceCategoriesSkeleton />
            <ApplianceCategoriesSkeleton />
            <ApplianceCategoriesSkeleton />
            <ApplianceCategoriesSkeleton />
            <ApplianceCategoriesSkeleton />
            <ApplianceCategoriesSkeleton />
            <ApplianceCategoriesSkeleton /> */}

        </div>
    )
}