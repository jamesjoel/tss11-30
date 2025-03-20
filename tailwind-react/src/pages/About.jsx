import React from 'react'
import A from '../components/A'
import DemoContext from '../DemoContext'
import { useSelector, useDispatch } from 'react-redux'
import { changeCity2 } from '../redux/DemoSlice'

const About = () => {

  let disp = useDispatch();

  let x = useSelector(state=>state.DemoReducer);

    let name = "rohit"
    let city = "indore";

    let user = {name, city}
  return (
    <>
    <DemoContext.Provider  value={user}>
        <div>About</div>
        <A />
        {x}
        <br />
        <button onClick={()=>disp(changeCity2())} className='btn btn-error'>ok</button>
    </DemoContext.Provider>
    </>
  )
}

export default About