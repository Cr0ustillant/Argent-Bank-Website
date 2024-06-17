import React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

const root = document.getElementById('root');

const appRoot = ReactDOM.createRoot(root);

appRoot.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);