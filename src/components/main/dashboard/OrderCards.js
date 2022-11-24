import React from 'react'
import { useQuery } from 'react-query'
import { getDashboard } from '../../../api/order'
import { useSelector } from 'react-redux'


const OrderCards = () => {
  const user = useSelector(state => state.user.user)
  const config = {
    headers: { Authorization: `Bearer ${user.token}` }
  }

  const {data: dashboardDetails, status} = useQuery(['dashboardDetails', config], getDashboard)

  if (status === 'loading') {
    console.log('loading')
  } else if (status === 'error') {
    console.log('error')
  } else {
    console.log(dashboardDetails)
  }

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
            <p>$ {dashboardDetails?.total_revenue}</p>
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
            <p>{dashboardDetails?.total_dish}</p>
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
            <p>{dashboardDetails?.total_customer}</p>
            <span>Total Customer</span>
        </div>
    </div>
  )
}

export default OrderCards