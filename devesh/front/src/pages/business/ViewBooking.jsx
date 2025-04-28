import React,{useEffect, useState} from 'react'
import { API_URL } from '../../constants/API_URL'
import axios from 'axios'

const ViewBooking = () => {

  let [booking, setBooking] = useState([]);

  useEffect(()=>{
    axios.get(`${API_URL}/businessmanage/booking`,{
      headers: { Authorization: localStorage.getItem("business-access-token")}
    })
    .then(response=>{
      // console.log(response.data);
      setBooking(response.data);
    })
  },[])

  return (
    <>
    <div className="row">
        <div className="col-md-12">
          <h4 className='text-dark'>List Of All Booking</h4>
          {
            booking.length == 0
            ?
            <div className='alert alert-info'>No Booking Found</div>
            :
            <table className="table table-dark table-hover table-striped table-bordered">
              <thead>
                <tr>
                  <th>S.No.</th>
                  <th>Name</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Tables</th>
                  <th>Hotel Name</th>
                </tr>
              </thead>
              <tbody>
                {
                  booking.map((item,index)=><tr key={item._id}>
                      <td>{index+1}</td>
                      <td>{item.userId ?.name}</td>
                      <td>{item.date}</td>
                      <td>{item.time}</td>
                      <td>{item.tables}</td>
                      <td>{item.hotelId ?.hotelname}</td>
                    </tr>
                  )
                }
              </tbody>
            </table>
          }
            
        </div>
    </div>
    </>
  )
}

export default ViewBooking