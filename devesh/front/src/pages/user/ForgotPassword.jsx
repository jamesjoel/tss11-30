import React,{useState} from 'react'
import Header2 from '../../components/user/header/Header2'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { API_URL } from '../../constants/API_URL'
import { useFormik } from 'formik'
import * as YUP from 'yup'

let Schema = YUP.object({
    email : YUP.string().email("Email Id is wrong").required("Insert Email Id")
})

const ForgotPassword = () => {
    let navigate = useNavigate();

    let [errMsg, setErrMsg] = useState(false)
    
    let forgotPassFrm = useFormik({
        validationSchema : Schema,
        initialValues : {
            email : ''
        },
        
        onSubmit : (formData)=>{
            axios.post(`${API_URL}/forgotpass`,formData)
            .then(response=>{
                // console.log(response.data);return
                if(response.data.success == true){
                    console.log("*********");
                    localStorage.setItem("email-for-otp", formData.email);
                    navigate("/otp");
                }else{
                    setErrMsg(true);
                }
            })
        }
    })

  return (
    <>
    <Header2/>
   
    <section className="containerfluid" style={{minHeight : "600 px"}}>
       <div className="container">
            <form onSubmit={forgotPassFrm.handleSubmit}>
                <div className="row">
                    <div className="col-md-6 offset-md-3 my-5">
                        <div className="card">
                            <div className="card-header footer-widget">
                                <h4>Forgot Password</h4>
                            </div>
                            <div className="card-body">
                                <div className="my-2">
                                    <label>EmailId/Username</label>
                                    <input type='text' name='email' onChange={forgotPassFrm.handleChange} className={"form-control"+ (forgotPassFrm.errors.email && forgotPassFrm.touched.email ? ' is-invalid' : '')}/>
                                </div>
                                {
                                    forgotPassFrm.errors.email && forgotPassFrm.touched.email 
                                    ?
                                    <small className='text-danger'>{forgotPassFrm.errors.email}</small>
                                    :
                                    ''
                                }
                                {
                                    errMsg
                                    ?
                                    <small className='text-danger'>This Email Id is not Registered</small>
                                    :
                                    ''
                                }
                            </div>
                            <div className="card-footer">
                                <button type='submit' className='btn btn-primary'>Next</button>
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

export default ForgotPassword