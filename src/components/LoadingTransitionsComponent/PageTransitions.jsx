import { motion } from 'framer-motion';
import { useContext, useEffect } from 'react';

import { LoadingContext } from '../../context/LoadingContext';

const PageTransition = ({ children }) => {
    const { isLoading, setIsLoading } = useContext(LoadingContext);

    // Simulate loading
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);  // Data has "loaded"
        }, 1500);  // Simulating a 1.5-second data load
    }, [setIsLoading]);

    const pageVariants = {
        initial: { opacity: 0, x: -100 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 100 }
    };

    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={{ duration: 0.5 }}
        >
            {isLoading ? <div>Loading...</div> : children}
        </motion.div>
    );
};

export default PageTransition;
