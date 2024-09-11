import { Chart } from 'react-google-charts';

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
        <Chart
            chartType="BarChart"
            width="100%"
            height="400px"
            data={data}
            options={options}
        />
    );
};
