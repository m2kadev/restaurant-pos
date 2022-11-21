import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import OrderItems from '../OrderItems'

const Confirmation = ({setShowConfirm}) => {
  const items = useSelector(state => state.cart.items)
  const cart = useSelector(state => state.cart)
  const [activeScroll, setActiveScroll] = useState(false)

  const handleScrollBar = () => {
    setActiveScroll(true)
  }

  const removeScrollbar = () => {
    setActiveScroll(false)
  }

  return (
    <div className='payment-confirmation'>
      <img src='./images/left.svg' alt='back' className='payment-left-arrow-icon' onClick={() => setShowConfirm(false)} />
      
      <div className="confirmation-wrapper">
        <div className="confirmation-header">
          <div>
            <h3>Confirmation</h3>
            <p>Orders #1234565</p>
          </div>
        </div>

        <div className="confirmation-plus">
          <img src='./images/plus.svg' alt='addmore' className='confirmation-plus-icon' />
        </div>
      </div>

      <div 
      className={
        activeScroll ? 
        'confirmed-products scrollbar-active': 
        'confirmed-products hide-scrollbar'
      } 
      onMouseOver={handleScrollBar} 
      onMouseOut={removeScrollbar}
      >
        {
            items.map(item => (
                <OrderItems item={item} key={item.id} />
            ))
        }
      </div>

      <div className='order-payment confirmed-product-info'>
        <div className="payment-disc payment-flex">
            <p>Discount</p>
            <p>${cart.totalDiscount}</p>
        </div>
        <div className="payment-subtotal payment-flex">
            <p>Sub Total</p>
            <p>${(cart.totalPrice - cart.totalDiscount).toFixed(2)}</p>
        </div>
      </div>
    </div>
  )
}

export default Confirmation