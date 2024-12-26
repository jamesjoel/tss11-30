import React from 'react'
import Header from '../../components/user/Header'
import HeroSection from '../../components/user/HeroSection'
const Home = () => {
  return (
    <>
    <Header />
    <HeroSection />
    <section className="food-area section-padding">
        <div className="container">
            <div className="row">
                <div className="col-md-5">
                    <div className="section-top">
                        <h3><span className="style-change">we serve</span> <br/>delicious food</h3>
                        <p className="pt-3">They're fill divide i their yielding our after have him fish on there for greater man moveth, moved Won't together isn't for fly divide mids fish firmament on net.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 col-sm-6">
                    <div className="single-food">
                        <div className="food-img">
                            <img src="assets/images/food1.jpg" className="img-fluid" alt="" />
                        </div>
                        <div className="food-content">
                            <div className="d-flex justify-content-between">
                                <h5>Mexican Eggrolls</h5>
                                <span className="style-change">$14.50</span>
                            </div>
                            <p className="pt-3">Face together given moveth divided form Of Seasons that fruitful.</p>
                        </div>
                    </div>
                </div>

                
                <div className="col-md-4 col-sm-6">
                    <div className="single-food mt-5 mt-sm-0">
                        <div className="food-img">
                            <img src="assets/images/food2.jpg" className="img-fluid" alt="" />
                        </div>
                        <div className="food-content">
                            <div className="d-flex justify-content-between">
                                <h5>chicken burger</h5>
                                <span className="style-change">$9.50</span>
                            </div>
                            <p className="pt-3">Face together given moveth divided form Of Seasons that fruitful.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6">
                    <div className="single-food mt-5 mt-md-0">
                        <div className="food-img">
                            <img src="assets/images/food3.jpg" className="img-fluid" alt="" />
                        </div>
                        <div className="food-content">
                            <div className="d-flex justify-content-between">
                                <h5>topu lasange</h5>
                                <span className="style-change">$12.50</span>
                            </div>
                            <p className="pt-3">Face together given moveth divided form Of Seasons that fruitful.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6">
                    <div className="single-food mt-5">
                        <div className="food-img">
                            <img src="assets/images/food4.jpg" className="img-fluid" alt="" />
                        </div>
                        <div className="food-content">
                            <div className="d-flex justify-content-between">
                                <h5>pepper potatoas</h5>
                                <span className="style-change">$14.50</span>
                            </div>
                            <p className="pt-3">Face together given moveth divided form Of Seasons that fruitful.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6">
                    <div className="single-food mt-5">
                        <div className="food-img">
                            <img src="assets/images/food5.jpg" className="img-fluid" alt="" />
                        </div>
                        <div className="food-content">
                            <div className="d-flex justify-content-between">
                                <h5>bean salad</h5>
                                <span className="style-change">$8.50</span>
                            </div>
                            <p className="pt-3">Face together given moveth divided form Of Seasons that fruitful.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6">
                    <div className="single-food mt-5">
                        <div className="food-img">
                            <img src="assets/images/food6.jpg" className="img-fluid" alt="" />
                        </div>
                        <div className="food-content">
                            <div className="d-flex justify-content-between">
                                <h5>beatball hoagie</h5>
                                <span className="style-change">$11.50</span>
                            </div>
                            <p className="pt-3">Face together given moveth divided form Of Seasons that fruitful.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Home