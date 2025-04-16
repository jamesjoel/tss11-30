import React, { useState } from 'react'
import { useFormik } from 'formik'
import LoginSchema from '../schemas/LoginSchema'
import doLogin from '../service/AuthService'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  let [errMsg, setErrMsg] = useState("");
  let [preloader, setPreloader] = useState(false);
  let navigate = useNavigate();

  let loginFrm = useFormik({
    validationSchema : LoginSchema,
    
    initialValues : {
      username : "",
      password : ""
    },
    onSubmit : async(FormData)=>{
      setPreloader(true);
      let response = await doLogin(FormData);
      //console.log(response);
      if(response.success == true ){
        localStorage.setItem("access-token", response.token);
        localStorage.setItem("name", response.admin.name);
        navigate("/dashboard")

    }else{
        if(response.errType == 1){
            setPreloader(false);
            setErrMsg("This Username/Email and Password is incorrect !");
        }
        if(response.errType == 2){
          setPreloader(false);
          setErrMsg("This Password is incorrect !");
        }
    }

    }
  })
  
  return (
    <>
    <div className="container mt-5">
      <form onSubmit={loginFrm.handleSubmit}>
      <div className="row">
        <div className="col-md-6 offset-md-3 mt-5">
          <div className="card border border-dark mt-5">
            <div className="card-header rounded-top bg-dark">
              <h2 className='text-light'>Administrator Login</h2>
            </div>
            <div className="card-body">
              <div className="my-2">
                <label>Username</label>
                <input name = 'username' onChange={loginFrm.handleChange} type='text' className= {'form-control' + (loginFrm.errors.username && loginFrm.touched.username ? ' is-invalid' : "")} placeholder='Username'/>
                {
                  loginFrm.errors.username && loginFrm.touched.username
                  ?
                  <small className='text-danger'>{loginFrm.errors.username}</small>
                  :
                  ''
                }
              </div>
              <div className="my-2">
                <label>Password</label>
                <input name = 'password' onChange={loginFrm.handleChange} type='password' className= {'form-control' + (loginFrm.errors.password && loginFrm.touched.password ? ' is-invalid' : "")} placeholder='Password'/>
                {
                  loginFrm.errors.password && loginFrm.touched.password
                  ?
                  <small className='text-danger'>{loginFrm.errors.password}</small>
                  :
                  ''
                }
              </div>
            </div>
            <div className="card-footer bg-dark">
              <button type='submit' className='btn btn-light'>Login {preloader ? <span className='spinner-border spinner-border-sm'></span> : '' }</button>
              <p className='text-center text-light'>{errMsg}</p>
            </div>
          </div>
        </div>
      </div>
      </form>
    </div>
    </>
  )
}

export default Login