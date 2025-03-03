import React, { useState, useEffect } from 'react';
import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api';
import { useLocation } from 'react-router-dom';



const FindMe = ()=> {
  const location = useLocation();
  console.log(location.pathname);

  const [map, setMap] = useState(null);

  const [position, setPosition] = useState(null);



  useEffect(() => {

    if (navigator.geolocation) {

      navigator.geolocation.getCurrentPosition((position) => {

        setPosition({ lat: position.coords.latitude, lng: position.coords.longitude });
        console.log(setPosition);
      });

    }

  }, []);



  const onLoad = (mapInstance) => {

    setMap(mapInstance);

  };



  return (

    <LoadScript 

      googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY" 

      libraries={['places']}

    >

      <GoogleMap 

        mapContainerStyle={{ width: '100%', height: '400px' }}

        zoom={10}

        center={position || { lat: 37.783333, lng: -122.416667 }}

        onLoad={onLoad}

      >

        {position && (

          <Marker position={position} />

        )}

      </GoogleMap>

    </LoadScript>

  );

}



export default FindMe;
