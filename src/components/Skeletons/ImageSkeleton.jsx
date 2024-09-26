import { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';  // Skeleton CSS

export const ImageWithSkeleton = ({ src, alt, skeletonHeight = '300px', skeletonWidth = '100%' }) => {
    const [isLoading, setIsLoading] = useState(true);  // Manage loading state

    console.log('Component rendered with src:', src);

    return (
        <div style={{ position: 'relative' }}>
            {/* Skeleton loader while the image is loading */}
            {isLoading && (
                <Skeleton height={skeletonHeight} width={skeletonWidth} />
            )}
            {/* Always render the img element with src immediately set */}
            <img
                src={src}  // Load the image immediately
                alt={alt}
                onLoad={() => {
                    console.log('Image loaded successfully:', src);
                    setIsLoading(false);  // Remove skeleton when image loads
                }}
                onError={() => {
                    console.error('Image failed to load:', src);
                    setIsLoading(false);  // Hide skeleton even if image fails to load
                }}
                style={isLoading ? { visibility: 'hidden' } : { display: 'block' }}  // Hide image until it finishes loading
            />
        </div>
    );
};