import React from 'react'


const App5 = () => {
    let counter=2;
    // counter += 1;
  return (
    <div className="container my-5">
        <h1>Pure Component</h1>
        <Box counter={counter}/>
        {/* <Box /> */}
        {/* <Box /> */}
    </div>
  )
}

const Box = ({counter})=>{
    
    return(
        <h2>Box {counter}</h2>
    )
}



export default App5
/*
let demo = (num)=>{
    return Math.random()*num;
}


demo(5);
demo(5);
demo(6);
*/