import React, { useEffect } from 'react'
import { Routes , Route, useNavigate, Outlet, NavLink } from 'react-router-dom'
import { Home, About, Login, BusinessLogin, Signup, BusinessSignup, Logout, 
  MyAccount, BusinessLogout, Manage, Dashboard, ViewHotels, ViewBooking, AddHotels, BookTable,BookingDetail,MyBooking,
  UpdateAccount,ChangePassword,ForgotPassword,Otp,ResetPassword,Contact} from '../pages'
import Header2 from '../components/user/header/Header2'

const AllRoutes = () => {
  return (
    <>
    <Routes>
      <Route path= '' element = {<Home/>}/>
      <Route path= '/about' element = {<About/>}/>
      <Route path= '/login' element = {<Login/>}/>
      <Route path= '/contact' element = {<Contact/>}/>
      <Route path= 'forgot-password' element = {<ForgotPassword/>}/>
      <Route path= 'otp' element = {<Otp/>}/>
      <Route path= 'resetpassword' element = {<ResetPassword/>}/>
      <Route path= '/signup' element = {<Signup/>}/>
      <Route path= '/booktable/:id' element = {<BookTable/>}/>
      
      <Route path='' element = {<UserProtectedRoutes/>}>
         <Route path= '/logout' element = {<Logout/>}/>
         <Route path= '/my-account' element = {<MyAccount/>}/>
         <Route path= '/bookingdetail' element = {<BookingDetail/>}/>
         <Route path= '/my-booking' element = {<MyBooking/>}/>
         <Route path= '/update-account' element = {<UpdateAccount/>}/>
         <Route path= '/change-password' element = {<ChangePassword/>}/>
      </Route>
      
      <Route path= 'business/signup' element = {<BusinessSignup/>}/>
      <Route path= 'business/login' element = {<BusinessLogin/>}/>
      <Route path= 'business/logout' element = {<BusinessLogout/>}/>
      
      <Route path= 'business/manage' element = {<Manage/>}>
          <Route path= '' element = {<Dashboard/>}/>
          <Route path= 'viewhotels' element = {<ViewHotels/>}/>
          <Route path= 'viewbooking' element = {<ViewBooking/>}/>
          <Route path= 'addhotels' element = {<AddHotels/>}/>
          <Route path= 'update/:id' element = {<AddHotels/>}/>
      </Route>
    
    </Routes>
    
    </>
  )
}

export default AllRoutes

let UserProtectedRoutes = ()=>{

  let navigate = useNavigate();

  useEffect(()=>{
    if(! localStorage.getItem("access-token")){
      navigate("/login")
    }
  },[]);

  return(
    <>
    <Header2/>
    <section className="about_part pt-0 mt-4">
        <div className="container">
            <ul className='nav bg-dark p-2'>
                <li className='nav-item'>
                    <NavLink className='nav-link text-light p-3' to='/my-account'>My Account</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink className='nav-link text-light p-3' to='/my-booking'>My Booking</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink className='nav-link text-light p-3' to='/logout'>Logout</NavLink>
                </li>
            </ul>
         
          <Outlet/>
            
        </div>
    </section>
    
    </>
  )
}