import ReactDOM from "react-dom";
import styles from './Drawer.module.css'
import { PageText } from "../Text/Text";
import { IconComponent } from "../Icon/IconComponent";
import { Button } from "../Button/Button";
import { LGComponent } from "../Character/LGComponent";
import { motion } from "framer-motion";

// Animation variants for the drawer
const drawerVariants = {
    hidden: { x: "100%", opacity: 1 }, // Start fully hidden to the left
    visible: { 
        x: "0%", 
        opacity: 1,
        transition: { 
            type: "spring",  // Use spring for natural motion
            stiffness: 100,  // Controls the speed of the spring
            damping: 18,     // Smoothens the stop of the spring
            // duration: 0.5    // Ensures a smooth animation
        }
    },
    exit: { 
        x: "100%", 
        opacity: 1,
        transition: { 
            // duration: 0.3, 
            ease: "easeInOut" } // Fade and slide out smoothly
    }
};

const DrawerContent = ({ children }) => {
    const content = (
        <>
            {/* Backdrop (You can add a fade-in/out effect to the backdrop too if desired) */}
            <div className={styles.backdropContainer} />
            
            {/* Sliding Drawer */}
            <div 
                className={styles.overlayContainer}
            >
                <motion.div
                variants={drawerVariants}  // Use the defined variants
                initial="hidden"           // Drawer is initially hidden
                animate="visible"          // Drawer becomes visible
                exit="exit"                // Drawer slides out on exit
                
                className={styles.overlayContentWrapper}>
                    {children}
                </motion.div>
            </div>
        </>
    );
    return ReactDOM.createPortal(content, document.getElementById('drawer'));
};

export const Drawer = ({ children }) => {
    return (
        <>
        
            <DrawerContent>
         
                {children}
             
            </DrawerContent>
          
        </>
    );
};

export default Drawer;