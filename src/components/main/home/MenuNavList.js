import React from 'react'

const MenuNavList = ({ menu, setCategory, category }) => {
  
  return (
    <li onClick={() => setCategory(menu.value)} className={menu.value === category ? 'menu-list-active': null}>{menu.title}</li>
  )
}

export default MenuNavList