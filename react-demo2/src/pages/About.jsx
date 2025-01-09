import React from 'react'

const About = () => {

  let data = ["indore", "pune", "delhi", "bhopal", "mhow", "ujjain"];

  let clickHandler = ()=>{
    console.log("welcome")
  }
  let doubleClickHandler = ()=>{
    console.log("the stepping stone");
  }
  let contextMenuHandler = ()=>{
    console.log("*******************************");
  }
  let mouseOverHandler = ()=>{
    console.log("#############");
  }
  let mouseOutHandler = ()=>{
    console.log("$$$$$$$$$$$$");
  }
  let mouseMoveHandler = ()=>{
    console.log("@@@@");
  }

  return (
    <>
    <select>
      {
        data.map((item)=>{
          return(
            <option>{item}</option>
          )
        })
      }

    </select>
    <br />
    <br />
      <button 
        onClick={clickHandler} 
        onDoubleClick={doubleClickHandler} 
        onContextMenu={contextMenuHandler}
        className='btn btn-lg btn-danger'
        >
          OK
      </button>
      <br />
      <br />
      <div 
        onMouseOver={mouseOverHandler}
        onMouseOut={mouseOutHandler}
        onMouseMove={mouseMoveHandler}
        style={{height : "200px", width : "200px", backgroundColor : "#7460CD"}}></div>
    
    </>
  )
}

export default About