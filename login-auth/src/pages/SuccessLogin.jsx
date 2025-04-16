import React from 'react'
import { useDispatch } from 'react-redux'
import {getProfile} from '../redux/ProfileSlice'

import { Navigate } from 'react-router-dom'

const SuccessLogin = () => {

    let dispatch = useDispatch();
     dispatch(getProfile());

  return (
    <Navigate to="/profile" />
  )
}

export default SuccessLogin