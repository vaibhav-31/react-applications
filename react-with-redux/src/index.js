import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import accountReducer from './slices/accountSlice';
import bonusReducer from './slices/bonusSlice';
import { Provider } from 'react-redux';
import { adminApi } from './api/adminSlice';

const store = configureStore({
  reducer: {
    account: accountReducer,
    bonus: bonusReducer,
    [adminApi.reducerPath]: adminApi.reducer
  },
  middleware: (getDefaultMiddleware) => 
  getDefaultMiddleware().concat(adminApi.middleware),
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>
);