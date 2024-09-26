import { Chart } from 'react-google-charts';
import { ChartWrapper } from './ChartWrapper';

export const LineChart = ({ data, options }) => {
  return (
    // <ChartWrapper>
    <Chart
      chartType="LineChart"
      width="100%"
      height="100%"
      data={data}
      options={options}
    />
    // </ChartWrapper>

  );
};
