import React from 'react'
import Header2 from '../../components/user/headers/Header2'
import {Outlet, NavLink} from 'react-router-dom'

const Manage = () => {
  return (
    <>
    <Header2 />
    <div className="container my-4" style={{minHeight : "600px"}}>
        <h4 className='text-light p-3' style={{backgroundColor : "#131230"}}>Welcome {localStorage.getItem("business-name")}</h4>
        <div className="row">
            <div className="col-md-12 py-3">
                <div className='row'>
                    <div className='col-md-3'>
                        {/* <h4 className='text-dark'>Manage</h4> */}
                        <div className="list-group">
                            <NavLink to="/business/manage" className="bg-dark text-light list-group-item list-group-item-action">Manage</NavLink>
                            <NavLink to="/business/manage/addhotels" className="bg-dark text-light list-group-item list-group-item-action">Add Hotels</NavLink>
                            
                            <NavLink to="/business/manage/viewhotels" className=" bg-dark text-light list-group-item list-group-item-action">View Hotels</NavLink>
                            <NavLink to="/business/manage/viewbooking" className="bg-dark text-light list-group-item list-group-item-action">View Booking</NavLink>
                            <NavLink to="/business/manage/viewcancledbooking" className="bg-dark text-light list-group-item list-group-item-action">View Cancled Booking</NavLink>
                            <NavLink to="/business/logout" className="bg-dark text-light list-group-item list-group-item-action">Logout</NavLink>
    
                        </div>
                    </div>
                    <div className='col-md-9'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Manage