import React from 'react'
import { NavLink } from 'react-router-dom'
const Nav = () => {
    let token = localStorage.getItem("access-token");
  return (
     <div className="main-menu">
    <ul>
                        <li><NavLink to="/">home</NavLink></li>
                        <li><NavLink to="/about">about</NavLink></li>
                        {
                            token
                            ?
                            <>
                            <li><NavLink to="/my-account">{localStorage.getItem("name")}</NavLink></li>
                            <li><NavLink to="/logout">logout</NavLink></li>
                            </>
                            :
                            <>
                            <li><NavLink to="/login">login</NavLink></li>
                            <li><NavLink to="/signup">signup</NavLink></li>

                            {
                                localStorage.getItem("business-access-token")
                                ?
                                <>
                                    <li><NavLink className='bg-info' to="/business/manage">{localStorage.getItem("business-name")}</NavLink></li>
                                    

                                </>
                                :
                                <li><NavLink to="/business/signup">business register</NavLink></li>

                            }

                            {/* <li className='dropdown'>
                                <a href='#' data-toggle="dropdown" className='dropdown-toggle'>Sayaji</a>
                                <div className='dropdown-menu'>
                                    <a href=''>Menu1</a>
                                    <a href=''>Menu1</a>
                                    <a href=''>Menu1</a>
                                </div>
                            </li> */}
                            </>

                        }
                        


                        
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
  </div>
  )
}

export default Nav