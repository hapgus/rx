import { Chart } from 'react-google-charts';

export const TableChart = ({ data, options }) => {
  return (
    <Chart
      chartType="Table"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
};
