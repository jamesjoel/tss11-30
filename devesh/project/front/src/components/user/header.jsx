import React from 'react'
import { NavLink } from 'react-router-dom';

 const Header = () => {
  return (
     <>
        <div id="site-header">
        <header id="header" className="header-block-top">
            <div className="container">
                <div className="row">
                    <div className="main-menu">
                        <nav className="navbar navbar-default" id="mainNav">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                                
                            </div>
                            <div id="navbar" className="navbar-collapse collapse">
                                <ul className="nav  navbar-right">
                                <div className="logo mr-5">
                                    <a className="navbar-brand js-scroll-trigger logo-header" href="#">
                                        <img src="images/logo.png" alt=""/>
                                    </a>
                                </div>
                                    <li className="active"><NavLink to="/">Home</NavLink></li>
                                    <li><NavLink to="/about">About</NavLink></li>
                                    <li><NavLink to="/login">login</NavLink></li>
                                    <li><NavLink to="/singup">singup</NavLink></li>
                                    <li><NavLink to="/business/singup">business register</NavLink></li>
                                    {/* <li><NavLink to="#menu">Menu</NavLink></li> */}
                                    {/* <li><NavLink to="#our_teNavLinkm">TeNavLinkm</NavLink></li> */}
                                    {/* <li><NavLink to="#gNavLinkllery">GNavLinkllery</NavLink></li> */}
                                    {/* <li><NavLink to="#blog">Blog</NavLink></li> */}
                                    {/* <li><NavLink to="#pricing">pricing</NavLink></li> */}
                                    {/* <li><NavLink to="#reservNavLinktion">ReservNavLinkion</NavLink></li> */}
                                    {/* <li><NavLink to="#footer">ContNavLinkct us</NavLink></li> */}
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    </div>
     </>
)
}

export default Header;