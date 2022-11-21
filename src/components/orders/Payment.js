import React from 'react'
import { useSelector } from 'react-redux'

const Payment = ({ setShowConfirm }) => {
  const cart = useSelector(state => state.cart)
  return (
    <div className='order-payment'>
        <div className="payment-disc payment-flex">
            <p>Discount</p>
            <p>${cart.totalDiscount}</p>
        </div>
        <div className="payment-subtotal payment-flex">
            <p>Sub Total</p>
            <p>${(cart.totalPrice - cart.totalDiscount).toFixed(2)}</p>
        </div>
        <button disabled={cart.totalPrice === 0} className='btn btn-primary-invert btn-block btn-xl-no-width payment-btn' onClick={() => setShowConfirm(true)}>Continue To Payment</button>
    </div>
  )
}

export default Payment