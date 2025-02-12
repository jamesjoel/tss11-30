import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Task from '../page/task'
import Home from '../page/home'

const allroutes = () => {
  return (
    <>
   <Routes>
   <Route path='/task' element={<Task/>}/>
   <Route path='/home' element={<Home/>}/>


   </Routes>

    </>
  
  )
}

export default allroutes