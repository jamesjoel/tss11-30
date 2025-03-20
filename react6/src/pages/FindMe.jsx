import React, {useState, useEffect} from 'react'
import { LoadScript, GoogleMap, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';

const mapContainerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: 37.7749, // Default center (San Francisco)
  lng: -122.4194,
};
//https://github.com/visgl/react-google-maps/tree/main

/*
  let a:Number = 50;
  let [num, setNum] = useState<Number>(50)

  const [directionsRenderer, setDirectionsRenderer] = useState();

*/

const FindMe = () => {

    

    const [origin, setOrigin] = useState({ lat: 22.730162, lng: 75.866409 }); // Example coordinates
  
    const [destination, setDestination] = useState({ lat: 22.759430, lng: 75.886009 }); // Example coordinates
  
    const [directionsResponse, setDirectionsResponse] = useState(null);
  
  
  
    
    const getDirections = async () => {
  
      const directionsService = new google.maps.DirectionsService();
    //   const directionsService =new DirectionsService();
  
      directionsService.route({
  
        origin: origin,
  
        destination: destination,
  
        // travelMode: google.maps.TravelMode.DRIVING
  
      }, (response, status) => {
  
        if (status === 'OK') {
            console.log("***********")
            setDirectionsResponse(response);
            
        } else {
            console.log("***********")
  
          console.error('Directions request failed due to ' + status);
  
        }
  
      });
  
    };
  
  
  
    useEffect(() => {
  
      getDirections();
  
    }, [origin, destination]);
  
  
  
    return (
  
        <LoadScript googleMapsApiKey="AIzaSyCk0htx320UYoMkyh-UiGkUY2c4jrNvsZg">
            {()=>console.log("*******")}
        <GoogleMap
  
          mapContainerStyle={{ width: '100%', height: '400px' }}
  
          zoom={10}
  
          center={origin}
  
        >
  
          
  
        </GoogleMap>
  
      </LoadScript>
  
    );
  
  };
  
  

export default FindMe