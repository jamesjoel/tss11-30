import React, { useState } from 'react'

const Home = () => {
  
  let [pathname, setPathname] = useState("")

let generateUrl = ()=>{
   generateUrl = window.location.href ; 
  console.log(`The full URL is: ${generateUrl}`);
  setPathname(`${generateUrl}`);

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

export default Home



