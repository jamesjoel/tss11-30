import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { use } from 'react';

const Home = () => {
  const [allState, setAllState] = useState([]);
  const [allCity, setAllCity] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [weather, setWeather] = useState({});

  
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
      })
      .catch(error => {
        console.error(error);
      });
  };

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
                    <div className="form-group">
                        <label>State</label>
                    <select className='form-control' value={selectedState} onChange={handleStateChange}>
                        <option></option>
                       {allState.map(item => (
                         <option key={item}>{item}</option>
                      ))}
                    </select>
                   </div>
                   </a>
                   </li>
                  <li>
                  <a className="dropdown-item" href="#">
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
                </a>
              </li>

            </ul>
            
            {weather.current && (
            <div>

              <h3 className='text-light text-center'>{selectedCity}</h3>
              <p className='text-light text-center'>{weather.current.temp_c}°C</p>
              <p className='text-light text-center'>{weather.location.localtime}</p>
              <img src={weather.current.condition.icon}  style={{height:'25%',width:'25%',marginLeft:'170px'}}/>

            </div>
          )}
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default Home;
