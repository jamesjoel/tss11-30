import React from 'react'
import {Navigate} from 'react-router-dom'
const Logout = () => {
    localStorage.removeItem("business-access-token")
    localStorage.removeItem("business-name")
  return (
    <Navigate to={'/business/login'} />
  )
}

export default Logout