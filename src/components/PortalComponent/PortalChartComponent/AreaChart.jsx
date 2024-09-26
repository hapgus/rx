import { Chart } from 'react-google-charts';
import { ChartWrapper } from './ChartWrapper';

export const AreaChart = ({ data, options }) => {
  return (
    <ChartWrapper>
    <Chart
      chartType="AreaChart"
      width="100%"
      height="100%"
      data={data}
      options={options}
    />
    </ChartWrapper>
  );
};
