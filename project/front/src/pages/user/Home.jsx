import React, {useEffect, useState} from 'react'
import Header from '../../components/user/headers/Header'
import HeroSection from '../../components/user/HeroSection'
import axios from 'axios';
import {API_URL} from '../../constants/API_URL'

const Home = () => {

    let [allBus, setAllBus] = useState([]);
    useEffect(()=>{
        axios
        .get(`${API_URL}/business`)
        .then(response=>{
            setAllBus(response.data);
        })
    },[])


    

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

               

                
                {
                    allBus.map(item=>{
                        return(
                            <div className="col-md-4 col-sm-6">
                                <div className="single-food mt-5 mt-sm-0">
                                    <div className="food-img">
                                        <img src="assets/images/food2.jpg" className="img-fluid" alt="" />
                                    </div>
                                    <div className="food-content">
                                        <div className="d-flex justify-content-between">
                                            <h5>{item.business_name}</h5>
                                            <span className="style-change badge bg-danger text-light">{item.rating}</span>
                                        </div>
                                        <p className="pt-3">{item.address}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                
                
                
                
            </div>
        </div>
    </section>
    </>
  )
}

export default Home


/*

let a = "rohit"+b+"hello"+c+"indore"
let a = 'rohit'+b


let a = `rohit ${b} hello ${c}`




*/