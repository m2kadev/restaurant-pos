import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { getOrderDetails, getOrders } from '../../../api/order'
import { useSelector } from 'react-redux'
import OrderInfo from './OrderInfo'
import DishLoading from './DishLoading'

const OrderReportTable = () => {

  const user = useSelector(state => state.user.user)
  const [showOrderDetails, setShowOrderDetails] = useState(false)
  const [orderId, setOrderId] = useState(0)
  const config = {
    headers: { Authorization: `Bearer ${user.token}` }
  }

  const {data: orders, status: orderStatus} = useQuery(['orders', config], getOrders)
  const { data: orderDetails, status: orderDetailsStatus } = useQuery(['order_details', orderId, config], getOrderDetails)

  let orderReportContent
  if (orderStatus === 'loading') {
    orderReportContent = <DishLoading />
  } else if (orderStatus === 'error') {
    orderReportContent = <p>Cannot get any data</p>
  } else {
    orderReportContent = null
  }

  const handleOrderDetails = (id) => {
    setShowOrderDetails(true)
    setOrderId(id)
  }

  return (
    <div className='order-report-table'>
        {showOrderDetails ? <OrderInfo setShowOrderDetails={setShowOrderDetails} orderDetails={orderDetails} orderDetailsStatus={orderDetailsStatus} />: null}
        <div className="order-report-table-header">
            <p>Customer</p>
            <p>Payment Method</p>
            <p>Total Payment</p>
            <p>Status</p>
        </div>

        <div className="order-reports">
            {orderReportContent}
            {
              orders?.map(order => (
                <div key={order.id} className='order-report-data' onClick={() => handleOrderDetails(order.id)}>
                  <p>walk-in</p>
                  <p>cash</p>
                  <p>{order.total_amount}</p>
                  <p className='order-complete'>complete</p>
                </div>
              ))
            }
        </div>
    </div>
  )
}

export default OrderReportTable