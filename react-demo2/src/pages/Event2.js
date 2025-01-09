import React, {useState} from 'react'

const Event2 = () => {

    let [x, setX] = useState(0)
    let [y, setY] = useState(0)

    let [l, setL] = useState(0)
    let [t, setT] = useState(0)

    let demo = (e)=>{
        setX(e.clientX-51)
        setY(e.clientY-68)
        setL(e.clientX+10)
        setT(e.clientY+15)
    }
  return (
    <>
        
    <div onMouseMove={(event)=>demo(event)} style={{height : "500px", width : "800px", backgroundColor : "#CDCD10"}}>

        <div 
            style={{
                backgroundColor : "gray", 
                width : "60px", 
                fontSize : "14px", 
                position : "absolute", 
                top : t, 
                left : l
                }}
                >{x}, {y}</div>

    </div>
    </>
  )
}

export default Event2