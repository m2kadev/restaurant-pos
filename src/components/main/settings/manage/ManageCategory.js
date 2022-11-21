import React, {useState} from 'react'
import { useQuery } from 'react-query'
import { getCategories } from '../../../../../src/api/categories'
import { AiOutlineDelete, AiOutlinePlus } from 'react-icons/ai'
import AddCategory from './AddCategory'
import ConfirmDelete from './ConfirmDelete'
import { useSelector } from 'react-redux'

const ManageCategory = ({setShowManageCategory}) => {
  const user = useSelector(state => state.user.user)
  const config = {
    headers: { Authorization: `Bearer ${user.token}` }
  }
  const { data: categoryDatas, isLoading, isError } = useQuery(['category', config], getCategories)
  const [toggleAdd, setToggleAdd] = useState(false)
  const [toggleDel, setToggleDel] = useState(false)
  const [deleteId, setDeleteId] = useState(null)

  if (isLoading) {
    //
  } else if (isError) {
    //
  } else {
    //console.log(categoryDatas)
  }

  return (
    <div className='manage-category-form-wrapper'>
        {toggleAdd ? <AddCategory setToggleAdd={setToggleAdd} />: null}
        {toggleDel ? <ConfirmDelete setToggleDel={setToggleDel} deleteId={deleteId} />: null}
        <div className="manage-category-form">
            <div className='category-plus-icon' onClick={() => setToggleAdd(true)}>
                <p>Manage Category</p>
                <div><AiOutlinePlus /></div>
            </div>
            {/* <div className="category-form-control">
                <input type='text' placeholder="Enter New Category" />
                <button className='btn btn-xl category-btn'>Add New Category</button>
            </div> */}
            <div className="manage-category-table scrollbar-active">
                <div className="manage-category-table-header">
                    <p>Title</p>
                    <p>Value</p>
                    <p>Options</p>
                </div>
                {
                    categoryDatas.length === 0 ? <p style={{color: '#EA7C69'}}>No Category now</p>: null
                }
                {
                    categoryDatas?.map(category => (
                        <div key={category.id} className="manage-category-table-body">
                            <div className='manage-category-title'>
                                <p>{category.title}</p>
                            </div>
                            <p>{category.value}</p>
                            <div className='delete-category-btn'>
                                <div className="delete-category" onClick={() => {
                                    setDeleteId(category.id)
                                    setToggleDel(true)
                                    }}>
                                    <AiOutlineDelete />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='manange-category-btn-group' >
                <button className='btn btn-primary btn-xl' onClick={() => setShowManageCategory(false)}>Done</button>
            </div>
        </div>
    </div>
  )
}

export default ManageCategory