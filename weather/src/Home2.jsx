import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home2 = () => {


  const [userLocation, setUserLocation] = useState(null);
  let [city, setCity] =useState("")
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        console.log(latitude, longitude)

        axios.get(`https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&apiKey=76834d5035934b569fdd2438e48902a9`)
        .then(response=>{
          // console.log(response.data.features[0].properties.city)
          setCity(response.data.features[0].properties.city)
          axios.get(`http://api.weatherapi.com/v1/current.json?key=8b26d241c5564b52a41183325251302&q=${setCity}&aqi=no`)
          .then(response=>{
            console.log(response.data)
          })
        })
      },
      (error) => {
        console.error('Error getting user location:', error);
      }
    );
  },[])

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
        },
        (error) => {
          console.error('Error getting user location:', error);
        }
      );
    }
    else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

   

  return (
    <>
      <div>
        <h1>{city}</h1>
      <h1>Geolocation App</h1>
      <button onClick={getUserLocation}>Get User Location</button>
      {userLocation && (
        <div>
          <h2>User Location</h2>
          <p>Latitude: {userLocation.latitude}</p>
          <p>Longitude: {userLocation.longitude}</p>
        </div>
      )}
    </div>

    </>
  )
}

export default Home2
//https://api.geoapify.com/v1/geocode/reverse?lat=51.21709661403662&lon=6.7782883744862374&apiKey=76834d5035934b569fdd2438e48902a9