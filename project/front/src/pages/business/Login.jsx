import React from 'react'
import Header2 from '../../components/user/headers/Header2'
const Login = () => {
  return (
    <>
    <Header2 />
    <section className="welcome-area section-padding2" style={{minHeight : "600px"}}>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card border border-1">
                        <div className="card-header footer-widget">
                            <h4>Business Login</h4>
                        </div>
                        <div className="card-body">
                            <div className="my-2">
                                <label>Username</label>
                                <input type='text' className='form-control' />
                            </div>
                            <div className="my-2">
                                <label>Password</label>
                                <input type='text' className='form-control' />
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

export default Login