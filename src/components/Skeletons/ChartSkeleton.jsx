import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';


const skeletonLoaderTheme = {
    baseColor: '#eae7de',
    highlightColor: '#fafafa'

}

export const ChartSkeleton = ({ height = 50 }) => {
    <Skeleton
        baseColor={skeletonLoaderTheme.baseColor}
        highlightColor={skeletonLoaderTheme.highlightColor}
        height={height}
    />
}