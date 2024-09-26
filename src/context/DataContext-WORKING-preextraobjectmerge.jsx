import { createContext, useState, useEffect, useMemo } from 'react';
import { parse, format, isBefore, isAfter, subDays, startOfMonth } from 'date-fns';

// Create the DataContext
export const DataContext = createContext({
    isDataState: { isData: null, isDataFilteredByDate: null },
    setIsDataState: () => {},
    isDateRangeState: { isStartDate: null, isEndDate: null },
    setIsDateRangeState: () => {},
    updateDateRange: () => {},
});

// Create the DataProvider component
export const DataProvider = ({ children, apiEndpoint }) => {
    const initialDataState = { isData: null, isDataFilteredByDate: null };
    const [isDataState, setIsDataState] = useState(initialDataState);

    const initialDateRangeState = { isStartDate: null, isEndDate: null };
    const [isDateRangeState, setIsDateRangeState] = useState(initialDateRangeState);

    // Fetch data and set default date range to last 7 days
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(apiEndpoint || "http://localhost:3005/data");
                const result = await response.json();

                const parsedData = result.visitorSnapshot.map(item => ({
                    ...item,
                    date: String(item.date), // Ensuring date is a string
                }));

                setIsDataState({ isData: parsedData, isDataFilteredByDate: parsedData });

                // Set default range to last 7 days
                const defaultEndDate = new Date();
                // const defaultStartDate = subDays(defaultEndDate, 7);
                const defaultStartDate = startOfMonth(defaultEndDate);
                updateDateRange(format(defaultStartDate, 'yyyy-MM-dd'), format(defaultEndDate, 'yyyy-MM-dd'));
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [apiEndpoint]);

    // Function to update the date range
    const updateDateRange = (newStartDate, newEndDate) => {
        if (!newStartDate || !newEndDate || isBefore(new Date(newEndDate), new Date(newStartDate))) {
            console.error('Invalid date range');
            return;
        }

        const adjustedStartDate = format(parse(newStartDate, 'yyyy-MM-dd', new Date()), 'yyyy-MM-dd');
        const adjustedEndDate = format(parse(newEndDate, 'yyyy-MM-dd', new Date()), 'yyyy-MM-dd');

        setIsDateRangeState({ isStartDate: adjustedStartDate, isEndDate: adjustedEndDate });
    };

    // Memoize the filtered data to optimize performance
    const filteredData = useMemo(() => {
        if (isDateRangeState.isStartDate && isDateRangeState.isEndDate && isDataState.isData) {
            const startDate = parse(isDateRangeState.isStartDate, 'yyyy-MM-dd', new Date());
            const endDate = parse(isDateRangeState.isEndDate, 'yyyy-MM-dd', new Date());

            return isDataState.isData.filter(item => {
                const itemDate = parse(String(item.date), 'yyyyMMdd', new Date()); // Adjust date format
                return !isBefore(itemDate, startDate) && !isAfter(itemDate, endDate);
            });
        }
        return isDataState.isData;
    }, [isDateRangeState.isStartDate, isDateRangeState.isEndDate, isDataState.isData]);

    // Update filtered data in the context
    useEffect(() => {
        setIsDataState(prevState => ({ ...prevState, isDataFilteredByDate: filteredData }));
    }, [filteredData]);

    return (
        <DataContext.Provider value={{
            isDataState,
            setIsDataState,
            isDateRangeState,
            setIsDateRangeState,
            updateDateRange,
        }}>
            {children}
        </DataContext.Provider>
    );
};
