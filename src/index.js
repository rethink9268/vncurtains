import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { DesignsProvider } from './contexts/designs_context.js';
import { PortfolioProvider } from './contexts/portfolio_context.js'
import { ProductsProvider } from './contexts/products_context.js';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DesignsProvider>
      <PortfolioProvider>
        <ProductsProvider>
          <App />
        </ProductsProvider>
      </PortfolioProvider>
    </DesignsProvider>
  </React.StrictMode>
);


