import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import {API_URL} from '../../constants/API_URL'

const MyAccount = () => {

  let [user, setUser] = useState({});

  useEffect(()=>{
    axios.get(`${API_URL}/user/profile`,{
      headers : {Authorization: localStorage.getItem("access-token")}
    })
    .then(response=>{
      // console.log(response.data);
      setUser(response.data.user);
    })
  },[]);


  return (
    <>
     <div className="row">
      <div className="col-md-8 offset-md-2">
        <div className="card my-5">
          <div className="card-header">
            <h5>User Profile</h5>
          </div>
          <div className="card-body">
            <table className="table table-hover table-striped table-bordered table-info text-dark">
              <tbody>
                <tr>
                <td>Full Name</td>
                <td>{user.name}</td>
                </tr>
                <tr>
                <td>Email</td>
                <td>{user.email}</td>
                </tr>
                <tr>
                <td>Address</td>
                <td>{user.address}</td>
                </tr>
                <tr>
                <td>Contact</td>
                <td>{user.contact}</td>
                </tr>
                <tr>
                <td>State</td>
                <td>{user.state}</td>
                </tr>
                <tr>
                <td>City</td>
                <td>{user.city}</td>
                </tr>
                <tr>
                <td>Gender</td>
                <td>{user.gender}</td>
                </tr>
              </tbody>
            </table>

            <NavLink to="/update-account" className="btn btn-primary m-2">Update Profile</NavLink>
            <NavLink to="/change-password" className="btn btn-primary m-2">Change Password</NavLink>

          </div>
        </div>
      </div>
     </div>
    </>
  )
}

export default MyAccount