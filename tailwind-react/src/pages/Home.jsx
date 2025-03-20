import React, { useState, useContext } from 'react'
import Form from '../ui/Form'
import Table from '../ui/Table'

import LogoContext from '../LogoContext'


const Home = () => {
    
  let a = useContext(LogoContext);

    let [allUser, setAllUser] = useState([]);

    
    let [user, setUser] = useState({
      id : "",
      name : "",
      age : ""
    })


    let confDelete = (obj)=>{
      // console.log("***********", obj);
      // axios.then
      setAllUser((currentUser)=>{
        return currentUser.filter(item=> item.name != obj.name);
      })
    }


    let askEdit = (obj)=>{
      console.log("##########", obj);
      setUser(obj);
    }

  return (
    <div>
        {a}
        <Form user={user} setUser={setUser} userDetail={setAllUser} />
        <Table askEdit={askEdit} confDelete={confDelete} allUser={allUser}/>
        
    </div>
  )
}

export default Home
/*
    let arr = [10, 20, 14, 15]
    
    arr = [...arr, 100]


    setDemo(value)
    
    setDemo((x)=>{
        
        })

*/