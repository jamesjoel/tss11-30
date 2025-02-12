 import axios  from 'axios'
 import React , {useEffect , useState} from 'react'
 import {useFormik} from 'formik'
 import {  useNavigate } from 'react-router-dom'
 import * as yup from 'yup'

 let x = yup.object({
    name : yup.string().required(),
    email : yup.string().required().email(),
    password : yup.string().required(),
    repassword : yup.string().required().oneOf([yup.ref('password')], "not match"),
    contact : yup.number().required().typeError("Should Be Number").min(999999999 , 'Should be 10 digit').max(9999999999,'should be 10 digit'),
    state : yup.string().required(),
    city : yup.string().required(),
    address : yup.string().required(),
    
 })

 
  let Singup = ()=>{

    let [allcity , setAllcity] = useState([])

    let navigate = useNavigate();

   useEffect(()=>{
           axios
          .get("http://localhost:3001/api/v1/city")
          .then(response=>{
            // console.log(response.data);
            setAllcity(response.data);
          })
   }, [])



   let signupfrm = useFormik ({
    validationSchema : x ,
    initialValues : {
        name : "",
        email : "",
        password : "",
        repassword : "",
        contact : "",
        state : "",
        city : "",
        address : "",
        gender : ""
    },
    onSubmit : (formData) => {
        axios
        .post("http://localhost:3001/api/v1/user" , formData)
        .then(response =>{
            // console.log(response.data);
            if(response.data.success == true){
                navigate("/login");
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
        <h3 className="text-center pt-3"> User Singup</h3>
        </div>
        <div className="card-body">
                            <div className="my-2">
                                <label>Name</label>
                                <input name='name' onChange={signupfrm.handleChange} type='text' className= {'form-control' + (signupfrm.errors.name && signupfrm.touched.name ? ' is-invalid' : '') }/>
                                {
                                    signupfrm.errors.name && signupfrm.touched.name
                                    ?
                                    <small className='text-danger'>{signupfrm.errors.name}</small>
                                    :
                                    ""
                                }
                            </div>
                            <div className="my-2">
                                <label>Username/Email</label>
                                <input name='email' onChange={signupfrm.handleChange} type='text'className= {'form-control' + (signupfrm.errors.email && signupfrm.touched.email ? ' is-invalid' : '') } />
                                {
                                    signupfrm.errors.email && signupfrm.touched.email
                                    ?
                                    <small className='text-danger'>{signupfrm.errors.email}</small>
                                    :
                                    ""
                                }
                                

                            </div>
                            <div className="my-2">
                                <label>Password</label>
                                <input name='password' onChange={signupfrm.handleChange} type='text'className= {'form-control' + (signupfrm.errors.password && signupfrm.touched.password ? ' is-invalid' : '') } />
                                {
                                    signupfrm.errors.password  && signupfrm.touched.password
                                    ?
                                    <small className='text-danger'>{signupfrm.errors.password}</small>
                                    :
                                    ""
                                }
                            </div>
                            <div className="my-2">
                                <label>Re-Password</label>
                                <input name='repassword' onChange={signupfrm.handleChange} type='text' className= {'form-control' + (signupfrm.errors.repassword && signupfrm.touched.repassword ? ' is-invalid' : '') } />
                                {
                                    signupfrm.errors.repassword && signupfrm.touched.repassword
                                    ?
                                    <small className='text-danger'>{signupfrm.errors.repassword}</small>
                                    :
                                    ""
                                }
                            </div>
                            <div className="my-2">
                                <label>Contact</label>
                                <input name='contact' onChange={signupfrm.handleChange} type='text' className= {'form-control' + (signupfrm.errors.contact && signupfrm.touched.contact ? ' is-invalid' : '') } />
                                {
                                    signupfrm.errors.contact && signupfrm.touched.contact
                                    ?
                                    <small className='text-danger'>{signupfrm.errors.contact}</small>
                                    :
                                    ""
                                }
                            </div>
                            <div className="my-2">
                                <label>State</label>
                                <select name='state' onChange={signupfrm.handleChange} className= {'form-control' + (signupfrm.errors.state && signupfrm.touched.state ? ' is-invalid' : '') } >

                                    <option>Select</option>
                                    <option>madhay predesh</option>
                                    <option>gujrat</option>
                                    <option>uttar predesh</option>
                                </select>
                                {
                                    signupfrm.errors.state && signupfrm.touched.state
                                    ?
                                    <small className='text-danger'>{signupfrm.errors.state}</small>
                                    :
                                    ""
                                }
                            </div>
                            <div className="my-2">
                            <label>City</label>
                                <select name='city' onChange={signupfrm.handleChange} className= {'form-control' + (signupfrm.errors.city && signupfrm.touched.city ? ' is-invalid' : '') } >
                                    <option disabled="true">Select</option>
                                    {allcity.map((item, index)=>(<option>{item.name}</option>))}

                                </select>
                                {
                                    signupfrm.errors.city && signupfrm.touched.city
                                    ?
                                    <small className='text-danger'>{signupfrm.errors.city}</small>
                                    :
                                    ""
                                }
                            </div>
                            <div className="my-2">
                                <label>Address</label>
                                <textarea name='address' onChange={signupfrm.handleChange} className= {'form-control' + (signupfrm.errors.address && signupfrm.touched.address ? ' is-invalid' : '') } ></textarea>
                                {
                                    signupfrm.errors.address && signupfrm.touched.address
                                    ?
                                    <small className='text-danger'>{signupfrm.errors.address}</small>
                                    :
                                    ""
                                }
                            </div>
                            <div className="my-2">
                                <label>Gender</label><br />
                                <input name='gender' onChange={signupfrm.handleChange} type='radio' />&nbsp;&nbsp;&nbsp;Male
                                <br />
                                <input  name='gender' onChange={signupfrm.handleChange} type='radio' />&nbsp;&nbsp;&nbsp;Female
                                <br/>
                                {
                                    signupfrm.errors.gender && signupfrm.touched.gender
                                    ?
                                    <small className='text-danger'>{signupfrm.errors.gender}</small>
                                    :
                                    ""
                                }
                            </div>
                        </div>
                        <div className="card-footer">
                            <button className='btn text-light px-4 pt-3' type='submit' style={{backgroundColor : "#E75B1E"}}><h3> signup</h3> </button>
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