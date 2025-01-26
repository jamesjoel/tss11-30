 import React from 'react'
 import { NavLink , useNavigate } from 'react-router-dom'
 import { useFormik } from 'formik'
 import axios from 'axios'
 import * as yup from 'yup'
//  import {URL_API} from "../../constant/URL_API"

  let x = yup.object({
    name : yup. string().required(),
    business_name : yup. string().required(),
    email : yup. string().required().email(),
    password : yup. string().required(),
    contact : yup. number().required().typeError("should be numberf").min(999999999 , 'should be 10 digit').max(9999999999,'should be 10 digit'),
    image : yup. string().required(),
    rating : yup. string().required(),
    address : yup. string().required()

  })
 
 const Singup = () => {

  let navigate = useNavigate();

    let signupfrm = useFormik ({
       validationSchema : x ,
       initialValues : {
           name : "",
           business_name : "",
           email : "",
           password : "",
           contact : "",
           image : "",
           rating : "",
           address : "",
          
       },
       onSubmit : (formData) => {
        axios
        .post("http://localhost:3001/api/v1/business" , formData)
        .then(response =>{
            // console.log(response.data);
            if(response.data.success == true){
                navigate("/buslogin");
            }
        })
    }
   })
   return (
     <>
         <div id="about" className="about-main pad-top-100 pad-bottom-100">
    <div className="container">
      <form onSubmit={signupfrm.handleSubmit}>
     <div className='row'>   
    <div className="col-md-6 offset-md-3">
      <div className="card" style={{backgroundColor : '#E6E6E6'}}>
        <div className='card-header text-light' style={{backgroundColor : "#E75B1E"}}>
        <h3 className="text-center pt-3 pb-0"> Register Singup</h3>
        <p> Already Mumber<NavLink to="/business/login" style={{color : 'white'}}>  Login here</NavLink></p>

        </div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label for="text"><h4> Name : </h4></label>
              <input type="text" name='name' onChange={signupfrm.handleChange}className= {'form-control' + (signupfrm.errors.name && signupfrm.touched.name ? ' is-invalid' : '') }  placeholder=" Name"/>
              {
                                    signupfrm.errors.name && signupfrm.touched.name
                                    ?
                                    <small className='text-danger'>{signupfrm.errors.name}</small>
                                    :
                                    ""
                                }
            </div>
            <div className="form-group">
              <label for="text"><h4> Business Name : </h4></label>
              <input type="text"  name='business_name' onChange={signupfrm.handleChange} className= {'form-control' + (signupfrm.errors.business_name && signupfrm.touched.business_name ? ' is-invalid' : '') }  placeholder="Business Name"/>
              {
                                    signupfrm.errors.business_name && signupfrm.touched.business_name
                                    ?
                                    <small className='text-danger'>{signupfrm.errors.business_name}</small>
                                    :
                                    ""
                                }
            </div>
            <div className="form-group">
              <label for="email"><h4> Email : </h4></label>
              <input type="email"  name='email' onChange={signupfrm.handleChange}className= {'form-control' + (signupfrm.errors.email && signupfrm.touched.email ? ' is-invalid' : '') }  placeholder="Enter Email"/>
              {
                                    signupfrm.errors.email && signupfrm.touched.email
                                    ?
                                    <small className='text-danger'>{signupfrm.errors.email}</small>
                                    :
                                    ""
                                }
            </div>
            <div className="form-group">
              <label for="password"><h4>Password:</h4></label>
              <input type="password"  name='password' onChange={signupfrm.handleChange} className= {'form-control' + (signupfrm.errors.password && signupfrm.touched.password ? ' is-invalid' : '') } id="password" placeholder="Enter password"/>
              {
                                    signupfrm.errors.password && signupfrm.touched.password
                                    ?
                                    <small className='text-danger'>{signupfrm.errors.password}</small>
                                    :
                                    ""
                                }
            </div>
            {/* <div className="form-group">
              <label for="password"><h4> Re-Password:</h4></label>
              <input type="password" className="form-control" id="password" placeholder="Enter Re-password"/>
            </div> */}
            <div className="form-group">
              <label for="text"><h4> Contact: </h4></label>
              <input type="number"  name='contact' onChange={signupfrm.handleChange} className= {'form-control' + (signupfrm.errors.contact && signupfrm.touched.contact ? ' is-invalid' : '') }  placeholder="Enter Contact"/>
              {
                                    signupfrm.errors.contact && signupfrm.touched.contact
                                    ?
                                    <small className='text-danger'>{signupfrm.errors.contact}</small>
                                    :
                                    ""
                                }
            </div>
            <div className="form-group">
              <label for="text"><h4> Image : </h4></label>
              <input type="text"  name='image' onChange={signupfrm.handleChange} className= {'form-control' + (signupfrm.errors.image && signupfrm.touched.image ? ' is-invalid' : '') }  placeholder="Enter Image"/>
              {
                                    signupfrm.errors.image && signupfrm.touched.image
                                    ?
                                    <small className='text-danger'>{signupfrm.errors.image}</small>
                                    :
                                    ""
                                }
            </div>
            <div className="form-group">
              <label for="text"><h4> Rating : </h4></label>
              <input type="number"  name='rating' onChange={signupfrm.handleChange} className= {'form-control' + (signupfrm.errors.rating && signupfrm.touched.rating ? ' is-invalid' : '') }  placeholder="Enter Rating"/>
              {
                                    signupfrm.errors.rating && signupfrm.touched.rating
                                    ?
                                    <small className='text-danger'>{signupfrm.errors.rating}</small>
                                    :
                                    ""
                                }
            </div>
            <div className="form-group">
              <label for="text"><h4> Address: </h4></label>
              <input type="textarea"  name='address' onChange={signupfrm.handleChange} className= {'form-control' + (signupfrm.errors.address && signupfrm.touched.address ? ' is-invalid' : '') }  placeholder="Addrees"/>
              {
                                    signupfrm.errors.address && signupfrm.touched.address
                                    ?
                                    <small className='text-danger'>{signupfrm.errors.address}</small>
                                    :
                                    ""
                                }
            </div>
            
          </form>
        </div>
        <div className='card-footer'>
        <button style={{backgroundColor : "#E75B1E"}} type="submit" class="btn btn-block table-btn text-light pt-3 "><h4>Register</h4></button>
        
        
        </div>
      </div>
    </div>
    </div>
  </form>
  </div>
</div>     
     </>
   )
 }
 
 export default Singup