import React, { useEffect } from 'react'
import { Outlet, Route, Routes, Navigate, useNavigate } from 'react-router-dom'
import Login from './pages/Login'
import Header from './components/Header'
import Profile from './pages/Profile'
import Logout from './pages/Logout'
import { useDispatch } from 'react-redux'
import { checkIsLoggedIn } from './redux/UserAuthSlice'
import {getProfile} from './redux/ProfileSlice'
import SuccessLogin from './pages/SuccessLogin'
import City from './pages/City'
import Photos from './pages/Photos'

const App = () => {
  let dispatch = useDispatch();

  dispatch(checkIsLoggedIn());

  if(localStorage.getItem("access_token")){
    dispatch(getProfile());
  }

  return (
    <>
    <Header />
    <div className='container'>

    <Routes>
      <Route path='' element={<Login />} />
      <Route path='city' element={<City />} />
      <Route path='photos' element={<Photos />} />
      <Route path='' element={<ProtactedRoute />}>

        <Route path='/successlogin' element={<SuccessLogin />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/logout' element={<Logout />} />
      </Route>
    </Routes>
    </div>
    </>
  )
}

export default App


let ProtactedRoute = ()=>{
  let navigate = useNavigate();
  useEffect(()=>{
    if(! localStorage.getItem("access_token")){
      navigate("/");
    }
  },[])
  return(
    <Outlet />
  )
}