import React from 'react'

import Dish from './Dish'
import { useQuery } from 'react-query'
import { getProductByCategory } from '../../../api/products'
import Loading from './Loading'
import { useSelector } from 'react-redux'

const DishItems = ({category, setShowSlide, showSlide}) => {

  const user = useSelector(state => state.user.user)
  const config = {
    headers: { Authorization: `Bearer ${user.token}` }
  }
  const {data: dishes, isError, error, isLoading} = useQuery(['products', category, config], getProductByCategory)


  let content
  if (isError) {
    content = <h1 className='text-danger'>{error.message}</h1>
  } else if (isLoading) {
    content = <Loading />
  } else if (dishes.length === 0) {
    content = <h3 className='text-danger'>No Dishes Available Now</h3>
  } else {
    content = null
  }

  return (
    <div className='dish-items'>
      {content}
      {
        dishes?.map(dish => (
          <Dish dish={dish} key={dish.id} setShowSlide={setShowSlide} showSlide={showSlide} />
        ))
      }
    </div>
  )
}

export default DishItems