import React from 'react'
import {Routes, Route, NavLink} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Contact from './pages/Contact'
import Home2 from './pages/Home2'
import Events1 from './pages/Events1'
import Event2 from './pages/Event2'
import Event3 from './pages/Event3'
import Event4 from './pages/Event4'
import Event5 from './pages/Event5'
import Event6 from './pages/Event6'
import Event7 from './pages/Event7'
const App = () => {
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-md-12 bg-secondary">
          <ul className="nav">
            <li className="nav-item">
              <NavLink to="/" className="nav-link text-light">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link text-light">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/product" className="nav-link text-light">Product</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link text-light">Contact</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/events1" className="nav-link text-light">Events1</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/event2" className="nav-link text-light">Event2</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/event3" className="nav-link text-light">Event3</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/event4" className="nav-link text-light">Event4</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/event5" className="nav-link text-light">Event5</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/event6" className="nav-link text-light">Event6</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/event7" className="nav-link text-light">Event7</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>

      <div className="container my-4">
      <Routes>
        <Route path='' element={<Home2 />} />
        <Route path='about' element={<About />} />
        <Route path='product' element={<Product />} />
        <Route path='contact' element={<Contact />} />
        <Route path='events1' element={<Events1 />} />
        <Route path='event2' element={<Event2 />} />
        <Route path='event3' element={<Event3 />} />
        <Route path='event4' element={<Event4 />} />
        <Route path='event5' element={<Event5 />} />
        <Route path='event6' element={<Event6 />} />
        <Route path='event7' element={<Event7 />} />
        
      </Routes>
      </div>
    </>
  )
}

export default App