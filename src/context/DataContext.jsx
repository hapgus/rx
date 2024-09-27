import { createContext, useState, useEffect, useMemo } from 'react';
import { parse, format, isBefore, isAfter, startOfMonth, subDays } from 'date-fns';

// Create the DataContext
export const DataContext = createContext({
    isDataState: {
        isData: null,
        isDataFilteredByDate: null,

        technicalData: null,
        technicalDataFilteredByDate: null,

        searchData: null,
        searchDataFilteredByDate: null,

        resourceData: null,
        resourceDataFilteredByDate: null,

        printData: null,
        printDataFilteredByDate: null,

    },
    retailer: 'LG', // Default retailer
    setRetailer: () => { },
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

        searchData: null,
        searchDataFilteredByDate: null,

        resourceData: null,
        resourceDataFilteredByDate: null,


        printData: null,
        printDataFilteredByDate: null,

    };
    const [isDataState, setIsDataState] = useState(initialDataState);
    const [isDateRangeState, setIsDateRangeState] = useState({ isStartDate: null, isEndDate: null });
    const [retailer, setRetailer] = useState('LG'); // New state to track retailer

    // Fetch data and set default date range to last 7 days
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(apiEndpoint || `${process.env.REACT_APP_BACKEND_URL}data`);
                const result = await response.json();

                console.log('result',result)

                // NEW DATA STREAMS
                const parsedData = result.appDataOverview ? result.appDataOverview.map(item => ({
                    ...item,
                    date: String(item.date), // Ensure date is a string
                })) : [];


                const parsedTechnicalData = result.techDataOverview ? result.techDataOverview.map(item => ({
                    ...item,
                    date: String(item.date),
                })) : [];


                const parsedSearchData = result.searchDataOverview ? result.searchDataOverview.map(item => ({
                    ...item,
                    date: String(item.date),
                })) : [];

                const parsedResourceData = result.resourceDataOverview ? result.resourceDataOverview.map(item => ({
                    ...item,
                    date: String(item.date),
                })) : [];

                const parsedPrintData = result.printDataOverview ? result.printDataOverview.map(item => ({
                    ...item,
                    date: String(item.date),
                })) : [];


                setIsDataState({
                    isData: parsedData,
                    isDataFilteredByDate: parsedData,

                    technicalData: parsedTechnicalData,
                    technicalDataFilteredByDate: parsedTechnicalData,
                    // pageData: parsedPageData,
                    // pageDataFilteredByDate: parsedPageData,
                    searchData: parsedSearchData,
                    searchDataFilteredByDate: parsedSearchData,

                    resourceData: parsedResourceData,
                    resourceDataFilteredByDate: parsedResourceData,
                    // productData: parsedProductData,
                    // productDataFilteredByDate: parsedProductData,
                    printData: parsedPrintData,
                    printDataFilteredByDate: parsedPrintData,
                    // eventGeoLocationData: parsedEventGeoLocationData,
                    // eventGeoLocationDataFilteredByDate: parsedEventGeoLocationData,
                });

                // Set default range to the last 30 days
                const defaultEndDate = new Date();
                const defaultStartDate = subDays(defaultEndDate, 30);
                updateDateRange(format(defaultStartDate, 'yyyy-MM-dd'), format(defaultEndDate, 'yyyy-MM-dd'));
            } catch (error) {
                console.error('Error fetching data:', error);
            }
            // Set default range to last 7 days
            //     const defaultEndDate = new Date();
            //     const defaultStartDate = startOfMonth(defaultEndDate);
            //     updateDateRange(format(defaultStartDate, 'yyyy-MM-dd'), format(defaultEndDate, 'yyyy-MM-dd'));
            // } catch (error) {
            //     console.error('Error fetching data:', error);
            // }

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

    // Filter data based on retailer selection
    const filterDataByRetailer = (data, retailer) => {
        if (!data) return [];
        return data.filter(item => {
            // Ensure item.pagePath exists before calling .includes()
            if (!item.pagePath) return false;
            return retailer === 'Home Depot'
                ? item.pagePath.includes('/home-depot/')
                : !item.pagePath.includes('/home-depot/');
        });
    };

    // Memoize and filter both datasets by date and retailer
    const filteredData = useMemo(() => {
        if (isDateRangeState.isStartDate && isDateRangeState.isEndDate) {
            const startDate = parse(isDateRangeState.isStartDate, 'yyyy-MM-dd', new Date());
            const endDate = parse(isDateRangeState.isEndDate, 'yyyy-MM-dd', new Date());

            const filterByDateAndRetailer = (data) => {
                return filterDataByRetailer(data?.filter(item => {
                    const itemDate = parse(String(item.date), 'yyyyMMdd', new Date());
                    return !isBefore(itemDate, startDate) && !isAfter(itemDate, endDate);
                }), retailer);
            };

            return {
                isDataFilteredByDate: filterByDateAndRetailer(isDataState.isData),
                technicalDataFilteredByDate: filterByDateAndRetailer(isDataState.technicalData),
                // pageDataFilteredByDate: filterByDateAndRetailer(isDataState.pageData),
                searchDataFilteredByDate: filterByDateAndRetailer(isDataState.searchData),

                resourceDataFilteredByDate: filterByDateAndRetailer(isDataState.resourceData),
                // productDataFilteredByDate: filterByDateAndRetailer(isDataState.productData),
                printDataFilteredByDate: filterByDateAndRetailer(isDataState.printData),
                // eventGeoLocationDataFilteredByDate: filterByDateAndRetailer(isDataState.eventGeoLocationData),
            };
        }
        return {
            isDataFilteredByDate: filterDataByRetailer(isDataState.isData, retailer),
            technicalDataFilteredByDate: filterDataByRetailer(isDataState.technicalData, retailer),
            // pageDataFilteredByDate: filterDataByRetailer(isDataState.pageData, retailer),
            searchDataFilteredByDate: filterDataByRetailer(isDataState.searchData, retailer),

            resourceDataFilteredByDate: filterDataByRetailer(isDataState.resourceData, retailer),
            // productDataFilteredByDate: filterDataByRetailer(isDataState.productData, retailer),
            printDataFilteredByDate: filterDataByRetailer(isDataState.printData, retailer),
            // eventGeoLocationDataFilteredByDate: filterDataByRetailer(isDataState.eventGeoLocationData, retailer),
        };
    }, [
        isDateRangeState.isStartDate,
        isDateRangeState.isEndDate,
        isDataState.isData,
        isDataState.technicalData,
        // isDataState.pageData,
        isDataState.searchData,
        isDataState.resourceData,
        // isDataState.productData,
        isDataState.printData,
        // isDataState.eventGeoLocationData,
        retailer,
    ]);

    // Update filtered data in the state
    useEffect(() => {
        setIsDataState(prevState => ({
            ...prevState,
            isDataFilteredByDate: filteredData.isDataFilteredByDate,
            technicalDataFilteredByDate: filteredData.technicalDataFilteredByDate,
            // pageDataFilteredByDate: filteredData.pageDataFilteredByDate,
            searchDataFilteredByDate: filteredData.searchDataFilteredByDate,

            resourceDataFilteredByDate: filteredData.resourceDataFilteredByDate,
            // productDataFilteredByDate: filteredData.productDataFilteredByDate,
            printDataFilteredByDate: filteredData.printDataFilteredByDate,
            // eventGeoLocationDataFilteredByDate: filteredData.eventGeoLocationDataFilteredByDate,
        }));
    }, [filteredData]);

    console.log({ isDataState, isDateRangeState, filteredData, retailer })
    return (
        <DataContext.Provider value={{
            isDataState,
            setIsDataState,
            isDateRangeState,
            setIsDateRangeState,
            retailer,
            setRetailer,
            updateDateRange,
        }}>
            {children}
        </DataContext.Provider>
    );
};
