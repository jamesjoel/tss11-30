import React, { useState } from 'react'
import DeleteBox from './DeleteBox'

const EmployeeList = ({employee, delEmployee, editEmployee}) => {

    let [emp, setEmp] = useState({})

    
    


  return (
    <div className="col-md-12">
        {
            employee.length == 0
            ?
            <div className="alert alert-info">
                No Data Found
            </div>
            :
            <table className="table table-hover table-striped table-bordered table-dark">
            <thead>
                <tr>
                    <th>S.NO.</th>
                    <th>NAME</th>
                    <th>SALARY</th>
                    <th>DEPARTMENT</th>
                    <th>ADDRESS</th>
                    <th>DELETE</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {
                   employee.map((item, index)=>{
                    return(
                        <tr kwey={index} className={item.salary>40000 ? 'table-success' : item.salary>20000 && item.salary<40000 ? 'table-info' : item.salary<20000 ? 'table-red' : ''}>
                            <td>{index+1}</td>
                            <td>{item.name}</td>
                            <td>{item.salary}</td>
                            <td>{item.department}</td>
                            <td>{item.address}</td>
                            <td><button onClick={()=>setEmp(item)} data-bs-target='#delModal' data-bs-toggle='modal' className='btn btn-sm btn-danger'>DEL</button></td>
                            <td><button onClick={()=>editEmployee(item)} className='btn btn-sm btn-info'>Edit</button></td>
                        </tr>
                    )
                   }) 
                }
            </tbody>
        </table>
        }
            <DeleteBox delEmployee={delEmployee} emp={emp} />   
            </div>
  )
}

export default EmployeeList