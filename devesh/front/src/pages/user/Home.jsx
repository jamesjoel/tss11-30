import React,{useEffect,useState} from 'react'
import Header from '../../components/user/header/Header'
import HeroSection from '../../components/user/HeroSection'
import BookTable from '../../components/BookTable'
import axios from 'axios'
import { API_URL } from '../../constants/API_URL'
import HotelInfo from '../../components/user/HotelInfo'


const Home = () => {

    let [allHotels ,setAllHotels] = useState([]);

    useEffect(()=>{
        axios
        .get(`${API_URL}/hotels`)
        .then(response =>{
            setAllHotels(response.data);
        })

    },[]);

  return (
    <>
     <Header/>
     <HeroSection/>
     <BookTable/>
     <section className="food_menu gray_bg">
        <div className="container">
            <div className="row justify-content-between">
                <div className="col-lg-16">
                    <div className="section_tittle">
                        <p>Popular Menu</p>
                        <h2>Delicious Food Menu</h2>
                    </div>
                </div>

                <div className="col-lg-12">
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active single-member" id="Special" role="tabpanel"
                            aria-labelledby="Special-tab">
                            <div className="row">
                            {
                               allHotels.map((item)=>{
                               return(
                                <HotelInfo hotel={item} />
                                )
                              })
                            }
                            </div>
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