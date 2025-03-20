import React,{useEffect, useState} from 'react'

const url = () => {

  const [position, setPosition] = useState({})

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setPosition({
          latitude: latitude,
          longitude: longitude
        });
      });
    }
  }, []);
    let [pathname, setPathname] = useState("")

    let generateUrl = ()=>{
     let getUrl = window.location.origin ; 
      console.log(`The full URL is: ${getUrl}`);
      setPathname(`${getUrl}/findme?latitude=${position.latitude}&longitude=${position.longitude}`);
    }

  return (
    <>
    <div className='container m-5'>
    <button className='btn btn-info' onClick={generateUrl}>Generate URL</button>
    <div>{pathname}</div>
    </div>
    </>
  
  )
}
 // lat 22.700439
 // long 75.863411

export default url