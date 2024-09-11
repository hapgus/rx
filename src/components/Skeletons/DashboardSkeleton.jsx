import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'; // Import Skeleton CSS
import styles from './DashboardSkeleton.module.css'

const skeletonLoaderTheme = {
    baseColor: '#eae7de',
    highlightColor: '#fafafa'
}

const SkeletonCard = ({height, width}) =>
    <Skeleton
        baseColor={skeletonLoaderTheme.baseColor}
        highlightColor={skeletonLoaderTheme.highlightColor}
        height={height}
        width={width}
        count={1}
    />


export const DashboardSkeleton = () => {
    return (
        <div className={styles.dashboardSkeletonContainer}>
            <div className={styles.gridContainer}>
                <div className={styles.itemsWrapper}>
                    <SkeletonCard height={200} width='100%' />
                    <SkeletonCard height={200} width='100%' />
                    <SkeletonCard height={200} width='100%' />
                    <SkeletonCard height={200} width='100%' />
                </div>
                <div className={styles.bodyWrapper}>
                    <div className={styles.bodyItem1}>
                        <SkeletonCard height={400} width='100%' />
                    </div>
                    <div className={styles.bodyItem2}>
                        <SkeletonCard height={400} width='100%' />
                    </div>
                    <div className={styles.bodyItem3}>
                        <SkeletonCard height={400} width='100%' />
                    </div>
                </div>
            </div>
        </div>
    );
}