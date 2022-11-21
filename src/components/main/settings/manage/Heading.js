import React, { useContext } from 'react'
import { SettingContext } from '../../../../pages/Settings'

const Heading = () => {
  const { setShowManageCategory } = useContext(SettingContext)
  return (
    <div className='manage-heading'>
        <p>Products Management</p>
        <div className="manage-category" onClick={() => setShowManageCategory(true)}>
            <img src='./images/manage.svg' alt='manage' />
            <p>Manage Categories</p>
        </div>
    </div>
  )
}

export default Heading