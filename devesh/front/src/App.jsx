import React from 'react'
import AllRoutes from './allRoutes/AllRoutes'
import Footer from './components/user/Footer'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'



const App = () => {
  return (
     <>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <AllRoutes/>
        <Footer/>
    </LocalizationProvider>
    </>
  )
}

export default App ;



