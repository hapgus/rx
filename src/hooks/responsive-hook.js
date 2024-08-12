import { useState, useEffect } from 'react';

export const useResponsiveStateHook = (breakpoint = 1024) => {
    const [responsiveState, setResponsiveState] = useState({
        isMobile: window.innerWidth < breakpoint,
        isDesktop: window.innerWidth >= breakpoint,
    });

    useEffect(() => {
        const handleResize = () => {
            setResponsiveState({
                isMobile: window.innerWidth < breakpoint,
                isDesktop: window.innerWidth >= breakpoint,
            });
        };

        window.addEventListener('resize', handleResize);
        // Set initial state
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, [breakpoint]);

    return responsiveState;
};


// Hook for handling responsiveness based on a 1280px breakpoint
export const useResponsiveMediaStateHook = (breakpoint = 1280) => {
    const [responsiveState, setResponsiveState] = useState({
        isMediaMobile: window.innerWidth < breakpoint,
        isMediaDesktop: window.innerWidth >= breakpoint,
    });

    useEffect(() => {
        const handleResize = () => {
            setResponsiveState({
                isMediaMobile: window.innerWidth < breakpoint,
                isMediaDesktop: window.innerWidth >= breakpoint,
            });
        };

        window.addEventListener('resize', handleResize);
        // Set initial state
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, [breakpoint]);

    return responsiveState;
};