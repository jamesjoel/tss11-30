import React from 'react'
import { NavLink } from 'react-router-dom'

const navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-primary ">
  <NavLink className="navbar-brand text-light" href="#">Brand Name</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <NavLink className="nav-link  text-light" to="/home">Home </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link text-light" to="/task">Task</NavLink>
      </li>

    </ul>
  </div>
</nav>
    </>
  )
}

export default navbar