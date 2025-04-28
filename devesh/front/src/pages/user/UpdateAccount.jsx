import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import ProfileFrmSchema from '../../schemas/ProfileSchema'
import { API_URL } from '../../constants/API_URL'
import axios from 'axios'

const UpdateAccount = () => {
    
    let [allCity, setAllCity] = useState([]);
    let [allState, setAllState] = useState([]);
    let [user, setUser] = useState({
        name : '',
        contact : '',
        address : '',
        state : '',
        city : '',
        gender : ''
    });

    let navigate = useNavigate();

    useEffect(()=>{
        axios
        .get(`${API_URL}/city/state`)
        .then(response =>{
          //  console.log(response.data)
            setAllState(response.data);
        })
    },[])

    let getCity = (x)=>{
        // console.log(x);
        axios
        .get(`${API_URL}/city/getcity/${x}`)
        .then(response =>{
                //console.log(response.data);
                setAllCity(response.data);
            })
        }

        useEffect(()=>{
            axios.get(`${API_URL}/user/profile`,{
              headers : {Authorization: localStorage.getItem("access-token")}
            })
            .then(response=>{
            //    console.log(response.data); return;
              setUser(response.data.user);
              let s = response.data.user.state ;
              getCity(s);
            })
          },[]);

    
    let updateFrm = useFormik({
        initialValues : user,
        enableReinitialize : true,
        validationSchema : ProfileFrmSchema,
        onSubmit : (formData)=>{

            // console.log(formData);
            axios.put(`${API_URL}/user/profile` , formData, 
                {headers : {Authorization : localStorage.getItem("access-token")}})
                .then(response =>{
                //   console.log(response.data);return;

                  navigate("/my-account");
                })
        }
    })

   

  return (
    <>
    <div className="row">
        <div className="col-md-8 offset-md-2">
            <form onSubmit ={updateFrm.handleSubmit}>
                <div className="card my-5">
                    <div className="card-header">
                        <h5>Update User Profile</h5>
                    </div>
                    <div className="card-body">
                        <div className="my-2">
                            <label>Full Name</label>
                            <input type='text' name='name' value={updateFrm.values.name} onChange={updateFrm.handleChange} className={"form-control" + (updateFrm.errors.name && updateFrm.touched.name ? ' is-invalid' : '')}/>
                            {
                                    updateFrm.errors.name && updateFrm.touched.name
                                    ?
                                    <small className='text-danger'>{updateFrm.errors.name}</small>
                                    :
                                    ''
                            }
                        </div>
                        <div className="my-2">
                            <label>Email</label>
                            <input disabled type='text' name='email' value={updateFrm.values.email} onChange={updateFrm.handleChange} className={"form-control" + (updateFrm.errors.email && updateFrm.touched.email ? ' is-invalid' : '')}/>
                            {
                                    updateFrm.errors.email && updateFrm.touched.email
                                    ?
                                    <small className='text-danger'>{updateFrm.errors.email}</small>
                                    :
                                    ''
                            }
                        </div>
                        <div className="my-2">
                            <label>Address</label>
                            <textarea type='text' name='address' value={updateFrm.values.address} onChange={updateFrm.handleChange} className={"form-control" + (updateFrm.errors.address && updateFrm.touched.address ? ' is-invalid' : '')}></textarea>
                            {
                                    updateFrm.errors.address && updateFrm.touched.address
                                    ?
                                    <small className='text-danger'>{updateFrm.errors.address}</small>
                                    :
                                    ''
                            }
                        </div>
                        <div className="my-2">
                            <label>Contact</label>
                            <input type='text' name='contact' value={updateFrm.values.contact} onChange={updateFrm.handleChange} className={"form-control" + (updateFrm.errors.contact && updateFrm.touched.contact ? ' is-invalid' : '')}/>
                            {
                                    updateFrm.errors.contact && updateFrm.touched.contact
                                    ?
                                    <small className='text-danger'>{updateFrm.errors.contact}</small>
                                    :
                                    ''
                            }
                        </div>
                        <div className="my-2">
                            <label>State</label>
                            <select type='text' name='state' value={updateFrm.values.state} onChange = {(e)=>{updateFrm.handleChange(e); getCity(e.target.value)}} className={"form-control" + (updateFrm.errors.state && updateFrm.touched.state ? ' is-invalid' : '')}>
                            <option>Select</option>
                                    {
                                        allState.map((item,index)=><option key={index} value={item}>{item}</option>)
                                    }
                            </select>
                            {
                                    updateFrm.errors.state && updateFrm.touched.state
                                    ?
                                    <small className='text-danger'>{updateFrm.errors.state}</small>
                                    :
                                    ''
                            }
                        </div>
                        <div className="my-2">
                            <label>City</label>
                            <select type='text' name='city' value={updateFrm.values.city} onChange={updateFrm.handleChange} className={"form-control" + (updateFrm.errors.city && updateFrm.touched.city ? ' is-invalid' : '')}>
                            <option>Select</option>
                                    {
                                        allCity.map((item,index)=><option key={index} value={item.name}>{item.name}</option>)
                                    }
                            </select>
                            {
                                    updateFrm.errors.city && updateFrm.touched.city
                                    ?
                                    <small className='text-danger'>{updateFrm.errors.city}</small>
                                    :
                                    ''
                            }
                        </div>
                        <div className="my-2">
                            <label>Gender</label>
                            <br/>
                          <input type='radio' name='gender' value = 'Male'  checked={updateFrm.values.gender == 'Male'}/>&nbsp;&nbsp;&nbsp;Male
                          <br/>
                          <input type='radio' name='gender' value = 'Female'  checked={updateFrm.values.gender == 'Female'} />&nbsp;&nbsp;&nbsp;Female
                          {
                                    updateFrm.errors.gender && updateFrm.touched.gender
                                    ?
                                    <small className='text-danger'>{updateFrm.errors.gender}</small>
                                    :
                                    ''
                          }
                        </div>
                        <NavLink className='btn btn-info m-2' to='/my-account'>Back</NavLink>
                        <button type='submit' className='btn btn-info m-2'>Update</button>
                    </div>
                    
                </div>
            </form>
        </div>
    </div>
    </>
  )
}

export default UpdateAccount
