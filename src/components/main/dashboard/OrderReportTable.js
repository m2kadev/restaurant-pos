import React from 'react'
import { useQuery } from 'react-query'
import { getOrderDetails, getOrders } from '../../../api/order'
import { useSelector } from 'react-redux'

const OrderReportTable = () => {

  const user = useSelector(state => state.user.user)
  const config = {
    headers: { Authorization: `Bearer ${user.token}` }
  }

  const {data: orders, status: orderStatus} = useQuery(['orders', config], getOrders)
  const {data: orderDetails, status} = useQuery(['order_details', 1, config], getOrderDetails)
  
  if (orderStatus === 'loading') {
    console.log('loading')
  } else if (orderStatus === 'error') {
    console.log('error')
  } else {
    
  }


  if(status === 'loading') {
    console.log('loading')
  } else if (status === 'error') {
    console.log('error')
  } else {
    console.log(orderDetails)
  }


  return (
    <div className='order-report-table'>
        <div className="order-report-table-header">
            <p>Customer</p>
            <p>Menu</p>
            <p>Total Payment</p>
            <p>Status</p>
        </div>
    </div>
  )
}

export default OrderReportTable