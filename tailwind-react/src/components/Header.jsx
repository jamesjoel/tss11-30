import React, {useContext} from 'react'
import LogoContext from '../LogoContext'
import { useSelector } from 'react-redux'

import { NavLink } from 'react-router-dom'
const Header = () => {

  let city = useSelector(state=>state.DemoReducer);

  let data = useSelector(state=>state.DataReducer);

  let logo = useContext(LogoContext);



  return (
    <div className="navbar bg-gray-600 text-white shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-gray-600 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Home</a></li>
        <li><NavLink to='about'>About</NavLink></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">{logo}</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <h3 className='text-2xl'>Total Stu {data.length}</h3>
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li><NavLink to='about'>About</NavLink></li>
      <li><NavLink to='user'>User</NavLink></li>
      <li><NavLink to='help'>Help</NavLink></li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>Item 3</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">{city}</a>
  </div>
</div>
  )
}

export default Header