import React,{useState} from 'react'

const url = () => {

    let [pathname, setPathname] = useState("")

    let generateUrl = ()=>{
     let getUrl = window.location.href ; 
      console.log(`The full URL is: ${getUrl}`);
      setPathname(`${getUrl}`);
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
 

export default url