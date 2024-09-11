import { Chart } from 'react-google-charts';

export const AreaChart = ({ data, options }) => {
  return (
    <Chart
      chartType="AreaChart"
      width="100%"
      height="100%"
      data={data}
      options={options}
    />
  );
};
