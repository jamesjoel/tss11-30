import React, { use, useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as Y from 'yup'
import axios from 'axios'
import StudentList from '../components/StudentList';

const API_URL = "http://localhost:3000/student";

let StuSchema = Y.object({
    name : Y.string().required(),
    fee : Y.number().typeError(" ").required(),
    city : Y.string().required(),
})

const Student = () => {
    let [allStu, setAllStu] = useState([]);
    useEffect(()=>{
        axios.get(`${API_URL}`)
        .then(response=>{
            setAllStu(response.data);
        })
    },[])

    let [stu, setStu] = useState({
        name : "",
        fee : "",
        city : ""
    })


    let stuFrm = useFormik({
        enableReinitialize : true,
        initialValues : stu,
        onSubmit : (formData, {setValues})=>{
            if(stu.id){
                axios.put(`${API_URL}/${stu.id}`, formData)
            .then(response=>{
                
                
                setAllStu(state=>{
                    return state.map(item=>{
                        if(item.id == stu.id){
                            
                            return formData;
                        }else{
                            
                            return item;
                        }
                    })
                })
                setValues({name : "", fee : "", city : ""})
               
                
                
            })
            }else{
                axios.post(`${API_URL}`, formData)
            .then(response=>{
                setAllStu((stu)=>[...stu, response.data]);
                stuFrm.resetForm()
            })
            }
        },
        validationSchema : StuSchema
    })


    let delStu = (obj)=>{
        axios.delete(`${API_URL}/${obj.id}`)
        .then(response=>{
            setAllStu((state)=>state.filter(item=>item.id != obj.id ));
        })
    }   

    let editStu = (obj)=>{
        setStu(obj);
    }
  return (
    <div className="container my-5">
        <form onSubmit={stuFrm.handleSubmit}>
        <div className="row">
            <div className="col-md-12">
                <h3>Student Management System</h3>
                <div className='row'>
                    <div className='col-md-6 offset-md-3'>
                        <div className='my-2'>
                            <label>
                                Name 
                                {
                                    stuFrm.errors.name && stuFrm.touched.name
                                    ?
                                    <span className='text-danger'>*</span>
                                    :
                                    ''
                                }
                            </label>
                            <input value={stuFrm.values.name} name='name' onChange={stuFrm.handleChange} type='text' className='form-control' />
                        </div>
                        <div className='my-2'>
                            <label>
                                Fee
                                {
                                    stuFrm.errors.fee && stuFrm.touched.fee
                                    ?
                                    <span className='text-danger'>*</span>
                                    :
                                    ''
                                }
                            </label>
                            <input value={stuFrm.values.fee} name='fee' onChange={stuFrm.handleChange} type='text' className='form-control' />
                        </div>
                        <div className='my-2'>
                            <label>
                                City
                                {
                                    stuFrm.errors.city && stuFrm.touched.city
                                    ?
                                    <span className='text-danger'>*</span>
                                    :
                                    ''
                                }
                            </label>
                            <select value={stuFrm.values.city} name='city' onChange={stuFrm.handleChange} className='form-control'>
                                <option value=''>Select</option>
                                <option value='Indore'>Indore</option>
                                <option value='Mumbai'>Mumbai</option>
                                <option value='Pune'>Pune</option>
                            </select>
                        </div>
                        <div className='my-2'>
                            <div className="d-grid">
                                <button type='submit' className='btn btn-success'>{stu.id ? 'Edit' : 'Add' }</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                   <StudentList editStu={editStu} delStu={delStu} allStu={allStu} />
                </div>
            </div>
        </div>
        </form>
    </div>
  )
}

export default Student