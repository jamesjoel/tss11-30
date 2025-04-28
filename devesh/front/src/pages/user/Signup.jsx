import React,{useEffect, useState} from 'react'
import Header2 from "../../components/user/header/Header2"
import axios from 'axios'
import { API_URL } from '../../constants/API_URL';
import {useFormik} from 'formik';
import { useNavigate } from 'react-router-dom';
import userSchema from '../../schemas/UserSchema';

const Signup = () => {

    let [allCity, setAllCity] = useState([]);
    let [allState, setAllState] = useState([]);
    let [preloader, setPreloader] = useState(false);
    

    let navigate = useNavigate();
    let signupFrm = useFormik({
        validationSchema : userSchema,
        
        initialValues : {
            name:"",
            email:"",
            password:"",
            repassword:"",
            address:"",
            gender:"",
            state:"",
            city:"",
            contact:""
        },

        onSubmit: (formData)=>{
            setPreloader(true);

            // console.log(formData);return
           axios
           .post(`${API_URL}/user`,formData)
           .then(response =>{
            // console.log(response.data); return;
            if(response.data.success == true){
                setPreloader(false);

                navigate("/login") ;
            }
           })
        }

    })
    
    useEffect (()=>{
        axios
        .get(`${API_URL}/city/state`)
        .then(response =>{
          //  console.log(response.data)
            setAllState(response.data);
        })
    },[])

    let getState = (e)=>{
        let x = e.target.value ;
        // console.log(x);
        axios
        .get(`${API_URL}/city/getcity/${x}`)
        .then(response =>{
                //console.log(response.data);
                setAllCity(response.data);
            })
        }

  return (
    <>
    <Header2/>
    
    <section className="containerfluid" style={{minHeight : "600 px"}}>
        <div className="container">
            <form onSubmit ={signupFrm.handleSubmit}>
              <div className="row">
                <div className="col-md-6 offset-md-3 my-5">
                    <div className="card border border-1">
                        <div className="card-header bg-dark">
                            <h4 className="text-light">USER REGISTER</h4>
                        </div>
                        <div className="card-body">
                            <div className="my-2">
                                <label>Name</label>
                                <input type="text" name="name" onChange={signupFrm.handleChange} className={"form-control" + (signupFrm.errors.name && signupFrm.touched.name ? ' is-invalid' : '')} placeholder="Name"/>
                                {
                                    signupFrm.errors.name && signupFrm.touched.name
                                    ?
                                    <small className='text-danger'>{signupFrm.errors.name}</small>
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
                                    <small className='text-danger'>{signupFrm.errors.email}</small>
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
                                    <small className='text-danger'>{signupFrm.errors.password}</small>
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
                                    <small className='text-danger'>{signupFrm.errors.repassword}</small>
                                    :
                                    ''
                                }
                            </div>
                            <div className="my-2">
                                <label>Contact</label>
                                <input type="text" name="contact" onChange={signupFrm.handleChange} className={"form-control" + (signupFrm.errors.contact && signupFrm.touched.contact ? ' is-invalid' : '')}/>
                                {
                                    signupFrm.errors.contact && signupFrm.touched.contact
                                    ?
                                    <small className='text-danger'>{signupFrm.errors.contact}</small>
                                    :
                                    ''
                                }
                            </div>
                            <div className="my-2">
                                <label>State</label>
                                <select name="state" onChange = {(e)=>{getState(e);signupFrm.handleChange(e)}}  className={"form-control" + (signupFrm.errors.state && signupFrm.touched.state ? ' is-invalid' : '')}>
                                    <option>Select</option>
                                    {
                                        allState.map((item,index)=><option key={index} value={item}>{item}</option>)
                                    }
                                </select>
                                {
                                    signupFrm.errors.state && signupFrm.touched.state
                                    ?
                                    <small className='text-danger'>{signupFrm.errors.state}</small>
                                    :
                                    ''
                                }
                            </div>
                            <div className="my-2">
                                <label>City</label>
                                <select name="city" onChange={signupFrm.handleChange}  className={"form-control" + (signupFrm.errors.city && signupFrm.touched.city ? ' is-invalid' : '')}>
                                    <option>Select</option>
                                    {
                                        allCity.map((item,index)=><option key={index} value={item.name}>{item.name}</option>)
                                    }
                                </select>
                                {
                                    signupFrm.errors.city && signupFrm.touched.city
                                    ?
                                    <small className='text-danger'>{signupFrm.errors.city}</small>
                                    :
                                    ''
                                }
                            </div>
                            <div className="my-2">
                                <label>Address</label>
                                <textarea name="address" onChange={signupFrm.handleChange} className={"form-control" + (signupFrm.errors.address && signupFrm.touched.address ? ' is-invalid' : '')}></textarea>
                                {
                                    signupFrm.errors.address && signupFrm.touched.address
                                    ?
                                    <small className='text-danger'>{signupFrm.errors.address}</small>
                                    :
                                    ''
                                }
                            </div>
                            <div className="my-2">
                                <label>Gender</label> <br/>
                                <input name = 'gender' value = 'Male'  onChange={signupFrm.handleChange} type="radio"/>&nbsp;&nbsp;&nbsp;Male
                                <br/>
                                <input name = 'gender' value = 'Female' onChange={signupFrm.handleChange} type="radio"/>&nbsp;&nbsp;&nbsp;Female
                                <br/>
                                {
                                    signupFrm.errors.gender && signupFrm.touched.gender
                                    ?
                                    <small className='text-danger'>{signupFrm.errors.gender}</small>
                                    :
                                    ''
                                }
                            </div>
                        </div>
                        <div className="card-footer">
                            <button type = 'submit' className="button btn-orange text-light">Signup { preloader ? <span className='spinner-border spinner-border-sm'></span> : '' }</button> 
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