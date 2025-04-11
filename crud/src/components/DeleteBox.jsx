import React from 'react'

const DeleteBox = ({delStu, stu}) => {
  return (
    <div className='modal fade' id='delModal'>
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header"><h4>Delete Student</h4></div>
                <div className="modal-body">
                    <p>Are you sure want to delete this {stu.name}</p>
                </div>
                <div className="modal-footer">
                    <button onClick={()=>delStu(stu)} className='btn btn-danger' data-bs-dismiss="modal">Delete</button>
                    <button className='btn btn-dark' data-bs-dismiss="modal">Close</button>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default DeleteBox