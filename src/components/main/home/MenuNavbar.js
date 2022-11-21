import React from 'react'
import { useQuery } from 'react-query'
import { getCategories } from '../../../api/categories'
import MenuNavList from './MenuNavList'
import { useSelector } from 'react-redux'

const MenuNavbar = ({setCategory, category, padding = null}) => {
  const user = useSelector(state => state.user.user)
  const config = {
    headers: { Authorization: `Bearer ${user.token}` }
  }

  const { data: categories, status } = useQuery(['category', config], getCategories)

  if (status === 'loading') {
    //console.log('loading')
  } else if (status === 'error') {
    console.log(status.error)
  } else {
    //
  }

  return (
    <div className={`menu-navbar ${padding}`}>
        <ul className='menu-nav-lists'>
            {
                categories?.map(menu => (
                    <MenuNavList menu={menu} key={menu.title} setCategory={setCategory} category={category} />
                ))
            }
        </ul>
    </div>
  )
}

export default MenuNavbar