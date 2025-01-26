import axios from 'axios'
import React, { useEffect, useState } from 'react'

const task = () => {
 
  let [ allState , setAllState] = useState([]);
  let [ allcity , setAllcity] = useState([]);

  let [ a , setA] = useState("");

  useEffect (()=>{
      axios
      .get(`http://localhost:2500/api/v1/city/state`)
      .then (response =>{
          setAllState(response.data);
      })    
      
  })

   let getstate =(e)=>{
      let x = e.target.value;
      // console.log(x)
      axios
      .get(`http://localhost:2500/api/v1/city/getcity/${x}`)
      .then (response=>{
          setAllcity(response.data);
          // console.log(response.data)
          
      })
  }
  return (
    <>
    <div className='container mt-5'>
        <div className='row'>
            <div className='col-md-6'>
            <div className='card'>
                <div className='card-header bg-danger text-light'>
                    <h5 className='text-center'>User</h5>
                </div>
                <div className='card-body'>
                <form>
  <div class="form-group">
    <label for="state">State:</label>
    <select class="form-control"  onChange={(e)=>getstate(e)} >
      <option value="">Select State</option>
      {
             allState.map(item=><option>{item}</option>)
      } 
      
    </select>
  </div>
  <div class="form-group">
    <label for="city">City:</label>
    <select class="form-control" >
      <option value="">Select City</option>
      {
              allcity.map(item=><option>{item.name}</option>)
      } 

    </select>
  </div>
</form>
                </div>
                <div className='card-header'>
                    <button className='btn btn-danger'>sumbit</button>
                </div>

            </div>
            </div>

        </div>
    </div>
    </>
  )
}

export default task