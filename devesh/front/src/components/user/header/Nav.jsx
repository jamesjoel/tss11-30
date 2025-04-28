import React from 'react'
import { NavLink } from "react-router-dom"

const Nav = () => {

    let token = localStorage.getItem("access-token");

  return (
    <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-12">
                    <nav className="navbar navbar-expand-lg navbar-dark">
                        <NavLink className="navbar-brand" to="index.html"> <img src="/assets/img/logo.png" alt="logo"/> </NavLink>
                        <button className="navbar-toggler btn-dark" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse main-menu-item justify-content-end"
                            id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/">HOME</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/about">ABOUT</NavLink>
                                </li>
                                {
                                    token
                                    ?
                                    <>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/logout">LOGOUT</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link bg-info" to="/my-account">{localStorage.getItem("name")}</NavLink>
                                    </li>
                                    </>
                                    
                                    :
                                    <>
                                    <li className="nav-item">
                                       <NavLink className="nav-link" to="/login">LOGIN</NavLink>
                                    </li>
                                    <li className="nav-item">
                                       <NavLink className="nav-link" to="/signup">SIGNUP</NavLink>
                                    </li>
                                    </>
                                }
                                
                                {
                                    localStorage.getItem("business-access-token")
                                    ?
                                    <>
                                    
                                    <li className="nav-item">
                                       <NavLink className="nav-link bg-info" to="/business/manage">{localStorage.getItem("business-name")}</NavLink>
                                    </li>
                                    
                                    </>
                                    :
                                    <>
                                    <li className="nav-item">
                                       <NavLink className="nav-link" to="/business/signup">BUSINESS REGISTER</NavLink>
                                    </li>
                                    </>
                                }
                                 
                            </ul>
                        </div>
                        </nav>
                </div>
            </div>
        </div>
  )
}

export default Nav