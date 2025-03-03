import React, { useState, useEffect } from 'react';
import AnalogClock from 'analog-clock-react';

import axios from 'axios';
import './Home2.css'




const Home = () => {
 
  const [allState, setAllState] = useState([]);
  const [allCity, setAllCity] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [weather, setWeather] = useState({});
  const [bgImg, setBgImg] = useState("");
  const [userLocation, setUserLocation] = useState(null);
  const [city, setCity] =useState("")

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
        changeBg(response.data.current.condition.text);
        // console.log(response.data.current.condition.text)
        
      })
      .catch(error => {
        console.error(error);
      });
  };

  let changeBg = (data) =>{
    if(data=="Sunny"){
      setBgImg("/assets/images/bg10.jpg");
    }else if(data=="Cloudy"){
      setBgImg("/assets/images/bg3.jpg");
    }else if(data=="Partly Cloudy"){
      setBgImg("/assets/images/bg3.jpg");
    }else if(data=="Partly cloudy"){
      setBgImg("/assets/images/bg3.jpg");
    }else if(data=="Mist"){
      setBgImg("/assets/images/bg6.jpg");
    }else if(data=="Rain"){
      setBgImg("/assets/images/bg7.jpg");
    }else if(data=="Clear"){
      setBgImg("/assets/images/bg9.jpg");

    
    }else{
      setBgImg("");
    }
  }


  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        // console.log(latitude, longitude)

        axios.get(`https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&apiKey=4c14f9f966c0424fa6f8c75b884836b2`)
        .then(response=>{
          console.log(response.data.features[0].properties.city);
           setCity(response.data.features[0].properties.city)
           let city = response.data.features[0].properties.city;
          axios.get(`http://api.weatherapi.com/v1/current.json?key=8b26d241c5564b52a41183325251302&q=${city}&aqi=no`)
          .then(response => {
            console.log(response.data);
            setWeather(response.data);
            setUserLocation(response.data)
            changeBg(response.data.current.condition.text)
          })
        })
        
      },
      (error) => {
        console.error('Error getting user location:', error);
      }
    );
  },[])

  return (
    <>
      <div className='main'>
          <div className='weather-box' style={{backgroundImage :`url('${bgImg}')`}}>
            <div className="row">
              <div className="col-8 ">
              <h3>Live Weather App</h3>
               <p>Search Your City</p>
              
              </div>
              <div className="col-4">
              <div>
                <AnalogClock {...options} />
              </div>
              </div>
            </div>
                    
                    <div className="form-group">
                        <label className='text-light'>State</label>
                        <select className='form-control' value={selectedState} onChange={handleStateChange}>
                        <option></option>
                          {allState.map(item => (
                             <option key={item}>{item}</option>
                          ))}
                        </select>
                     </div>
                      
                      {allCity.length > 0 && (
                      <div className="form-group">
                        <label className='text-light'>City</label>
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
                        {
                          
                          selectedCity.length>0
                          ?
                          <>
                          <h3 className='text-light text-center'>{selectedCity}</h3>
                          </>
                          :
                          
                          <h3 className='text-light text-center'>{city}</h3>
                          
                        }
                        <p className='text-light text-center'>{weather.location.localtime}</p>

                        <p className='text-light text-center'>{weather.current.temp_c}°C</p>
                        <img src={weather.current.condition.icon}  style={{height:'30%',width:'30%', marginLeft:'35%'}}/>
                        <p className='text-light text-center'>{weather.current.condition.text}</p>
                      
                      </div>
                      )}
          </div>
          {/* <div>
      {userLocation && (
        <div>
          <p>Latitude: {userLocation.latitude}</p>
          <p>Longitude: {userLocation.longitude}</p>
        </div>
      )}
    </div> */}
     </div>
    </>
  );
};

export default Home;