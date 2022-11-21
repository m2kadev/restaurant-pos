import React from 'react'
import DashboardLeft from '../components/main/dashboard/DashboardLeft'
import DashboardRight from '../components/main/dashboard/DashboardRight'

const Dashboard = () => {
  return (
    <div className='dashboard'>
        <DashboardLeft />
        <DashboardRight />
    </div>
  )
}

export default Dashboard