
import { useContext, useState, useEffect } from 'react';
import { useDataContext } from "../../hooks/data-hook";
import { subDays, subMonths, format } from 'date-fns';
import styles from './DatePicker.module.css';
import { PageText } from "../Text/Text";

export const DatePicker = () => {
    const { isDateRangeState, updateDateRange } = useDataContext();
    const [startDate, setStartDate] = useState(isDateRangeState.isStartDate || '');
    const [endDate, setEndDate] = useState(isDateRangeState.isEndDate || '');
    const [error, setError] = useState(null);

    // Sync date picker fields with context values on load
    useEffect(() => {
        if (isDateRangeState.isStartDate && isDateRangeState.isEndDate) {
            setStartDate(isDateRangeState.isStartDate);
            setEndDate(isDateRangeState.isEndDate);
        }
    }, [isDateRangeState]);


    // Quick filter logic for predefined ranges
    const quickFilter = (daysBack) => {
        const end = new Date();
        const start = subDays(end, daysBack);
        setStartDate(format(start, 'yyyy-MM-dd'));
        setEndDate(format(end, 'yyyy-MM-dd'));
        updateDateRange(format(start, 'yyyy-MM-dd'), format(end, 'yyyy-MM-dd'));
    };

    const handleDateChange = () => {
        if (!startDate || !endDate || new Date(startDate) > new Date(endDate)) {
            setError('Invalid date range');
        } else {
            setError(null);
            updateDateRange(startDate, endDate);
        }
    };

    return (
        <div className={styles.datePickerContainer}>
            <div className={styles.quickFilterButtonWrapper}>
                <button onClick={() => quickFilter(7)}>7-days</button>
                <button onClick={() => quickFilter(30)}>30-days</button>
                <button onClick={() => quickFilter(90)}>90-days</button>
                <button onClick={() => quickFilter(180)}>180-days</button>
                <button onClick={() => quickFilter(365)}>365-days</button>
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
