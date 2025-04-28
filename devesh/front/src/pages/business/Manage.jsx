import React, { useEffect } from 'react'
import Header2 from '../../components/user/header/Header2'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'

const Manage = () => {
  let navigate = useNavigate();
  useEffect(()=>{
      if(!localStorage.getItem("business-access-token"))
        navigate("/business/login");

  },[])
  
  return (
    <>
    <Header2/>
    

    <div className="container my-4" style={{minHeight:'600px'}}>
      <h4 className='p-3 text-light' style={{backgroundColor:'#ff6426'}}>Welcome {localStorage.getItem("business-name")}</h4>
      <div className="row">
        <div className="col-md-3">
          <div className="list-group">
              <NavLink to='/business/manage' className="bg-dark text-light list-group-item list-group-item-action">Manage</NavLink>
              <NavLink to='/business/manage/addhotels' className="bg-dark text-light list-group-item list-group-item-action">Add Hotels</NavLink>
              <NavLink to='/business/manage/viewhotels' className="bg-dark text-light list-group-item list-group-item-action">View Hotels</NavLink>
              <NavLink to='/business/manage/viewbooking' className="bg-dark text-light list-group-item list-group-item-action">View Booking</NavLink>
              <NavLink to='/business/manage/viewcancledbooking' className="bg-dark text-light list-group-item list-group-item-action">View Cancled Booking</NavLink>
              <NavLink to='/business/Logout' className="bg-dark text-light list-group-item list-group-item-action">Logout</NavLink>
          </div>
        </div>
        <div className="col-md-9">
          <Outlet/>
        </div>
      </div>
    </div>


    
    </>
  )
}

export default Manage