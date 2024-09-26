// dataSchema.js
export const dataSchema = {
    visitorSnapshot: {
        headers: ['Date', 'Total Users', 'New Users'], // Column headers
        fields: ['date', 'totalUsers', 'newUsers'],    // Fields in your data
    },
    searchTypeSnapshot: {
        headers: ['Search Type', 'Count'], // Column headers
        fields: ['searchEngine', 'searches'],    // Fields in your data
    },
    productEventSnapShotPostPrintAction: {
        headers: ['What they did after print', 'Count'], // Column headers
        fields: ['postPrintListAction', 'eventCount'],    // Fields in your data
    },
    eventPageOverview: {
        headers: ['Page', 'Count'], // Column headers
        fields: ['pagePath', 'totalEventCount'],    // Fields in your data
    },
    eventPageOverviewForLineChart: {
        headers: ['Date', 'Count'], // Column headers
        fields: ['date', 'eventCount'],    // Fields in your data
    },
    eventPageOverviewForBarChart: {
        headers: ['Page Type', 'Count'], // Column headers
        fields: ['pageCategory', 'totalEventCount'],    // Fields in your data
    },
    visitorOverview: {
        headers: [
            'Date',
            'Total Users',
            'New Users',
            'Avg Session Duration',
            'City',
            'Country',
            'Page',
            'Page Views',
            'Sessions',
            'User Engagement Time'

        ], // Column headers
        fields: [
            'date',
            'totalUsers',
            'newUsers',
            'averageSessionDuration',
            'city',
            'country',
            'pagePath',
            'screenPageViews',
            'sessions',
            'userEngagement'

        ],
    },
    pageViewSnapshot: {
        headers: ['Date', 'Total Page Views'], // Column headers
        fields: ['date', 'screenPageViews'],    // Fields in your data
    },
    sessionSnapshot: {
        headers: ['Date', 'Total Sessions'], // Column headers
        fields: ['date', 'sessions'],    // Fields in your data
    },
    engagementTimeSnapshot: {
        headers: ['Date', 'Total Sessions'], // Column headers
        fields: ['date', 'userEngagementDuration'],    // Fields in your data
    },
    eventSnapshot: {
        headers: ['Date', 'Count'], // Column headers
        fields: ['date', 'eventCount'],    // Fields in your data
    },
    deviceSnapshot: {
        headers: ['Device', 'Count'], // Column headers
        fields: ['deviceCategory', 'totalUsers'],    // Fields in your data
    },

    // timeSeriesPageData: {
    //     headers: ['Date', 'Active Users', 'Total Users'], // Column headers
    //     fields: ['date', 'activeUsers', 'totalUsers'],    // Fields in your data
    //     // headers: ['Date', 'Page Path', 'Active Users', 'Total Users'], // Column headers
    //     // fields: ['date', 'pagePath', 'activeUsers', 'totalUsers'], // Fields in your data
    // },
    pageData: {

        headers: ['Date', 'Active Users', 'Total Users'], // Column headers
        fields: ['date', 'activeUsers', 'totalUsers'],    // Fields in your data

        // WORKS FOR BAR CHART
        // headers: ['Active Users', 'Total Users'], // Column headers
        // fields: ['activeUsers', 'totalUsers'], // Fields in your data


        // headers: ['Page Path', 'Active Users', 'Total Users'], // Column headers
        // fields: ['pagePath', 'activeUsers', 'totalUsers'], // Fields in your data
        // headers: ['Date', 'Page Path', 'Active Users', 'Total Users'], // Column headers
        // fields: ['date', 'pagePath', 'activeUsers', 'totalUsers'], // Fields in your data
    },
    eventData: {
        headers: ['Event Name', 'Count', 'Date'],
        fields: ['eventName', 'eventCount', 'date'],
    },
    userData: {
        headers: ['User Name', 'Sessions'],
        fields: ['userName', 'sessionCount'],
    },

    screenResolutionSnapshot: {
        headers: ['Screen Res', 'Users'],
        fields: ['screenResolution', 'totalUsers'],
    },
    screenResolutionOperatingSystemSnapshot: {
        headers: ['Operating System', 'Users'],
        fields: ['operatingSystem', 'totalUsers'],
    },
    technicalOverview: {
        headers: ['Device Category', 'Screen Resolution', 'Operating System', 'Date', 'Users'],
        fields: ['deviceCategory', 'screenResolution', 'operatingSystem', 'date', 'totalUsers'],
    },
    userOverview: {
        headers: [
            'Date',
            // 'Active Users',
            'New Users',
            'City',
            'Country',
            // 'Sessions',
            // 'Device Category',
            // 'Operating System',
            // 'Screen Resolution',
            'Event Name',
            'Event Count',
            'Page Path'
        ],
        fields:
            [
                'date',
                // 'activeUsers',
                'newUsers',
                'city',
                'country',
                // 'sessions',
                // 'deviceCategory',
                // 'operatingSystem',
                // 'screenResolution',
                'eventName',
                'eventCount',
                'pagePath',

            ],
    },
};


