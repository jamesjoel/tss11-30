import React, { useState  , useEffect} from 'react'
import axios from 'axios'

const Home = () => {
  let [allcity , setAllcity] = useState([])
  let [allstate , setAllstate] = useState([])


  useEffect(()=>{
    axios
   .get("")
   .then(response=>{
     // console.log(response.data);
     setAllstate(response.data);
   })
}, [])

  return (
    <>
        <div className='gradient_background container-fluid'>
            <div className='row'>
              <div className='col-md-4 offset-md-4 my-5'>
                <div className='card my-5'>
                  <div className='card-header'></div>
                  <div className='card-body'>
                    <label>State</label>
                    <select className='form-control'>
                      <option></option>
                      {
                         allstate.map(item=><option>{item}</option>)
                      }
                    </select>
                    <label>city</label>
                    <select className='form-control'>
                      <option></option>
                      { 
                                    
                         allcity.map((item, index)=>(<option>{item.name}</option>))
                               
                      }
                    </select>
                  </div>
                  <div className='card-footer'></div>
                </div>
              </div>
            </div>
        </div>
    </>
  )
}

export default Home