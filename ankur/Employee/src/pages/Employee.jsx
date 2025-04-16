import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import axios from 'axios'
import * as yup from 'yup'
import EmployeeList from '../components/EmployeeList'

const API_URL = 'http://localhost:3000/Employee'

let EmployeeSchema = yup.object({
    name : yup.string().required(),
    salary : yup.number().typeError(' ').required(),
    department : yup.string().required(),
    address : yup.string().required(),
})

const Employee = () => {

    let [employee, setAllEmployee] = useState([])
    
    let [emp, setEmp] = useState({
        name : '',
        salary : '',
        department : '',
        address : '',
    })

let Employeefrm = useFormik({
    validationSchema : EmployeeSchema,
    enableReinitialize:true,
    initialValues : emp,
    onSubmit : (formData, {setValues})=>{
        if(emp.id){
            axios.put(`${API_URL}/${emp.id}`,formData)
            .then(response=>{
                setAllEmployee((state)=>{
                    return state.map(item=>{
                        if(item.id == emp.id){
                            return formData
                        }else{
                            return item;
                        }
                    })
                    
                })
                setValues({name: '',salary:'',department:'',address:''})
            })

        }else{
        axios.post(`${API_URL}`,formData)
        .then(response=>{
            setAllEmployee((emp)=>[...emp, formData])
            Employeefrm.resetForm()
        })
    }
    }

})

useEffect(()=>{
    axios.get(`${API_URL}`)
    .then(response=>{
        setAllEmployee(response.data);
    })

},[])

let delEmployee = (obj)=>{
    axios.delete(`${API_URL}/${obj.id}`)
    .then(response=>{
        setAllEmployee((state)=>state.filter(item=>item.id != obj.id));
    })
}

let editEmployee = (obj)=>{
    setEmp(obj)
}

  return (
    <>
    <div className="container my-2">
        <form onSubmit={Employeefrm.handleSubmit}>
        <div className="row">
            <div className="col-md-12">
                <h3>Employee Management</h3>
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="my-2">
                            <label>Name
                                {
                                    Employeefrm.errors.name && Employeefrm.touched.name
                                    ?
                                    <span className='text-danger'>*</span>
                                    :
                                    ''
                                }
                            </label>
                            <input name='name' value={Employeefrm.values.name} onChange={Employeefrm.handleChange} type='text' className={'form-control'+(Employeefrm.errors.name && Employeefrm.touched.name ? ' is-invalid' : '')}/>
                        </div>
                        <div className="my-2">
                            <label>Salary
                            {
                                    Employeefrm.errors.salary && Employeefrm.touched.salary
                                    ?
                                    <span className='text-danger'>*</span>
                                    :
                                    ''
                            }

                            </label>
                            <input name='salary' value={Employeefrm.values.salary} onChange={Employeefrm.handleChange} type='text' className={'form-control'+(Employeefrm.errors.salary && Employeefrm.touched.salary ? ' is-invalid' : '')}/>
                        </div>
                        <div className="my-2">
                            <label>Department
                            {
                                    Employeefrm.errors.department && Employeefrm.touched.department
                                    ?
                                    <span className='text-danger'>*</span>
                                    :
                                    ''
                            }

                            </label>
                            <select name='department' value={Employeefrm.values.department} onChange={Employeefrm.handleChange} className={'form-control'+(Employeefrm.errors.department && Employeefrm.touched.department ? ' is-invalid' : '')}>
                                <option value=''>Select</option>
                                <option value='HR'>HR</option>
                                <option value='OFFICER'>OFFICER</option>
                                <option value='CLERK'>CLERK</option>
                                <option value='PEON'>PEON</option>
                            </select>
                        </div>
                        <div className="my-2">
                            <label>Address
                            {
                                    Employeefrm.errors.address && Employeefrm.touched.address
                                    ?
                                    <span className='text-danger'>*</span>
                                    :
                                    ''
                            }

                            </label>
                            <textarea name='address' value={Employeefrm.values.address} onChange={Employeefrm.handleChange} className={'form-control'+(Employeefrm.errors.address && Employeefrm.touched.address ? ' is-invalid' : '')}></textarea>
                        </div>
                        <div className="my-2">
                            <div className="d-grid">
                                <button type='submit' className={'btn ' + (emp.id ? 'btn-info' : 'btn-success')}>{emp.id ? 'Edit' : 'Add'}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <EmployeeList employee={employee} delEmployee={delEmployee} editEmployee={editEmployee} />
        </div>
        </form>
    </div>
    </>
  )
}

export default Employee