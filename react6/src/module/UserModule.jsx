import React from 'react'
import UserNav from '../components/user/UserNav'
import { Outlet } from 'react-router-dom'

const UserModule = () => {
  return (
    <>
    {/* <UserNav /> */}
    <Outlet />
    </>
  )
}

export default UserModule