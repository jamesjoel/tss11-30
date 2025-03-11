import React from 'react'
import Home from '../pages/Home'
import FindMe from '../pages/FindMe'
import IpAddress from '../pages/IpAddress'
import { Routes, Route } from 'react-router-dom'
import Help from '../pages/Help'
import Help2 from '../pages/Help2'

const AllRoutes = () => {
  return (
    <>
    <Routes>
      <Route path= '' element = {<Home/>}/>
      <Route path= '/findme' element = {<FindMe/>}/>
      <Route path= '/ipaddress' element = {<IpAddress/>}/>
      <Route path= '/help' element = {<Help/>}/>
      <Route path= '/help2' element = {<Help2/>}/>
    </Routes>
    </>
  )
}

export default AllRoutes