import React from 'react'
import Confirmation from './Confirmation'
import PaymentOption from './PaymentOption'

const PaymentSection = ({setShowConfirm, showConfirm}) => {

  const handleBlur = (e) => {
    const currentTarget = e.currentTarget
    setTimeout(() => {
      if (!currentTarget.contains(document.activeElement)) {
        setShowConfirm(false)
      }
    }, 0)
  }

  return (
    <div 
    className='payment-section'
    onClick={handleBlur}
    >
        <div 
        className={showConfirm ? 'payment-section-wrapper show-payment': 'payment-section-wrapper'}
        tabIndex='1'
        >
            <Confirmation setShowConfirm={setShowConfirm} />
            <PaymentOption />
        </div>
    </div>
  )
}

export default PaymentSection