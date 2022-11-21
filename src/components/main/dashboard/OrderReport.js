import React from 'react'
import OrderReportHeader from './OrderReportHeader'
import OrderReportTable from './OrderReportTable'

const OrderReport = () => {
  return (
    <div className='order-report'>
        <OrderReportHeader />
        <OrderReportTable />
    </div>
  )
}

export default OrderReport