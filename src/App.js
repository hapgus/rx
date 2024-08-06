
import { Route, Routes } from "react-router";
import MainLayout from './layout/MainLayout';
import Homepage from './pages/Main/Home/Homepage';
import ProductListBuilderPage from "./pages/Main/ProductList/ProductListBuilderPage";


const App = () => {

  const baseUrl = '/hapg'
  const renderMainRoutes = () => (
    <>
     <Route index element={<Homepage />} />
     <Route path='product-list-builder' element={<ProductListBuilderPage />} />
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
