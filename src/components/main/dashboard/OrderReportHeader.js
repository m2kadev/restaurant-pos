import React from 'react'

const OrderReportHeader = () => {
  return (
    <div className='manage-heading order-report-header'>
        <p>Order Report</p>
        <div className="manage-category">
            <img src='./images/manage.svg' alt='manage' />
            <p>Filter Order</p>
        </div>
    </div>
  )
}

export default OrderReportHeader