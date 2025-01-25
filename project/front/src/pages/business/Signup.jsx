import React from 'react'
import Header2 from '../../components/user/headers/Header2'
import { NavLink, useNavigate } from 'react-router-dom'
import {useFormik} from 'formik'
import axios from 'axios'
import {API_URL} from '../../constants/API_URL'

const Signup = () => {
    let navigate = useNavigate();
    let SignupFrm = useFormik({
        initialValues : {
            name : "",
            business_name : "",
            email : "",
            password : "",
            contact : "",
            image : "",
            rating : "",
            address : "",
            repassword : ""
        },
        onSubmit : (formData)=>{
            axios.post(`${API_URL}/business`, formData)
            .then(response=>{
                console.log(response.data);
                navigate("/business/login")
            })
        }
    })



  return (
    <>
    <Header2 />
    <section className="welcome-area section-padding2" style={{minHeight : "600px"}}>
        <div className="container-fluid">
            <form onSubmit={SignupFrm.handleSubmit}>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card border border-1">
                        <div className="card-header footer-widget">
                            <h4>Business(Hotel) Register</h4>
                            <p>Already Member <NavLink className='text-white' to='/business/login'>Login Here</NavLink></p>
                        </div>
                        <div className="card-body">
                            <div className="my-2">
                                <label>Name</label>
                                <input name='name' onChange={SignupFrm.handleChange} type='text' className='form-control' />
                            </div>
                            <div className="my-2">
                                <label>Business Name</label>
                                <input name='business_name' onChange={SignupFrm.handleChange} type='text' className='form-control' />
                            </div>
                            <div className="my-2">
                                <label>Username/Email</label>
                                <input name='email' onChange={SignupFrm.handleChange} type='text' className='form-control' />
                            </div>
                            <div className="my-2">
                                <label>Password</label>
                                <input name='password' onChange={SignupFrm.handleChange} type='password' className='form-control' />
                            </div>
                            <div className="my-2">
                                <label>Re-Password</label>
                                <input  name='repassword' onChange={SignupFrm.handleChange} type='password' className='form-control' />
                            </div>
                            <div className="my-2">
                                <label>Contact</label>
                                <input name='contact' onChange={SignupFrm.handleChange} type='text' className='form-control' />
                            </div>
                            
                            <div className="my-2">
                                <label>Address</label>
                                <textarea name='address' onChange={SignupFrm.handleChange} className='form-control' ></textarea>
                            </div>
                            
                        </div>
                        <div className="card-footer">
                            <button type='submit' className='template-btn'>Register</button>
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