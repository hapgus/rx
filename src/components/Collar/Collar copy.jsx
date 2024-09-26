import { PageText } from "../Text/Text";
import styles from "./Collar.module.css";
import { LinkComponent } from "../Links/LinkComponent";
import { categoryLinks } from "../../utils/link-helper";
import { GridSystem } from "../GridSystem/GridSystem";
import { motion, useAnimation } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export const Collar = () => {
    const [isHovered, setIsHovered] = useState(false);
    const controls = useAnimation();
    const listRef = useRef(); // Ref for tracking the list
    const [currentX, setCurrentX] = useState(0); // State to track current position

    // Function to restart animation where it left off
    const startAnimation = (initialX) => {
        controls.start({
            x: [initialX, "-100%"], // Scroll from current position to fully out of view
            transition: {
                duration: 20, // Adjust speed (higher value means slower)
                ease: "linear",
                repeat: Infinity, // Infinite loop
            },
        });
    };

    useEffect(() => {
        if (!isHovered) {
            startAnimation(currentX); // Resume from where it left off
        } else {
            controls.stop(); // Stop animation when hovered
        }
    }, [isHovered, controls, currentX]);

    const handleMouseEnter = () => {
        setIsHovered(true);
        if (listRef.current) {
            const computedStyle = window.getComputedStyle(listRef.current);
            const transform = computedStyle.getPropertyValue("transform");

            // Use DOMMatrix to extract the x position from the transform matrix
            const matrix = new DOMMatrix(transform);
            const currentPos = matrix.m41; // Extract the x-position from the CSS transform
            setCurrentX(currentPos); // Save the current position to resume later
        }
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div className={styles.collarContainer}>
            <GridSystem gridType="spread">
                <div className={styles.collarWrapper}>
                    <div className={styles.collarHeaderTextWrapper}>
                        <div className={styles.collarHeaderText}>
                            <PageText>Browse Categories</PageText>
                        </div>
                    </div>

                    {/* Motion div for continuous scrolling */}
                    <motion.div
                        className={styles.buttonListContainer}
                        animate={controls}
                        ref={listRef} // Attach the ref to the list container
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <ul className={styles.buttonListWrapper}>
                            {/* Render list items */}
                            {categoryLinks.map((category, idx) => (
                                <li key={idx}>
                                    <LinkComponent href={category.href}>
                                        <p className={styles.collarListText}>{category.text}</p>
                                    </LinkComponent>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </GridSystem>
        </div>
    );
};
