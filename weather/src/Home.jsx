import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { use } from 'react';

const Home = () => {
  const [allState, setAllState] = useState([]);
  const [allCity, setAllCity] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [weather, setWeather] = useState({});
  const [backgroundImage,setBackgroundImage] 

  // const [image,setImage] = useState("");

  // let weatherCondition=(obj)=>{
    
    // console.log(obj);return;
//     if(obj==Clear){
//         document.body.style.backgroundImage = "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cac950bd-8f59-4376-8597-52366358d12e/d9wvf1t-b8eec3f5-b88b-4b1f-8aac-36bc21e06a92.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvY2FjOTUwYmQtOGY1OS00Mzc2LTg1OTctNTIzNjYzNThkMTJlXC9kOXd2ZjF0LWI4ZWVjM2Y1LWI4OGItNGIxZi04YWFjLTM2YmMyMWUwNmE5Mi5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.WYDWFRtXw1BslrbVksftWlGdI6xCc0wHMhKMMx-NEuM')";

//     }
//   else{
//       document.body.style.backgroundImage= "url(../assets/images/rainy.jpg)";

//   }
// }

  
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
    
    
    <div className='container-fluid' style={{ backgroundImage: 'linear-gradient(120deg, hsl(250, 90%, 19%), #b50de9)',height:'100vh' }}>
      <div className='row d-flex justify-content-center'>
          <div className="col-md-4 rounded-2xl shadow-lg mt-5" style={{minHeight: '500px'}}>
            
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
              <p className='text-light text-center'>{weather.current.condition.text}</p>
              <img src={weather.current.condition.icon}  style={{height:'25%',width:'25%', marginLeft:'165px'}}/>
              <img src ={backgroundImage.current.condition.icon} />

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
