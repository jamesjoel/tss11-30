import React from 'react'
import Home from '../pages/Home'
import FindMe from '../pages/FindMe'
import IpAddress from '../pages/IpAddress'
import { Routes, Route } from 'react-router-dom'
import Home2 from '../Home2'

const AllRoutes = () => {
  return (
    <>
    <Routes>
      {/* <Route path= '' element = {<Home2/>}/> */}
      {/* <Route path= '' element = {<Home/>}/> */}
      <Route path= '' element = {<FindMe/>}/>
      <Route path= '/ipaddress' element = {<IpAddress/>}/>
    </Routes>
    </>
  )
}

export default AllRoutes