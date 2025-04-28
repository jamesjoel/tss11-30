import React from 'react'
import { NavLink } from 'react-router-dom'
import {API_PATH} from '../../constants/API_URL'

const HotelInfo = (props) => {
  return (
    <>
    <div className="col-md-6">
        <div className="single_food_item media">
            <img src={`${API_PATH}/hotels/${props.hotel.hotelimage}`} className="mr-3" style={{height:'300px', width:'300px'}} alt="..."/>
            <div className="media-body align-self-center">
                <h3>{props.hotel.hotelname}</h3>
                <p><i class="fa fa-users" aria-hidden="true"></i> {props.hotel.businessId.business_name}</p>
                <p> <i class="fa fa-map-marker" aria-hidden="true"></i> {props.hotel.address}</p>
                <NavLink to={`/booktable/${props.hotel._id}`} className= "btn btn-success border border-2 mt-2">Book Table</NavLink>
            </div>
        </div>
    </div>
    </>
  )
}

export default HotelInfo