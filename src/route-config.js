import PortalDashboardPage from "./pages/Portal/portal";
import AnalyticsPage from "./pages/Portal/analytics";
import AddProductPage from "./pages/Portal/add-product";
import EditProductPage from "./pages/Portal/edit-product";
import ProductDirectoryPage from "./pages/Portal/product-directory";
import EditUserPage from "./pages/Portal/edit-user";
import AddUserPage from "./pages/Portal/add-user";
import AdminDirectoryPage from "./pages/Portal/admin-directory";
import UserDirectoryPage from "./pages/Portal/user-directory";
import NotFoundPage from "./pages/Main/Error/not-found";

import Homepage from "./pages/Main/Home/Homepage";
import ProductListBuilderPage from "./pages/Main/Product-List/product-list-builder-page";
import EditProductListBuilderPage from "./pages/Main/Product-List/edit-product-list-builder-page";
import FeatureDefinitionsPage from "./pages/Main/Feature-Definitions/feature-definitions-page";
import WarrantiesPage from "./pages/Main/Warranties/warranties";
import StepUpChartPage from "./pages/Main/Step-Up-Charts/step-up-chart-pages";
import AppliancePage from "./pages/Main/Appliance/appliance-page";
import ApplianceCategories from "./pages/Main/Appliance-Categories/appliance-categories-page";
import ApplianceCategoryPage from "./pages/Main/Category/appliance-category";
import ModelTransitionsPage from "./pages/Main/Model-Transitions/model-transitions-page";
import AddProductTemplatePage from "./pages/Portal/add-product-template";
import LoginPage from "./pages/Auth/Login/login-page";
import SignUpPage from "./pages/Auth/Sign-Up/sign-up-page";
import ForgotPasswordPage from "./pages/Auth/Forgot-Password/forgot-password-page";

import UserProfilePage from "./pages/Main/User-Account/user-profile";
import UserSavedListsPage from "./pages/Main/User-Account/user-saved-lists";

// Portal Routes
export const portalRoutes = [
  { path: 'dashboard', component: <PortalDashboardPage /> },
  { path: 'analytics', component: <AnalyticsPage /> },
  { path: 'add-product', component: <AddProductPage /> },
  { path: 'edit-product/:productId', component: <EditProductPage /> },
  { path: 'add-template-product/:productId/', component: <AddProductTemplatePage /> },
  { path: 'product-directory', component: <ProductDirectoryPage /> },
  { path: 'edit-user/:userId', component: <EditUserPage /> },
  { path: 'add-user', component: <AddUserPage />, isSuperAdmin: true },
  { path: 'admin-directory', component: <AdminDirectoryPage />, isSuperAdmin: true },
  { path: 'user-directory', component: <UserDirectoryPage /> },
  { path: '*', component: <NotFoundPage /> },
];

// Auth Routes
export const authRoutes = [
  { path: 'login', component: <LoginPage /> },
  { path: 'sign-up', component: <SignUpPage /> },
  { path: 'forgot-password', component: <ForgotPasswordPage /> },
];

// Account Routes
export const accountRoutes = [
  { path: 'profile', component: <UserProfilePage /> },
  { path: 'saved-lists', component: <UserSavedListsPage /> },
];

// Main Routes
export const mainRoutes = [
  { path: '', component: <Homepage /> },
  { path: 'product-list-builder', component: <ProductListBuilderPage /> },
  { path: 'edit-product-list-builder/:listId', component: <EditProductListBuilderPage /> },
  { path: 'feature-definitions', component: <FeatureDefinitionsPage /> },
  { path: 'warranties', component: <WarrantiesPage /> },
  { path: 'model-transitions', component: <ModelTransitionsPage /> },
  { path: 'appliances', component: <ApplianceCategories /> },
  { path: 'appliances/:categoryId/:productId', component: <AppliancePage /> },
  { path: 'appliances/:categoryId', component: <ApplianceCategoryPage /> },
  { path: 'step-up-chart/:categoryId', component: <StepUpChartPage /> },
  { path: '*', component: <NotFoundPage /> },
]
// export const mainRoutes = [
//   { path: '', component: <Homepage /> },
//   { path: 'product-list-builder', component: <ProductListBuilderPage /> },
//   { path: 'edit-product-list-builder/:listId', component: <EditProductListBuilderPage /> },
//   { path: 'feature-definitions', component: <FeatureDefinitionsPage /> },
//   { path: 'warranties', component: <WarrantiesPage /> },
//   { path: 'model-transitions', component: <ModelTransitionsPage /> },
//   { path: 'appliances', component: <ApplianceCategories /> },
//   { path: 'appliances/:categoryId/:productId', component: <AppliancePage /> },
//   { path: 'appliances/:categoryId', component: <ApplianceCategoryPage /> },
//   { path: 'step-up-chart/:categoryId', component: <StepUpChartPage /> },
//   { path: '*', component: <NotFoundPage /> },
// ];
