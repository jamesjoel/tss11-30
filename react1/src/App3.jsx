import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

const App3 = () => {

    let [myDate, setMyDate] = useState(new Date())

    let [user, setUser] = useState({
        name : "",
        age : "",
        fee : "",
        
    })


    let [allUser, setAllUser] = useState([]);


    let add = ()=>{
        setAllUser([...allUser, user]);
        setUser({name:"", age:"", fee:""})
    }

   let demo = (a)=>{ // {name : "", age : , fee}
        setAllUser((cur)=>{
            return cur.filter(item => item.name != a.name)
        })
   }


  return (

    <>
    <DatePicker selected={myDate} onChange={(date)=>setMyDate(date)} />
    <div className="container my-3">

            

        <div className="row">
            <div className="col-md-12 border border-info p-0">
                <div className='bg-info py-1'>
                    <h4 className='text-light text-center'>User</h4>
                </div>
                <div className="row p-3">
                    <div className="col-md-3">
                        <input value={user.name} onChange={(e)=>setUser({...user, name : e.target.value})} type='text' placeholder='Name' className='form-control' />
                    </div>
                    <div className="col-md-3">
                        <input value={user.fee} onChange={(e)=>setUser({...user, fee : e.target.value})} type='text' placeholder='Fee' className='form-control' />
                    </div>
                    <div className="col-md-3">
                        <input value={user.age} onChange={(e)=>setUser({...user, age : e.target.value})} type='text' placeholder='Age' className='form-control' />
                    </div>
                    <div className="col-md-3">
                        <div className='d-grid'>

                        <button className='btn btn-dark' onClick={add}>Add</button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 px-5">
                        <table className="table table-success table-hover table-bordered">
                            <thead className="table-danger">
                                <tr>
                                    <th>S.No.</th>
                                    <th>Name</th>
                                    <th>Age</th>
                                    <th>Fee</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                   allUser.map((item, index)=><tr>
                                        <td>{index+1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.age}</td>
                                        <td>{item.fee}</td>


                                        <td><button onClick={()=>demo(item)} className='btn btn-sm btn-danger'>
                                            <i class="fa fa-trash-o" aria-hidden="true"></i>
                                        </button></td>





                                   </tr>) 
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default App3