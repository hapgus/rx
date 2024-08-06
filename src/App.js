
import { Route, Routes } from "react-router";
import MainLayout from './layout/MainLayout';
import Homepage from './pages/Main/Home/Homepage';
import ProductListBuilderPage from "./pages/Main/Product-List/product-list-builder-page";
import FeatureDefinitionsPage from "./pages/Main/Feature-Definitions/feature-definitions-page";
import WarrantiesPage from "./pages/Main/Warranties/warranties";
import StepUpChartPage from "./pages/Main/Step-Up-Charts/step-up-chart-pages";


const App = () => {

  const baseUrl = '/hapg'
  const renderMainRoutes = () => (
    <>
     <Route index element={<Homepage />} />
     <Route path='product-list-builder' element={<ProductListBuilderPage />} />
     <Route path='feature-definitions' element={<FeatureDefinitionsPage />} />
     <Route path='warranties' element={<WarrantiesPage />} />
     <Route path='step-up-chart/:categoryId' element={<StepUpChartPage />} />
    </>
  );

  return(
    <Routes>
      <Route path={baseUrl} element={<MainLayout />}>
      {renderMainRoutes()}
      </Route>
    </Routes>
  )
}


export default App;
