import { useEffect, useRef, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';  // Skeleton CSS

export const ImageWithSkeleton = ({ src, alt, skeletonHeight = '300px', skeletonWidth = '100%' }) => {
    const [isLoading, setIsLoading] = useState(true);  // Manage loading state
    const [isInView, setIsInView] = useState(false);  // Track when the image is in the viewport
    const imgRef = useRef(null);  // Reference for the image DOM element

    console.log('Component rendered with src:', src);

    useEffect(() => {
        if (!imgRef.current) {
            console.error('Image ref is not assigned properly');
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    console.log('Intersection observed for entry:', entry);
                    if (entry.isIntersecting) {
                        console.log('Image is in view, start loading:', src);
                        setIsInView(true);  // Mark as in view
                        observer.unobserve(entry.target);  // Stop observing once it is in view
                    }
                });
            },
            { threshold: 0.1 }  // Trigger when 10% of the image is in view
        );

        console.log('Observing image:', imgRef.current);
        observer.observe(imgRef.current);  // Start observing the image

        return () => {
            if (imgRef.current) {
                console.log('Unobserving image:', imgRef.current);
                observer.unobserve(imgRef.current);  // Clean up observer
            }
        };
    }, [src]);  // Ensure useEffect runs when `src` changes

    return (
        <div style={{ position: 'relative' }}>
            {/* Skeleton loader */}
            {isLoading && (
                <Skeleton height={skeletonHeight} width={skeletonWidth} />
            )}
            {/* Always render the img element but control src and visibility */}
            <img
                ref={imgRef}
                src={isInView ? src : undefined}  // Only set src when in view
                alt={alt}
                onLoad={() => {
                    console.log('Image loaded successfully:', src);
                    setIsLoading(false);  // Remove skeleton when image loads
                }}
                onError={() => {
                    console.error('Image failed to load:', src);
                    setIsLoading(false);  // Hide skeleton even if image fails
                }}
                style={isLoading ? { visibility: 'hidden' } : { display: 'block' }}  // Hide image until loaded
            />
        </div>
    );
};