import React, { useState } from 'react'
import MenuNavbar from '../home/MenuNavbar'
import Heading from './manage/Heading'
import ManageProductList from './manage/ManageProductList'

const Manage = () => {
  const [category, setCategory] = useState('uncategorized')

  return (
    <div className='manage-product-wrapper'>
        <Heading />
        <MenuNavbar category={category} setCategory={setCategory} padding="pl-24" />
        <ManageProductList category={category} />
    </div>
  )
}

export default Manage