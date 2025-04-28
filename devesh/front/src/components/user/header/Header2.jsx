import React,{useState,useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import Nav from "./Nav"
import TopSection from './TopSection'

const Header2 = () => {
  let location = useLocation();
  // console.log(location.pathname);return;
  let [pathName, setPathName] = useState("")

  useEffect(()=>{
    if(location.pathname == "/about"){
    
      setPathName("About");
    }
    else if(location.pathname == "/login"){
      setPathName("User Login");
    }
    else if(location.pathname == "/signup"){
      setPathName("User Registration");
    }
    else if(location.pathname == "/business/signup"){
      setPathName("Business Registration");
    }
    else if(location.pathname == "/business/login"){
      setPathName("Business Login");
    }
    else if(location.pathname == "/business/manage"){
      setPathName("Business Manage");
    }
    else if(location.pathname == "/my-account"){
      setPathName("My Account");
    }
    else{
      setPathName("Book Your Table Here");
    }
    

  },[])
  
  return (
    <>
    <header className="main_menu">
        <Nav/>
    </header>
    <TopSection name={pathName}/>
    </>
  )
}

export default Header2