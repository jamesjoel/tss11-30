import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import { API_PATH, API_URL } from '../../constants/API_URL'
import Header2 from '../../components/user/header/Header2'
import { DatePicker } from '@mui/x-date-pickers'
import { TimePicker } from '@mui/x-date-pickers'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import dayjs from 'dayjs'
import { useFormik } from 'formik'
import bookTableSchema from '../../schemas/BookTableSchema'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'


 let today = dayjs();
 const elevenAM = dayjs().set('hour',11).startOf('hour');
 const twentythreePM = dayjs().set('hour',23).startOf('hour');


const BookTable = () => {
  let param = useParams();
  //console.log(param);
  let [hotelInfo, setHotelInfo] = useState({});
  let [preloader, setPreloader] = useState(false);
  let [showModal, setShowModal] = useState(false);
  let [price, setPrice] = useState(0);
  let [totalPrice, setTotalPrice] = useState(0);
  let [businessId, setBusinessId] = useState();
  let navigate = useNavigate();
  

   let bookFrm = useFormik({
    validationSchema : bookTableSchema ,
    initialValues : {
      date : '',
      time : '',
      tables : ''
    },

    onSubmit : (formData)=>{
      setPreloader(true);
      // console.log(formData);
      if(localStorage.getItem("access-token")){
        formData.hotelId = param.id ;
        formData.businessId = businessId ;
        //console.log(formData);
        axios.post(`${API_URL}/hotelbooking`, formData, {
          headers: {Authorization: localStorage.getItem("access-token")}
        })
        .then(response=>{
          setPreloader(false);

          console.log(response.data);
        })
      }else{
        setPreloader(false);

        setShowModal(true);
      }
    }
  })

  let goToLogin=()=>{
    setShowModal(false);
    navigate("/login")
  }

  useEffect(()=>{
    axios.get(`${API_URL}/hotels/${param.id}`)
    .then(response=>{
      // console.log(response.data);re
      setHotelInfo(response.data);
      setPrice(response.data.price);
      setBusinessId(response.data.businessId._id);
    })
  },[])

    let calcPrice = (event)=>{
    console.log(event.target.value);
    let numoftable = event.target.value ;
    setTotalPrice(numoftable * price);
  }

  return (
    <>
    <Header2/>
     <Modal show={showModal}>
        <Modal.Header>
          <Modal.Title>Message</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>You are not logged in ......please Login first then book table</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={()=>setShowModal(false)} >Close</Button>
          <Button variant="primary" onClick={goToLogin} >Go To Login</Button>
        </Modal.Footer>
    </Modal>
    <section className='my-3'style={{minHeight:"600px"}}>
        <div className="container"> 
            <div className="row">
              <div className="col-md-8">
                <img src={`${API_PATH}/hotels/${hotelInfo.hotelimage}`} className='img-fluid' style={{height:'525px',width:'100%'}} alt=''/>
                <h3 className='my-2 text-dark'>{hotelInfo.hotelname}</h3>
                <p><i class="fa fa-users" aria-hidden="true"></i> {hotelInfo.businessId ? hotelInfo.businessId.business_name : ''}</p>
                <p> <i class="fa fa-map-marker" aria-hidden="true"></i> {hotelInfo.address}</p>
                <p>Timing : 11:00 A.M. - 11:00 P.M.</p>
                <h4 className='badge bg-info text-light'>4.3</h4>
                <h3 className='text-dark'>Menu</h3>
                <div className="row">
                  <div className="col-md-6">
                  <img src={`${API_PATH}/menu/${hotelInfo.menuimage}`} className='img-fluid' style={{height:'300px',width:'100%'}} alt=''/>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <form onSubmit={bookFrm.handleSubmit}>
                  <div className="card">
                    <div className="card-header" style={{backgroundColor:"#ff6426"}}>
                      <h5 className='text-light'>Select an Offer or Deal</h5>
                    </div>
                    <div className="card-body">
                      <div className="my-3">
                        <label>Select Date</label>
                        <DatePicker label='Select Date' minDate= {today} name= 'date' onChange={(value)=> bookFrm.setFieldValue("date", (value.$D + '-' + (value.$M+1) + '-' + value.$y))} className={"form-control" + (bookFrm.errors.date && bookFrm.touched.date ? ' is-invalid' : '')}/>
                      </div>
                      {
                        bookFrm.errors.date && bookFrm.touched.date
                        ?
                        <small className='text-danger'>{bookFrm.errors.date}</small>
                        :
                        ''
                      }
                      <div className="my-3">
                        <label>Select Time</label>
                        <DemoContainer components={['TimePicker']}>
                          <TimePicker  minTime={elevenAM} maxTime={twentythreePM}  name = 'time' onChange={(value)=>bookFrm.setFieldValue('time', (value.$H + ':' + value.$m))}/>
                        </DemoContainer>
                      </div>
                      {
                        bookFrm.errors.time && bookFrm.touched.time
                        ?
                        <small className='text-danger'>{bookFrm.errors.time}</small>
                        :
                        ''
                      }
                      <div className="my-3">
                        <label>Select Table</label>
                        <input type='text' name = 'tables'  onChange={(e)=>{bookFrm.handleChange(e); calcPrice(e)}} className={"form-control" + (bookFrm.errors.tables && bookFrm.touched.tables ? ' is-invalid' : '')}/>
                        <small>6 Persons Per Table</small>
                      </div>
                      {
                        bookFrm.errors.tables && bookFrm.touched.tables
                        ?
                        <small className='text-danger'>{bookFrm.errors.tables}</small>
                        :
                        ''
                      }
                      <div className="my-3">
                        <label>Price Per Table</label>
                        <input  disabled  value={hotelInfo.price} onChange={bookFrm.handleChange} className='form-control'/>
                      </div>
                      <div className="my-3">
                        <label>Total Price</label>
                        <input disabled  value={totalPrice}  onChange={bookFrm.handleChange} className= 'form-control'/>
                      </div>
                      <div className="my-3">
                        <button type='submit' className='button btn-orange text-light'>Book Table { preloader ? <span className='spinner-border spinner-border-sm'></span> : '' }</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default BookTable

