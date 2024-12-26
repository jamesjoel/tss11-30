import React from 'react'
import { NavLink } from 'react-router-dom'

const Header2 = () => {
  return (
    <>
    <header className="header-area header-area2">
        <div className="container">
            <div className="row">
                <div className="col-lg-2">
                    <div className="logo-area">
                        <a href="index.html"><img src="assets/images/logo/logo2.png" alt="logo"/></a>
                    </div>
                </div>
                <div className="col-lg-10">
                    <div className="custom-navbar">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>  
                    <div className="main-menu main-menu2">
                        <ul>
                            <li><NavLink to="/">home</NavLink></li>
                            <li><NavLink to="/about">about</NavLink></li>
                            
                            <li><a href="menu.html">menu</a></li>
                            <li><a href="#">blog</a>
                                <ul className="sub-menu">
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
    
    <section className="banner-area banner-area2 text-center">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h1><i>About Us</i></h1>
                    <p className="pt-2"><i>Beast kind form divide night above let moveth bearing darkness.</i></p>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Header2