import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'; // Import Skeleton CSS


const skeletonLoaderTheme = {
    baseColor: '#eae7de',
    highlightColor: '#fafafa'
}


export const SkeletonComponent = ({height,width,count=1,}) => {
    return (
        <Skeleton
        borderRadius="1rem"
        baseColor={skeletonLoaderTheme.baseColor}
        highlightColor={skeletonLoaderTheme.highlightColor}
        height={height}
        width={width}
        count={count}
    />
       
    );
}