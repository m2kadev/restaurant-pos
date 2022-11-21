import React from 'react'
import DashboardHeader from './DashboardHeader'
import OrderCards from './OrderCards'
import OrderReport from './OrderReport'

const DashboardLeft = () => {
  return (
    <div className='dashboard-column-left'>
        <DashboardHeader />
        <OrderCards />
        <OrderReport />
    </div>
  )
}

export default DashboardLeft