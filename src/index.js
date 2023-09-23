import React from 'react';
import ReactDOM from 'react-dom/client';
import './vendor/fonts.css';
import './vendor/normalize.css';
import './index.css';
import App from './components/App/App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
