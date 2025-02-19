import React, { useState } from 'react'

const Event7 = () => {
    let [a, setA] = useState(0)

    let hello = ()=>{
        console.log("***********")
    }

    let demo = ()=>{
        setA(++a)
    }
  return (
    <div className="container">
        {hello()}
        <div className="row">
            <div className="col-md-12">
                <h1>{a}</h1>
                <button onClick={demo}>OK</button>
            </div>
        </div>
    </div>
  )
}

export default Event7