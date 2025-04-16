import React, { useId } from 'react'

const App8 = () => {
  return (
    <div className="container my-5">
        <MyInput />
        <br />
        <MyInput />
        <br />
        <MyInput />
    </div>
  )
}

const MyInput = ()=>{
    let name = useId();
    return(
        <div>
            <label htmlFor={name}>Name</label>
            <input id={name} type='text' />
        </div>
    )
}

export default App8