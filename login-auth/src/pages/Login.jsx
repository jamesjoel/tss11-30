import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { isLoggedIn } from '../redux/UserAuthSlice'
import { useNavigate } from 'react-router-dom';
const Login = () => { 
    let navigate = useNavigate();
    useEffect(()=>{
        if(localStorage.getItem("access_token")){
            navigate("/profile");
        }
    },[])


    let dispatch = useDispatch();

    let [errMsg, setErrMsg] = useState("");
    let [preloader, setPreloader] = useState(false)
    let [user, setUser] = useState({
        email : "",
        password : ""
    })

    let login = async()=>{
        setPreloader(true)
        try{

            let response = await axios.post("https://api.escuelajs.co/api/v1/auth/login", user);
            localStorage.setItem("access_token", response.data.access_token);
            dispatch(isLoggedIn(true))
            navigate("/successlogin");
            // window.location.href = "/profile";
            
        }catch(err){
            setErrMsg("This Email and Password is Incorrect !");
            setPreloader(false)

        }

    }

  return (
    <div className='row'>
        <div className='col-md-6 offset-md-3'>
        
    <div className="mb-3 mt-3">
      <label htmlFor="email" className="form-label">Email:</label>
      <input type="text" value={user.email} onChange={(e)=>setUser({...user, email : e.target.value})} className="form-control" id="email" placeholder="Enter email" name="email" />
    </div>
    <div className="mb-3">
      <label htmlFor="pwd" className="form-label">Password:</label>
      <input type="password" value={user.password} onChange={(e)=>setUser({...user, password : e.target.value})} className="form-control" id="pwd" placeholder="Enter password" name="pswd" />
    </div>
    <p className='text-danger text-center'>
        {
            errMsg
        }
    </p>
    <button type="button" onClick={login} className="btn btn-primary">Submit {preloader ? <span className='spinner-border spinner-border-sm'></span> : ''} </button>
  
        </div>
    </div>
  )
}

export default Login
/*
res.status(100)

res.status(200).send({success:true})

*/