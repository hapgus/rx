import { Route, Routes, Navigate } from "react-router";
import MainLayout from './layout/Main/MainLayout';
import AuthLayout from "./layout/Auth/AuthLayout";
import PortalLayout from "./layout/Portal/PortalLayout";
import { useAuth } from "./hooks/auth-hook";
import { useLocation } from "react-router";
import { portalRoutes, authRoutes, accountRoutes, mainRoutes } from "./route-config";
import NotFoundPage from "./pages/Main/Error/not-found";

// ProtectedRoute Component
const ProtectedRoute = ({ isAllowed, redirectPath = "/member/login", children }) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }
  return children;
};

const App = () => {
  const location = useLocation();

  const baseUrl = '/';
  const baseHDUrl = '/home-depot/*';
  const authUrl = '/member/*';
  const portalUrl = '/portal/*';

  const { isAuthenticated, isSuperAdmin, isAdmin } = useAuth();

  // Render Routes from config
  const renderRoutes = (routes) => (
    routes.map(({ path, component }) => (
      <Route key={path} path={path} element={component} />
    ))
  );

  // Render Portal Routes
  const renderPortalRoutes = () => (
    renderRoutes(
      portalRoutes.filter(({ isSuperAdmin: adminOnly }) => 
        !adminOnly || (adminOnly && isSuperAdmin)
      )
    )
  );

  return (
    <Routes location={location} key={location.pathname}>
      {/* Main Routes */}
      <Route path={baseUrl} element={<MainLayout />}>
        {renderRoutes(mainRoutes)}
        {isAuthenticated && renderRoutes(accountRoutes)}
      </Route>

      {/* Home Depot Specific Routes */}
      <Route path={baseHDUrl} element={<MainLayout />}>
        {renderRoutes(mainRoutes)}
      </Route>

      {/* Auth Routes */}
      <Route path={authUrl} element={<AuthLayout />}>
        {renderRoutes(authRoutes)}
      </Route>

      {/* Protected Portal Routes */}
      <Route
        path={portalUrl}
        element={
          <ProtectedRoute isAllowed={isSuperAdmin || isAdmin}>
            <PortalLayout />
          </ProtectedRoute>
        }
      >
        {renderPortalRoutes()}
      </Route>

      {/* Global 404 Fallback Route */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
