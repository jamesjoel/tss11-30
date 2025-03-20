import React, {useState} from 'react'

const Form = ({userDetail, user, setUser}) => {

    

    let save = ()=>{
        
        if(user.id==""){ // add new user into userDetail array
            userDetail((state)=>{
                user.id = state.length+1;
                return [...state, user];
            });
            setUser({name:"", age:"", id:""});
        }else{ // then update userDetail array by perticular user
            userDetail((state)=>{
               return state.map(item=> item.id == user.id ? user : item);
            });
            setUser({name:"", age:"", id:""});
        }
        
    }
    
  return (
    <div className='p-5 border-2 border-gray-400 m-2'>
        <input value={user.name} onChange={(e)=>setUser({ ...user, name : e.target.value })} type='text' placeholder='Name' className='input m-3' />

        <input value={user.age} onChange={(e)=>setUser({ ...user, age : e.target.value })} type='text' placeholder='Age' className='input m-3' />

        <button onClick={save} className='btn btn-info'>{user.id =="" ? "Save" : "Update"}</button>

    </div>
  )
}

export default Form