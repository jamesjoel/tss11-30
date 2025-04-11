import React from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Student from './pages/Student'

const App = () => {
  return (
    <>
        <Header />
        <Routes>
            <Route path='' element={<Home />} />
            <Route path='student' element={<Student />} />
        </Routes>
    </>
  )
}

export default App