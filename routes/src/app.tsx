import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  APIProvider,
  Map,
  useMapsLibrary,
  useMap
} from '@vis.gl/react-google-maps';
import { BrowserRouter } from 'react-router-dom';
import { Routes,Route } from 'react-router-dom';
import Home from './url'
import { useLocation } from 'react-router-dom';



const API_KEY = "AIzaSyCk0htx320UYoMkyh-UiGkUY2c4jrNvsZg";

const App = () => (
  <APIProvider apiKey={API_KEY}>
    <Map
      defaultCenter={{ lat: 28.679079, lng: 77.069710 }}
      defaultZoom={9}
      gestureHandling={'greedy'}
      fullscreenControl={false}>
      <Directions />
    </Map>
  </APIProvider>
);



let Directions =(()=> {
  const map = useMap();
  const routesLibrary = useMapsLibrary('routes');
  const [directionsService, setDirectionsService] =
    useState<google.maps.DirectionsService>();
  const [directionsRenderer, setDirectionsRenderer] =
    useState<google.maps.DirectionsRenderer>();
  const [routes, setRoutes] = useState<google.maps.DirectionsRoute[]>([]);
  const [routeIndex, setRouteIndex] = useState(0);
  const selected = routes[routeIndex];
  const leg = selected?.legs[0];
  const [position, setPosition] = useState<google.maps.LatLng | null>(null);
  

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setPosition(new google.maps.LatLng(latitude, longitude));
        console.log({ lat: latitude, lng: longitude });
      });
    }
  }, []);

  
 

  // Initialize directions service and renderer
  useEffect(() => {
    if (!routesLibrary || !map) return;

    setDirectionsService(new routesLibrary.DirectionsService());
    setDirectionsRenderer(
      new routesLibrary.DirectionsRenderer({
        draggable: true, // Only necessary for draggable markers
        map
      })
    );
  }, [routesLibrary, map]);

  // Add the following useEffect to make markers draggable
  useEffect(() => {
    if (!directionsRenderer) return;

    // Add the listener to update routes when directions change
    const listener = directionsRenderer.addListener(
      'directions_changed',
      () => {
        const result = directionsRenderer.getDirections();
        if (result) {
          setRoutes(result.routes);
        }
      }
    );

    return () => google.maps.event.removeListener(listener);
  }, [directionsRenderer]);

  // Use directions service
  useEffect(() => {
    if (!directionsService || !directionsRenderer || !position) return;

    directionsService
      .route({
        origin: position, // Pass geolocation as origin
        destination: 'kota',
        travelMode: google.maps.TravelMode.DRIVING,
        provideRouteAlternatives: true
      })
      .then(response => {
        directionsRenderer.setDirections(response);
        setRoutes(response.routes);
      })
      .catch(error => {
        console.error('Directions request failed due to ' + error);
      });

    return () => directionsRenderer.setMap(null);
  }, [directionsService, directionsRenderer, position]);

  // Update direction route
  useEffect(() => {
    if (!directionsRenderer) return;
    directionsRenderer.setRouteIndex(routeIndex);
  }, [routeIndex, directionsRenderer]);

  if (!leg) return null;

  return (
    <div className="directions">
      <h2>{selected.summary}</h2>
      <p>
        {leg.start_address.split(',')[0]} to {leg.end_address.split(',')[0]}
      </p>
      <p>Distance: {leg.distance?.text}</p>
      <p>Duration: {leg.duration?.text}</p>

      <h2>Other Routes</h2>
      <ul>
        {routes.map((route, index) => (
          <li key={route.summary}>
            <button onClick={() => setRouteIndex(index)}>
              {route.summary}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
)
export default App;

export function renderToDom(container: HTMLElement) {
  const root = createRoot(container);

  root.render(
    <React.StrictMode>
      <BrowserRouter>
      
      <Routes>
      <Route path= '' element = {<Home/>}/>
      <Route path= '/findme' element = {<App/>}/>
    </Routes>
   
      </BrowserRouter>
    </React.StrictMode>
  );
}
