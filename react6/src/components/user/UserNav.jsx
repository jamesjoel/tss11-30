import React from 'react'
import { NavLink } from 'react-router-dom'

const UserNav = () => {
  return (
    <ul className='nav bg-danger'>
        <li className='nav-item'>
            <NavLink to="/user" className="nav-link">Index</NavLink>
        </li>
        <li className='nav-item'>
            <NavLink to="/user/setting" className="nav-link">Setting</NavLink>
        </li>
        <li className='nav-item'>
            <NavLink to="/user/more" className="nav-link">More</NavLink>
        </li>
        
    </ul>
  )
}

export default UserNav