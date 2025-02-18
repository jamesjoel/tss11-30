import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
    <div className='gradient_background container-fluid'>
      <div className='row'>
        <div className='col-md-4 offset-md-4 '>
           <div className='gradient_background_div p-5 m-5'>
            

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
            <div>
              <h2 className='text-white'>Weather in {selectedCity}</h2>
              <p>Temperature: {weather.current.temp_c}°C</p>
              <p>Condition: {weather.current.condition.text}</p>
              {/* <p>Condition:  {weather.current.condition.icon}</p> */}
              <img src={weather.current.condition.icon} style={{height: '100px' , width: '100px'}}/>
            </div>
          )}
        </div>
       </div>
      </div>
    </div>
  );
};

export default Home;