 import React, {useState, useEffect} from 'react';
 import axios from 'axios';
 
 const List = () => {

    let [alluser , setAlluser] = useState([]);

    useEffect(()=>{
        axios
        .get("http://localhost:3001/api/v1/user/list")
        .then(response=>{
            setAlluser(response.data)
            // console.log(response.data)
        })

    },[])
   return (
     <>
      <div className='container'>
        <div className='row'>
            <h1 className="m-5">List of all registered user</h1>
        </div>

      <div className='row'>
       <div className='col-md-8'>
         <table className='table table-bordered table-hover table-dark table-striped'>
            <thead>
                <tr>
                    <th>S.no</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Contact</th>
                </tr>
            </thead>
            <tbody>
                {
                    alluser.map((item , index)=>{
                        return(
                            <tr>
                                <td>{index+1}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.contact}</td>
                            </tr>
                        )

                        
                    })
                }
            </tbody>

         </table>
       </div>
      </div>
     
      </div>
     </>
   )
 }
 
 export default List