import React,{useState, useEffect} from 'react'
import axios from 'axios'
import {API_URL} from '../../constants/API_URL'
import {Button, Modal} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const ViewHotels = () => {

let [allHotel, setAllHotel] = useState([]);
let [hotel, setHotel] = useState({});
let [showAskDelete, setShowAskDelete] = useState(false);

let navigate = useNavigate();

useEffect(()=>{
  axios.get(`${API_URL}/businessmanage/hotels`, {
    headers : { Authorization : localStorage.getItem("business-access-token") }
  }).then(response=>{
    // console.log(response.data); return;
    setAllHotel(response.data);
  
  })

},[])

let askDelete =(obj)=>{
  // console.log(obj);
  setHotel(obj);
  setShowAskDelete(true);

}

let confDelete = ()=>{
  axios.delete(`${API_URL}/businessmanage/hotels/${hotel._id}`, {
    headers : { Authorization : localStorage.getItem("business-access-token")}
  }).then(response=>{
    // console.log(response.data);
    setAllHotel((x)=>{
      let arr = x.filter( item => item._id != hotel._id );
      return arr;
    });
    setShowAskDelete(false);
   })
}

let askEdit = (obj)=>{
  // console.log(obj);
  navigate(`/business/manage/update/${obj._id}`)
 }


  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <h4 className='text-dark'>List Of All Hotels</h4>
            <table className="table table-dark table-hover table-striped table-bordered">
              <thead>
                <tr>
                  <th>S.No.</th>
                  <th>Name</th>
                  <th>View</th>
                  <th>Delete</th>
                  <th>Edit</th>
                </tr>
              </thead>
              <tbody>
                {
                  allHotel.map((item,index)=><tr key={index} value={item}>
                    <td>{index+1}</td>
                    <td>{item.hotelname}</td>
                    <td><button className='btn btn-primary btn-sm'><i className='fa fa-eye' aria-hidden="true"></i></button></td>                   
                    <td><button onClick={()=>askDelete(item)} className='btn btn-danger btn-sm'><i className='fa fa-trash' aria-hidden="true"></i></button></td>
                    <td><button onClick={()=>askEdit(item)} className='btn btn-info btn-sm'><i className='fa fa-pencil' aria-hidden="true"></i></button></td>                   
                  </tr>
                  )
                }
              </tbody>
            </table>
        </div>

        {/* ASK DELETE POPUP START */}
       <Modal show = {showAskDelete}>
        <Modal.Header>
          <Modal.Title>Delete Hotels</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure want to delete <b>{hotel ? hotel.hotelname : ''}</b> </Modal.Body>
        <Modal.Footer>
          <Button onClick={()=>setShowAskDelete(false)}  variant="secondary">
            Close
          </Button>
          <Button onClick={confDelete} variant="danger">
            Delete
          </Button>
        </Modal.Footer>
      </Modal> 
     {/* ASK DELETE POPUP END */}
    
      </div>

      </>
  )
}

export default ViewHotels