import React from 'react'
import { Navigate } from 'react-router-dom'

const Logout = () => {

  localStorage.removeItem("business-access-token");

 
  return (
   
    <Navigate to='/business/login'/>

  )
}

export default Logout