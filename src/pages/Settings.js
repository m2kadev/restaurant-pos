import React, { useState, createContext } from 'react'
import AddProductForm from '../components/main/settings/manage/AddProductForm'
import EditProductForm from '../components/main/settings/manage/EditProductForm'
import SettingChilds from '../components/main/settings/SettingChilds'
import SettingItems from '../components/main/settings/SettingItems'
import ManageCategory from '../components/main/settings/manage/ManageCategory'

export const SettingContext = createContext(null)

const Settings = () => {

  const [childIndex, setChildIndex] = useState(0)
  const [showAddForm, setShowAddForm] = useState(false)
  const [editProductData, setEditProductData] = useState({})
  const [showEditForm, setShowEditForm] = useState(false)
  const [showManageCategory, setShowManageCategory] = useState(false)

  return (
    <SettingContext.Provider value={{showAddForm, setShowAddForm, editProductData, setEditProductData, showEditForm, setShowEditForm, setShowManageCategory}}>
      <div className='settings-wrapper'>
        {
          showAddForm ? <AddProductForm setShowAddForm={setShowAddForm} />: null
        }
        {
          showEditForm ? <EditProductForm setShowEditForm={setShowEditForm} editProductData={editProductData} />: null
        }
        {
          showManageCategory ? <ManageCategory setShowManageCategory={setShowManageCategory} />: null
        }
        <h3 className="setting-text">Settings</h3>
        <div className="settings-container">
            <SettingItems setChildIndex={setChildIndex} childIndex={childIndex} />
            <SettingChilds childIndex={childIndex} />
        </div>
      </div>
    </SettingContext.Provider>
  )
}

export default Settings