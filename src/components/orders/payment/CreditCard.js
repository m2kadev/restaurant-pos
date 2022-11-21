import React from 'react'
import { BsChevronDown } from 'react-icons/bs'

const CreditCard = () => {

  const handleCreditForm = (e) => {
    e.preventDefault()
  }

  return (
    <div className='credit-form-wrapper'>
        <form className="credit-form" onSubmit={handleCreditForm}>
            <div className="form-control">
                <label>Cardholder Name</label>
                <input type='text' placeholder="Myat Ko Ko" required autoFocus />
            </div>
            <div className="form-control">
                <label>Card Number</label>
                <input type='text' placeholder="1433 3456 4321 4567" required />
            </div>

            <div className="form-control-flex p-16">
                <div className="form-control">
                    <label>Expiration Date</label>
                    <input type='text' placeholder="02/2022" required />
                </div>
                <div className="form-control">
                    <label>CVV</label>
                    <input type='password' placeholder="..." required />
                </div>
            </div>

            <div className="form-control-flex">
                <div>
                    <p>Order Type</p>
                    <div className='order-type-wrapper'>
                        <div className='order-type'>
                            <BsChevronDown />
                            <p>Dine In</p>
                        </div>
                    </div>
                </div>

                <div className='table-no-wrapper'>
                    <p>Table No</p>
                    <div className='table-no'>140</div>
                </div>
            </div>

            <div className="form-btn-flex">
                <button className='btn btn-primary btn-xl-no-width'>Cancel</button>
                <button className='btn btn-primary-invert btn-xl-no-width' type='submit'>Confirm Payment</button>
            </div>
        </form>
    </div>
  )
}

export default CreditCard