// useChartConfig.js
export const useChartConfig = (
  chartType,
  chartTitle = '',
  hAxisTitle = '',
  vAxisTitle = '',
  yAxisRange = { minValue: 0 },
  colors = ['#3366CC'],
  showLegend = true // Add the showLegend parameter with a default value

) => {
  const defaultConfigs = {
    BarChart: {
      title: chartTitle,
      // chartArea: { width: '80%', height: '50%' },
      hAxis: {
        title: hAxisTitle,
        direction: 1,
      },

      vAxis: { title:vAxisTitle, },
      legend: { position: showLegend ? 'top' : 'none' },
      colors:colors,
    },
    ColumnChart: {
      title: chartTitle,
      chartArea: { width: '80%', height: '50%' },
      hAxis: {
        title: hAxisTitle,
        gridlines: { color: 'transparent' },
      },
      vAxis: {
        title: vAxisTitle,
        minValue: yAxisRange.minValue,
        maxValue: yAxisRange.maxValue,
      },
      legend: { position: 'top' },
      colors: ['#FF5733', 'blue'],
    },
    LineChart: {
      title: chartTitle,
      curveType: 'function',
      legend: { position: 'bottom' },
    },


    // AREA CHART
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
      
      chartArea: { width: '80%', height: '50%' },
      legend: { position: 'top' },
      backgroundColor: 'transparent',  // Transparent background
      // animation: { startup: true, duration: 1000, easing: 'inAndOut' }
      colors: ['#FF5733', 'blue'],
    },



    PieChart: {
      title: chartTitle,
      chartArea: { width: '80%', height: '50%' },
      legend: { position: 'top' },

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


