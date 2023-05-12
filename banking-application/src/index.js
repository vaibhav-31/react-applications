import React from 'react';
import { createRoot } from 'react-dom/client';
import AppRouter from './Router/appRouter';
import { Provider } from 'react-redux';
import store from './Store/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Css/main.scss';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>
);