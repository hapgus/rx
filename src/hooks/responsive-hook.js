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
