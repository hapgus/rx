import { PortalPage } from "../../components/PortalComponent/PortalPageComponent/PortalPage/PortalPage";
import { useAuthUser } from "../../hooks/auth-hook";
import { useHttpClient } from "../../hooks/http-hook";
import { useEffect } from "react";
import { Chart } from 'react-google-charts';
import { useData } from "../../hooks/data-hook";
import { useChartConfig } from "../../hooks/chart-config-hook";
import { BarChart } from "../../components/PortalComponent/PortalChartComponent/BarChart";
import { transformWithSchema } from "../../utils/data-transformer";



const PortalDashboardPage = () => {
    const { sendRequest } = useHttpClient();
    const decodedToken = useAuthUser();
    const { data: barData } = useData('http://localhost:3005/data');
  // Getting the configuration for the bar chart
  const { config: barChartOptions } = useChartConfig('BarChart');

  let chartData = null;

  if (barData && barData.pageData) {
      try {
          // Transform the barData using the schema-based transformation
          chartData = transformWithSchema(barData.pageData, 'pageData');
         
      } catch (error) {
          console.error(`Error transforming data: ${error.message}`);
      }
  } else {
      console.warn('No pageData found in barData', barData);
  }

    console.log('bar data',barData)
    console.log('chart data', chartData)
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
             {chartData ? (
                <BarChart data={chartData} options={barChartOptions} />
            ) : (
                <div>No chart data available.</div>
            )}
            


        </PortalPage>

    )
}

export default PortalDashboardPage;