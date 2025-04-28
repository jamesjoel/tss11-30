import React,{useState, useEffect} from 'react'
import { NavLink , useLocation } from 'react-router-dom'
import Header2 from "../../components/user/header/Header2"

const About = () => {
  return (
    <>
    <Header2/>
    
    
    <section className="about_part about_bg">
        <div className="container-fluid">
            <div className="row align-items-center">
                <div className="col-sm-12 col-lg-5 offset-lg-1">
                    <div className="about_img">
                        <div className="col-md-12">
                        <img src="/assets/img/about.png" alt=""/>
                        <p>The Dine Out Project is a passionate initiative dedicated to exploring and celebrating the vibrant world of food. We believe that dining out is more than just a meal—it's an experience, a story, and a connection to culture and community. Our mission is to spotlight local restaurants, hidden gems, and culinary talent while encouraging people to step out of their routine and savor something new. Whether you're a foodie looking for your next favorite dish or a curious diner eager to try something different, the Dine Out Project is your go-to guide for discovering delicious moments.</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    </>
  )
}

export default About