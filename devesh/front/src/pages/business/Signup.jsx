import React,{useState} from 'react'
import Header2 from "../../components/user/header/Header2"
import { NavLink, useNavigate } from "react-router-dom"
import {useFormik} from "formik"
import axios from 'axios'
import {API_URL} from "../../constants/API_URL"
import businessSchema from '../../schemas/BusinessSchema'

const Signup = () => {
    let [preloader, setPreloader] = useState(false);

    let navigate = useNavigate();
    let signupFrm = useFormik({
        validationSchema: businessSchema,
       
        initialValues:{
            name:"",
            business_name:"",
            email:"",
            password:"",
            repassword:"",
            contact:"",
            image:"",
            rating:"",
            address:""
        },
        onSubmit:(formData)=>{
            setPreloader(true);

           // console.log(formData);
            axios
            .post(`${API_URL}/business`,formData)

            .then(response=>
                setPreloader(false),

                //console.log(response.data)

                navigate("/business/login")


            )

        }

    })
  return (
    <>
    <Header2/>
    
    <section className="containerfluid" style={{minHeight : "600 px"}}>
        <div className="container">
          <form onSubmit={signupFrm.handleSubmit}>
            <div className="row">
                <div className="col-md-6 offset-md-3 my-5">
                    <div className="card border border-1">
                        <div className="card-header bg-dark">
                            <h4 className="text-light">BUSINESS(HOTEL) REGISTER</h4>
                            <p className="text-light">Already Member <NavLink to ='/business/login'> Login Here</NavLink></p>
                        </div>
                        <div className="card-body">
                            <div className="my-2">
                                <label>Name</label>
                                <input type="text" name="name" onChange={signupFrm.handleChange} className={"form-control" + (signupFrm.errors.name && signupFrm.touched.name ? ' is-invalid' : '')} p laceholder="Name"/>
                                {
                                    signupFrm.errors.name && signupFrm.touched.name
                                    ?
                                    <span className='text-danger'>{signupFrm.errors.name}</span>
                                    :
                                    ''
                                }
                            </div>
                            <div className="my-2">
                                <label>Business Name</label>
                                <input type="text" name="business_name" onChange={signupFrm.handleChange} className={"form-control" + (signupFrm.errors.business_name && signupFrm.touched.business_name ? ' is-invalid' : '')} placeholder="Business Name"/>
                                {
                                    signupFrm.errors.business_name && signupFrm.touched.business_name
                                    ?
                                    <span className='text-danger'>{signupFrm.errors.business_name}</span>
                                    :
                                    ''
                                }
                            </div>
                            <div className="my-2">
                                <label>UserName/Email</label>
                                <input type="text" name="email" onChange={signupFrm.handleChange} className={"form-control" + (signupFrm.errors.email && signupFrm.touched.email ? ' is-invalid' : '')} placeholder="Name/Email"/>
                                {
                                    signupFrm.errors.email && signupFrm.touched.email
                                    ?
                                    <span className='text-danger'>{signupFrm.errors.email}</span>
                                    :
                                    ''
                                }
                            </div>
                            <div className="my-2">
                                <label>Password</label>
                                <input type="password" name="password" onChange={signupFrm.handleChange} className={"form-control" + (signupFrm.errors.password && signupFrm.touched.password ? ' is-invalid' : '')} placeholder="Password"/>
                                {
                                    signupFrm.errors.password && signupFrm.touched.password
                                    ?
                                    <span className='text-danger'>{signupFrm.errors.password}</span>
                                    :
                                    ''
                                }
                            </div>
                            <div className="my-2">
                                <label>Re-Password</label>
                                <input type="password" name="repassword" onChange={signupFrm.handleChange} className={"form-control" + (signupFrm.errors.repassword && signupFrm.touched.repassword ? ' is-invalid' : '')} placeholder="Re-Password"/>
                                {
                                    signupFrm.errors.repassword && signupFrm.touched.repassword
                                    ?
                                    <span className='text-danger'>{signupFrm.errors.repassword}</span>
                                    :
                                    ''
                                }
                            </div>
                            <div className="my-2">
                                <label>Contact</label>
                                <input type="text" name="contact" onChange={signupFrm.handleChange} className={"form-control" + (signupFrm.errors.contact && signupFrm.touched.contact ? ' is-invalid' : '')} />
                                {
                                    signupFrm.errors.contact && signupFrm.touched.contact
                                    ?
                                    <span className='text-danger'>{signupFrm.errors.contact}</span>
                                    :
                                    ''
                                }
                            </div>
                            <div className="my-2">
                                <label>Address</label>
                                <textarea name="address" onChange={signupFrm.handleChange} className={"form-control" + (signupFrm.errors.address && signupFrm.touched.address ? ' is-invalid' : '')} ></textarea>
                                {
                                    signupFrm.errors.address && signupFrm.touched.address
                                    ?
                                    <span className='text-danger'>{signupFrm.errors.address}</span>
                                    :
                                    ''
                                }
                            </div>
                        </div>
                        <div className="card-footer">
                            <button type='submit' className="button btn-orange text-light">Register { preloader ? <span className='spinner-border spinner-border-sm'></span> : '' }</button> 
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

export default Signup