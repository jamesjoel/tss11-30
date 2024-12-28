import React from 'react'
import { NavLink } from 'react-router-dom'
const Nav = () => {
  return (
    <ul>
                        <li><NavLink to="/">home</NavLink></li>
                        <li><NavLink to="/about">about</NavLink></li>
                        <li><NavLink to="/login">login</NavLink></li>
                        <li><NavLink to="/signup">signup</NavLink></li>
                        <li><NavLink to="/business/signup">business register</NavLink></li>
                        {/* <li><a href="menu.html">menu</a></li>
                        <li><a href="#">blog</a>
                            <ul className="sub-menu">
                                <li><a href="blog-home.html">Blog Home</a></li>
                                <li><a href="blog-details.html">Blog Details</a></li>
                            </ul>
                        </li>
                        <li><a href="contact-us.html">contact</a></li>
                        <li><a href="elements.html">Elements</a></li> */}
                    </ul>
  )
}

export default Nav