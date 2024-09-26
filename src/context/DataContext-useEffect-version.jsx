import { createContext, useState, useEffect } from 'react';

// Create the DataContext
export const DataContext = createContext({
    isDataState: { isData: null, isDataFilteredByDate: null },
    setIsDataState: () => { },
    isDateRangeState: { isStartDate: null, isEndDate: null },
    setIsDateRangeState: () => { },
    updateDateRange: () => { },
});

// Create the DataProvider component
export const DataProvider = ({ children, apiEndpoint }) => {
    // Initial state for data and filtered data
    const initialDataState = { isData: null, isDataFilteredByDate: null };
    const [isDataState, setIsDataState] = useState(initialDataState);

    // Initial state for the date range
    const initialDateRangeState = { isStartDate: null, isEndDate: null };
    const [isDateRangeState, setIsDateRangeState] = useState(initialDateRangeState);

    // Fetch data from the API
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:3005/data");
                const result = await response.json();
                setIsDataState({ isData: result, isDataFilteredByDate: result });
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    // Function to update the date range
    const updateDateRange = (newStartDate, newEndDate) => {
        setIsDateRangeState({ isStartDate: newStartDate, isEndDate: newEndDate });
    };

    // Filtering logic based on the date range
    useEffect(() => {
        if (isDateRangeState.isStartDate && isDateRangeState.isEndDate && isDataState.isData) {
            const filteredData = isDataState.isData.filter(item => {
                const itemDate = new Date(item.date);
                return (
                    itemDate >= new Date(isDateRangeState.isStartDate) &&
                    itemDate <= new Date(isDateRangeState.isEndDate)
                );
            });
            setIsDataState(prevState => ({ ...prevState, isDataFilteredByDate: filteredData }));
        } else {
            setIsDataState(prevState => ({ ...prevState, isDataFilteredByDate: isDataState.isData }));
        }
    }, [isDateRangeState, isDataState.isData]);

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
