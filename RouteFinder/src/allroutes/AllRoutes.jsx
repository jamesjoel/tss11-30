import React from 'react'
import Home from '../pages/Home'
import FindMe from '../pages/FindMe'
import IpAddress from '../pages/IpAddress'
import { Routes, Route } from 'react-router-dom'
<<<<<<< HEAD
import Help from '../pages/Help'
import Help2 from '../pages/Help2'
=======
import Home2 from '../Home2'
>>>>>>> 647017922b17a9d0da7f9f96de4406bf0f2d85d7

const AllRoutes = () => {
  return (
    <>
    <Routes>
      {/* <Route path= '' element = {<Home2/>}/> */}
      {/* <Route path= '' element = {<Home/>}/> */}
      <Route path= '' element = {<FindMe/>}/>
      <Route path= '/ipaddress' element = {<IpAddress/>}/>
      <Route path= '/help' element = {<Help/>}/>
      <Route path= '/help2' element = {<Help2/>}/>
    </Routes>
    </>
  )
}

export default AllRoutes