// SkeletonTable.jsx
import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'; // Import Skeleton CSS

const skeletonLoaderTheme = {
    baseColor: '#eae7de',
    highlightColor: '#fafafa'
}

export const TableSkeleton = ({ rows = 11 }) => {
    return (
        <Skeleton 
        baseColor={skeletonLoaderTheme.baseColor}
        highlightColor={skeletonLoaderTheme.highlightColor}
        height={50} 
        count={rows} 
        />
    );
};

export default TableSkeleton;


export const TableRowSkeleton = () => {
    return <Skeleton
        baseColor={skeletonLoaderTheme.baseColor}
        highlightColor={skeletonLoaderTheme.highlightColor}
        height={50}
    />
}