import React, { useState } from 'react'
import DeleteBox from './DeleteBox'

const StudentList = ({allStu, delStu, editStu}) => {
    let [stu, setStu] = useState({});
  return (
    <div className='col-md-12'>
    {
        allStu.length == 0
        ?
        <div className='alert alert-info'>No Data Found</div>
        :
        <table className="table table-dark">
        <thead>
            <tr>
                <th>S.No.</th>
                <th>Name</th>
                <th>Fee</th>
                <th>City</th>
                <th>Delete</th>
                <th>Edit</th>
            </tr>
        </thead>
        <tbody>
            {
                allStu.map((item, index)=>{
                    return(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{item.name}</td>
                            <td>{item.fee}</td>
                            <td>{item.city}</td>
                            <td><button onClick={()=>setStu(item)} data-bs-target="#delModal" data-bs-toggle="modal" className='btn btn-sm btn-danger'>Del</button></td>
                            <td><button onClick={()=>editStu(item)} className='btn btn-sm btn-info'>Edit</button></td>
                        </tr>
                    )
                })
            }
        </tbody>
    </table>
    }

    <DeleteBox delStu={delStu} stu={stu} />
</div>
  )
}

export default StudentList