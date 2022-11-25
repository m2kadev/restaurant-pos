import React from 'react'
import { FaTimes } from 'react-icons/fa'
import DishLoading from './DishLoading'
const OrderInfo = ({orderDetails, orderDetailsStatus, setShowOrderDetails}) => {

  let content
  if (orderDetailsStatus === 'loading') {
    content = <DishLoading />
  } else if (orderDetailsStatus === 'error') {
    content = <p>No data found</p>
  } else {
    content = null
  }


  return (
    <div className='order-info-wrapper'>
        <div className="order-info-hide-icon" onClick={() => setShowOrderDetails(false)}>
            <FaTimes />
        </div>
        <div className="order-info order-info-animation">
            <div className='order-info-header'>
                <p>Order Details</p>
                <span>#{orderDetails?.order.id}</span>
            </div>

            <div className="order-info-items scrollbar-active">
                {content}
 
                {
                    orderDetails?.items?.map(orderDetail => (
                        <div key={orderDetail.id} className='order-item-detail'>
                            <div className="order-detail-img">
                                <img src={`https://posapi.naylinaung.asia/storage/${orderDetail.img}`} alt={orderDetail.title} />
                            </div>
                            <p>{orderDetail.title} * {orderDetail.qty}</p>
                            <p>{orderDetail.discount} discount</p>
                            <p>{orderDetail.sub_total}Kyats</p>
                        </div>
                    ))
                }

                <div className="order-details">
                    <div className="order-detail-total">
                    <p>Total Discount</p>
                    <p>{orderDetails?.order.total_discount} Kyats</p>
                </div>

                <div className="order-detail-total">
                    <p>Total Payment</p>
                    <p>{orderDetails?.order.total_amount - orderDetails?.order.total_discount} Kyats</p>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OrderInfo