import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from '../../pages/Dashboard'
import Discount from '../../pages/Discount'
import Home from '../../pages/Home'
import Message from '../../pages/Message'
import Notification from '../../pages/Notification'
import Settings from '../../pages/Settings'
import LogoutForm from '../logout/LogoutForm'
import Sidebar from '../sidebar/Sidebar'

const Main = () => {
  const [showLogout, setShowLogout] = useState(false)
  return (
    <div className='App'>
        {showLogout ? <LogoutForm setShowLogout={setShowLogout} />: null}
        <Sidebar setShowLogout={setShowLogout} />
        <div className="main">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/settings'  element={<Settings />} />
            <Route path='/dboard' element={<Dashboard />} />
            <Route path='/notifications' element={<Notification />} />
            <Route path='/messages' element={<Message />} />
            <Route path='/discount' element={<Discount />} />
          </Routes>
        </div>
    </div>
  )
}

export default Main