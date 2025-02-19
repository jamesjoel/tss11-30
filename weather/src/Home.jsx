import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { use } from 'react';
import { NavLink } from 'react-router-dom';


const Home = () => {
  

  return (
    <>
    <div className='gradient_background container-fluid'>
       <div className='row p-5 mx-5'>
          <div className="col-md-4 offset-md-4 gradient_background_div">
          <NavLink  to='/weather' className=""> more</NavLink>               
         
         </div>
     </div>
  </div>

    </>
  );
};

export default Home;
