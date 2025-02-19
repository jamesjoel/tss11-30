import React, { useState } from 'react'

const Event6 = () => {

    let [arr, setArr] = useState([])
    let [txt, setTxt] = useState("");

    let add = ()=>{
        // setArr(()=>{
        //     return [...arr, txt]; // ["red", "green"]
        // })
        setArr([...arr, txt]);
        setTxt("")
    }

  return (
    <div className="container">
        <div className="row">
            <div className="col-md-4">
                <input type='text' value={txt} onChange={(e)=>setTxt(e.target.value)} />
                <button onClick={add} className='btn btn-primary'>Add</button>
                <div style={{display : "flex", flexWrap : "wrap"}}>
                {
                    arr.map((item)=>{
                        return(
                            <div style={{height : "100px", width : "100px", backgroundColor : item}}></div>
                        )
                    })
                }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Event6