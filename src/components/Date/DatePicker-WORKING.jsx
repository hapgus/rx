import { useState } from 'react';
import { Label } from "../FormComponent/Label/Label";
import { useDataContext } from "../../hooks/data-hook";
import styles from './DatePicker.module.css'

export const DatePicker = () => {


    const { isDateRangeState, updateDateRange } = useDataContext();

    // Local state to manage input fields
    const [startDate, setStartDate] = useState(isDateRangeState.isStartDate || '');
    const [endDate, setEndDate] = useState(isDateRangeState.isEndDate || '');

    // Local state for error messages
    const [error, setError] = useState(null);

    // Handle date range change and pass the new dates to context
    const handleDateChange = () => {
        // Client-side validation logic
        if (!startDate || !endDate) {
            setError('Both start and end dates are required.');
        } else if (new Date(startDate) > new Date(endDate)) {
            setError('Start date cannot be after the end date.');
        } else {
            setError(null);
            updateDateRange(startDate, endDate); // Update context with valid dates
        }
    };

    return (
        <div className={styles.datePickerContainer}>
           
            <div>
                <Label labelName='Start Date'>
                    <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        max={new Date().toISOString().split('T')[0]} // Optional: Prevent future dates
                    />
                </Label>
            </div>
            <div>
                <Label labelName='End Date'>
                    <input
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        min={startDate} // Ensure end date is not before start date
                        max={new Date().toISOString().split('T')[0]} // Optional: Prevent future dates
                    />
                </Label>
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}
            <div className={styles.filterButton}>
                <button onClick={handleDateChange}>Apply Date Filter</button>
            </div>

        </div>
    );
};
