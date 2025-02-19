import React from 'react'
import {NavLink} from 'react-router-dom'

const Nav = () => {
  return (
    <>
      <nav className="navbar bg-dark navbar-dark navbar-expand-sm">
        <div className="container">
            <NavLink to="" className="navbar-brand">Task</NavLink>
            <button data-bs-toggle="collapse" data-bs-target="#menu" className="navbar-toggler">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="menu">
                <ul className="nav navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about">About</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  
    </>
  )
}

export default Nav