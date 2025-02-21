import React, { useEffect, useState } from 'react'
import Header2 from '../../components/user/headers/Header2'
import {useFormik} from 'formik'
import LoginFrmSchema from '../../schemas/LoginSchema'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import {API_URL} from '../../constants/API_URL'
const Login = () => {
    let navigate = useNavigate();
   


    let [errMsg, setErrMsg] = useState("");
    let loginFrm = useFormik({
        validationSchema : LoginFrmSchema,
        initialValues : {
            username : "",
            password : ""
        },
        onSubmit : (formData)=>{
            axios
            .post(`${API_URL}/userauth`, formData)
            .then(response=>{
                // console.log(response.data);return;
                if(response.data.success==true)
                {
                    localStorage.setItem("access-token", response.data.access_token);
                    localStorage.setItem("name", response.data.user.name);
                    localStorage.setItem("email", response.data.user.email);
                    navigate("/");
                }
                else
                {
                    if(response.data.errType==1){
                        setErrMsg("This Username/Email and Password is Incorrect !")
                    }
                    if(response.data.errType==2){
                        setErrMsg("This Password is Incorrect !")
                    }
                }
            })
        }
    })

  return (
    <>
    <Header2 />
    <section className="welcome-area section-padding2" style={{minHeight : "600px"}}>
        <div className="container-fluid">
            <form onSubmit={loginFrm.handleSubmit}>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card border border-1">
                        <div className="card-header footer-widget">
                            <h4>User Login</h4>
                        </div>
                        <div className="card-body">
                            <div className="my-2">
                                <label>Username</label>
                                <input name='username' onChange={loginFrm.handleChange} type='text' className={'form-control ' +(loginFrm.errors.username && loginFrm.touched.username ? 'is-invalid' : '')}/>
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
                                <input name='password' onChange={loginFrm.handleChange} type='password' className={'form-control ' +(loginFrm.errors.password && loginFrm.touched.password ? 'is-invalid' : '')} />
                                {
                                    loginFrm.errors.password && loginFrm.touched.password
                                    ?
                                    <small className='text-danger'>{loginFrm.errors.password}</small>
                                    :
                                    ''
                                }
                            </div>
                        </div>
                        <div className="card-footer">
                            <button type='submit' className='template-btn'>Login</button>
                            <p className='text-center text-danger'>{errMsg}</p>
                        </div>
                    </div>
                </div>
            </div>
            </form>
        </div>
    </section>
    </>
  )
}

export default Login