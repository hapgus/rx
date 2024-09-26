import { useContext, useState, useEffect } from 'react';
import { useDataContext } from "../../hooks/data-hook";
import { subDays, format } from 'date-fns';
import styles from './DatePicker.module.css';
import { motion } from 'framer-motion';
import { PageText } from "../Text/Text";

export const DatePicker = () => {
    const { isDateRangeState, updateDateRange } = useDataContext();
    const [startDate, setStartDate] = useState(isDateRangeState.isStartDate || '');
    const [endDate, setEndDate] = useState(isDateRangeState.isEndDate || '');
    const [error, setError] = useState(null);
    const [activeFilter, setActiveFilter] = useState('30-days'); // Set default active filter to 30-days

    // Sync date picker fields with context values on load
    useEffect(() => {
        if (isDateRangeState.isStartDate && isDateRangeState.isEndDate) {
            setStartDate(isDateRangeState.isStartDate);
            setEndDate(isDateRangeState.isEndDate);
        }
    }, [isDateRangeState]);

    // Quick filter logic for predefined ranges
    const quickFilter = (daysBack, filterName) => {
        const end = new Date();
        const start = subDays(end, daysBack);
        setStartDate(format(start, 'yyyy-MM-dd'));
        setEndDate(format(end, 'yyyy-MM-dd'));
        updateDateRange(format(start, 'yyyy-MM-dd'), format(end, 'yyyy-MM-dd'));
        setActiveFilter(filterName); // Set active filter
    };

    // Variants for Framer Motion button effects
    const buttonVariants = {
        tap: { scale: 0.95 },
        hover: { scale: 1.05 },
        initial: { scale: 1 },
    };

    const handleDateChange = () => {
        if (!startDate || !endDate || new Date(startDate) > new Date(endDate)) {
            setError('Invalid date range');
        } else {
            setError(null);
            updateDateRange(startDate, endDate);
            setActiveFilter(null); // Clear active filter when applying custom date range
        }
    };

    return (
        <div className={styles.datePickerContainer}>
            <div className={styles.quickFilterButtonWrapper}>
                <motion.button
                    onClick={() => quickFilter(7, '7-days')}
                    className={activeFilter === '7-days' ? styles.activeButton : ''}
                    variants={buttonVariants}
                    initial="initial"
                    whileTap={activeFilter === '7-days' ? 'tap' : ''}
                    whileHover={activeFilter === '7-days' ? 'hover' : ''}
                >
                    7-days
                </motion.button>
                <motion.button
                    onClick={() => quickFilter(30, '30-days')}
                    className={activeFilter === '30-days' ? styles.activeButton : ''}
                    variants={buttonVariants}
                    initial="initial"
                    whileTap={activeFilter === '30-days' ? 'tap' : ''}
                    whileHover={activeFilter === '30-days' ? 'hover' : ''}
                >
                    30-days
                </motion.button>
                <motion.button
                    onClick={() => quickFilter(90, '90-days')}
                    className={activeFilter === '90-days' ? styles.activeButton : ''}
                    variants={buttonVariants}
                    initial="initial"
                    whileTap={activeFilter === '90-days' ? 'tap' : ''}
                    whileHover={activeFilter === '90-days' ? 'hover' : ''}
                >
                    90-days
                </motion.button>
                <motion.button
                    onClick={() => quickFilter(180, '180-days')}
                    className={activeFilter === '180-days' ? styles.activeButton : ''}
                    variants={buttonVariants}
                    initial="initial"
                    whileTap={activeFilter === '180-days' ? 'tap' : ''}
                    whileHover={activeFilter === '180-days' ? 'hover' : ''}
                >
                    180-days
                </motion.button>
                <motion.button
                    onClick={() => quickFilter(365, '365-days')}
                    className={activeFilter === '365-days' ? styles.activeButton : ''}
                    variants={buttonVariants}
                    initial="initial"
                    whileTap={activeFilter === '365-days' ? 'tap' : ''}
                    whileHover={activeFilter === '365-days' ? 'hover' : ''}
                >
                    365-days
                </motion.button>
            </div>
            <div className={styles.inputContainer}>
                <label>
                    <div className={styles.dateLabel}>
                        <PageText>Start Date</PageText>
                    </div>
                    <input
                        className={styles.dateInput}
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        max={new Date().toISOString().split('T')[0]} // Prevent future dates
                    />
                </label>
            </div>
            <div className={styles.inputContainer}>
                <label>
                    <div className={styles.dateLabel}>
                        <PageText>End Date</PageText>
                    </div>
                    <input
                        className={styles.dateInput}
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        min={startDate} // Ensure end date is not before start date
                        max={new Date().toISOString().split('T')[0]} // Prevent future dates
                    />
                </label>
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div className={styles.filterButton}>
                <button onClick={handleDateChange}>Apply Date Filter</button>
            </div>
        </div>
    );
};
