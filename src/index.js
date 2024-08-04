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



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <NotificationProvider>
      <RetailerProvider>
        <RoutingProvider>
          <ProductProvider>
            <BuilderProvider>
              <SearchProvider>
                <App />
              </SearchProvider>
            </BuilderProvider>
          </ProductProvider>
        </RoutingProvider>
      </RetailerProvider>
    </NotificationProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
