import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { SearchProvider } from './context/SearchContext';
import { RetailerProvider } from './context/RetailerContext';
import { RoutingProvider } from './context/RoutingContext';
import { ProductProvider } from './context/ProductContext';
import { BuilderProvider } from './context/BuilderContext';
import { NotificationProvider } from './context/NotificationContext';
import { DataProvider } from './context/DataContext';
import { AuthProvider } from './context/AuthContext';
import { LoadingProvider } from './context/LoadingContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <LoadingProvider>
    <NotificationProvider>
      <RetailerProvider>
        <RoutingProvider>
          <AuthProvider>
            <ProductProvider>
              <BuilderProvider>
                <SearchProvider>
                  <DataProvider>
                   <App />  
                  </DataProvider>
                 
                </SearchProvider>
              </BuilderProvider>
            </ProductProvider>
          </AuthProvider>
        </RoutingProvider>
      </RetailerProvider>
    </NotificationProvider>
    </LoadingProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
