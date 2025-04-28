import React from 'react'
import { NavLink } from 'react-router-dom'

const BookTable = () => {
  return (
    <>
      <section className="regervation_part section_padding">
        <div className="container">
            <div className="row">
                <div className="col-xl-5">
                    <div className="section_tittle">
                        <p>Reservation</p>
                        <h2>Book A Table</h2>
                    </div>
                </div>
            </div>
            {/* <div className="row">
                <div className="col-lg-6">
                    <div className="regervation_part_iner">
                        <form>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <input type="email" className="form-control" id="inputEmail4" placeholder="Name *"/>
                                </div>
                                <div className="form-group col-md-6">
                                    <input type="password" className="form-control" id="inputPassword4"
                                        placeholder="Email address *"/>
                                </div>
                                <div className="form-group col-md-6">
                                    <select className="form-control" id="Select">
                                        <option value="1" selected>Persons *</option>
                                        <option value="2">Number of guests 1</option>
                                        <option value="3">Number of guests 2</option>
                                        <option value="4">Number of guests 3</option>
                                        <option value="5">Number of guests 4</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-6">
                                    <input type="text" className="form-control" id="pnone" placeholder="Phone number *"/>
                                </div>
                                <div className="form-group col-md-6">
                                    <div className="input-group date">
                                        <input id="datepicker" type="text" className="form-control" placeholder="Date *" />
                                    </div>
                                </div>
                                <div className="form-group col-md-6">
                                    <select className="form-control" id="Select2">
                                        <option value="" selected>Time *</option>
                                        <option value="1">8 AM TO 10AM</option>
                                        <option value="1">10 AM TO 12PM</option>
                                        <option value="1">12PM TO 2PM</option>
                                        <option value="1">2PM TO 4PM</option>
                                        <option value="1">4PM TO 6PM</option>
                                        <option value="1">6PM TO 8PM</option>
                                        <option value="1">4PM TO 10PM</option>
                                        <option value="1">10PM TO 12PM</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-12">
                                    <textarea className="form-control" id="Textarea" rows="4"
                                        placeholder="Your Note *"></textarea>
                                </div>
                            </div>


                            <div className="regerv_btn">
                                <NavLink to="#" className="btn_4">Book A Table</NavLink>
                            </div>
                        </form>
                    </div>
                </div>
            </div> */}
        </div>
    </section>
    
    </>
  )
}

export default BookTable