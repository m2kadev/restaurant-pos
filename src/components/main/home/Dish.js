import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, updatePrice, updateDiscount, updateOrderItems, updateQuantity } from '../../../features/Cart'

const Dish = ({dish, setShowSlide, showSlide}) => {
  const cart = useSelector(state => state.cart.items)
  const dispatch = useDispatch()

  let checkItem = cart.find(c => c.id === dish.id)

  const handleAddToCart = (dish) => {
    if (checkItem?.quantity >= checkItem?.stock) {
      setShowSlide(true)

      setTimeout(() => {
        setShowSlide(false)
      }, 1500);
      return
    }
    dispatch(addToCart(dish))
    dispatch(updateOrderItems())
    dispatch(updatePrice())
    dispatch(updateDiscount())
    dispatch(updateQuantity())
  }

  return (
    <div className={cart.length === 0 ? 'dish-card dish-card-height': 'dish-card dish-card-small'} onClick={() => handleAddToCart(dish)}>
      <div className="dish-card-image">
        <img src={`http://127.0.0.1:8000/storage/${dish.img}`} alt={dish.title} />
      </div>
      <div className="card-info">
        <p className="card-title">
        {dish.title}
        </p>
        <p className="card-price">
          $ {dish.price}
        </p>
        <p className="card-available">
          {dish.stock} bowls available
        </p>
      </div>
    </div>
  )
}

export default Dish