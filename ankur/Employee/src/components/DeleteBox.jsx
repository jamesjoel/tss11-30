import React from 'react'

const DeleteBox = ({delEmployee, emp}) => {
  return (
    <div className="modal fade" id='delModal'>
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h3>Delete Employee</h3>
                </div>
                <div className="modal-body">
                    <p>Are you sure you want to delete {emp.name}</p>
                </div>
                <div className="modal-footer">
                    <button onClick={()=>delEmployee(emp)} className='btn btn-sm btn-danger' data-bs-dismiss='modal'>Delete</button>
                    <button className='btn btn-sm btn-dark'data-bs-dismiss='modal'>Close</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DeleteBox