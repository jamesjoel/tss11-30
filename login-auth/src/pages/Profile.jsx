import React, { useEffect, useState } from 'react'

import { useSelector } from 'react-redux'



const Profile = () => {
  
  let user = useSelector(state=>state.ProfileReducer);
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <table className="table table-dark">
            <tbody>
              <tr>
                <td>Name</td>
                <td>{user.name}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{user.email}</td>
              </tr>
              <tr>
                <td>Role</td>
                <td>{user.role}</td>
              </tr>
              <tr>
                <td>Image</td>
                <td><img src={user.avatar} height='100' /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Profile