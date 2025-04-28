import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <>
     <footer className="footer-area bg-dark">
        <div className="container">
            <div className="row">
                <div className="col-xl-3 col-sm-6 col-md-3 col-lg-3">
                    <div className="single-footer-widget footer_1">
                        <h4 className='text-light'>About Us</h4>
                        <p className='text-light'>Heaven fruitful doesn't over for these theheaven fruitful doe over days
                            appear creeping seasons sad behold beari ath of it fly signs bearing
                            be one blessed after.</p>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 col-md-2 col-lg-3">
                    <div className="single-footer-widget footer_2">
                        <h4 className='text-light'>Important Link</h4>
                        <div className="contact_info">
                            <ul>
                                <li><NavLink className='text-light' to="#">WHMCS-bridge</NavLink></li>
                                <li><NavLink className='text-light' to="#"> Search Domain</NavLink></li>
                                <li><NavLink className='text-light'to="#">My Account</NavLink></li>
                                <li><NavLink className='text-light'to="#">Shopping Cart</NavLink></li>
                                <li><NavLink className='text-light'to="#"> Our Shop</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 col-md-3 col-lg-3">
                    <div className="single-footer-widget footer_2">
                        <h4 className='text-light'>Contact us</h4>
                        <div className="contact_info">
                            <p className='text-light'><span className='text-light'> Address :</span>Hath of it fly signs bear be one blessed after </p>
                            <p className='text-light'><span className='text-light'> Phone :</span> +2 36 265 (8060)</p>
                            <p className='text-light'><span className='text-light'>  Email : </span>info@colorlib.com </p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 col-md-4 col-lg-3">
                    <div className="single-footer-widget footer_3">
                        <h4 className='text-light'>Newsletter</h4>
                        <p className='text-light'>Heaven fruitful doesn't over lesser in days. Appear creeping seas</p>
                        <form action="#">
                            <div className="form-group">
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder='Email Address'
                                        onfocus="this.placeholder = ''" onblur="this.placeholder = 'Email Address'"/>
                                    <div className="input-group-append">
                                        <button className="btn" type="button"><i className="fas fa-paper-plane"></i></button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="copyright_part_text">
                <div className="row">
                    <div className="col-lg-8">
                        <p className="footer-text m-0"></p>
                    </div>
                    <div className="col-lg-4">
                        <div className="copyright_social_icon text-right">
                            <NavLink to="#"><i className="fab fa-facebook-f"></i></NavLink>
                            <NavLink to="#"><i className="fab fa-twitter"></i></NavLink>
                            <NavLink to="#"><i className="ti-dribbble"></i></NavLink>
                            <NavLink to="#"><i className="fab fa-behance"></i></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer