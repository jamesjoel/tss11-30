import React, { useState } from 'react'

const InputValue = ({setUsers}) => {
    
    let [name, setName] = useState("");

  return (
    <>
    <input type='text' onChange={(e)=>setName(e.target.value)}/>
    <button onClick={()=>setUsers((curr)=>[...curr, name])}  className='btn btn-info'>Add</button>
    </>
  )
}

export default InputValue




/*
    let [demo, setDemo] = useState("rohit");

    1. setDemo("vijay")
    2. setDemo([...demo, "rahul"]);

    3. setDemo((x)=>{
        })
*/