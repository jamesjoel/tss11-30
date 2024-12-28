import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../pages/user/Home'
import About from '../pages/user/About'
import Login from '../pages/user/Login'
import Signup from '../pages/user/Signup'

import BusinessLogin from '../pages/business/Login'
import BusinessSignup from '../pages/business/Signup'

const AllRoutes = () => {
  return (
    <>

    <Routes>
        <Route path='' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
        <Route path='business/signup' element={<BusinessSignup />} />
        <Route path='business/login' element={<BusinessLogin />} />
    </Routes>
    </>
  )
}

export default AllRoutes

/*
  let arr = craeteRouter();

  arr = [
  {
    route : "",
    path : ""
  }
  ]


*/