import { Route, Routes, Navigate } from "react-router";
import MainLayout from './layout/Main/MainLayout';
import AuthLayout from "./layout/Auth/AuthLayout";
import PortalLayout from "./layout/Portal/PortalLayout";
import { useAuth } from "./hooks/auth-hook";
import { useLocation } from "react-router";
import LoginPage from "./pages/Auth/Login/login-page";
import SignUpPage from "./pages/Auth/Sign-Up/sign-up-page";
import { portalRoutes, authRoutes, accountRoutes, mainRoutes } from "./route-config";
import ApplianceCategories from "./pages/Main/Appliance-Categories/appliance-categories-page";
import ModelTransitionsPage from "./pages/Main/Model-Transitions/model-transitions-page";
import ProductListBuilderPage from "./pages/Main/Product-List/product-list-builder-page";
import ForgotPasswordPage from "./pages/Auth/Forgot-Password/forgot-password-page";
import ApplianceCategoryPage from "./pages/Main/Category/appliance-category";
import FeatureDefinitionsPage from "./pages/Main/Feature-Definitions/feature-definitions-page";
import WarrantiesPage from "./pages/Main/Warranties/warranties";
import StepUpChartPage from "./pages/Main/Step-Up-Charts/step-up-chart-pages";
import AppliancePage from "./pages/Main/Appliance/appliance-page";
import NotFoundPage from "./pages/Main/Error/not-found";

import Homepage from './pages/Main/Home/Homepage';

import PortalDashboardPage from "./pages/Portal/portal";
import AddProductPage from "./pages/Portal/add-product"
import AnalyticsPage from "./pages/Portal/analytics";
import EditProductPage from "./pages/Portal/edit-product";
import AddProductTemplatePage from "./pages/Portal/add-product-template";
import EditUserPage from "./pages/Portal/edit-user";
import ProductDirectoryPage from "./pages/Portal/product-directory";
import AddUserPage from "./pages/Portal/add-user";
import UserDirectoryPage from "./pages/Portal/user-directory";
import AdminDirectoryPage from "./pages/Portal/admin-directory";
import UserProfilePage from "./pages/Main/User-Account/user-profile";

// ProtectedRoute Component

const App = () => {
  const location = useLocation();

  const baseUrl = '/';

  const baseHDUrl = '/home-depot/*';


  const { isAuthenticated, isSuperAdmin, isAdmin, isApprovedUser } = useAuth();

  const ProtectedRoute = ({ isAllowed, redirectPath = "/member/login", children }) => {
    console.log(isAllowed)
    console.log(isAdmin, isApprovedUser )
    if (!isAllowed) {
      return <Navigate to={redirectPath} replace />;
    }
    return children;
  };
  

  const renderPortalRoutes = () => (

    <>
      <Route path='/portal/overview/' element={<PortalDashboardPage />} />
      <Route path='portal/analytics' element={<AnalyticsPage />} />

      <Route path='/portal/add-product' element={<AddProductPage />} />
      <Route path='/portal/edit-product/:productId/' element={<EditProductPage />} />
      <Route path='/portal/add-template-product/:productId/' element={<AddProductTemplatePage />} />
      <Route path='/portal/product-directory' element={<ProductDirectoryPage />} />

      <Route path='/portal/edit-user/:userId' element={<EditUserPage />} />
      {
        isSuperAdmin &&
        <>
          <Route path='/portal/add-user' element={<AddUserPage />} />
          <Route path='/portal/admin-directory' element={<AdminDirectoryPage />} />
        </>
      }

      <Route path='/portal/user-directory' element={<UserDirectoryPage />} />

      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </>

  )

  const renderAccountRoutes = () => (
    <>
      <Route path='profile' element={<UserProfilePage />} />
      {/* <Route path='saved-lists' element={<UserSavedListsPage />} /> */}
    </>
  )


  const renderAuthRoutes = () => (
    <>

      <Route path='/login/' element={<LoginPage />} />
      <Route path='/sign-up/' element={<SignUpPage />} />
      <Route path='/forgot-password/' element={<ForgotPasswordPage />} />
      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </>
  )
  const renderMainRoutes = () => (
    <>
      <Route index element={<Homepage />} />
      {/* <Route path="*" element={<NotFoundPage />} /> */}
      <Route path='appliances/' element={<ApplianceCategories />} />
      <Route path='appliances/:categoryId' element={<ApplianceCategoryPage />} />
      <Route path='appliances/:categoryId/:productId/' element={<AppliancePage />} />
      <Route path='product-list-builder/' element={<ProductListBuilderPage />} />

      <Route path='feature-definitions/' element={<FeatureDefinitionsPage />} />
      <Route path='warranties/' element={<WarrantiesPage />} />
      <Route path='model-transitions/' element={<ModelTransitionsPage />} />
      <Route path='step-up-chart/:categoryId' element={<StepUpChartPage />} />
      <Route path="*" element={<NotFoundPage />} />
      {/*<Route path='edit-product-list-builder/:listId' element={<EditProductListBuilderPage />} />  */}
    </>
  );

  return (
    <Routes >
      <Route path={baseUrl} element={<MainLayout />}>
        {renderMainRoutes()}
        {isAuthenticated && renderAccountRoutes()}
      </Route>
      <Route path={baseHDUrl} element={<MainLayout />}>
        {renderMainRoutes()}
      </Route>
      <Route path={baseUrl} element={<AuthLayout />}>
        {renderAuthRoutes()}

      </Route>

      <Route element={

        <ProtectedRoute isAllowed={isAdmin || isSuperAdmin} redirectPath="/login/">
          <PortalLayout />
        </ProtectedRoute>
      }>
        {(isSuperAdmin || isAdmin) && renderPortalRoutes()}
        {/* {isSuperAdmin && isAdmin && renderPortalRoutes()} */}
      </Route>

    </Routes>
  );
};

export default App;
