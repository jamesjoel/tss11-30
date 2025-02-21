import React, { useEffect } from 'react'
import { Routes, Route, Outlet, useNavigate, Navigate } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import List from '../pages/users/List'
import BusList from '../pages/business/List'
import Login from '../pages/Login'
import SideBar from '../components/SideBar'
import Logout from '../pages/Logout'
const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path='' element={<Login />} />
        <Route path='' element={<ProtactedRoutes />}>
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='users/list' element={<List />} />
          <Route path='business/list' element={<BusList />} />
          <Route path='logout' element={<Logout />} />
        </Route>

    </Routes>
    </>
  )
}

let ProtactedRoutes = ()=>{
  let navigate = useNavigate();
  useEffect(()=>{
    if(! localStorage.getItem("access-token"))
    {
      
       navigate("/");
    }
  },[])
  return(
    <>
      <SideBar />
      <Outlet />
    </>
  );
}

export default AllRoutes