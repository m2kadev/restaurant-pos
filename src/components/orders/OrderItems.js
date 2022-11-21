import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import { removeFromCart, updateDiscount, updatePrice } from '../../features/Cart'
import { useDispatch } from 'react-redux'

const OrderItems = ({item}) => {
  const dispatch = useDispatch()

  const deleteCart = () => {
    handleDelete(item)
  }

  const handleDelete = (item) => {
    dispatch(removeFromCart(item))
    dispatch(updateDiscount())
    dispatch(updatePrice())
  }

  return (
    <div className="order-table-item">

        <div className="order-control">
            <div className="order-item-first order-product-wrapper">
                <img src={`https://posapi.naylinaung.asia/storage/${item.img}`} alt={item.title} />
                <div className='order-product-info'>
                    <p>{item.title.substring(0, 19)}...</p>
                    <span>${item.price}</span>
                </div>
            </div>
            <p className='order-show-qty order-item-second'>{item.quantity}</p>
            <p className='order-item-third'>${item.price}</p>
        </div>

        <div className="order-control">
            <div className="order-item-first">
                <input type='text' placeholder='Order Notes...' />
            </div>
            <div className="order-item-second order-delete" onClick={deleteCart}>
                <AiOutlineDelete />
            </div>
        </div>
    </div>
  )
}

export default OrderItems