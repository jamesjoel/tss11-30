import React, { useState } from "react";
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: 22.719568,  // Starting point (e.g. indore
  lng: 75.857727,
};

const DirectionsMap = () => {
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const origin = { lat: 22.719568, lng: 75.857727 }; // Starting point
  const destination = { lat: 25.162998, lng: 75.845322 }; // Ending point (e.g.ujjain)
  
  const directionsServiceCallback = (response, status) => {
    if (status === "OK") {
      setDirectionsResponse(response);
    } else {
      console.error("Directions request failed due to " + status);
    }
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyCk0htx320UYoMkyh-UiGkUY2c4jrNvsZg">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={9}
      >
        <DirectionsService
          options={{
            origin: origin,
            destination: destination,
            travelMode: "DRIVING",
          }}
          callback={directionsServiceCallback}
        />
        
        {directionsResponse && (
          <DirectionsRenderer
            options={{
              directions: directionsResponse,
            }}
          />
        )}
      </GoogleMap>
    </LoadScript>

    
  );
};

export default DirectionsMap;
