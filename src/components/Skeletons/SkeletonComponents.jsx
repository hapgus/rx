import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const HeroSkeleton = () => {
    return (
        <div>
            {/* Skeleton for text elements */}
            <Skeleton height="3rem" width="60%" style={{ marginBottom: '1rem' }} />
            <Skeleton height="2rem" width="40%" style={{ marginBottom: '1rem' }} />
            <Skeleton height="10rem" width="100%" style={{ marginBottom: '1rem' }} />
            <Skeleton height="2rem" width="30%" style={{ marginBottom: '1rem' }} />

            {/* Skeleton for the hero image */}
            <Skeleton height="300px" width="100%" style={{ marginTop: '2rem' }} />
        </div>
    );
};