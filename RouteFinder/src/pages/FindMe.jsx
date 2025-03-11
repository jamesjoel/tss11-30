import React, { useState, useEffect } from "react";
import { LoadScript, GoogleMap, Marker, DirectionsRenderer } from "@react-google-maps/api";
import { useLocation } from "react-router-dom";

const FindMe = () => {
  const location = useLocation();
  console.log(location.pathname);

  const [map, setMap] = useState(null);
  const [position, setPosition] = useState(null);
  const [directions, setDirections] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        const userPosition = {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        };
        setPosition(userPosition);
        console.log(userPosition);
        getRoute(userPosition);
      });
    }
  }, []);

  // Function to get directions from the user's location to a fixed destination
  const getRoute = (userPosition) => {
    const directionsService = new window.google.maps.DirectionsService();
    const destination = { lat: 37.7749, lng: -122.4194 }; // Example: San Francisco

    directionsService.route(
      {
        origin: userPosition,
        destination: destination,
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === "OK") {
          setDirections(result);
        } else {
          console.error("Directions request failed:", status);
        }
      }
    );
  };

  const onLoad = (mapInstance) => {
    setMap(mapInstance);
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyCk0htx320UYoMkyh-UiGkUY2c4jrNvsZg" libraries={["places"]}>
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "400px" }}
        zoom={10}
        center={position || { lat: 37.783333, lng: -122.416667 }}
        // onLoad={onLoad}
      >
        {position && <Marker position={position} />}
        {directions && <DirectionsRenderer directions={directions} />}
      </GoogleMap>
    </LoadScript>
  );
};

export default FindMe;
