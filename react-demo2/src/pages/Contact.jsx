import React, { useState } from 'react'

const Contact = () => {

    let [a, setA] = useState("indore");
    let [b, setB] = useState(1000);

    let [name, setName] = useState("Rohit");

    let [check, setCheck] = useState(true);

    let [x, setX] = useState();


    let demo = ()=>{
        console.log("hello")
        setA("mumbai")
        setB(5000)
        setName("Vijay")

    }

    let demo2 = ()=>{
        setA("Bhopal")
    }

  return (
    <>
    <div>Contact</div>
    <button onClick={demo}>OK</button>
    <button onClick={demo2}>OK2</button>
    <h1>{a}</h1>
    <h1>{b}</h1>
    <h1>{name}</h1>
    <h1>{check}</h1>
    <h1>{x}</h1>

    </>
  )
}

export default Contact