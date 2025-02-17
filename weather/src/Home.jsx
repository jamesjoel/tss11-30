import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  
  let [allCity,setAllCity] = useState([]);
  let [allState,setAllState] = useState([]);
  let [weather, setWeather] = useState();
    useEffect(()=>{
        axios
        .get("https://tss11-30-project.onrender.com/api/v1/city/state")
        .then(response=>{
            //console.log(response.data)
            setAllState(response.data)
        })
    },[])

    let getState = ((e)=>{
        let selectedState = e.target.value
        axios
        .get(`https://tss11-30-project.onrender.com/api/v1/city/getcity/${selectedState}`)
        .then(response=>{
            //console.log(response.data)
            setAllCity(response.data)
        })
    })

    let getWeather = ((e)=>{
      let selectedCity = e.target.value
      axios
      .get(`http://api.weatherapi.com/v1/current.json?key=017ae87f6b0e416391e100006251602&q=${selectedCity}&aqi=no`)
      .then(response=>{
        console.log(response.data)
        setWeather(response.data)
      
    })

    })
  
    return (
    <>
      <div className='gradient_background container-fluid'>
        <div className='row d-flex justify-content-center'>
          <div className="col-md-4 rounded-2xl shadow-lg shadow-purple-500 opacity-85 mt-5" style={{minHeight: '500px'}}>
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"></button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                      <label>State</label>
                      <select name='state' onChange={(e)=>getState(e)} className='form-control'>
                      <option>Select</option>
                      {
                        allState.map((item,index)=><option key={index}>{item}</option>)
                      }
                     </select>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                      <label>City</label>
                      <select name='city' className='form-control' onChange={(e)=>getWeather(e)}>
                      <option>Select</option>
                      {
                        
                        allCity.map((item,index)=><option key={index}>{item.name}</option>)
                      
                      }
                      </select>
                  </a>
                </li>
              </ul>
            </div>
            <div className='text-dark'>
              
              {/* <h5 className='text-dark'>{weather.location.name}</h5>
              <h5 className='text-dark'>{weather.current.temp_c}</h5> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
