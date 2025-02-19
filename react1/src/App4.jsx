import React, { useState } from 'react'
import axios from 'axios'

/*

    axios.get("API URL").then(response=>{
        response.data
    })


*/


const App4 = () => {
    
    let [user, setUser] = useState([]);
    let [showLoader, setShowLoader] = useState(false);

    let getData = ()=>{
        setShowLoader(true)
        axios
        .get("https://reqres.in/api/users?per_page=12")
        .then(response=>{
            setShowLoader(false)
            // console.log(response.data.data);
           setUser(response.data.data);
        })
    }

  return (
    <div className="container my-5">
        <div className="row">
            <div className="col-md-12 mt-4">
                <button onClick={getData} className='btn btn-success'>List of Users {showLoader==true ? <span className='spinner-border spinner-border-sm'></span> : '' }</button>
                {
                    user.length == 0
                    ?
                    <div className='alert alert-danger mt-4'>No Data Found</div>
                    :
                    // <table className="table table-dark table-hover table-striped table-bordered mt-4">
                    //     <thead>
                    //         <tr>
                    //             <th>S.No.</th>
                    //             <th>First Name</th>
                    //             <th>Last Name</th>
                    //             <th>Email</th>
                    //             <th>Image</th>
                    //         </tr>
                    //     </thead>
                    //     <tbody>
                    //         {
                    //             user.map((item, index)=><tr>
                    //                 <td>{index+1}</td>
                    //                 <td>{item.first_name}</td>
                    //                 <td>{item.last_name}</td>
                    //                 <td>{item.email}</td>
                    //                 <td><img src={item.avatar} style={{height : "70px", width : "70px"}} /></td>
                    //             </tr>)
                    //         }
                    //     </tbody>
                    // </table>
                    <div className='row mt-4'>
                        {
                            user.map(item=><div className='col-md-3'>
                                <div className='card border border-dark m-2'>
                                    <div className='card-header bg-dark'>
                                        <h5 className='text-light'>{item.first_name +" "+item.last_name}</h5>
                                    </div>
                                    <div className='card-body'>
                                        <p>{item.email}</p>
                                        <img src={item.avatar} style={{height : "70px", width : "70px"}} />
                                    </div>
                                    
                                </div>
                            </div>)
                        }
                    </div>
                    
                }
            </div>
        </div>
    </div>
  )
}

export default App4