import React, { useState } from 'react'
import { payments } from '../../../payments'
import { TiTick } from 'react-icons/ti'

const PaymentOption = () => {
  const [optionIndex, setOptionIndex] = useState(0)

  return (
    <div className='payment-option'>
        <div className="payment-option-header">
            <h3>Payment</h3>
            <p>3 payment method available</p>
        </div>

        <div className="payment-methods">
          <p>Payment Method</p>
        </div>

        <div className="payment-methods-group">
          {
            payments.map((payment, index) => (
              <div key={payment.title} 
              className={index === optionIndex ? 'payment-method payment-method-active': 'payment-method'}
              onClick={() => setOptionIndex(index)}
              >
                {index === optionIndex ? <div className='active-payment-mark'><TiTick /></div>: null}
                <img src={payment.img} alt={payment.title} />
                <p>{payment.title}</p>
              </div>
            ))
          }
        </div>

        {payments[optionIndex].element}

    </div>
  )
}

export default PaymentOption