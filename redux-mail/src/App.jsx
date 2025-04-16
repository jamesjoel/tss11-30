import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Inbox from './pages/Inbox'
import Drafts from './pages/Drafts'
import SentItems from './pages/SentItems'
import Trash from './pages/Trash'
import Sidebar from './components/Sidebar'
import ViewMail from './pages/ViewMail'
import { Navigate } from 'react-router-dom'
const App = () => {
  return (
    <div class="container-fluid">
        <div class="row">
            <Sidebar />
            <Routes>
                <Route index element={<Navigate to="/inbox" />} />
                <Route path='inbox' element={<Inbox />} />
                <Route path='inbox/:id' element={<ViewMail />} />
                <Route path='drafts' element={<Drafts />} />
                <Route path='sentitems' element={<SentItems />} />
                <Route path='trash' element={<Trash />} />
            </Routes>        
        </div>
    </div>

  )
}

export default App