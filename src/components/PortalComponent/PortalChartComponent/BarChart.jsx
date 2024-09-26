import { Chart } from 'react-google-charts';
import { ChartWrapper } from './ChartWrapper';

const defaultData = [
    ['Category', 'Value'],
    ['A', 100],
    ['B', 200],
    ['C', 300],
];

const defaultOptions = {
    title: 'Bar Chart Example',
    chartArea: { width: '50%' },
    hAxis: {
        title: 'Value',
        minValue: 0,
    },
    vAxis: {
        title: 'Category',
    },
};

export const BarChart = ({ data = defaultData, options = defaultOptions }) => {
    return (
        <ChartWrapper>
            <Chart
                chartType="BarChart"
                width="100%"
                height="100%"
                data={data}
                options={options}
            />
        </ChartWrapper>
    );
};
