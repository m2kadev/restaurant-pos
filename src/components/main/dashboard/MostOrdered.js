import React from 'react'
import { BsChevronDown } from 'react-icons/bs'
import { useQuery } from 'react-query'
import { getProducts } from '../../../api/products'
import { useSelector } from 'react-redux'

const MostOrdered = () => {

  const user = useSelector(state => state.user.user)
  const config = {
    headers: { Authorization: `Bearer ${user.token}` }
  }
  
  const {data: dishes, isError, error, isLoading} = useQuery(['products', config], getProducts)

  if (isError) {
    console.log(error.message)
  } else if (isLoading) {
    console.log('loading')
  } else {
    console.log('success')
  }

  return (
    <div className='most-ordered'>
        <div className="most-ordered-header">
            <h3>Most Ordered</h3>
            <div className='most-ordered-date'>
                <div className='current-most-ordered'>
                    <BsChevronDown />
                    <p>Today</p>
                </div>
            </div>
        </div>

        <div className="most-ordered-items scrollbar-active">
            {
                dishes?.map(dish => (
                    <div key={dish.id} className="most-ordered-item">
                        <div className="most-ordered-img">
                            <img src={`http://127.0.0.1:8000/storage/${dish.img}`} alt={dish.title} />
                        </div>
                        <div className="most-ordered-info">
                            <p>{dish.title}</p>
                            <span>23 dishes ordered</span>
                        </div>
                    </div>
                ))
            }
        </div>

        <div className='most-ordered-btn'>
            <button className='btn'>View All</button>
        </div>
    </div>
  )
}

export default MostOrdered