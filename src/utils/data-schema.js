// dataSchema.js
export const dataSchema = {
    visitorSnapshot: {
        headers: ['Date', 'Total Users', 'New Users'], // Column headers
        fields: ['date', 'totalUsers', 'newUsers'],    // Fields in your data
    },
    pageViewSnapshot: {
        headers: ['Date', 'Total Page Views'], // Column headers
        fields: ['date', 'screenPageViews'],    // Fields in your data
    },
    pageActivityOverview: {
        headers: [
            // 'Date',
            // 'Country', 'City','Region',
            // 'Total Users', 'New Users',
            // 'Event Name', 'Event Count',
            'Page', 'Page + Query String', 'Page Referrer', 'Page Views',
            'Sessions', 'Avg Session Duration',

        ], // Column headers
        fields: [
            // 'date',
            // 'country', 'city','region',
            // 'totalUsers', 'newUsers',
            // 'eventName', 'eventCount',
            'pagePath', 'landingPagePlusQueryString', 'pageReferrer', 'screenPageViews',
            'sessions', 'averageSessionDuration',

        ],
    },
    technicalActivityOverview: {
        headers: [
            'Date',
            'Operating System', 'Screen Resolution', 'Device Branding', 'Device Model',
            'Total Users', 'New Users',
        ],
        fields: [
            'date',
            'operatingSystem', 'screenResolution', 'mobileDeviceBranding', 'mobileDeviceModel',
            'totalUsers', 'newUsers',
        ],
    },
    searchActivityOverview: {
        headers: [
            'Date',
            'Count',
            'Event',

            'Users',
            'Product Category',
            'Product Sub category',

            "Product",
            "Search Type",
            "Resource Type",
            "Destination Url"

        ],
        fields: [
            'date',
            'eventCount',
            'eventName',
            'totalUsers',
            "customEvent:productCategory",
            "customEvent:productSubcategory",
            "customEvent:productName",
            "customEvent:searchType",
            "customEvent:resourceType",
            "customEvent:destinationUrl",

        ],
    },
    productActivityOverview: {
        headers: [
            'Date',
            'Count',
            'Event',

            'Users',
            'Product Category',
            'Product Sub category',
            "Product Name",

            "Resource Type",
            "Destination Url",
            "Page Path"
        ],
        fields: [
            'date',
            'eventCount',
            'eventName',
            'totalUsers',
            "customEvent:productCategory",
            "customEvent:productSubcategory",
            "customEvent:productName",

            "customEvent:resourceType",
            "customEvent:destinationUrl",
            "pagePath"

        ],
    },
    eventPageOverviewForLineChart: {
        headers: ['Date', 'Count'], // Column headers
        fields: ['date', 'eventCount'],    // Fields in your data
    },
    technicalActivityDeviceCategorySnapshot: {
        headers: ['Device Category', 'Total Users'], // Adjust headers if needed
        fields: ['deviceCategory', 'totalUsers'],    // The fields you're transforming
    },
    printActivityOverview: {
        headers: ['Event', 'Count'],
        fields: ["postPrintListAction", 'eventCount'],
    },
    searchTypeSnapshot: {
        headers: ['Search Type', 'Count'], // Column headers
        fields: ['searchEngine', 'searches'],    // Fields in your data
    },
    productDataOverview: {
        headers: [
            'Date',
            'Count',
            // 'Event',

            // 'Users',
            // 'Product Category',
            // 'Product Sub category',
            // "Product Name",

            // "Resource Type",
            // "Destination Url",
            // "Page Path"
        ],
        fields: [
            'date',
            'eventCount',
            // 'eventName',
            // 'totalUsers',
            // "customEvent:productCategory",
            // "customEvent:productSubcategory",
            // "customEvent:productName",

            // "customEvent:resourceType",
            // "customEvent:destinationUrl",
            // "pagePath"

        ],
    },
    // productActivityOverview: {
    //     headers: [
    //         'Date',
    //         'Count',
    //         'Event',

    //         'Users',
    //         'Product Category',
    //         'Product Sub category',

    //         "Product",
    //         "Search Type",
    //         "Resource Type",
    //         "Destination Url"

    //     ],
    //     fields: [
    //         'date',
    //         'eventCount',
    //         'eventName',
    //         'totalUsers',
    //         "customEvent:productCategory",
    //         "customEvent:productSubcategory",
    //         "customEvent:productName",
    //         "customEvent:searchType",
    //         "customEvent:resourceType",
    //         "customEvent:destinationUrl",

    //     ],
    // },

};


