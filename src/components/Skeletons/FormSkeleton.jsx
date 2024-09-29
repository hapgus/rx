import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'; // Import Skeleton CSS
import styles from './FormSkeleton.module.css'

const skeletonLoaderTheme = {
    baseColor: '#eae7de',
    highlightColor: '#fafafa'
}

const SkeletonCard = ({ height, width }) =>
    <Skeleton
        baseColor={skeletonLoaderTheme.baseColor}
        highlightColor={skeletonLoaderTheme.highlightColor}
        height={height}
        width={width}
        count={1}
    />


export const FormSkeleton = () => {
    return (
        <div className={styles.dashboardSkeletonContainer}>
            <div className={styles.threeBoxWrapper}>
                <SkeletonCard height={40} width='100%' />
                <SkeletonCard height={40} width='100%' />
                <SkeletonCard height={40} width='100%' />
            </div>
            <div>
                <div className={styles.stackedLabelInputWrapper}>
                    <SkeletonCard height={40} width='50%' />
                    <SkeletonCard height={40} width='100%' />
                </div>
                <div className={styles.stackedLabelInputWrapper}>
                    <SkeletonCard height={40} width='50%' />
                    <SkeletonCard height={40} width='100%' />
                </div>
                <div className={styles.buttonWrapper}>
                    <SkeletonCard height={45} width='20%' />
                </div>
                <div className={styles.buttonWrapper}>
                    <SkeletonCard height={45} width='20%' />
                </div>
                
            </div>


        </div>
    );
}