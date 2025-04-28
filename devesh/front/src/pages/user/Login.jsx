import React,{useState} from 'react'
import Header2 from "../../components/user/header/Header2"
import {useFormik} from 'formik'
import LoginFrmSchema from '../../schemas/LoginSchema'
import axios from 'axios'
import { API_URL } from '../../constants/API_URL'
import { NavLink, useNavigate } from 'react-router-dom'

const Login = () => {

    let [errMsg , setErrMsg] = useState("") ;
    let navigate = useNavigate();
    let [preloader, setPreloader] = useState(false);
    

    let loginFrm = useFormik({
        validationSchema : LoginFrmSchema ,
        initialValues: {
            username : "" ,
            password : ""
        },
        onSubmit:(FormData)=>{
            setPreloader(true);

            //console.log(FormData);
            axios
            .post(`${API_URL}/userauth`,FormData)
            .then(response=>{
                //console.log(response.data);
                if(response.data.success == true ){
                    setPreloader(false);
  
                    localStorage.setItem("access-token", response.data.access_token);
                    localStorage.setItem("name", response.data.user.name);
                    localStorage.setItem("email", response.data.user.email);
                    navigate("/my-account")

                }else{
                    if(response.data.errType == 1){
                        setPreloader(false);

                        setErrMsg("This Username/Email and Password is incorrect !");
                    }
                    if(response.data.errType == 2){
                        setPreloader(false);

                        setErrMsg("This Password is incorrect !");
                    }
                }
            })
            
        }
    })
  
  return (
<>
    <Header2/>
   
    <section className="containerfluid" style={{minHeight : "600 px"}}>
        <div className="container">
        <form onSubmit = {loginFrm.handleSubmit}>
            <div className="row">
                <div className="col-md-6 offset-md-3 my-5">
                    <div className="card border border-1">
                        <div className="card-header bg-dark">
                            <h4 className="text-light">USER LOGIN</h4>
                        </div>
                        <div className="card-body">
                            <div className="my-2">
                                <label>User Name</label>
                                <input name = 'username' onChange={loginFrm.handleChange} type="text" className={"form-control"+ (loginFrm.errors.username && loginFrm.touched.username ? ' is-invalid' : '')} placeholder="Name"/>
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
                                <input name = 'password' onChange={loginFrm.handleChange} type="password" className={"form-control"+ (loginFrm.errors.password && loginFrm.touched.password ? ' is-invalid' : '')} placeholder="Password"/>
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
                            <button type='submit' className="button btn-orange text-light">LOGIN { preloader ? <span className='spinner-border spinner-border-sm'></span> : '' }</button> 
                            <p className='text-center text-danger'>{errMsg}</p>
                            <NavLink to='/forgot-password'>Forgot Your Password !</NavLink>
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