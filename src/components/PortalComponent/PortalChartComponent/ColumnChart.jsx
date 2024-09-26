

import { Chart } from 'react-google-charts';

export const ColumnChart = ({ data, options }) => {
  return (
    <Chart
     chartType="ColumnChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
};
