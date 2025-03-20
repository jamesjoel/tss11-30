import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {changeCity2, changeCity1} from '../redux/DemoSlice'

const User = () => {

  let dispatch = useDispatch();

  let a = useSelector(state=>state.DemoReducer)

  let hello = ()=>{
      dispatch(changeCity1());
  }

  return (
    <>
    <div>User</div>
    <h1 className='text-5xl'>{a}</h1>
    <button className='btn btn-info' onClick={hello}>OK</button>
    </>
  )
}

export default User