import React from 'react'
import { Navigate } from 'react-router-dom'

const Logout = () => {

    localStorage.removeItem("access-token");
    localStorage.removeItem("name");
    localStorage.removeItem("email");

  return (
    <Navigate to='/login' />
  )
}

export default Logout