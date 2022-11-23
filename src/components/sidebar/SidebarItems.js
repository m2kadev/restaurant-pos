import React from 'react'
import { NavLink } from 'react-router-dom'

const SidebarItems = ({ data }) => {

  return (
    <li key={data.id} className='sidebar-item'>

        <NavLink 
        to={data.url} 
        className={({isActive}) => (
          isActive ? 'sidebar-link sidebar-link-active': 'sidebar-link'
        )} 
        >
           <img  src={data.img} alt={data.title} />
        </NavLink>
        <div className='selector-active'>
              <div className="top"></div>
              <div className="bottom"></div>
        </div>
        
        {/* <a href={data.url} className={window.location.pathname === data.url ? 'sidebar-link sidebar-link-active': 'sidebar-link'}>
            <img  src={data.img} alt={data.title} />
        </a>
        className={({isActive}) => (isActive ? 'selector-active active': 'selector-active active')} */}
        {/* <Link 
        to={data.url} 
        className={path === data.url ? 'sidebar-link sidebar-link-active': 'sidebar-link'} 
        onClick={() => {
          setPath(data.url)
          console.log(data.url)
        }}
        >
          <img  src={data.img} alt={data.title} />
        </Link> */}
    </li>
  )
}

export default SidebarItems