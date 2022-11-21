import React, { useContext } from 'react'
import { useQuery } from 'react-query'
import { getProductByCategory } from '../../../../api/products'
import { AiOutlinePlus } from 'react-icons/ai'
import {SettingContext} from '../../../.././pages/Settings'
import SettingLoading from '../SettingLoading'
import { useSelector } from 'react-redux'

const ManageProductList = ({category}) => {
  const {setShowAddForm, setEditProductData, setShowEditForm} = useContext(SettingContext)
  
  const user = useSelector(state => state.user.user)
  const config = {
    headers: { Authorization: `Bearer ${user.token}` }
  }

  const {data: dishes, isError, error, isLoading} = useQuery(['products', category, config], getProductByCategory)

  let content
  if (isError) {
    console.log(error.message)
  } else if (isLoading) {
    content = <SettingLoading overlay={false} />
  } else {
    content = null
  }

  const handleEdit = (dish) => {
    setEditProductData(dish)
    setShowEditForm(true)
  }

  return (
    <div className='manage-products-wrapper scrollbar-active'>
        <div className="manage-products">
            {content}
            <div className="add-dish-card" onClick={() => setShowAddForm(true)}>
                <div className="add-dish-card-inner">
                    <AiOutlinePlus className='plus-icon' />
                    <p>Add new dish</p>
                </div>
            </div>
            
            {
                dishes?.map(dish => (
                    <div key={dish.id} className='manage-dish-card manage-dish-card-height'>
                        <div className="manage-dish-card-info">
                            <div className="manage-dish-card-image">
                                <img src={`http://127.0.0.1:8000/storage/${dish.img}`} alt={dish.title} />
                            </div>
                            <div className="manage-card-info">
                                <p className="card-title">
                                {dish.title}
                                </p>
                                <p className="card-available">
                                ${dish.price} . {dish.stock} bowls
                                </p>
                            </div>
                        </div>
                        <div className="manage-edit-btn" onClick={() => handleEdit(dish)}>
                            <img src='./images/edit.svg' alt='edit' />
                            <span>Edit</span>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default ManageProductList