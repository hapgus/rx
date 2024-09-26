
import { Route, Routes } from "react-router";
import MainLayout from './layout/Main/MainLayout';

import AuthLayout from "./layout/Auth/AuthLayout";

import PortalLayout from "./layout/Portal/PortalLayout";

import { useAuth } from "./hooks/auth-hook";

import { useLocation } from "react-router";

import { portalRoutes, authRoutes, accountRoutes, mainRoutes } from "./route-config";

const App = () => {

  const location = useLocation();

  const baseUrl = '/'
  const baseHDUrl = '/home-depot/*'
  const authUrl = '/member/*'
  const PortalUrl = '/portal/*'

  const { isAuthenticated, isSuperAdmin, isAdmin } = useAuth();



  // Render Routes from config
  const renderRoutes = (routes) => (
    routes.map(({ path, component }) => (
      <Route key={path} path={path} element={component} />
    ))
  );


  //  Render Portal Routes
   const renderPortalRoutes = () => (
    <>
      {portalRoutes.map(({ path, component, isSuperAdmin: adminOnly }) => (
        (!adminOnly || (adminOnly && isSuperAdmin)) && (
          <Route key={path} path={path} element={component} />
        )
      ))}
    </>
  );


return (
  <Routes location={location} key={location.pathname}>
    <Route path={baseUrl} element={<MainLayout />}>
      {renderRoutes(mainRoutes)}
      {isAuthenticated && renderRoutes(accountRoutes)}
    </Route>

    <Route path={baseHDUrl} element={<MainLayout />}>
      {renderRoutes(mainRoutes)}
    </Route>

    <Route path={authUrl} element={<AuthLayout />}>
      {renderRoutes(authRoutes)}
    </Route>

    <Route path={PortalUrl} element={<PortalLayout />}>
      {isSuperAdmin && isAdmin && renderPortalRoutes()}
    </Route>
  </Routes>
);
};


export default App;
