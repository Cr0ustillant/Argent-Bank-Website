import React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './redux/store';
import { Provider } from "react-redux";

const root = document.getElementById('root');

const appRoot = ReactDOM.createRoot(root);

appRoot.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);