import React, { useEffect, useState, useRef } from 'react'
import HotelSchema from '../../schemas/HotelSchema'
import { useFormik } from 'formik'
import axios from 'axios'
import { API_URL } from '../../constants/API_URL'
import { useNavigate, useParams } from 'react-router-dom'


const AddHotels = () => {

  let himage = useRef();
  let mimage = useRef();

  let [errMsg, setErrMsg] = useState("")
  let [preloader, setPreloader] = useState(false);
  let [newHotel, setNewHotel] = useState({
      hotelname : '',
      hotelimage : '',
      menuimage : '',
      address : '',
      tables : '',
      price : ''
 })
  
  let navigate = useNavigate()
  let params = useParams();

  useEffect(()=>{
    if(params.id){
      axios.get(`${API_URL}/businessmanage/hotels/${params.id}`, 
        {headers : {Authorization : localStorage.getItem("business-access-token")}})
        .then(response =>{
          setPreloader(false);
          //console.log(response.data)
          setNewHotel(response.data[0])
        })
      }
  },[])

  let addFrm = useFormik({
    validationSchema : HotelSchema ,

    initialValues : newHotel,
    enableReinitialize : true,
      
     onSubmit : (formData)=>{
      setPreloader(true);
      // console.log(formData)
      let HotelImage = himage.current.files[0];
      let MenuImage = mimage.current.files[0];
      let HotelForm = new FormData();
      HotelForm.append("hotelimage",HotelImage);
      HotelForm.append("menuimage",MenuImage);
      HotelForm.append("hotelname",formData.hotelname);
      HotelForm.append("address",formData.address);
      HotelForm.append("tables",formData.tables);
      HotelForm.append("price",formData.price);

      axios.post(`${API_URL}/businessmanage/hotels` , HotelForm, 
            {headers : {Authorization : localStorage.getItem("business-access-token")}})
            .then(response =>{
              setPreloader(false);
      
              //console.log(response.data)
              if(response.data.success == true){
                setPreloader(false);
      
                navigate("/business/manage/viewhotels")
              }
            })
      
     }
    })




  //     if(params.id){
  //       axios.put(`${API_URL}/businessmanage/hotels/${params.id}` , formData, 
  //         {headers : {Authorization : localStorage.getItem("business-access-token")}})
  //         .then(response =>{
  //           setPreloader(false);
  //           //console.log(response.data)
  //           navigate("/business/manage/viewhotels")
  //         })
  //       }
      
  //       else{
  //     axios.post(`${API_URL}/businessmanage/hotels` , formData, 
  //     {headers : {Authorization : localStorage.getItem("business-access-token")}})
  //     .then(response =>{
  //       setPreloader(false);

  //       //console.log(response.data)
  //       if(response.data.success == true){
  //         setPreloader(false);

  //         setErrMsg("New Hotel Successfully Added");
  //         navigate("/business/manage/viewhotels")

  //       }else{
  //         setPreloader(false);

  //         setErrMsg("Business Token is Invalid");
  //       }
  //      })
  //     }
  //   }

  // })

  
  return (
    <>
        <div className="row">
          <div className="col-md-10 offset-md-1">
            <form onSubmit={addFrm.handleSubmit}>
            <h4 className='text-dark'>{params.id ? "Update" : "Add New"} Hotel For Your Business</h4>
            <div className="my-3">
              <label>Hotel Name</label>
              <input type='text' value={addFrm.values.hotelname} name='hotelname' onChange={addFrm.handleChange} className={'form-control' + (addFrm.errors.hotelname && addFrm.touched.hotelname ? ' is-invalid' : '')}/>
            </div>
              {
                addFrm.errors.hotelname && addFrm.touched.hotelname
                ?
                <small className='text-danger'>{addFrm.errors.hotelname}</small>
                :
                ''
              }
            <div className="my-3">
              <label>Hotel Image</label>
              <input type='file' value={addFrm.values.hotelimage} ref={himage} name='hotelimage' onChange={addFrm.handleChange} className={'form-control' + (addFrm.errors.hotelimage && addFrm.touched.hotelimage ? ' is-invalid' : '')}/>
            </div>
            {
                addFrm.errors.hotelimage && addFrm.touched.hotelimage
                ?
                <small className='text-danger'>{addFrm.errors.hotelimage}</small>
                :
                ''
            }
            <div className="my-3">
              <label>Menu Image</label>
              <input type='file' value={addFrm.values.menuimage} ref={mimage} name='menuimage' onChange={addFrm.handleChange} className={'form-control' + (addFrm.errors.menuimage && addFrm.touched.menuimage ? ' is-invalid' : '')}/>
            </div>
            {
                addFrm.errors.menuimage && addFrm.touched.menuimage
                ?
                <small className='text-danger'>{addFrm.errors.menuimage}</small>
                :
                ''
            } 
            <div className="my-3">
              <label>Hotel Address</label>
              <textarea type='text' value={addFrm.values.address} name='address' onChange={addFrm.handleChange} className={'form-control' + (addFrm.errors.address && addFrm.touched.address ? ' is-invalid' : '')}></textarea>
            </div>
            {
                addFrm.errors.address && addFrm.touched.address
                ?
                <small className='text-danger'>{addFrm.errors.address}</small>
                :
                ''
            }
            <div className="my-3">
              <label>Number of Tables</label>
              <input type='text' value={addFrm.values.tables} name='tables' onChange={addFrm.handleChange} className={'form-control' + (addFrm.errors.tables && addFrm.touched.tables ? ' is-invalid' : '')}/>
            </div>
            {
                addFrm.errors.tables && addFrm.touched.tables
                ?
                <small className='text-danger'>{addFrm.errors.tables}</small>
                :
                ''
            }
            <div className="my-3">
              <label>Per Table Price</label>
              <input type='text' value={addFrm.values.price} name='price' onChange={addFrm.handleChange} className={'form-control' + (addFrm.errors.price && addFrm.touched.price ? ' is-invalid' : '')}/>
            </div>
            {
                addFrm.errors.price && addFrm.touched.price
                ?
                <small className='text-danger'>{addFrm.errors.price}</small>
                :
                ''
            }
            <div className="my-3">
                <button type='submit' className='button btn-orange text-light'>{params.id ? "Update" : "Add"} Hotel { preloader ? <span className='spinner-border spinner-border-sm'></span> : '' }</button>
                <p className='text-center text-danger'>{errMsg}</p>

            </div>
          </form>
          </div>
        </div>
    
    </>
  )
}

export default AddHotels