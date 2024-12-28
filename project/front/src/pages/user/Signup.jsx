import React from 'react'
import Header2 from '../../components/user/headers/Header2'

const Signup = () => {
  return (
    <>
    <Header2 />
    <section className="welcome-area section-padding2" style={{minHeight : "600px"}}>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card border border-1">
                        <div className="card-header footer-widget">
                            <h4>User Register</h4>
                        </div>
                        <div className="card-body">
                            <div className="my-2">
                                <label>Name</label>
                                <input type='text' className='form-control' />
                            </div>
                            <div className="my-2">
                                <label>Username/Email</label>
                                <input type='text' className='form-control' />
                            </div>
                            <div className="my-2">
                                <label>Password</label>
                                <input type='text' className='form-control' />
                            </div>
                            <div className="my-2">
                                <label>Re-Password</label>
                                <input type='text' className='form-control' />
                            </div>
                            <div className="my-2">
                                <label>Contact</label>
                                <input type='text' className='form-control' />
                            </div>
                            <div className="my-2">
                                <label>State</label>
                                <select className='form-control' >
                                    <option>Select</option>
                                </select>
                            </div>
                            <div className="my-2">
                            <label>City</label>
                                <select className='form-control' >
                                    <option>Select</option>
                                </select>
                            </div>
                            <div className="my-2">
                                <label>Address</label>
                                <textarea className='form-control' ></textarea>
                            </div>
                            <div className="my-2">
                                <label>Gender</label><br />
                                <input name='gender' type='radio' />&nbsp;&nbsp;&nbsp;Male
                                <br />
                                <input name='gender' type='radio' />&nbsp;&nbsp;&nbsp;Female
                            </div>
                        </div>
                        <div className="card-footer">
                            <button className='template-btn'>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Signup

/*
    <h1>helloindore</h1>

*/