import React, { useCallback, useState } from 'react'
import Box from './Box'

const App3 = () => {
    let [num, setNum] = useState(0)
    let [name, setName] = useState("rohit");

    let demo = useCallback(()=>{
        console.log("#####");
    },[]);


  return (
    <div className="container">
        <button className='btn btn-primary' onClick={()=>setNum(num+1)}>OK</button>
        <h1>My Page</h1>
        <h1>{num}</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident omnis corrupti nesciunt dolor, odit aperiam quas esse perspiciatis! Suscipit quis rem maiores facere commodi, tempore nemo pariatur inventore quasi molestiae.</p>
        <Box name={name} demo={demo}/>
    </div>
  )
}

export default App3