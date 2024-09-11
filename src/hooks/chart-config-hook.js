// useChartConfig.js
export const useChartConfig = (chartType, chartTitle = '',  yAxisRange = { minValue: 0 }) => {
    const defaultConfigs = {
      BarChart: {
        title: chartTitle,
        chartArea: { width: '50%' },
        hAxis: {
          title: 'Value',
          minValue: 0,
        },
        vAxis: {
          title: 'Category',
        },
      },
      LineChart: {
        title: chartTitle,
        curveType: 'function',
        legend: { position: 'bottom' },
      },
      AreaChart: {
        title: chartTitle,
        // hAxis: { title: 'Date', titleTextStyle: { color: '#333' } },
        // hAxis: {titleTextStyle: { color: '#333' } },
        hAxis: {
          direction: 1, 
          // titleTextStyle: { color: 'red' },
          gridlines: { color: 'transparent' }  // Removes horizontal gridlines
        },
        vAxis: {
          minValue: yAxisRange.minValue,
                maxValue: yAxisRange.maxValue,  // Adjusts according to the passed config
          // minValue: 0,
          gridlines: { color: 'transparent' }  // Removes vertical gridlines
        },
        // vAxis: { minValue: 0 },
        chartArea: { width: '80%', height: '60%' },
        legend: { position: 'top' },
        backgroundColor: 'transparent',  // Transparent background
        // animation: { startup: true, duration: 1000, easing: 'inAndOut' }
        colors: ['#FF5733', 'blue'],
      },
      PieChart: {
        title: chartTitle,
        pieHole: 0.4,
      },
      TableChart: {
        title: chartTitle,
        showRowNumber: true, // Display row numbers
        width: '100%',
        height: '100%',
        allowHtml: true, // Enable HTML content in table cells
        sortColumn: 1, // Initial column to sort
        pageSize: 10,  // Number of rows per page
        page: 'enable', // Enable pagination
      },
    };
  
    const getConfig = () => defaultConfigs[chartType] || defaultConfigs.BarChart;
  
    return { config: getConfig() };
  };
  

  