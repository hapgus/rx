import styles from './Overlay.module.css';
import ReactDOM from "react-dom";
import { motion } from 'framer-motion';

const OverlayContent = ({ containerBackgroundColor, containerMarginTop, slideDirection, children }) => {

    
    const directionVariants = {
        right: { hidden: { x: "100%", opacity: 1 }, visible: { x: "0%", opacity: 1 }, exit: { x: "100%", opacity: 1 } },
        left: { hidden: { x: "-100%", opacity: 0 }, visible: { x: "0%", opacity: 1 }, exit: { x: "-100%", opacity: 0 } },
        top: { hidden: { y: "-100%", opacity: 0 }, visible: { y: "0%", opacity: 1 }, exit: { y: "-100%", opacity: 0 } },
        bottom: { hidden: { y: "100%", opacity: 0 }, visible: { y: "0%", opacity: 1 }, exit: { y: "100%", opacity: 0 } }
    };

    const drawerVariants = directionVariants[slideDirection] || directionVariants.right; // Default to slide in from the right
    // const drawerVariants = {
    //     hidden: { x: "100%", opacity: 1 }, // Start hidden, sliding in from the right
    //     visible: { 
    //         x: "0%", 
    //         opacity: 1,
    //         transition: {
    //             duration: 0.6, // Matches the duration of the 3D rotation dropdown
    //             ease: [0.6, -0.05, 0.01, 0.99], // Use the same smooth ease for consistency
    //             staggerChildren: 0.1, // Optional: staggered children if needed for menu items
    //             delayChildren: 0.1 // Optional: slight delay before child elements animate
    //         }
    //     },
    //     exit: { 
    //         x: "100%", 
    //         opacity: 1,
    //         transition: { 
    //             duration: 0.4, // Matches the 3D rotation exit duration
    //             ease: "easeInOut" // Smooth ease for the exit as well
    //         }
    //     }
    // };
    // const content = (
    //     <div style={{
    //         backgroundColor: `${containerBackgroundColor ? containerBackgroundColor : undefined}`,
    //         marginTop: `${containerMarginTop ? containerMarginTop : '0'}`
    //     }} className={styles.overlayContentContainer} >
    //         <div className={styles.overlayContentWrapper} >
    //             {children}
    //         </div>
    //     </div>
    // );
        const content = (
        <motion.div 
        variants={drawerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{
            duration: 0.6, // Matches your 3D rotation dropdown duration
            ease: [0.6, -0.05, 0.01, 0.99] // Smooth ease for consistency
        }}
        style={{
            backgroundColor: `${containerBackgroundColor ? containerBackgroundColor : undefined}`,
            marginTop: `${containerMarginTop ? containerMarginTop : '0'}`

        }}
        
        className={styles.overlayContentContainer} >
            <div 
           
            className={styles.overlayContentWrapper} >
                {children}
            </div>
        </motion.div>
    );
    
    return ReactDOM.createPortal(content, document.getElementById('overlay'))
};

const Overlay = ({ children, slideDirection, containerBackgroundColor, containerMarginTop }) => {
    return (
        <OverlayContent 
        slideDirection={slideDirection} // Pass the direction as a prop
        containerBackgroundColor={containerBackgroundColor} containerMarginTop={containerMarginTop}>
            {children}
        </OverlayContent>
    );
};

export default Overlay;