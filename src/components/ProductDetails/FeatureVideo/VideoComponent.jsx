import styles from './VideoComponent.module.css';
import { GenericScrollHeader } from '../../ScrollingComponent/GenericScrollHeader';
import { useState, useEffect, useRef } from 'react';
import { GridSystem } from '../../GridSystem/GridSystem';
import { useResponsiveStateHook } from '../../../hooks/responsive-hook';


const MobileVideoComponent = ({ videos }) => {

    const [scrollDisabled, setScrollDisabled] = useState({});
    const scrollRef = useRef();

    useEffect(() => {
        const initialState = { left: true, right: false };
        setScrollDisabled(initialState);
        if (scrollRef.current) {
            updateScrollButtons(scrollRef);
        }
    }, [scrollRef]);

    const updateScrollButtons = (scrollWrapper) => {
        if (scrollWrapper && scrollWrapper.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollWrapper.current;
            setScrollDisabled({
                left: scrollLeft <= 0,
                right: scrollLeft + clientWidth >= scrollWidth - 1,
            });
        }
    };

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = 300; // Adjust this value as needed
            if (direction === 'left') {
                scrollRef.current.scrollLeft -= scrollAmount;
            } else {
                scrollRef.current.scrollLeft += scrollAmount;
            }
            // Update button disabled state after scrolling
            setTimeout(() => {
                updateScrollButtons(scrollRef);
            }, 100);
        }
    };

    const featureVideos = (list) => {
        return list && list.map((videos, idx) => {
            const videoId = videos.split('/').pop();
            return (
                <div key={idx}>
                    <iframe
                        loading='eager'
                        title={`video-${idx}`}
                        width="300"
                        height="170"
                        src={`https://www.youtube.com/embed/${videoId}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            );
        })
    }

    return (
        <section className={styles.applianceSectionContainer3}>
            <GridSystem
             containerPaddingTop='2rem'
             containerPaddingBottom='2rem'
             containerBorderBottom='1px solid #D0CBC1'
             containerBackgroundColor='#F6F3EB'
            >
                {/* <div className={styles.videosHeaderWrapper}> */}
                <div className={styles.videosScrollHeader}>
                    <GenericScrollHeader
                        // headerText='Feature Innovation'
                        leftOnClick={() => scroll('left')}
                        rightOnClick={() => scroll('right')}
                        leftDisabled={scrollDisabled.left}
                        rightDisabled={scrollDisabled.right}
                    />
                </div>
                {/* </div> */}

                <div className={styles.scrollWrapper}>
                    <div ref={scrollRef} className={styles.container}>
                        {featureVideos(videos)}
                    </div>
                </div>
            </GridSystem>
        </section>
    );
}

const DesktopVideoComponent = ({ videos }) => {
    const [scrollDisabled, setScrollDisabled] = useState({});
    const scrollRef = useRef();

    useEffect(() => {
        const initialState = { left: true, right: false };
        setScrollDisabled(initialState);
        if (scrollRef.current) {
            updateScrollButtons(scrollRef);
        }
    }, [scrollRef]);

    const updateScrollButtons = (scrollWrapper) => {
        if (scrollWrapper && scrollWrapper.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollWrapper.current;
            setScrollDisabled({
                left: scrollLeft <= 0,
                right: scrollLeft + clientWidth >= scrollWidth - 1,
            });
        }
    };

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = 300; // Adjust this value as needed
            if (direction === 'left') {
                scrollRef.current.scrollLeft -= scrollAmount;
            } else {
                scrollRef.current.scrollLeft += scrollAmount;
            }
            // Update button disabled state after scrolling
            setTimeout(() => {
                updateScrollButtons(scrollRef);
            }, 100);
        }
    };

    const featureVideos = (list) => {
        return list && list.map((videos, idx) => {
            const videoId = videos.split('/').pop();
            return (
                <div key={idx}>
                    <iframe
                        loading='eager'
                        title={`video-${idx}`}
                        width="600"
                        height="340"
                        src={`https://www.youtube.com/embed/${videoId}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            );
        })
    }

    return (
        <GridSystem
        containerPaddingTop='2rem'
             containerPaddingBottom='2rem'
             containerBorderBottom='1px solid #D0CBC1'
             containerBackgroundColor='#F0ECE4'
        >

            <div className={styles.videosScrollHeader}>
                <GenericScrollHeader
                    // headerText='Feature Innovation'
                    leftOnClick={() => scroll('left')}
                    rightOnClick={() => scroll('right')}
                    leftDisabled={scrollDisabled.left}
                    rightDisabled={scrollDisabled.right}
                />
            </div>

            <div className={styles.scrollWrapper}>
                <div ref={scrollRef} className={styles.container}>
                    {featureVideos(videos)}
                </div>
            </div>
        </GridSystem>
    );
}

export const VideoComponent = ({ videos }) => {

    const { isDesktop, isMobile } = useResponsiveStateHook()
    return (
        <>
            {isDesktop && <DesktopVideoComponent videos={videos} />}
            {isMobile && <MobileVideoComponent videos={videos} />}
        </>

    );
} 