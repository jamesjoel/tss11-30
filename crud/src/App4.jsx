import React, { useState } from 'react'

const App4 = () => {
    let [user, setUser] = useState([]);
    let [name, setName] = useState("");
    
    const x = user.length;
    const y = [... new Set(user)].length;
  return (
    <div className='container my-4'>
        <h1>Total User : {x}</h1>
        <h1>unique User : {y}</h1>
        <input type='text' onChange={(e)=>setName(e.target.value)}/>
        <button className='btn btn-info' onClick={()=>setUser([...user, name])}>Add</button>
        <br />
        {
            user.map(item=><h2>{item}</h2>)
        }
    </div>
  )
}

export default App4
// Derived State