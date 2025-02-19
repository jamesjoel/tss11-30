import React, { useState } from 'react'
import './Home2.css'
const Home2 = () => {
    let [bgImg, setBgImg] = useState("")
  return (
    <div className='main'>
        <div className='weather-box' style={{backgroundImage :`url('${bgImg}')`}}>
            <h3>Live Weaher App</h3>
            <p>Search Your City</p>
            <p>State</p>
            <select className='form-control'></select>
            <br />
            <p>City</p>
            <select className='form-control'></select>
        </div>
    </div>
  )
}

export default Home2