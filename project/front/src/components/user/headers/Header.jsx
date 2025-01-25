import React from 'react'
import { NavLink } from 'react-router-dom'
import Nav from './Nav'

const Header = () => {
  return (
    <header className="header-area">
    <div className="container">
        <div className="row">
            <div className="col-lg-2">
                <div className="logo-area">
                    <a href="index.html"><img src="assets/images/logo/logo.png" alt="logo" /></a>
                </div>
            </div>
            <div class="col-lg-10">
                    <div class="custom-navbar">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>  
                    <div class="main-menu">
                        <Nav />
                    </div>
                </div>
        </div>
    </div>
</header>
  )
}

export default Header