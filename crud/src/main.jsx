import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import App2 from './App2.jsx'
import App3 from './App3.jsx'
import App4 from './App4.jsx'
import App5 from './App5.jsx'
import App6 from './App6.jsx'
import App7 from './App7.jsx'
import App8 from './App8.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App8 />
    </BrowserRouter>
  </StrictMode>,
)
