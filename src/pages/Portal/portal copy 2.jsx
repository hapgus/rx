import { PortalPage } from "../../components/PortalComponent/PortalPageComponent/PortalPage/PortalPage";
import { useAuthUser } from "../../hooks/auth-hook";
import { useHttpClient } from "../../hooks/http-hook";
import { useEffect } from "react";
import { Chart } from 'react-google-charts';
import { useData } from "../../hooks/data-hook";
import { useChartConfig } from "../../hooks/chart-config-hook";
import { BarChart } from "../../components/PortalComponent/PortalChartComponent/BarChart";


export const data = [
    ["Year", "Sales", "Expenses", "Profit"],
    ["2014", 1000, 400, 200],
    ["2015", 1170, 460, 250],
    ["2016", 660, 1120, 300],
    ["2017", 1030, 540, 350],
];

// export const options = {
//     colors: ['#007bff'],
//     backgroundColor: 'red',
//     chart: {
//         title: "Company Performance",
//         subtitle: "Sales, Expenses, and Profit: 2014-2017",
//         backgroundColor: '#f7f7f7',
//     },
// };

export const options = {
    colors: ['#007bff', 'red', 'green'],
    title: "Company Performance",
    subtitle: "Sales, Expenses, and Profit: 2014-2017",
    backgroundColor:  'transparent'
};


const PortalDashboardPage = () => {
    const { sendRequest } = useHttpClient();
    const decodedToken = useAuthUser();
    const { data: barData, loading: barLoading, error: barError } = useData('http://localhost:3005/data');
  // Getting the configuration for the bar chart
  const { config: barChartOptions } = useChartConfig('BarChart');


    console.log(barData)
    // SETTING FORM DATA
    // useEffect(() => {

    //     if (decodedToken) {

    //         const fetchData = async () => {
    //             try {
    //                 // const response = await sendRequest(` ${process.env.REACT_APP_BACKEND_URL}data`);
    //                 const response = await sendRequest(`http://localhost:3005/data`,)

    //                 // const productData = await response.responseData.product;

    //                 console.log('data', response)

    //             } catch (err) {
    //                 console.error('Error fetching data:', err);
    //             }
    //         };

    //         fetchData();
    //     }
    // }, [decodedToken]);


    return (

        <PortalPage
            pageTitle={`Welcome, ${decodedToken.firstName} ${decodedToken.lastName}`}
            pageDescription='LG Product Guide Administrator Portal'

            breadcrumb='Overview'
            breadcrumbDirectory="Dashboard"
            breadcrumbDirectoryLink="/portal/dashboard"
            bodyTitle='Summary'
        >
            <BarChart data={barData} options={barChartOptions} />
            <Chart
                chartType="ScatterChart"
                data={[["Age", "Weight"], [4, 5.5], [8, 12]]}
                width="100%"
                height="400px"
                legendToggle
            />

            <Chart
                chartType="Bar"
                // width="100px"
                // height="400px"
                data={[
                    ["Year", "Sales", "Expenses", "Profit"],
                    ["2014", 1000, 400, 200],
                    ["2015", 1170, 460, 250],
                    ["2016", 660, 1120, 300],
                    ["2017", 1030, 540, 350],
                ]}
                options={options}
            />


        </PortalPage>

    )
}

export default PortalDashboardPage;