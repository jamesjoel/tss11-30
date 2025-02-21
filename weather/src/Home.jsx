import React, { useState, useEffect } from 'react';
import AnalogClock from 'analog-clock-react';

import axios from 'axios';
import './Home2.css'

const Home = () => {

  let options = {
    width: "80px",
    border: true,
    borderColor: "#2e2e2e",
    baseColor: "#17a2b8",
    centerColor: "#459cff",
    centerBorderColor: "#ffffff",
    handColors: {
        second: "#d81c7a",
        minute: "#ffffff",
        hour: "#ffffff"
    }
};

  const [allState, setAllState] = useState([]);
  const [allCity, setAllCity] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [weather, setWeather] = useState({});
  let   [bgImg, setBgImg] = useState("")

  


 
  useEffect(() => {
    axios
      .get("https://tss11-30-project.onrender.com/api/v1/city/state")
      .then(response => {
        setAllState(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleStateChange = (e) => {
    const selectedState = e.target.value;
    setSelectedState(selectedState);

    axios
      .get(`https://tss11-30-project.onrender.com/api/v1/city/getcity/${selectedState}`)
      .then(response => {
        setAllCity(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleCityChange = (e) => {
    const selectedCity = e.target.value;
    setSelectedCity(selectedCity);

    axios
      .get(`http://api.weatherapi.com/v1/current.json?key=8b26d241c5564b52a41183325251302&q=${selectedCity}&aqi=no`)
      .then(response => {
        setWeather(response.data);
        if(response.data.current.condition.text=='Sunny'){
          setBgImg("/assets/images/bg3.jpg")
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <>
      <div className='main'>
          <div className='weather-box' style={{backgroundImage :`url('${bgImg}')`}}>
             <div className='row'>
              <div className='col-md-8'>
               <h3>Live Weather App</h3>
               <p>Search Your City</p>

              </div>
              <div className='col-md-4'>
              <div>
                  <AnalogClock {...options} />
                </div>

              </div>
             </div>
                    <div className="form-group">
                        <label>State</label>
                        <select className='form-control' value={selectedState} onChange={handleStateChange}>
                        <option></option>
                          {allState.map(item => (
                             <option key={item}>{item}</option>
                          ))}
                        </select>
                     </div>
                      
                      {allCity.length > 0 && (
                      <div className="form-group">
                        <label>City</label>
                      <select className='form-control' value={selectedCity} onChange={handleCityChange}>
                        <option></option>
                        {allCity.map((item, index) => (
                        <option key={index}>{item.name}</option>
                        ))}
                      </select>
                     </div>
                     )}
                      
                      {weather.current && (
                      <div className='mt-2'>
                        <h3 className='text-light text-center'>{selectedCity}</h3>
                        <p className='text-light text-center'>{weather.current.temp_c}°C</p>
                        <p className='text-light text-center'>{weather.location.localtime}</p>
                        <p className='text-light text-center'>{weather.current.condition.text}</p>
                        <img src={weather.current.condition.icon}  style={{height:'30%',width:'30%', marginLeft:'35%'}}/>
                      </div>
                      )}
          </div>
     </div>
    </>
  );
};

export default Home;