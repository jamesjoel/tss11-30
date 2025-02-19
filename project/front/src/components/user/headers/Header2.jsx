import React, {useState, useEffect} from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import Nav from './Nav'
import TopSection from '../../TopSection'

const Header2 = () => {
    let location = useLocation()
    let [pathName, setPathName] = useState("");
    useEffect(()=>{
        if(location.pathname=="/about"){
            setPathName("About");
        }
        if(location.pathname=="/login"){
            setPathName("User Login");
        }
        if(location.pathname=="/signup"){
            setPathName("User Registration");
        }
        if(location.pathname=="/business/signup"){
            setPathName("Business Registration");
        }
        if(location.pathname=="/business/login"){
            setPathName("Login Registration");
        }
        if(location.pathname=="/booktable"){
            setPathName("Table Booking");
        }
    },[])

    
  return (
    <>
    <header className="header-area header-area2">
        <div className="container">
            <div className="row">
                <div className="col-lg-2">
                    <div className="logo-area">
                        <a href="index.html"><img src="/assets/images/logo/logo2.png" alt="logo"/></a>
                    </div>
                </div>
                <div className="col-lg-10">
                    <div className="custom-navbar">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>  
                    <div className="main-menu main-menu2">
                        <Nav />
                    </div>
                </div>
            </div>
        </div>
    </header>
    <TopSection name={pathName} />
    
    </>
  )
}

export default Header2