import React from 'react'
import SideBar from './components/SideBar'
import AllRoutes from './AllRoutes/AllRoutes'

const App = () => {
  return (
    <>
    <div className="wrapper">
      <SideBar />
      <AllRoutes />
    </div>
    </>
  )
}

export default App