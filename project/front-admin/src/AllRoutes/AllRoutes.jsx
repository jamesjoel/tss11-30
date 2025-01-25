import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import List from '../pages/users/List'
import BusList from '../pages/business/List'
const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path='' element={<Dashboard />} />
        <Route path='users/list' element={<List />} />
        <Route path='business/list' element={<BusList />} />
    </Routes>
    </>
  )
}

export default AllRoutes