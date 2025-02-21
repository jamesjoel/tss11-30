import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { API_URL } from '../../constants/API_URL'


const ViewHotels = () => {
  let [allHotel, setAllHotel] = useState([]);
  useEffect(()=>{
    axios.get(`${API_URL}/businessmanage/fetchhotels`, {
      headers : { Authorization : localStorage.getItem("business-access-token")}
    }).then(response=>{
      setAllHotel(response.data);
    })
  },[])
  return (
    <div className="row">
      <div className="col-md-12">
        <h4 className='text-dark'>List of All Hotels</h4>
        <table className="table table-dark table-hover table-striped table-boredered">
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Name</th>
              <th>Address</th>
              <th>Tables</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {
              allHotel.map((item, index)=><tr key={index}>
                <td>{index+1}</td>
                <td>{item.hotelname}</td>
                <td>{item.address}</td>
                <td>{item.tables}</td>
                <td>{item.price}</td>
              </tr>)
            }
          </tbody>
        </table>

      </div>
    </div>
  )
}

export default ViewHotels