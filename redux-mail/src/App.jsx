import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Inbox from './pages/Inbox'
import Drafts from './pages/Drafts'
import SentItems from './pages/SentItems'
import Trash from './pages/Trash'
import Sidebar from './components/Sidebar'
const App = () => {
  return (
    <div class="container-fluid">
        <div class="row">
            <Sidebar />
            <Routes>
                <Route path='' element={<Inbox />} />
                <Route path='drafts' element={<Drafts />} />
                <Route path='sentitems' element={<SentItems />} />
                <Route path='trash' element={<Trash />} />
            </Routes>        
        </div>
    </div>

  )
}

export default App