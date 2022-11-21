import React from 'react'
import OrderTable from './OrderTable'
import Payment from './Payment'

const Orders = ({setShowConfirm}) => {
  return (
    <div className='orders'>
      <div className="orders-wrapper">
        <h3>Orders #123456</h3>
        <div className="btn-group">
          <button className='btn btn-primary btn-sm btn-primary-active'>Dine in</button>
          <button className='btn btn-primary btn-sm'>To Go</button>
          <button className='btn btn-primary btn-sm'>Delivery</button>
        </div>
      </div>

      <OrderTable />
      <Payment setShowConfirm={setShowConfirm} />
    </div>
  )
}

export default Orders