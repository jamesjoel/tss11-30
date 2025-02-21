import React, { useEffect } from 'react'
import {Routes, Route, Outlet, useNavigate} from 'react-router-dom'
import {
  Home,
  About, 
  Login,
  Signup,
  BusinessLogin, 
  BusinessSignup,
  Signup2,
  Logout,
  MyAccout,
  BusinessLogout,
  Manage
} from '../pages'
import Dashboard from '../pages/business/Dashboard'
import ViewHotels from '../pages/business/ViewHotels'
import ViewBooking from '../pages/business/ViewBooking'
import AddHotels from '../pages/business/AddHotels'
import BookTable from '../pages/user/BookTable'


const AllRoutes = () => {
  return (
    <>

    <Routes>
        <Route path='' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
        <Route path='booktable/:id' element={<BookTable />} />
        <Route path='signup2' element={<Signup2 />} />

        <Route path='' element={<UserProtactedRoutes />}>

          <Route path='logout' element={<Logout />} />
          <Route path='my-account' element={<MyAccout />} />

        </Route>

        

        <Route path='business/manage' element={<Manage />}>
          <Route path='' element={<Dashboard />} />
          <Route path='viewhotels' element={<ViewHotels />} />
          <Route path='viewbooking' element={<ViewBooking />} />
          <Route path='addhotels' element={<AddHotels />} />
        </Route>


        <Route path='business/signup' element={<BusinessSignup />} />
        <Route path='business/login' element={<BusinessLogin />} />
        <Route path='business/logout' element={<BusinessLogout />} />
    </Routes>
    </>
    // /business/manage
    // /business/manage/
    // /business/manage/viewhotels
    // /business/manage/viewbooking
    // /business/manage/addhotels
  )
}

export default AllRoutes

let UserProtactedRoutes = ()=>{
  let navigate = useNavigate();
  useEffect(()=>{
    if(! localStorage.getItem("access-token")){
      navigate("/login");
    }

  },[]);

  return(
    <>
    
    <Outlet />
    </>
  )
}



/*
  let arr = craeteRouter();

  arr = [
  {
    route : "",
    path : ""
  }
  ]


*/