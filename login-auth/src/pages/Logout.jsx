import React from 'react'
import { Navigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { isLoggedIn } from '../redux/UserAuthSlice'
import { profileLogout } from '../redux/ProfileSlice'

const Logout = () => {
    let dispatch = useDispatch();

    dispatch(isLoggedIn(false));
    dispatch(profileLogout());
    localStorage.removeItem("access_token")
  return (
    <Navigate to="/" />
  )
}

export default Logout