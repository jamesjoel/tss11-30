import React, { useMemo, useState } from 'react'

const App2 = () => {

    let [num, setNum] = useState(0)
    let [name, setName] = useState("");

    let demo = useMemo(()=>{
        console.log("**********");
    },[name]);
  return (
    <>
    <button onClick={()=>setNum(num+1)} className='btn btn-success'>OK</button>
    <br />
    {demo}
    <h1>hello world</h1>
    <h2>{num}</h2>
    <h1>{name}</h1>
    <p onClick={()=>setName("rohit")}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus libero magni debitis odit consequatur. Dolore explicabo, molestias ex autem molestiae voluptatem eos officia doloremque repellat deleniti aut accusamus voluptate recusandae!</p>
    </>
  )
}

export default App2