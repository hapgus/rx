
import { Route, Routes } from "react-router";
import MainLayout from './layout/Main/MainLayout';
import Homepage from './pages/Main/Home/Homepage';
import ProductListBuilderPage from "./pages/Main/Product-List/product-list-builder-page";
import EditProductListBuilderPage from "./pages/Main/Product-List/edit-product-list-builder-page";
import FeatureDefinitionsPage from "./pages/Main/Feature-Definitions/feature-definitions-page";
import WarrantiesPage from "./pages/Main/Warranties/warranties";
import StepUpChartPage from "./pages/Main/Step-Up-Charts/step-up-chart-pages";
import AppliancePage from "./pages/Main/Appliance/appliance-page";
import ApplianceCategories from "./pages/Main/Appliance-Categories/appliance-categories-page";
import ApplianceCategoryPage from "./pages/Main/Category/appliance-category";
import NotFoundPage from "./pages/Main/Error/not-found";
import AuthLayout from "./layout/Auth/AuthLayout";
import LoginPage from "./pages/Auth/Login/login-page";
import SignUpPage from "./pages/Auth/Sign-Up/sign-up-page";
import ForgotPasswordPage from "./pages/Auth/Forgot-Password/forgot-password-page";
import PortalDashboardPage from "./pages/Portal/portal";
import AddProductPage from "./pages/Portal/add-product"
import PortalLayout from "./layout/Portal/PortalLayout";
import AnalyticsPage from "./pages/Portal/analytics";
import EditProductPage from "./pages/Portal/edit-product";
import AddProductTemplatePage from "./pages/Portal/add-product-template";
import EditUserPage from "./pages/Portal/edit-user";

import UserDirectoryPage from "./pages/Portal/user-directory";
import AdminDirectoryPage from "./pages/Portal/admin-directory";

import ProductDirectoryPage from "./pages/Portal/product-directory";
import AddUserPage from "./pages/Portal/add-user";
import UserProfilePage from "./pages/Main/User-Account/user-profile";
import UserSavedListsPage from "./pages/Main/User-Account/user-saved-lists";

const App = () => {

  const baseUrl = '/'
   const baseHDUrl = '/home-depot/*'
  const authUrl = '/member/*'
  const PortalUrl = '/portal/*'
  const renderAuthRoutes = () => (
    <>
      <Route path='login' element={<LoginPage />} />
      <Route path='sign-up' element={<SignUpPage />} />
      <Route path='forgot-password' element={<ForgotPasswordPage />} />
    </>
  );

  const renderPortalRoutes = () => (
    <>
      <Route path='dashboard' element={<PortalDashboardPage />} />
      <Route path='analytics' element={<AnalyticsPage />} />

      <Route path='add-product' element={<AddProductPage />} />
      <Route path='edit-product/:productId/' element={<EditProductPage />} />
      <Route path='add-template-product/:productId/' element={<AddProductTemplatePage />} />
      <Route path='product-directory' element={<ProductDirectoryPage />} />

      <Route path='edit-user/:userId' element={<EditUserPage />} />
      <Route path='add-user' element={<AddUserPage />} />
      <Route path='user-directory' element={<UserDirectoryPage />} />
      <Route path='admin-directory' element={<AdminDirectoryPage />} />

      <Route path="*" element={<NotFoundPage />} />
    </>
  )
  const renderAccountRoutes = () => (
    <>
      <Route path='profile' element={<UserProfilePage />} />
      <Route path='saved-lists' element={<UserSavedListsPage />} />
    </>
  )


  const renderMainRoutes = () => (
    <>
      <Route index element={<Homepage />} />
      <Route path='product-list-builder' element={<ProductListBuilderPage />} />
      <Route path='edit-product-list-builder/:listId' element={<EditProductListBuilderPage />} />
      <Route path='feature-definitions' element={<FeatureDefinitionsPage />} />
      <Route path='warranties' element={<WarrantiesPage />} />
      <Route path='appliances' element={<ApplianceCategories />} />
      <Route path='appliances/:categoryId/:productId' element={<AppliancePage />} />
      <Route path='appliances/:categoryId' element={<ApplianceCategoryPage />} />
      <Route path='step-up-chart/:categoryId' element={<StepUpChartPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </>
  );

  return (
    <Routes>
      <Route path={baseUrl} element={<MainLayout />}>
        {renderMainRoutes()}
        {renderAccountRoutes()}
      </Route>
      <Route path={baseHDUrl} element={<MainLayout />}>
        {renderMainRoutes()}
      
      </Route>
      <Route path={authUrl} element={<AuthLayout />}>
        {renderAuthRoutes()}
      </Route>
      <Route path={PortalUrl} element={<PortalLayout />}>
        {renderPortalRoutes()}

      </Route>
    </Routes>
  )
}


export default App;
