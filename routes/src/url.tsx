import React,{useState} from 'react'

const url = () => {

    let [pathname, setPathname] = useState("")

    let generateUrl = ()=>{
     let getUrl = window.location.origin ; 
      console.log(`The full URL is: ${getUrl}`);
      setPathname(`${getUrl}/findme?latitude=22.700439&longitude=75.863411`);
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