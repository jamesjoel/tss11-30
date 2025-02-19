import React, {useEffect, useState} from 'react'
import Header from '../../components/user/headers/Header'
import HeroSection from '../../components/user/HeroSection'
import axios from 'axios';
import {API_URL} from '../../constants/API_URL'
import HotelInfo from '../../components/user/HotelInfo';

const Home = () => {

    let [allHotels, setAllHotels] = useState([]);
    useEffect(()=>{
        axios
        .get(`${API_URL}/hotels`)
        .then(response=>{
            setAllHotels(response.data);
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
                    allHotels.map(item=>{
                        return(
                            <HotelInfo hotel={item} />
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