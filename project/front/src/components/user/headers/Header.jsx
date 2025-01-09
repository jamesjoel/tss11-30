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
                        <ul>
                            <li class="active"><a href="index.html">home</a></li>
                            <li><a href="about.html">about</a></li>
                            <li><a href="menu.html">menu</a></li>
                            <li><a href="#">blog</a>
                                <ul class="sub-menu">
                                    <li><a href="blog-home.html">Blog Home</a></li>
                                    <li><a href="blog-details.html">Blog Details</a></li>
                                </ul>
                            </li>
                            <li><a href="contact-us.html">contact</a></li>
                            <li><a href="elements.html">Elements</a></li>
                        </ul>
                    </div>
                </div>
        </div>
    </div>
</header>
  )
}

export default Header