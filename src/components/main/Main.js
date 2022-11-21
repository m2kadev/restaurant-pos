import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from '../../pages/Dashboard'
import Home from '../../pages/Home'
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
          </Routes>
        </div>
    </div>
  )
}

export default Main