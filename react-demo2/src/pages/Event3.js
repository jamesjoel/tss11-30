import React, { useState } from 'react'

const Event3 = () => {
    let [input, setInput] = useState("password")
    let [color, setColor] = useState("#ccc")

    let showHideToggle = ()=>{
        if(input=="password"){
            setInput("text");
        }else{
            setInput("password");
        }
    }

    let focusHandler = ()=>{
        setColor("red")
    }
    let blurHandler = ()=>{
        setColor("green")
    }
    let downHandler = ()=>{
        setColor("blue")
    }
    let upHandler = (event)=>{
        if(event.key=="1" || event.key=="2"){
            setColor("pink")
        }else{

            setColor("white")
        }
    }

  return (
    <div className="container">
        <div className="row">
            <div className="col-md-6">
            <div className="input-group mb-3">
                <input type={input} className="form-control"  />
                <button onClick={showHideToggle} className="btn btn-secondary" type="button" id="button-addon2">
                    {
                        input == "password"
                        ?
                        <i class="fa fa-eye" aria-hidden="true"></i>
                        
                        :
                        <i class="fa fa-eye-slash" aria-hidden="true"></i>
                        
                    }
                </button>
                <br />
                <br />
            </div>
                <input type='text' onSelect={()=>setColor("orange")} onKeyUp={(e)=>upHandler(e)} onKeyDown={downHandler} onBlur={blurHandler} onFocus={focusHandler} style={{backgroundColor : color}} className='form-control' />
                <br />
                <br />

                <p onSelect={()=>console.log("sdfgsd gsdgsdg")}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, ratione et quam nam inventore quasi similique, accusamus exercitationem dolore obcaecati voluptate ex hic dicta vero. Veniam aperiam corporis libero! Amet.</p>


                
            </div>
        </div>
    </div>
  )
}

export default Event3