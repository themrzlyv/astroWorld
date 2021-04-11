import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ToastProvider } from 'react-toast-notifications';
import {BrowserRouter as Router} from 'react-router-dom'
import App from './App';
import store from './Global/Store';

import './styles/main.scss'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <ToastProvider autoDismiss={2000}>
        <App />
      </ToastProvider>
    </Router>
  </Provider>,
  document.getElementById('app')
);
