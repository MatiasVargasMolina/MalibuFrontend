import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from 'react-redux';
import {store} from "./redux/store"
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { apiSlice } from './redux/slices/api/apiSlice';
ReactDOM.createRoot(document.getElementById('root')).render(
  <ApiProvider api={apiSlice}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ApiProvider>
)
