import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import styles from './ScrollingComponent.module.css';
import { ApplianceCard } from '../ProductCards/ApplianceCard/ApplianceCard';
import { useScrollableRefs } from '../../hooks/use-ref-hook';

import { capitalizeFirstLetterEachWord } from '../../utils/text-help';

import { CountProductsInCategory } from '../../utils/category-helper';

import { ScrollHeader } from './ScrollHeader';
import { GridSystem } from '../GridSystem/GridSystem';
import { ApplianceCategoriesSkeletonComponent } from '../../pages/Main/Appliance-Categories/ApplianceCategoriesSkeleton';

export const ScrollingComponent = ({ processedProducts }) => {
    console.log(processedProducts)

    const scrollRefs = useScrollableRefs(processedProducts.flatMap(Object.keys).length);

    const [scrollDisabled, setScrollDisabled] = useState({});
    const [scrollProgress, setScrollProgress] = useState({});

 
    useEffect(() => {
        // Initialize the scrollDisabled state
        const initialState = {};
        const initialProgress = {};
        scrollRefs.forEach((_, idx) => {
            initialState[idx] = { left: true, right: false };
            initialProgress[idx] = 0;
        });
        setScrollDisabled(initialState);
        setScrollProgress(initialProgress);

        // Check initial scroll position for each ref
        scrollRefs.forEach((ref, idx) => {
            if (ref.current) {
                updateScrollButtons(ref, idx);
                updateScrollProgress(ref, idx);
            }
        });
    }, [scrollRefs]);

    const updateScrollButtons = (scrollWrapper, idx) => {
        if (scrollWrapper && scrollWrapper.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollWrapper.current;
            setScrollDisabled(prevState => ({
                ...prevState,
                [idx]: {
                    left: scrollLeft <= 0,
                    right: scrollLeft + clientWidth >= scrollWidth - 1,
                },
            }));
        }
    };

    const updateScrollProgress = (scrollWrapper, idx) => {
        if (scrollWrapper && scrollWrapper.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollWrapper.current;
            const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
            setScrollProgress(prevState => ({
                ...prevState,
                [idx]: progress,
            }));
        }
    };

    const scroll = (scrollWrapper, direction, idx) => {
        if (scrollWrapper && scrollWrapper.current) {

            const scrollAmount = 300; // Adjust this value as needed
            if (direction === 'left') {
                scrollWrapper.current.scrollLeft -= scrollAmount;
            } else {
                scrollWrapper.current.scrollLeft += scrollAmount;
            }
            // Update button disabled state after scrolling
            setTimeout(() => {
                updateScrollButtons(scrollWrapper, idx);
                updateScrollProgress(scrollWrapper, idx);
            }, 100);
        }
    };

    let refIdx = 0; // Initialize refIdx outside to keep track of refs
    return (
        <>

            {
            
            processedProducts.length !== 0 ?
            
            processedProducts.map((products, idx) => (
                <div key={`product-group-${idx}`}>
                    {Object.entries(products).map(([subcategory, items]) => {
                        const currentRefIdx = refIdx++;
                        return (
                            // ID SUPPORTING HASH LINK
                            <div id={subcategory} className={styles.mainContainer} key={subcategory}>
                                <GridSystem
                                    gridType='spread'
                                    containerPaddingTop='2rem'
                                    //   containerPaddingBottom='2rem'
                                    //   containerBorderBottom='1px solid #D0CBC1'
                                    //   containerBackgroundColor='#E6E1D6'
                                    // containerBorderBottom='1px solid #D0CBC1'
                                    containerBackgroundColor='#E6E1D6'
                                >
                                    <div className={styles.innerContainer}>
                                        <div className={styles.scrollHeaderWrapper}>
                                            <div className={styles.scrollHeader}>
                                                <ScrollHeader
                                                    leftOnClick={() => scroll(scrollRefs[currentRefIdx], 'left', currentRefIdx)}
                                                    rightOnClick={() => scroll(scrollRefs[currentRefIdx], 'right', currentRefIdx)}
                                                    leftDisabled={scrollDisabled[currentRefIdx]?.left}
                                                    rightDisabled={scrollDisabled[currentRefIdx]?.right}
                                                    itemCount={CountProductsInCategory(items)}
                                                    headerText={subcategory}
                                                    // headerText={capitalizeFirstLetterEachWord(subcategory)}
                                                    progress={scrollProgress[currentRefIdx]}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </GridSystem>
                                <div className={styles.mainScrollingDivContainer}>
                                    <GridSystem
                                        gridType='spread'
                                        containerBackgroundColor='#E6E1D6'
                                    >
                                        <div className={styles.innerContainer}>
                                            <div className={styles.scrollWrapper}>
                                                {/* <motion.div
                                            className={styles.scrollProgress}
                                            style={{ width: `${scrollProgress[currentRefIdx]}%` }}
                                        /> */}
                                                <div
                                                    className={styles.container}
                                                    ref={scrollRefs[currentRefIdx]}
                                                    onScroll={() => {
                                                        updateScrollButtons(scrollRefs[currentRefIdx], currentRefIdx);
                                                        updateScrollProgress(scrollRefs[currentRefIdx], currentRefIdx);
                                                    }}
                                                >
                                                    {items && items.map((product, itemIdx) => (
                                                        <ApplianceCard key={product.id || itemIdx} product={product} />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </GridSystem>
                                </div>

                            </div>
                        );
                    })}
                </div>
            ))
        : <ApplianceCategoriesSkeletonComponent/>
        }
            
        </>
    );
};