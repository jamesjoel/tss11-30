import React from 'react'

const Events1 = () => {

    let clickHandler = (e)=>{
        e.preventDefault();
    }

    let demo = (e)=>{
        e.preventDefault();
    }


  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-12">
                <h1>Mouse click events</h1>
                {/* <button onClick={clickHandler} className='btn btn-info'>Button 1</button> */}
                {/* <button onClick={(event)=>clickHandler(event)} className='btn btn-info'>Button 1</button> */}
                <a href='http://facebook.com' onClick={(event)=>clickHandler(event)} className='btn btn-primary'>Google</a>

                <div onContextMenu={(event)=>demo(event)} style={{height : "200px", width : "200px", backgroundColor : "red"}}></div>
                <br />
                <input onContextMenu={(event)=>demo(event)} onPaste={(event)=>demo(event)} type='text' />
            </div>
        </div>
    </div>
  )
}

export default Events1
/*

devesh
devesh
devesh
------------------------ DECLARE A FUNCTION --------------
let demo = (a, b)=>{
    console.log(a+b);
}

--------------------- CALLING A FUNCTION -----------------
demo(7, 10)

*/