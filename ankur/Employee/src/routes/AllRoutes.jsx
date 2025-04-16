import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Employee from '../pages/Employee'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='' element = {<Home />}/>
        <Route path='employee' element = {<Employee />}/>
    </Routes>
  )
}

export default AllRoutes