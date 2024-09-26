import { Chart } from 'react-google-charts';
import { ChartWrapper } from './ChartWrapper';

export const PieChart = ({ data, options }) => {
  return (
    <ChartWrapper>
      <Chart
        chartType="PieChart"
        width="100%"
        height="100%"
        data={data}
        options={options}
      />
    </ChartWrapper>
  );
};
