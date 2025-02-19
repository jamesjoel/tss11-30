import React from 'react'

const app = () => {
  return (
    <>
     <div className="navbar navbar-expand-lg bg-light navbar-light">
            <div className="container-fluid">
                <a href="index.html" className="navbar-brand">Burger <span>King</span></a>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div className="navbar-nav ml-auto">
                        <a href="index.html" className="nav-item nav-link active">Home</a>
                        <a href="about.html" className="nav-item nav-link">About</a>
                        <a href="feature.html" className="nav-item nav-link">Feature</a>
                        <a href="team.html" className="nav-item nav-link">Chef</a>
                        <a href="menu.html" className="nav-item nav-link">Menu</a>
                        <a href="booking.html" className="nav-item nav-link">Booking</a>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
                            <div className="dropdown-menu">
                                <a href="blog.html" className="dropdown-item">Blog Grid</a>
                                <a href="single.html" className="dropdown-item">Blog Detail</a>
                            </div>
                        </div>
                        <a href="contact.html" className="nav-item nav-link">Contact</a>
                    </div>
                </div>
            </div>
        </div>
        


    
        <div className="carousel">
            <div className="container-fluid">
                <div className="owl-carousel">
                    <div className="carousel-item">
                        <div className="carousel-img">
                            <img src="img/carousel-1.jpg" alt="Image"/>
                        </div>
                        <div className="carousel-text">
                            <h1>Best <span>Quality</span> Ingredients</h1>
                            <p>
                                Lorem ipsum dolor sit amet elit. Phasellus ut mollis mauris. Vivamus egestas eleifend dui ac consequat at lectus in malesuada
                            </p>
                            <div className="carousel-btn">
                                <a className="btn custom-btn" href="">View Menu</a>
                                <a className="btn custom-btn" href="">Book Table</a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="carousel-img">
                            <img src="img/carousel-2.jpg" alt="Image"/>
                        </div>
                        <div className="carousel-text">
                            <h1>World’s <span>Best</span> Chef</h1>
                            <p>
                                Morbi sagittis turpis id suscipit feugiat. Suspendisse eu augue urna. Morbi sagittis, orci sodales varius fermentum, tortor
                            </p>
                            <div className="carousel-btn">
                                <a className="btn custom-btn" href="">View Menu</a>
                                <a className="btn custom-btn" href="">Book Table</a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="carousel-img">
                            <img src="img/carousel-3.jpg" alt="Image"/>
                        </div>
                        <div className="carousel-text">
                            <h1>Fastest Order <span>Delivery</span></h1>
                            <p>
                                Sed ultrices, est eget feugiat accumsan, dui nibh egestas tortor, ut rhoncus nibh ligula euismod quam. Proin pellentesque odio
                            </p>
                            <div className="carousel-btn">
                                <a className="btn custom-btn" href="">View Menu</a>
                                <a className="btn custom-btn" href="">Book Table</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        
        

        <div className="booking">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <div className="booking-content">
                            <div className="section-header">
                                <p>Book A Table</p>
                                <h2>Book Your Table For Private Dinners & Happy Hours</h2>
                            </div>
                            <div className="about-text">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus. Aenean consectetur convallis porttitor. Aliquam interdum at lacus non blandit.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="booking-form">
                            <form>
                                <div className="control-group">
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Name" required="required" />
                                        <div className="input-group-append">
                                            <div className="input-group-text"><i className="far fa-user"></i></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="control-group">
                                    <div className="input-group">
                                        <input type="email" className="form-control" placeholder="Email" required="required" />
                                        <div className="input-group-append">
                                            <div className="input-group-text"><i className="far fa-envelope"></i></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="control-group">
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Mobile" required="required" />
                                        <div className="input-group-append">
                                            <div className="input-group-text"><i className="fa fa-mobile-alt"></i></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="control-group">
                                    <div className="input-group date" id="date" data-target-input="nearest">
                                        <input type="text" className="form-control datetimepicker-input" placeholder="Date" data-target="#date" data-toggle="datetimepicker"/>
                                        <div className="input-group-append" data-target="#date" data-toggle="datetimepicker">
                                            <div className="input-group-text"><i className="far fa-calendar-alt"></i></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="control-group">
                                    <div className="input-group time" id="time" data-target-input="nearest">
                                        <input type="text" className="form-control datetimepicker-input" placeholder="Time" data-target="#time" data-toggle="datetimepicker"/>
                                        <div className="input-group-append" data-target="#time" data-toggle="datetimepicker">
                                            <div className="input-group-text"><i className="far fa-clock"></i></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="control-group">
                                    <div className="input-group">
                                        <select className="custom-select form-control">
                                            <option selected>Guest</option>
                                            <option value="1">1 Guest</option>
                                            <option value="2">2 Guest</option>
                                            <option value="3">3 Guest</option>
                                            <option value="4">4 Guest</option>
                                            <option value="5">5 Guest</option>
                                            <option value="6">6 Guest</option>
                                            <option value="7">7 Guest</option>
                                            <option value="8">8 Guest</option>
                                            <option value="9">9 Guest</option>
                                            <option value="10">10 Guest</option>
                                        </select>
                                        <div className="input-group-append">
                                            <div className="input-group-text"><i className="fa fa-chevron-down"></i></div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <button className="btn custom-btn" type="submit">Book Now</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        

        <div className="about">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="about-img">
                            <img src="img/about.jpg" alt="Image"/>
                            <button type="button" className="btn-play" data-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-target="#videoModal">
                                <span></span>
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-content">
                            <div className="section-header">
                                <p>About Us</p>
                                <h2>Cooking Since 1990</h2>
                            </div>
                            <div className="about-text">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus. Aenean consectetur convallis porttitor. Aliquam interdum at lacus non blandit.
                                </p>
                                <a className="btn custom-btn" href="">Book A Table</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        
        
    
        <div className="modal fade" id="videoModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-body">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>        
                
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe className="embed-responsive-item" src="" id="video"  allowscriptaccess="always" allow="autoplay"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    
        
        
    
        <div className="feature">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="section-header">
                            <p>Why Choose Us</p>
                            <h2>Our Key Features</h2>
                        </div>
                        <div className="feature-text">
                            <div className="feature-img">
                                <div className="row">
                                    <div className="col-6">
                                        <img src="img/feature-1.jpg" alt="Image"/>
                                    </div>
                                    <div className="col-6">
                                        <img src="img/feature-2.jpg" alt="Image"/>
                                    </div>
                                    <div className="col-6">
                                        <img src="img/feature-3.jpg" alt="Image"/>
                                    </div>
                                    <div className="col-6">
                                        <img src="img/feature-4.jpg" alt="Image"/>
                                    </div>
                                </div>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consec adipis elit. Phasel nec preti mi. Curabit facilis ornare velit non vulputa. Aliquam metus tortor, auctor id gravida condime, viverra quis sem. Curabit non nisl nec nisi sceleri maximus 
                            </p>
                            <a className="btn custom-btn" href="">Book A Table</a>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="feature-item">
                                    <i className="flaticon-cooking"></i>
                                    <h3>World’s best Chef</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet elit. Phasel nec preti mi. Curabit facilis ornare velit non vulput metus tortor
                                    </p>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="feature-item">
                                    <i className="flaticon-vegetable"></i>
                                    <h3>Natural ingredients</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet elit. Phasel nec preti mi. Curabit facilis ornare velit non vulput metus tortor
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="feature-item">
                                    <i className="flaticon-medal"></i>
                                    <h3>Best quality products</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet elit. Phasel nec preti mi. Curabit facilis ornare velit non vulput metus tortor
                                    </p>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="feature-item">
                                    <i className="flaticon-meat"></i>
                                    <h3>Fresh vegetables & Meet</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet elit. Phasel nec preti mi. Curabit facilis ornare velit non vulput metus tortor
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="feature-item">
                                    <i className="flaticon-courier"></i>
                                    <h3>Fastest door delivery</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet elit. Phasel nec preti mi. Curabit facilis ornare velit non vulput metus tortor
                                    </p>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="feature-item">
                                    <i className="flaticon-fruits-and-vegetables"></i>
                                    <h3>Ground beef & Low fat</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet elit. Phasel nec preti mi. Curabit facilis ornare velit non vulput metus tortor
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        
        
    
        <div className="food">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-4">
                        <div className="food-item">
                            <i className="flaticon-burger"></i>
                            <h2>Burgers</h2>
                            <p>
                                Lorem ipsum dolor sit amet elit. Phasel nec pretium mi. Curabit facilis ornare velit non vulputa. Aliquam metus tortor auctor quis sem. 
                            </p>
                            <a href="">View Menu</a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="food-item">
                            <i className="flaticon-snack"></i>
                            <h2>Snacks</h2>
                            <p>
                                Lorem ipsum dolor sit amet elit. Phasel nec pretium mi. Curabit facilis ornare velit non vulputa. Aliquam metus tortor auctor quis sem. 
                            </p>
                            <a href="">View Menu</a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="food-item">
                            <i className="flaticon-cocktail"></i>
                            <h2>Beverages</h2>
                            <p>
                                Lorem ipsum dolor sit amet elit. Phasel nec pretium mi. Curabit facilis ornare velit non vulputa. Aliquam metus tortor auctor quis sem. 
                            </p>
                            <a href="">View Menu</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        
        
        <div className="menu">
            <div className="container">
                <div className="section-header text-center">
                    <p>Food Menu</p>
                    <h2>Delicious Food Menu</h2>
                </div>
                <div className="menu-tab">
                    <ul className="nav nav-pills justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link active" data-toggle="pill" href="#burgers">Burgers</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="pill" href="#snacks">Snacks</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="pill" href="#beverages">Beverages</a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div id="burgers" className="container tab-pane active">
                            <div className="row">
                                <div className="col-lg-7 col-md-12">
                                    <div className="menu-item">
                                        <div className="menu-img">
                                            <img src="img/menu-burger.jpg" alt="Image"/>
                                        </div>
                                        <div className="menu-text">
                                            <h3><span>Mini cheese Burger</span> <strong>$9.00</strong></h3>
                                            <p>Lorem ipsum dolor sit amet elit. Phasel nec preti facil</p>
                                        </div>
                                    </div>
                                    <div className="menu-item">
                                        <div className="menu-img">
                                            <img src="img/menu-burger.jpg" alt="Image"/>
                                        </div>
                                        <div className="menu-text">
                                            <h3><span>Double size burger</span> <strong>$11.00</strong></h3>
                                            <p>Lorem ipsum dolor sit amet elit. Phasel nec preti facil</p>
                                        </div>
                                    </div>
                                    <div className="menu-item">
                                        <div className="menu-img">
                                            <img src="img/menu-burger.jpg" alt="Image"/>
                                        </div>
                                        <div className="menu-text">
                                            <h3><span>Bacon, EGG and Cheese</span> <strong>$13.00</strong></h3>
                                            <p>Lorem ipsum dolor sit amet elit. Phasel nec preti facil</p>
                                        </div>
                                    </div>
                                    <div className="menu-item">
                                        <div className="menu-img">
                                            <img src="img/menu-burger.jpg" alt="Image"/>
                                        </div>
                                        <div className="menu-text">
                                            <h3><span>Pulled porx Burger</span> <strong>$18.00</strong></h3>
                                            <p>Lorem ipsum dolor sit amet elit. Phasel nec preti facil</p>
                                        </div>
                                    </div>
                                    <div className="menu-item">
                                        <div className="menu-img">
                                            <img src="img/menu-burger.jpg" alt="Image"/>
                                        </div>
                                        <div className="menu-text">
                                            <h3><span>Fried chicken Burger</span> <strong>$22.00</strong></h3>
                                            <p>Lorem ipsum dolor sit amet elit. Phasel nec preti facil</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 d-none d-lg-block">
                                    <img src="img/menu-burger-img.jpg" alt="Image"/>
                                </div>
                            </div>
                        </div>
                        <div id="snacks" className="container tab-pane fade">
                            <div className="row">
                                <div className="col-lg-7 col-md-12">
                                    <div className="menu-item">
                                        <div className="menu-img">
                                            <img src="img/menu-snack.jpg" alt="Image"/>
                                        </div>
                                        <div className="menu-text">
                                            <h3><span>Corn Tikki - Spicy fried Aloo</span> <strong>$15.00</strong></h3>
                                            <p>Lorem ipsum dolor sit amet elit. Phasel nec preti facil</p>
                                        </div>
                                    </div>
                                    <div className="menu-item">
                                        <div className="menu-img">
                                            <img src="img/menu-snack.jpg" alt="Image"/>
                                        </div>
                                        <div className="menu-text">
                                            <h3><span>Bread besan Toast</span> <strong>$35.00</strong></h3>
                                            <p>Lorem ipsum dolor sit amet elit. Phasel nec preti facil</p>
                                        </div>
                                    </div>
                                    <div className="menu-item">
                                        <div className="menu-img">
                                            <img src="img/menu-snack.jpg" alt="Image"/>
                                        </div>
                                        <div className="menu-text">
                                            <h3><span>Healthy soya nugget snacks</span> <strong>$20.00</strong></h3>
                                            <p>Lorem ipsum dolor sit amet elit. Phasel nec preti facil</p>
                                        </div>
                                    </div>
                                    <div className="menu-item">
                                        <div className="menu-img">
                                            <img src="img/menu-snack.jpg" alt="Image"/>
                                        </div>
                                        <div className="menu-text">
                                            <h3><span>Tandoori Soya Chunks</span> <strong>$30.00</strong></h3>
                                            <p>Lorem ipsum dolor sit amet elit. Phasel nec preti facil</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 d-none d-lg-block">
                                    <img src="img/menu-snack-img.jpg" alt="Image"/>
                                </div>
                            </div>
                        </div>
                        <div id="beverages" className="container tab-pane fade">
                            <div className="row">
                                <div className="col-lg-7 col-md-12">
                                    <div className="menu-item">
                                        <div className="menu-img">
                                            <img src="img/menu-beverage.jpg" alt="Image"/>
                                        </div>
                                        <div className="menu-text">
                                            <h3><span>Single Cup Brew</span> <strong>$7.00</strong></h3>
                                            <p>Lorem ipsum dolor sit amet elit. Phasel nec preti facil</p>
                                        </div>
                                    </div>
                                    <div className="menu-item">
                                        <div className="menu-img">
                                            <img src="img/menu-beverage.jpg" alt="Image"/>
                                        </div>
                                        <div className="menu-text">
                                            <h3><span>Caffe Americano</span> <strong>$9.00</strong></h3>
                                            <p>Lorem ipsum dolor sit amet elit. Phasel nec preti facil</p>
                                        </div>
                                    </div>
                                    <div className="menu-item">
                                        <div className="menu-img">
                                            <img src="img/menu-beverage.jpg" alt="Image"/>
                                        </div>
                                        <div className="menu-text">
                                            <h3><span>Caramel Macchiato</span> <strong>$15.00</strong></h3>
                                            <p>Lorem ipsum dolor sit amet elit. Phasel nec preti facil</p>
                                        </div>
                                    </div>
                                    <div className="menu-item">
                                        <div className="menu-img">
                                            <img src="img/menu-beverage.jpg" alt="Image"/>
                                        </div>
                                        <div className="menu-text">
                                            <h3><span>Standard black coffee</span> <strong>$8.00</strong></h3>
                                            <p>Lorem ipsum dolor sit amet elit. Phasel nec preti facil</p>
                                        </div>
                                    </div>
                                    <div className="menu-item">
                                        <div className="menu-img">
                                            <img src="img/menu-beverage.jpg" alt="Image"/>
                                        </div>
                                        <div className="menu-text">
                                            <h3><span>Standard black coffee</span> <strong>$12.00</strong></h3>
                                            <p>Lorem ipsum dolor sit amet elit. Phasel nec preti facil</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 d-none d-lg-block">
                                    <img src="img/menu-beverage-img.jpg" alt="Image"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        
        
    
        <div className="team">
            <div className="container">
                <div className="section-header text-center">
                    <p>Our Team</p>
                    <h2>Our Master Chef</h2>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="team-item">
                            <div className="team-img">
                                <img src="img/team-1.jpg" alt="Image"/>
                                <div className="team-social">
                                    <a href=""><i className="fab fa-twitter"></i></a>
                                    <a href=""><i className="fab fa-facebook-f"></i></a>
                                    <a href=""><i className="fab fa-linkedin-in"></i></a>
                                    <a href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="team-text">
                                <h2>Adam Phillips</h2>
                                <p>CEO, Co Founder</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="team-item">
                            <div className="team-img">
                                <img src="img/team-2.jpg" alt="Image"/>
                                <div className="team-social">
                                    <a href=""><i className="fab fa-twitter"></i></a>
                                    <a href=""><i className="fab fa-facebook-f"></i></a>
                                    <a href=""><i className="fab fa-linkedin-in"></i></a>
                                    <a href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="team-text">
                                <h2>Dylan Adams</h2>
                                <p>Master Chef</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="team-item">
                            <div className="team-img">
                                <img src="img/team-3.jpg" alt="Image"/>
                                <div className="team-social">
                                    <a href=""><i className="fab fa-twitter"></i></a>
                                    <a href=""><i className="fab fa-facebook-f"></i></a>
                                    <a href=""><i className="fab fa-linkedin-in"></i></a>
                                    <a href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="team-text">
                                <h2>Jhon Doe</h2>
                                <p>Master Chef</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="team-item">
                            <div className="team-img">
                                <img src="img/team-4.jpg" alt="Image"/>
                                <div className="team-social">
                                    <a href=""><i className="fab fa-twitter"></i></a>
                                    <a href=""><i className="fab fa-facebook-f"></i></a>
                                    <a href=""><i className="fab fa-linkedin-in"></i></a>
                                    <a href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="team-text">
                                <h2>Josh Dunn</h2>
                                <p>Master Chef</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        

        <div className="testimonial">
            <div className="container">
                <div className="owl-carousel testimonials-carousel">
                    <div className="testimonial-item">
                        <div className="testimonial-img">
                            <img src="img/testimonial-1.jpg" alt="Image"/>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet elit. Phasel nec preti mi. Curabit facilis ornare velit non vulput
                        </p>
                        <h2>Client Name</h2>
                        <h3>Profession</h3>
                    </div>
                    <div className="testimonial-item">
                        <div className="testimonial-img">
                            <img src="img/testimonial-2.jpg" alt="Image"/>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet elit. Phasel nec preti mi. Curabit facilis ornare velit non vulput
                        </p>
                        <h2>Client Name</h2>
                        <h3>Profession</h3>
                    </div>
                    <div className="testimonial-item">
                        <div className="testimonial-img">
                            <img src="img/testimonial-3.jpg" alt="Image"/>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet elit. Phasel nec preti mi. Curabit facilis ornare velit non vulput
                        </p>
                        <h2>Client Name</h2>
                        <h3>Profession</h3>
                    </div>
                    <div className="testimonial-item">
                        <div className="testimonial-img">
                            <img src="img/testimonial-4.jpg" alt="Image"/>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet elit. Phasel nec preti mi. Curabit facilis ornare velit non vulput
                        </p>
                        <h2>Client Name</h2>
                        <h3>Profession</h3>
                    </div>
                </div>
            </div>
        </div>
        

        <div className="contact">
            <div className="container">
                <div className="section-header text-center">
                    <p>Contact Us</p>
                    <h2>Contact For Any Query</h2>
                </div>
                <div className="row align-items-center contact-information">
                    <div className="col-md-6 col-lg-3">
                        <div className="contact-info">
                            <div className="contact-icon">
                                <i className="fa fa-map-marker-alt"></i>
                            </div>
                            <div className="contact-text">
                                <h3>Address</h3>
                                <p>123 Street, NY, USA</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="contact-info">
                            <div className="contact-icon">
                                <i className="fa fa-phone-alt"></i>
                            </div>
                            <div className="contact-text">
                                <h3>Call Us</h3>
                                <p>+012 345 6789</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="contact-info">
                            <div className="contact-icon">
                                <i className="fa fa-envelope"></i>
                            </div>
                            <div className="contact-text">
                                <h3>Email Us</h3>
                                <p>info@example.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="contact-info">
                            <div className="contact-icon">
                                <i className="fa fa-share"></i>
                            </div>
                            <div className="contact-text">
                                <h3>Follow Us</h3>
                                <div className="contact-social">
                                    <a href=""><i className="fab fa-twitter"></i></a>
                                    <a href=""><i className="fab fa-facebook-f"></i></a>
                                    <a href=""><i className="fab fa-youtube"></i></a>
                                    <a href=""><i className="fab fa-instagram"></i></a>
                                    <a href=""><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row contact-form">
                    <div className="col-md-6">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1600663868074!5m2!1sen!2sbd" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </div>
                    <div className="col-md-6">
                        <div id="success"></div>
                        <form name="sentMessage" id="contactForm" novalidate="novalidate">
                            <div className="control-group">
                                <input type="text" className="form-control" id="name" placeholder="Your Name" required="required" data-validation-required-message="Please enter your name" />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="control-group">
                                <input type="email" className="form-control" id="email" placeholder="Your Email" required="required" data-validation-required-message="Please enter your email" />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="control-group">
                                <input type="text" className="form-control" id="subject" placeholder="Subject" required="required" data-validation-required-message="Please enter a subject" />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="control-group">
                                <textarea className="form-control" id="message" placeholder="Message" required="required" data-validation-required-message="Please enter your message"></textarea>
                                <p className="help-block text-danger"></p>
                            </div>
                            <div>
                                <button className="btn custom-btn" type="submit" id="sendMessageButton">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    

        <div className="blog">
            <div className="container">
                <div className="section-header text-center">
                    <p>Food Blog</p>
                    <h2>Latest From Food Blog</h2>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="blog-item">
                            <div className="blog-img">
                                <img src="img/blog-1.jpg" alt="Blog"/>
                            </div>
                            <div className="blog-content">
                                <h2 className="blog-title">Lorem ipsum dolor sit amet</h2>
                                <div className="blog-meta">
                                    <p><i className="far fa-user"></i>Admin</p>
                                    <p><i className="far fa-list-alt"></i>Food</p>
                                    <p><i className="far fa-calendar-alt"></i>01-Jan-2045</p>
                                    <p><i className="far fa-comments"></i>10</p>
                                </div>
                                <div className="blog-text">
                                    <p>
                                        Lorem ipsum dolor sit amet elit. Neca pretim miura bitur facili ornare velit non vulpte liqum metus tortor. Lorem ipsum dolor sit amet elit. Neca pretim miura bitur facili ornare velit non vulpte
                                    </p>
                                    <a className="btn custom-btn" href="">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="blog-item">
                            <div className="blog-img">
                                <img src="img/blog-2.jpg" alt="Blog"/>
                            </div>
                            <div className="blog-content">
                                <h2 className="blog-title">Lorem ipsum dolor sit amet</h2>
                                <div className="blog-meta">
                                    <p><i className="far fa-user"></i>Admin</p>
                                    <p><i className="far fa-list-alt"></i>Food</p>
                                    <p><i className="far fa-calendar-alt"></i>01-Jan-2045</p>
                                    <p><i className="far fa-comments"></i>10</p>
                                </div>
                                <div className="blog-text">
                                    <p>
                                        Lorem ipsum dolor sit amet elit. Neca pretim miura bitur facili ornare velit non vulpte liqum metus tortor. Lorem ipsum dolor sit amet elit. Neca pretim miura bitur facili ornare velit non vulpte
                                    </p>
                                    <a className="btn custom-btn" href="">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        

        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="footer-contact">
                                    <h2>Our Address</h2>
                                    <p><i className="fa fa-map-marker-alt"></i>123 Street, New York, USA</p>
                                    <p><i className="fa fa-phone-alt"></i>+012 345 67890</p>
                                    <p><i className="fa fa-envelope"></i>info@example.com</p>
                                    <div className="footer-social">
                                        <a href=""><i className="fab fa-twitter"></i></a>
                                        <a href=""><i className="fab fa-facebook-f"></i></a>
                                        <a href=""><i className="fab fa-youtube"></i></a>
                                        <a href=""><i className="fab fa-instagram"></i></a>
                                        <a href=""><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="footer-link">
                                    <h2>Quick Links</h2>
                                    <a href="">Terms of use</a>
                                    <a href="">Privacy policy</a>
                                    <a href="">Cookies</a>
                                    <a href="">Help</a>
                                    <a href="">FQAs</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="footer-newsletter">
                            <h2>Newsletter</h2>
                            <p>
                                Lorem ipsum dolor sit amet elit. Quisque eu lectus a leo dictum nec non quam. Tortor eu placerat rhoncus, lorem quam iaculis felis, sed lacus neque id eros.
                            </p>
                            <div className="form">
                                <input className="form-control" placeholder="Email goes here"/>
                                <button className="btn custom-btn">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>

    </>
  )
}

export default app;