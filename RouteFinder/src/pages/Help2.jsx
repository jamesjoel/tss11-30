import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from "@react-google-maps/api";


const containerStyle = {
  width: "100%",
  height: "500px",
};

const DirectionsMapWithGeolocation = () => {
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [loading, setLoading] = useState(true);

  const destination = { lat: 23.259933, lng: 77.412613  }; // Example destination 

  // Get the user's geolocation
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userCoords = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setUserLocation(userCoords);
          console.log(userCoords);
          setLoading(false);
        },
        (error) => {
          console.error("Error getting geolocation: ", error);
          setLoading(false);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      setLoading(false);
    }
  }, []);

  

  const directionsServiceCallback = (response, status) => {
    if (status === "OK") {
      setDirectionsResponse(response);
    } else {
      console.error("Directions request failed due to " + status);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (!userLocation) return <div>Error: Unable to retrieve location</div>;

  return (
    <LoadScript googleMapsApiKey="AIzaSyCk0htx320UYoMkyh-UiGkUY2c4jrNvsZg">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={userLocation}  // Center map on the user's current location
        zoom={12}
      >
        <DirectionsService
          options={{
            origin: userLocation,  // User's current location
            destination: destination,  // Destination location
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

export default DirectionsMapWithGeolocation;
