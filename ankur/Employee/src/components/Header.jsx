import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='navbar bg-dark navbar-dark navbar-expand-sm'>
        <div className="container">
        <NavLink to ='#' className='navbar-brand'>Employee</NavLink>
        <button data-bs-toggle = 'collapse' data-bs-target ='#menu' className='navbar-toggler'>
            <span className='navbar-toggler-icon'></span>
        </button>
        <div className='navbar-collapse' id='menu'>
            <ul className='navbar-nav nav'>
                <li className='nav-item mx-2'>
                    <NavLink className='nav-link' to='/'>Home</NavLink>
                </li>
                <li className='nav-item mx-2'>
                    <NavLink className='nav-link' to='/employee'>Employee</NavLink>
                </li>
            </ul>
        </div>
        </div>
    </nav>
  )
}

export default Header