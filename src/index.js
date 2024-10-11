import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import { NotificationProvider } from './context/NotificationContext';
import { RetailerProvider } from './context/RetailerContext';
import { RoutingProvider } from './context/RoutingContext';
import {AuthProvider} from "./context/AuthContext";
import {SearchProvider} from "./context/SearchContext";
import {BuilderProvider} from "./context/BuilderContext"
import {ProductProvider} from "./context/ProductContext";
import {DataProvider} from './context/DataContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <BrowserRouter>
  
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

  </BrowserRouter>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
