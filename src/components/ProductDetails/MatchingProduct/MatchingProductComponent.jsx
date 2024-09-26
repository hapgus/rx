import { GenericScrollHeader } from "../../ScrollingComponent/GenericScrollHeader";
import { RelatedProductCard } from "../../ProductCards/RelatedProductCard/RelatedProductCard";
import { useResponsiveStateHook } from "../../../hooks/responsive-hook";
import { useState, useEffect, useRef } from "react";
import { GridSystem } from "../../GridSystem/GridSystem";
import styles from './MatchingProductComponent.module.css'
export const MatchingProductComponent = ({ product }) => {


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


    return (
        <>
            {
                product &&
                <>
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
                           
                                {product.map((p, idx) => (
                                    <RelatedProductCard key={idx} product={p} />
                                ))}
                            
                        </div>
                    </div>
                </>

            }


        </>

        // <>
        //     {
        //         product ?
        //             <>
        //             <div>
        //                 {/* <ProductText type='productPageSectionText'>Related Appliances</ProductText> */}
        //                 {product.map((p, idx) => (
        //                     <RelatedProductCard key={idx} product={p} />
        //                 ))}
        //                 </div>
        //             </>
        //             : null
        //     }
        // </>
    );
}