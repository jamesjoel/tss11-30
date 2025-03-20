import React, { useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addNames, delNames } from '../redux/DataSclice'


const Help = () => {
  let txt = useRef();
  let disp = useDispatch();
  let data = useSelector(state=>state.DataReducer);
  let [name, setName] = useState("");

  let add = ()=>{
    disp(addNames(name));
    setName("");
    txt.current.focus();
  }

  let del = (obj)=>{
    disp(delNames(obj));
  }


  return (
    <>
    <div>Help</div>
    <br />
    <input ref={txt} value={name} onChange={(e)=>setName(e.target.value)} type='text' className='border-2 focus:outline-2'/>
    <button onClick={add} className='btn btn-accent'>Add</button>
    <br />
    <ol>
      
    {
      data.map(item=><li>{item} ----- ------ <small onClick={()=>del(item)} className='cursor-pointer'>❌</small></li>)
    }
    </ol>
    </>
  )
}

export default Help