import React from 'react'

const SidebarItems = ({ data }) => {

  return (
    <li key={data.id} className='sidebar-item'>
        <div className={window.location.pathname === data.url ? 'selector-active active': 'selector-active'}>
            <div className="top"></div>
            <div className="bottom"></div>
        </div>
        <a href={data.url} className={window.location.pathname === data.url ? 'sidebar-link sidebar-link-active': 'sidebar-link'}>
            <img  src={data.img} alt={data.title} />
        </a>
    </li>
  )
}

export default SidebarItems