
import { SkeletonComponent } from '../../../components/Skeletons/SkeletonComponent';
import styles from './ApplianceCategorySkeleton.module.css'
import { GridSystem } from '../../../components/GridSystem/GridSystem';



export const ApplianceCategorySkeletonComponent = () => {
    return (
        <GridSystem gridType='spread'>
            <div className={styles.skHeader}>
                <div className={styles.skTextWrapper}>
                    <div className={styles.skTitle}>
                        <SkeletonComponent width='20rem' height="2rem" />
                        <SkeletonComponent width='30rem' height="3.2rem" />
                    </div>
                   
                </div>
                <div className={styles.skCardsWrapper}>
                    <SkeletonComponent height="27rem" />
                    <SkeletonComponent height="27rem" />
                </div>
            </div>
        </GridSystem>
    );
}

