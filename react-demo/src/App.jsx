import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Contact from './pages/Contact'
import Home2 from './pages/Home2'
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
      </Routes>
      </div>
    </>
  )
}

export default App