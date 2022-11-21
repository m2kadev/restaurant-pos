import React from 'react'
import { datas } from '../../sidebarDatas'
import SidebarItems from './SidebarItems'

const Sidebar = ({setShowLogout}) => {
  return (
    <div className='sidebar'>

        <div className='sidebar-logo'>
            <img src='./sidebar-logos/main.svg' alt='main' />
        </div>
        <ul className='sidebar-items-list'>
            {
                datas.map(data => (
                    <SidebarItems data={data} key={data.title} />
                ))
            }
        </ul>
        <div className='logout-logo' onClick={() => setShowLogout(true)} >
            <img src='./sidebar-logos/logout.svg' alt='logout' />
        </div>
    </div>
  )
}

export default Sidebar