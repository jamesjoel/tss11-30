import React, { useState } from 'react'
import ModalBox from './Modal'

const Table = ({allUser, confDelete, askEdit}) => {
    let [showModal, setShowModal] = useState(false);
    let [tableRow, setTableRow] = useState({});

    let askDelete = (item)=>{
        setShowModal(true)
        setTableRow(item);
    }

  return (
    <div className='overflow-x-auto'>
    {
        allUser.length == 0
        ?
        <h3>No Data Found</h3>
        :
        <table className='table bg-gray-500 text-white border-white'>
        <thead className='text-white'>
            <tr>
                <th>S.No.</th>
                <th>Name</th>
                <th>Age</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            {
                allUser.map((item, index)=><tr key={index}>
                    <td>{index+1}</td>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td><button onClick={()=>askEdit(item)} className='btn btn-primary'>Edit</button></td>
                    <td><button onClick={()=>askDelete(item)} className='btn btn-error'>Delete</button></td>
                </tr>)
            }
        </tbody>
    </table>
    }

    <ModalBox confDelete={confDelete} showModal={showModal} setShowModal={setShowModal} tableRow={tableRow} />
    </div>
  )
}

export default Table