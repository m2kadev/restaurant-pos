import React from 'react'

const OrderCards = () => {
  return (
    <div className='order-cards-wrapper'>
        <div className="order-card">
            <div className='order-card-flex'>
                <div className="order-icon">
                    <img src='./dash-board/coin.svg' alt='coin' />
                </div>
                <p className='text-accent-green'>+32.40%</p>
                <div className="dashboard-up-icon">
                    <img src='./dash-board/up.svg' alt="up" />
                </div>
            </div>
            <p>$123,344,534</p>
            <span>Total Revenue</span>
        </div>
        <div className="order-card">
            <div className='order-card-flex'>
                <div className="order-icon">
                    <img src='./dash-board/bookmark.svg' alt='bookmark' />
                </div>
                <p className='text-accent-red'>+32.40%</p>
                <div className="dashboard-down-icon">
                    <img src='./dash-board/down.svg' alt="down" />
                </div>
            </div>
            <p>23,456</p>
            <span>Total Dish Ordered</span>
        </div>
        <div className="order-card">
            <div className='order-card-flex'>
                <div className="order-icon">
                    <img src='./dash-board/users.svg' alt='users' />
                </div>
                <p className='text-accent-green'>+32.40%</p>
                <div className="dashboard-up-icon">
                    <img src='./dash-board/up.svg' alt="up" />
                </div>
            </div>
            <p>1,234</p>
            <span>Total Customer</span>
        </div>
    </div>
  )
}

export default OrderCards