import { useFormik } from 'formik';
import React,{useEffect} from 'react'
import { API_URL } from '../../constants/API_URL';
import axios from 'axios';
import ResetPassSchema from '../../schemas/ResetPassSchema';
import useNotify from '../../hooks/useNotify';
import Header2 from '../../components/user/header/Header2'
import { ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {

   let navigate = useNavigate();
    useEffect(()=>{
      if(!localStorage.getItem("email-for-otp"))
        navigate("/login");
      
     },[]);
 


  let noti = useNotify("Your Password Changed Successfully !", "/login")
  let resetPassFrm = useFormik({
    validationSchema : ResetPassSchema,
    initialValues : {
      password : '',
      repassword : ''
    },
    onSubmit : (formData)=>{
      formData.email = localStorage.getItem("email-for-otp");
      axios.post(`${API_URL}/forgotpass/updatepassword`, formData)
      .then(response=>{
        if(response.data.success == true){
          // console.log(response.data);
          localStorage.removeItem("email-for-otp");
          noti();
        }
      })
    }
  })

  return (
    <>
    <Header2/>
   
    <ToastContainer/>
    
   <section className="containerfluid" style={{minHeight : "600 px"}}>
      <div className="container">
           <form onSubmit={resetPassFrm.handleSubmit}>
               <div className="row">
                   <div className="col-md-6 offset-md-3 my-5">
                       <div className="card">
                           <div className="card-header footer-widget">
                               <h4>Reset Password</h4>
                           </div>
                           <div className="card-body">
                               <div className="my-2">
                                   <label>New Password</label>
                                   <input type='password' name='password' onChange={resetPassFrm.handleChange} className={"form-control"+ (resetPassFrm.errors.password && resetPassFrm.touched.password ? ' is-invalid' : '')}/>
                               </div>
                               {
                                   resetPassFrm.errors.password && resetPassFrm.touched.password 
                                   ?
                                   <small className='text-danger'>{resetPassFrm.errors.password}</small>
                                   :
                                   ''
                               }
                            <div className="my-2">
                                   <label>Confirm New Password</label>
                                   <input type='password' name='repassword' onChange={resetPassFrm.handleChange} className={"form-control"+ (resetPassFrm.errors.repassword && resetPassFrm.touched.repassword ? ' is-invalid' : '')}/>
                               </div>
                               {
                                   resetPassFrm.errors.repassword && resetPassFrm.touched.repassword 
                                   ?
                                   <small className='text-danger'>{resetPassFrm.errors.repassword}</small>
                                   :
                                   ''
                               }
                               
                           </div>
                           <div className="card-footer">
                               <button type='submit' className='btn btn-primary'>Reset Password</button>
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
export default ResetPassword