import React from 'react'
import Allroutes from './allroutes/Allroutes'
import Footer from './components/user/Footer'
import Header from './components/user/Header'
import Hero from './components/user/Hero'

const App = () => {
  return (
    <>
    <Header/>
    <Hero/>
	   <Allroutes/>
     <Footer/>
    </>
  )
}

export default App