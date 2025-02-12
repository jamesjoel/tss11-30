 import React from 'react'
 import { Routes , Route } from 'react-router-dom'
import Home from '../pages/User.jsx/Home';
import About from '../pages/User.jsx/About';
import Login from '../pages/User.jsx/Login';
import Singup from '../pages/User.jsx/Singup';
import BusinessSingup from '../pages/Business/Singup';
import BusinessLogin from '../pages/Business/BusLogin'
import Signup2 from '../pages/User.jsx/signup2'
 
 
 const Allroutes = () => {
   return (
     <>
       <Routes>
        <Route path=''  element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/singup' element={<Singup/>}/>
        <Route path='/business/singup' element={<BusinessSingup/>}/>
        <Route path='/business/login' element={<BusinessLogin/>}/>
        <Route path='/singup2' element={<Signup2/>}/>
        

       </Routes>
     </>
   )
 }
 
 export default Allroutes;
 