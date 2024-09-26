import { createContext, useState, useEffect, useMemo } from 'react';
import { parse, format, isBefore, isAfter, subDays, startOfMonth } from 'date-fns';

// Create the DataContext
export const DataContext = createContext({
    isDataState: {
        isData: null,
        isDataFilteredByDate: null,
        
        technicalData: null,
        technicalDataFilteredByDate: null,
        pageData: null,
        pageDataFilteredByDate: null,
        searchData: null,
        searchDataFilteredByDate: null,
        productData: null,
        productDataFilteredByDate: null,
        
        printData: null,
        printDataFilteredByDate: null,

        eventGeoLocationData: null,
        eventGeoLocationDataFilteredByDate: null,
    },
    setIsDataState: () => { },
    isDateRangeState: { isStartDate: null, isEndDate: null },
    setIsDateRangeState: () => { },
    updateDateRange: () => { },
});

// Create the DataProvider component
export const DataProvider = ({ children, apiEndpoint }) => {
    const initialDataState = {
        isData: null,
        isDataFilteredByDate: null,
        technicalData: null,
        technicalDataFilteredByDate: null,
        pageData: null,
        pageDataFilteredByDate: null,
        searchData: null,
        searchDataFilteredByDate: null,
        productData: null,
        productDataFilteredByDate: null,
        printData: null,
        printDataFilteredByDate: null,
        eventGeoLocationData: null,
        eventGeoLocationDataFilteredByDate: null,
    };
    const [isDataState, setIsDataState] = useState(initialDataState);

    const initialDateRangeState = { isStartDate: null, isEndDate: null };
    const [isDateRangeState, setIsDateRangeState] = useState(initialDateRangeState);

    // Fetch data and set default date range to last 7 days
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(apiEndpoint || "http://localhost:3005/data");
                const result = await response.json();
console.log('result',result)
                // Ensure visitorSnapshot and technicalSnapshot exist
                const parsedData = result.visitorSnapshot ? result.visitorSnapshot.map(item => ({
                    ...item,
                    date: String(item.date), // Ensuring date is a string
                })) : [];

                const parsedTechnicalData = result.technicalSnapshot ? result.technicalSnapshot.map(item => ({
                    ...item,
                    date: String(item.date),
                })) : [];

                const parsedPageData = result.pageSnapshot ? result.pageSnapshot.map(item => ({
                    ...item,
                    date: String(item.date),
                })) : [];
                // const parsedSearchData = result.searchEventSnapshot ? result.searchEventSnapshot.map(item => ({
                    const parsedSearchData = result.searchQuerySnapshot ? result.searchQuerySnapshot.map(item => ({
                    ...item,
                    date: String(item.date),
                })) : [];
                
                const parsedProductData = result.productEventSnapshot ? result.productEventSnapshot.map(item => ({
                    ...item,
                    date: String(item.date),
                })) : [];
                const parsedPrintData = result.printEventSnapshot ? result.printEventSnapshot.map(item => ({
                    ...item,
                    date: String(item.date),
                })) : [];
                const parsedEventGeoLocationData = result.eventGeoLocationSnapshot ? result.eventGeoLocationSnapshot.map(item => ({
                    ...item,
                    date: String(item.date),
                })) : [];

                setIsDataState({
                    isData: parsedData,
                    isDataFilteredByDate: parsedData,
                    technicalData: parsedTechnicalData,
                    technicalDataFilteredByDate: parsedTechnicalData,
                    pageData: parsedPageData,
                    pageDataFilteredByDate: parsedPageData,
                    searchData: parsedSearchData,
                    searchDataFilteredByDate: parsedSearchData,
                    productData: parsedProductData,
                    productDataFilteredByDate: parsedProductData,
                    printData: parsedPrintData,
                    printDataFilteredByDate: parsedPrintData,
                    eventGeoLocationData: parsedEventGeoLocationData,
                    eventGeoLocationDataFilteredByDate: parsedEventGeoLocationData,
                });

                // Set default range to last 7 days
                const defaultEndDate = new Date();
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

    // Memoize and filter both datasets
    const filteredData = useMemo(() => {
        if (isDateRangeState.isStartDate && isDateRangeState.isEndDate) {
            const startDate = parse(isDateRangeState.isStartDate, 'yyyy-MM-dd', new Date());
            const endDate = parse(isDateRangeState.isEndDate, 'yyyy-MM-dd', new Date());

            const filteredVisitorData = isDataState.isData?.filter(item => {
                const itemDate = parse(String(item.date), 'yyyyMMdd', new Date());
                return !isBefore(itemDate, startDate) && !isAfter(itemDate, endDate);
            });

            const filteredTechnicalData = isDataState.technicalData?.filter(item => {
                const itemDate = parse(String(item.date), 'yyyyMMdd', new Date());
                return !isBefore(itemDate, startDate) && !isAfter(itemDate, endDate);
            });

            const filteredPageData = isDataState.pageData?.filter(item => {
                const itemDate = parse(String(item.date), 'yyyyMMdd', new Date());
                return !isBefore(itemDate, startDate) && !isAfter(itemDate, endDate);
            });
            const filteredSearchData = isDataState.searchData?.filter(item => {
                const itemDate = parse(String(item.date), 'yyyyMMdd', new Date());
                return !isBefore(itemDate, startDate) && !isAfter(itemDate, endDate);
            });
            const filteredProductData = isDataState.productData?.filter(item => {
                const itemDate = parse(String(item.date), 'yyyyMMdd', new Date());
                return !isBefore(itemDate, startDate) && !isAfter(itemDate, endDate);
            });
            const filteredPrintData = isDataState.printData?.filter(item => {
                const itemDate = parse(String(item.date), 'yyyyMMdd', new Date());
                return !isBefore(itemDate, startDate) && !isAfter(itemDate, endDate);
            });
            const filteredGeoLocationData = isDataState.eventGeoLocationData?.filter(item => {
                const itemDate = parse(String(item.date), 'yyyyMMdd', new Date());
                return !isBefore(itemDate, startDate) && !isAfter(itemDate, endDate);
            });
            return {
                isDataFilteredByDate: filteredVisitorData || [],
                technicalDataFilteredByDate: filteredTechnicalData || [],
                pageDataFilteredByDate: filteredPageData || [],
                searchDataFilteredByDate: filteredSearchData || [],
                productDataFilteredByDate: filteredProductData || [],
                printDataFilteredByDate: filteredPrintData || [],
                eventGeoLocationDataFilteredByDate: filteredGeoLocationData || [],
            };
        }
        return {
            isDataFilteredByDate: isDataState.isData || [],
            technicalDataFilteredByDate: isDataState.technicalData || [],
            pageDataFilteredByDate: isDataState.pageData || [],
            searchDataFilteredByDate: isDataState.searchData || [],
            productDataFilteredByDate: isDataState.productData || [],
            printDataFilteredByDate: isDataState.printData || [],
            eventGeoLocationDataFilteredByDate: isDataState.eventGeoLocationData || [],
        };
    }, [
        isDateRangeState.isStartDate, 
        isDateRangeState.isEndDate, 
        isDataState.isData, 
        isDataState.technicalData,
        isDataState.pageData,
        isDataState.searchData,
        isDataState.productData,
        isDataState.printData,
        isDataState.eventGeoLocationData,
    ]);

    // Update both filtered datasets in the state
    useEffect(() => {
        setIsDataState(prevState => ({
            ...prevState,
            isDataFilteredByDate: filteredData.isDataFilteredByDate,
            technicalDataFilteredByDate: filteredData.technicalDataFilteredByDate,
            pageDataFilteredByDate: filteredData.pageDataFilteredByDate,
            searchDataFilteredByDate: filteredData.searchDataFilteredByDate,
            productDataFilteredByDate: filteredData.productDataFilteredByDate,
            printDataFilteredByDate: filteredData.printDataFilteredByDate,
            eventGeoLocationDataFilteredByDate: filteredData.eventGeoLocationDataFilteredByDate,
        }));
    }, [filteredData]);
    console.log(isDataState)
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
