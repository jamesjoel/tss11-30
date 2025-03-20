import React from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import LogoContext from './LogoContext'
import User from './pages/User'
import Help from './pages/Help'

const App = () => {

  let company = "James";

  return (
    <>
    <LogoContext.Provider value={company}>
      <Header />

      <div className='w-[80%] mx-auto'>
      <Routes>
          <Route path='' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='user' element={<User />} />
          <Route path='help' element={<Help />} />
      </Routes>
      </div>
    </LogoContext.Provider>
    
    </>
  )
}

export default App