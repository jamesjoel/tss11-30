 import React from 'react'
 import { Routes , Route } from 'react-router-dom'
 import Dashboard from '../pages/dashboard'
import  UserList from '../componant/user/list'
import UserAdd from '../componant/user/add'
import BusList from '../componant/business/list'
import BusAdd from '../componant/business/add'

 
 const Allroute = () => {
   return (
     <>
     <Routes>
        <Route  path='' element={<Dashboard/>}/>
        <Route  path='/business/list' element={<BusList/>}/>
        <Route  path='/business/add' element={<BusAdd/>}/>
        <Route  path='/user/list' element={<UserList/>}/>
        <Route  path='/user/add' element={<UserAdd/>}/>
     </Routes>
       
     </>
   )
 }
 
 export default Allroute