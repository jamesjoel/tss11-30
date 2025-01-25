import React, {useEffect, useState} from 'react'
import Header2 from '../../components/user/headers/Header2'
import axios from 'axios'
import { API_URL } from '../../constants/API_URL'
import { useFormik } from 'formik'
import {useNavigate} from 'react-router-dom'
import SignupFrmSchema from '../../schemas/SignupSchema'

const Signup = () => {
    let navigate = useNavigate();
    let [allCity, setAllCity] = useState([]);
    useEffect(()=>{
        axios
        .get(`${API_URL}/city`)
        .then(response=>{
            // console.log(response.data);
            setAllCity(response.data);
        })
    },[])

    let SignupFrm = useFormik({
        validationSchema : SignupFrmSchema,
        initialValues : {
            name : "",
            email : "",
            password : "",
            repassword : "",
            address : "",
            gender : "",
            state : "",
            city : "",
            contact : ""
        },
        onSubmit : (formData)=>{
            
            
            axios
            .post(`${API_URL}/user`, formData)
            .then(response=>{
                if(response.data.success==true){
                    navigate("/login");
                }
            })
            
        }
    });


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
                                    <h4>User Register</h4>
                                </div>
                                <div className="card-body">
                                    <div className="my-2">
                                        <label>Name</label>
                                        <input name='name' onChange={SignupFrm.handleChange} type='text' className={'form-control' + (SignupFrm.errors.name && SignupFrm.touched.name ? ' is-invalid' : '')} />

                                        {
                                            SignupFrm.errors.name && SignupFrm.touched.name
                                            ?
                                            <small className='text-danger'>{SignupFrm.errors.name}</small>
                                            :
                                            ''
                                        }

                                    </div>
                                    <div className="my-2">
                                        <label>Username/Email</label>
                                        <input name='email' onChange={SignupFrm.handleChange} type='text' className={'form-control' + (SignupFrm.errors.email && SignupFrm.touched.email ? ' is-invalid' : '')} />
                                        {
                                            SignupFrm.errors.email && SignupFrm.touched.email
                                            ?
                                            <small className='text-danger'>{SignupFrm.errors.email}</small>
                                            :
                                            ''
                                        }
                                    </div>
                                    <div className="my-2">
                                        <label>Password</label>
                                        <input name='password' onChange={SignupFrm.handleChange} type='password' className={'form-control' + (SignupFrm.errors.password && SignupFrm.touched.password ? ' is-invalid' : '')} />
                                        {
                                            SignupFrm.errors.password && SignupFrm.touched.password
                                            ?
                                            <small className='text-danger'>{SignupFrm.errors.password}</small>
                                            :
                                            ''
                                        }
                                    </div>
                                    <div className="my-2">
                                        <label>Re-Password</label>
                                        <input name='repassword' onChange={SignupFrm.handleChange} type='password' className={'form-control' + (SignupFrm.errors.repassword && SignupFrm.touched.repassword ? ' is-invalid' : '')} />
                                        {
                                            SignupFrm.errors.repassword && SignupFrm.touched.repassword
                                            ?
                                            <small className='text-danger'>{SignupFrm.errors.repassword}</small>
                                            :
                                            ''
                                        }
                                    </div>
                                    <div className="my-2">
                                        <label>Contact</label>
                                        <input name='contact' onChange={SignupFrm.handleChange} type='text' className={'form-control' + (SignupFrm.errors.contact && SignupFrm.touched.contact ? ' is-invalid' : '')} />
                                        {
                                            SignupFrm.errors.contact && SignupFrm.touched.contact
                                            ?
                                            <small className='text-danger'>{SignupFrm.errors.contact}</small>
                                            :
                                            ''
                                        }
                                    </div>
                                    <div className="my-2">
                                        <label>State</label>
                                        <select name='state' onChange={SignupFrm.handleChange} className={'form-control' + (SignupFrm.errors.state && SignupFrm.touched.state ? ' is-invalid' : '')} >
                                            <option>Select</option>
                                            <option>Madhya Pradesh</option>
                                            <option>Rajasthan</option>
                                            <option>Gujrat</option>
                                        </select>
                                        {
                                            SignupFrm.errors.state && SignupFrm.touched.state
                                            ?
                                            <small className='text-danger'>{SignupFrm.errors.state}</small>
                                            :
                                            ''
                                        }
                                    </div>
                                    <div className="my-2">
                                    <label>City</label>
                                        <select name='city' onChange={SignupFrm.handleChange} className={'form-control' + (SignupFrm.errors.city && SignupFrm.touched.city ? ' is-invalid' : '')} >
                                            <option>Select</option>
                                            {
                                                allCity.map(item=><option>{item.name}</option>)
                                            }
                                        </select>
                                        {
                                            SignupFrm.errors.city && SignupFrm.touched.city
                                            ?
                                            <small className='text-danger'>{SignupFrm.errors.city}</small>
                                            :
                                            ''
                                        }
                                    </div>
                                    <div className="my-2">
                                        <label>Address</label>
                                        <textarea name='address' onChange={SignupFrm.handleChange} className={'form-control' + (SignupFrm.errors.address && SignupFrm.touched.address ? ' is-invalid' : '')} ></textarea>
                                        {
                                            SignupFrm.errors.address && SignupFrm.touched.address
                                            ?
                                            <small className='text-danger'>{SignupFrm.errors.address}</small>
                                            :
                                            ''
                                        }
                                    </div>
                                    <div className="my-2">
                                        <label>Gender</label><br />
                                        <input name='gender'  onChange={SignupFrm.handleChange} type='radio' />&nbsp;&nbsp;&nbsp;Male
                                        <br />
                                        <input name='gender'  onChange={SignupFrm.handleChange} type='radio' />&nbsp;&nbsp;&nbsp;Female
                                        <br />
                                        {
                                            SignupFrm.errors.gender && SignupFrm.touched.gender
                                            ?
                                            <small className='text-danger'>{SignupFrm.errors.gender}</small>
                                            :
                                            ''
                                        }
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <button type='submit' className='template-btn'>Signup</button>
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

/*
    1. required
    2. email --- check pattern
    3. pass + repass --- check
    4. contact --- number+length



    2+2x3

    2+(2x3)
*/