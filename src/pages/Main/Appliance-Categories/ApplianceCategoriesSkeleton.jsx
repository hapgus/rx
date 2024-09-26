import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { SkeletonComponent } from '../../../components/Skeletons/SkeletonComponent';
import styles from './ApplianceCategoriesSkeleton.module.css'
import { GridSystem } from '../../../components/GridSystem/GridSystem';



const ApplianceCategoriesSkeleton = () => {
    return (
        <GridSystem gridType='spread'>
            <div className={styles.skHeader}>
                <div className={styles.skTextWrapper}>
                    <div className={styles.skTitle}>
                        <SkeletonComponent width='20rem' height="2rem" />
                        <SkeletonComponent width='30rem' height="3.2rem" />
                    </div>
                    <SkeletonComponent width='60rem' height="5rem" />
                </div>
                <div className={styles.skCardsWrapper}>
                    <SkeletonComponent height="27rem" />
                    <SkeletonComponent height="27rem" />
                    <SkeletonComponent height="27rem" />
                    <SkeletonComponent height="27rem" />
                    <SkeletonComponent height="27rem" />
                    <SkeletonComponent height="27rem" />
                    <SkeletonComponent height="27rem" />
                </div>
            </div>
        </GridSystem>
    );
}

export const ApplianceCategoriesSkeletonComponent = () => {
    return (
        <div className={styles.skComponentWrapper}>
            <ApplianceCategoriesSkeleton />
            <ApplianceCategoriesSkeleton />
            <ApplianceCategoriesSkeleton />
            <ApplianceCategoriesSkeleton />
            <ApplianceCategoriesSkeleton />
            <ApplianceCategoriesSkeleton />
            <ApplianceCategoriesSkeleton />
            <ApplianceCategoriesSkeleton />

        </div>
    )
}