import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import GlobalContextProvider from './contexts/GlobalContextProvider.jsx';
import MainRoutes from './routes.jsx';
import './styles/index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalContextProvider>
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
    </GlobalContextProvider>
  </React.StrictMode>,
)
