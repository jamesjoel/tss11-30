import React, { useEffect } from 'react'
import { Routes, Route, Outlet, useNavigate } from 'react-router-dom'
import SideBar from '../components/SideBar'
import { Login, Dashboard, List, BusList, Logout } from '../pages'

const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path='' element={<Login />} />
        
        <Route path='' element= {<ProtectedRoutes/>}>
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='users/list' element={<List />} />
          <Route path='business/list' element={<BusList />} />
          <Route path='logout' element={<Logout />} />
        </Route>
    
    </Routes>
    </>
)
}

export default AllRoutes;

let ProtectedRoutes = ()=>{
 
  let navigate = useNavigate();
  useEffect(()=>{
    if( !localStorage.getItem("access-token")){
      navigate("/")
    }
  },[]);

  return(
    <>
    <SideBar/>
    <Outlet/>
    </>
  )
}