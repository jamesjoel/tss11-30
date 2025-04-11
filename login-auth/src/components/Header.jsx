import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
    
  let loggedin = useSelector(state=>state.UserAuthReducer)
  let user = useSelector(state=>state.ProfileReducer);
  
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">TSS</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav">
      <li className="nav-item">
            <NavLink className="nav-link" to="/city">City</NavLink>
        </li>
      <li className="nav-item">
            <NavLink className="nav-link" to="/photos">Photos</NavLink>
        </li>
        {
            loggedin
            ?
            <li className="nav-item">
              <NavLink className="nav-link" to="/logout">Logout</NavLink>
          </li>
            :
            <li className="nav-item">
            <NavLink className="nav-link" to="/login">Login</NavLink>
        </li>
        }
       
        <li>
          <img src={user.avatar} height='50' />
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Header