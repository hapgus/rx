import { Chart } from 'react-google-charts';

export const LineChart = ({ data, options }) => {
  return (
    <Chart
      chartType="LineChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
};
