import React,{useState, useEffect} from 'react'
import Header2 from '../../components/user/header/Header2'
import { useFormik } from 'formik'
import axios from 'axios'
import { API_URL } from '../../constants/API_URL'
import { useNavigate } from 'react-router-dom'
import * as YUP from 'yup'


let otpSchema = YUP.object({
    otp : YUP.number().typeError("Insert Numbers Only")
        .min(999 , "OTP should be 4 digit")
        .max(9999 , "OTP should be 4 digit").required("Insert OTP")
})


const Otp = () => {
    let navigate = useNavigate();
    useEffect(()=>{
          if(!localStorage.getItem("email-for-otp"))
            navigate("/login");
          
         },[]);
     
    let [errMsg, setErrMsg] = useState(false);

    let otpFrm = useFormik({
        validationSchema : otpSchema,
        initialValues : {
            otp : ''
        },
        onSubmit : (formData)=>{
            formData.email = localStorage.getItem("email-for-otp");
            // console.log(formData);
            axios.post(`${API_URL}/forgotpass/checkotp`, formData)
            .then(response=>{
                // console.log(response.data);
                if(response.data.success == true){
                    navigate("/resetpassword");
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
            <form onSubmit={otpFrm.handleSubmit}>
                <div className="row">
                    <div className="col-md-6 offset-md-3 my-5">
                        <div className="card">
                            <div className="card-header footer-widget">
                                <h4>Insert OTP</h4>
                            </div>
                            <div className="card-body">
                                <div className="my-2">
                                    <label>OTP</label>
                                    <input type='text' name='otp' onChange={otpFrm.handleChange} className={"form-control"+ (otpFrm.errors.otp && otpFrm.touched.otp ? ' is-invalid' : '')}/>
                                </div>
                                {
                                    otpFrm.errors.otp && otpFrm.touched.otp 
                                    ?
                                    <small className='text-danger'>{otpFrm.errors.otp}</small>
                                    :
                                    ''
                                }
                                {
                                    errMsg
                                    ?
                                    <small className='text-danger'>This OTP is Wrong !</small>
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

export default Otp