import React,{useState} from 'react'
import Header2 from '../../components/user/header/Header2'
import {useFormik} from 'formik'
import axios from 'axios'
import { API_URL } from '../../constants/API_URL'
import { useNavigate } from 'react-router-dom'
import LoginFrmSchema from '../../schemas/LoginSchemaBus'

const Login = () => {

    let [errMsg , setErrMsg] = useState("") ;
    let navigate = useNavigate();
    let [preloader, setPreloader] = useState(false);
    
    
    let loginFrm = useFormik({
        validationSchema : LoginFrmSchema,
        initialValues : {
            username : "",
            password : ""

        },
        onSubmit : (FormData)=>{
            setPreloader(true);

            axios
            .post(`${API_URL}/businessauth`,FormData)
            .then(response=>{
                //console.log(response.data)
                if(response.data.success == true ){
                    setPreloader(false);

                    localStorage.setItem("business-access-token",response.data.token);
                    localStorage.setItem("business-name",response.data.business);
                    navigate("/business/manage")

                }else{
                    if(response.data.errType == 1){
                        setPreloader(false);

                        setErrMsg("This Username/Email and Password is incorrect !");
                    }
                    if(response.data.errType == 2){
                        setPreloader(false);

                        setErrMsg("This Password is incorrect !");
                    }if(response.data.errType == 3){
                        setPreloader(false);

                        setErrMsg("You are Deactive now...please contact our team !");
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
            <form onSubmit={loginFrm.handleSubmit}>
            <div className="row">
                <div className="col-md-6 offset-md-3 my-5">
                    <div className="card border border-1">
                        <div className="card-header bg-dark">
                            <h4 className="text-light">BUSINESS LOGIN</h4>
                        </div>
                        <div className="card-body">
                            <div className="my-2">
                                <label>User Name</label>
                                <input name = 'username' onChange={loginFrm.handleChange} type="text" className={"form-control" + (loginFrm.errors.username && loginFrm.touched.username ? ' is-invalid' : '' )} placeholder="Name"/>
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
                                <input name = 'password' onChange={loginFrm.handleChange} type="password" className={"form-control" + (loginFrm.errors.password && loginFrm.touched.password ? ' is-invalid' : '' )} placeholder="Password"/>
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