import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

import DemoReducer from './redux/DemoSlice'
import DataReducer from './redux/DataSclice';

let rootReducer = combineReducers({ DataReducer, DemoReducer });


let store = configureStore({
  reducer : rootReducer
});

createRoot(document.getElementById('root')).render(
  <StrictMode>

  <Provider store={store}>
  <BrowserRouter>
    <App />
    </BrowserRouter>
  </Provider>
  
  
  </StrictMode>,
)
