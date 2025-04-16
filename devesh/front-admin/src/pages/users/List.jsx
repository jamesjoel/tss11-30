import React,{useEffect, useState} from 'react'
import axios from 'axios'
import { API_URL } from '../../constants/API_URL'
import TopNav from '../../components/TopNav';

const List = () => {

  let [allUser, setAllUser ] = useState([]);

  useEffect(()=>{
    axios
    .get(`${API_URL}/user`)
    .then(response=>{
      setAllUser(response.data);
    })

  },[])
  
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
              <h3 className="fw-bold mb-3">List of All Registered User</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <table className="table table-dark table-hover table-bordered table-striped">
                <thead>
                  <tr>
                    <th>S.No.</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Contact</th>
                    <th>OTP</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    allUser.map((item, index)=>{
                      return(
                        <tr>
                          <td>{index+1}</td>
                          <td>{item.name}</td>
                          <td>{item.email}</td>
                          <td>{item.contact}</td>
                          <td>{item.otp}</td>
                        </tr>
                      )
                    })
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