import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import {configureStore, combineReducers} from '@reduxjs/toolkit'
import MailReducer from './redux/MailSlice'

let rootReducer = combineReducers({ MailReducer })
let store = configureStore({
  reducer : rootReducer
})



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>
  </StrictMode>,
)
