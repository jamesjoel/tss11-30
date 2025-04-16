import React,{useEffect, useState} from 'react'
import axios from 'axios'
import {API_URL} from '../../constants/API_URL'
import TopNav from '../../components/TopNav';
import Switch from '@mui/material/Switch';

const List = () => {

  let [allBus, setAllBus] = useState([]);

  useEffect(()=>{
    axios
    .get(`${API_URL}/business`)
    .then(response =>{
      setAllBus(response.data);
    })
  },[])

  const label = {inputProps: {'aria-label': 'Switch demo'}};
  
  let changeStatus = (event, obj)=>{
    // console.log(event.target.checked); return;
    let checkedStatus = event.target.checked;
    // console.log(checkedStatus);
    // return
    let currentStatus = obj.activeStatus;
    axios.get(`${API_URL}/businessauth/changestatus/${obj._id}/${obj.activeStatus}`,{
      headers : {Authorization : localStorage.getItem("access-token")}
    })
    .then(response=>{
      //  console.log(response.data);
      let newarr = allBus.map((item)=>{
        if(item._id == obj._id){
          item.activeStatus = currentStatus == 1 ? 0 : 1 ;
          return item;
        }else{
          return item;
        }
      })
      setAllBus(newarr);

    })

  }

  return (
    <>
    <div className='main-panel'>
      <div className="main-header">
         <div className="main-header-logo">
         </div>
         <TopNav/>
      </div>
      <div className="container">
          <div className="page-inner">
            <div className="d-flex align-items-left align-items-md-center flex-column flex-md-row pt-2 pb-4">
              <h3 className="fw-bold mb-3">List of All Registered Business User</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <table className="table table-dark table-hover table-bordered table-striped">
                <thead>
                  <tr>
                    <th>S.No.</th>
                    <th>Name</th>
                    <th>Business Name</th>
                    <th>Email</th>
                    <th>Contact</th>
                    <th>Change Status</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    allBus.map((item, index)=><tr>
                        <td>{index+1}</td>
                        <td>{item.name}</td>
                        <td>{item.business_name}</td>
                        <td>{item.email}</td>
                        <td>{item.contact}</td>
                        <td><span className='text-info'>Deactive</span><Switch {...label} onChange={(e)=>changeStatus(e, item)} defaultChecked = {item.activeStatus == 1 ? true : false} /><span className='text-info'>Active</span></td>
                    </tr>
                    )
                  }
                </tbody>
              </table>
            </div>
          </div>
      </div>

    </div>
  </>
  
  )
}

export default List