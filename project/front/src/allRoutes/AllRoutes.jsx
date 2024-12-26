import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../pages/user/Home'
import About from '../pages/user/About'

const AllRoutes = () => {
  return (
    <>

    <Routes>
        <Route path='' element={<Home />} />
        <Route path='about' element={<About />} />
    </Routes>
    </>
  )
}

export default AllRoutes